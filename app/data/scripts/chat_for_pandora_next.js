const { updateCustomData, getCustomData, deleteCustomData } = require("./api/custom");
const { conversation, conversationGenTitle, deleteConversation, saveUserChatSession } = require("./chat_base");
const { sendMessageText, saveDataToLongSession } = require('./api/message')

const user_id = process.env._userId;

const token = process.env.QANDORA_TOKEN
let userSessionData
let conversationSession
let conversationId = process.env._conversationId
let isSend = process.env._isSend
let parentMessageId = ""

const messages_bucket = getMessageComment();
const messages = messages_bucket[messages_bucket.length - 1];
console.log(messages)

!(async () => {
  userSessionData = await getCustomData("chat_session_id", { value5: user_id })

  if (messages_bucket.length < 2) {
    await sendMessageText(`你可选择你的会话记录、或直接发送你的问题（开启新会话）
q: 结束聊天 
rm <id>: 删除指定id会话
su <id>: 切换指定id会话
ll: 查看会话列表`);
    return
  }

  console.log(userSessionData)
  if (userSessionData.data.total > 0) {
    if (conversationId) {
      let session = await getCustomData("chat_session_id", { value2: conversationId, value5: user_id })
      parentMessageId = session.data.data[0].value6
      conversationSession = session.data.data[0]
    } else if (isSend) {
      conversationId = userSessionData.data.data[userSessionData.data.total - 1].value2
      parentMessageId = userSessionData.data.data[userSessionData.data.total - 1].value6
      conversationSession = userSessionData.data.data[userSessionData.data.total - 1]
    }
  }
  let e1 = await eventHandling();
  if (e1) {
    await sendMessageText(e1)
    return
  }

  let data = await conversation({
    token,
    "q": messages,
    "conversation_id": conversationId,
    "parent_message_id": parentMessageId
  })
  if (!data || !data.trim().endsWith("data: [DONE]")) {
    console.log("服务异常");
    await sendMessageText("当前服务异常，请稍后再次尝试吧！");
    return
  }


  const events = data.trim().split('\n\n');
  console.log("消息事件数：", events.length)
  console.log(events[events.length - 3])
  let replyMessage = JSON.parse(events[events.length - 3].substring('data:'.length));
  await sendMessageText(replyMessage.message.content.parts[0])

  if (!isSend) {
    await saveDataToLongSession({ _isSend: true });
  }

  if (conversationId) {
    conversationSession.value6 = replyMessage.message.id
    console.log(await updateCustomData([conversationSession]))
  } else {
    let title = await conversationGenTitle({
      token,
      conversation_id: replyMessage.conversation_id,
      message_id: replyMessage.message.id
    })
    console.log(await saveUserChatSession(replyMessage.conversation_id, title.title, replyMessage.message.id))
  }

})().catch((e) => {
  console.log("服务异常：")
  console.log(e);
});


function getMessageComment() {
  let message = []
  let i = 0
  do {
    let m = process.env['_message_' + i++];
    message.push(m)
  } while (process.env['_message_' + i])
  return message;
}


async function eventHandling() {
  let sendMessage = "";
  if (messages == "ll") {
    let data = userSessionData.data.data;
    for (let i = 0; i < data.length; i++) {
      if (data[i].value2 === conversationId) {
        sendMessage += "*"
      }
      sendMessage += `${data[i].value1}(${data[i].value2})\n`
    }
  } else if (/^su\s+[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(messages)) {
    let uuid = analysisUUID(messages);
    if (uuid == conversationId) {
      return "你已经处于该会话中，无需再次切换";
    }
    console.log(await saveDataToLongSession({ _conversationId: uuid }));
    sendMessage = "会话切换成功"
  } else if (/^rm\s+[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(messages)) {
    let uuid = analysisUUID(messages);
    if (uuid == conversationId) {
      return "你已经处于该会话中，现无法删除";
    }
    let session = await getCustomData("chat_session_id", { value2: conversationId, value5: user_id })
    if (session.data.total > 0) {
      await deleteCustomData([session.data.data[0].id])
      deleteConversation({ token, conversation_id: uuid })
    }
    sendMessage = "会话删除成功"
  }
  return sendMessage;
}


function analysisUUID(msg) {
  const extractedUuid = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/.exec(msg);
  return extractedUuid[0];
}



