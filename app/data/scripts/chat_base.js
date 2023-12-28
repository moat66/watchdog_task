const PANDORA_NEXT_URL = process.env.QANDORA_NEXT_URL

const got = require('got');
const {addOrUpdateCustomType, addCustomData} = require("./api/custom");
const moment = require("moment");
const api = got.extend({
  retry: { limit: 0 },
});

const user_id = process.env._userId;
const friendId = process.env._friendId;
const nickname = process.env._nickname;


/**
 *  发送对话，获取回复
 * @param data {Object}
 * @param {string} data.token - token
 * @param {string} data.q - 问题信息
 * @param {string} data.conversation_id - 会话id
 * @param {string} data.parent_message_id - 父消息id，不传无法链接上下文
 * @returns {Promise<string>}
 */
async function conversation(data) {
  const body = {
    "action": "next",
    "messages": [
      {
        "author": {
          "role": "user"
        },
        "content": {
          "content_type": "text",
          "parts": [
            data.q
          ]
        }
      }
    ],
    "parent_message_id": data.parent_message_id,
    "model": "gpt-4",
    "timezone_offset_min": -480
  }
  if (data.conversation_id) {
    body.conversation_id = data.conversation_id
  }
  console.log(JSON.stringify(body))
  const response = await api({
    url: `${PANDORA_NEXT_URL}/backend-api/conversation`,
    headers: {
      "Authorization": data.token
    },
    method: 'post',
    body: JSON.stringify(body)
  });
  return response.body;
}


/**
 *  根据会话内的指定消息生成会话标题
 * @param data {Object}
 * @param {string} data.token - token
 * @param {string} data.conversation_id - 会话id
 * @param {string} data.message_id - 根据message_id生成
 * @returns {Promise<unknown>}
 */
async function conversationGenTitle(data) {
  return await api({
    url: `${PANDORA_NEXT_URL}/backend-api/conversation/gen_title/${data.conversation_id}`,
    headers: {
      "Authorization": data.token
    },
    method: 'post',
    body: JSON.stringify({
      "message_id": data.message_id
    })
  }).json();
}

/**
 * 根据会话id删除指定会话
 * @param data {Object}
 * @param {string} data.token - token
 * @param {string} data.conversation_id - 会话id
 * @returns {Promise<void>}
 */
async function deleteConversation(data) {
  return await api({
    url: `${PANDORA_NEXT_URL}/backend-api/conversation/${data.conversation_id}`,
    headers: {
      "Authorization": data.token
    },
    method: 'patch',
    body: JSON.stringify({
      "is_visible": false
    })
  }).json();
}


/**
 * 保存用户会话域
 * @param conversationId  会话id
 * @param conversationTitle 会话标题
 * @param messageId 最新消息id
 * @returns {Promise<*>}
 */
async function saveUserChatSession(conversationId, conversationTitle, messageId) {
  await addOrUpdateCustomType([{
    type: "chat_session_id",
    name: "ChatGPT用户会话",
    valueDesc: JSON.stringify([
      {
        "title": "会话标题",
        "dataIndex": "value1",
        "searchAble": true
      },
      {
        "title": "会话id",
        "dataIndex": "value2",
        "searchAble": true
      },
      {
        "title": "QQ/微信/WEB",
        "dataIndex": "value3",
        "searchAble": true
      },
      {
        "title": "昵称",
        "dataIndex": "value4",
        "searchAble": true
      },
      {
        "title": "用户ID",
        "dataIndex": "value5"
      },
      {
        "title": "最新消息id",
        "dataIndex": "value6",
        "searchAble": true
      },
      {
        "title": "创建时间",
        "dataIndex": "value7",
        "dataType": "datetime",
        "searchAble": true
      }

    ])
  }])
  let data = await addCustomData([{
    customType: "chat_session_id",
    value1: conversationTitle,
    value2: conversationId,
    value3: friendId,
    value4: nickname,
    value5: user_id,
    value6: messageId,
    value7: moment().format('YYYY-MM-DD HH:mm:ss')
  }])
  return data.data[0];
}


module.exports = {
  conversation,
  conversationGenTitle,
  deleteConversation,
  saveUserChatSession
}

