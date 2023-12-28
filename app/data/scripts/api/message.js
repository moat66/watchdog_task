const {api, serverPath} = require("./base")

const adminId = process.env._adminId; //管理员id
const communicationType = process.env._communicationType; //通讯类型
const communicationId = process.env._communicationId; //通讯端点id
const groupId = process.env._groupId; //群组ID
const friendId = process.env._friendId; // 好友id
const messageId = process.env._messageId; // 消息id

const userId = process.env._userId; // 用户id
const taskId = process.env._taskId; // 任务id



/**
 *  发送text类型消息   支持：QQ、WX、WEB、WX公众号、企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageText(message, isManager,uId) {
  console.log(message)
  return sendMessageAction({
    message,
    messageType: 'text'
  }, isManager, uId)
}


/**
 *  发送img类型消息   支持：QQ、WX、WEB、WX公众号、企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageImg(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'img'
  }, isManager, uId)
}


/**
 *  发送video类型消息   支持：QQ、WEB、WX公众号、企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageVideo(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'video'
  }, isManager, uId)
}


/**
 *  发送xml类型消息   支持：QQ、WX 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageXml(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'xml'
  }, isManager, uId)
}


/**
 *  发送TextCard类型消息   支持：企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageTextCard(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'textcard'
  }, isManager, uId)
}


/**
 *  发送markdown类型消息   支持：企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageMarkdown(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'markdown'
  }, isManager, uId)
}


/**
 *  发送图文类型消息   支持：企业微信 通讯渠道
 * @param message       消息内容                必须
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                 选填    不填则默认发送给当前用户
 * @returns {Promise<*>}
 */
function sendMessageNews(message, isManager, uId) {
  return sendMessageAction({
    message,
    messageType: 'news'
  }, isManager, uId)
}


function sendMessageAction(data, isManager, uId) {
  if (groupId && !isManager && !uId) {
    return sendCommMessage(communicationType, communicationId, data.messageType, friendId, data.message, messageId, groupId);
  }
  return sendMessage(data, isManager, uId);
}


/**
 *  消息内容类型支持: 文本,xml,图片直链,视频直链
 * QQ: [文本,xml,图片直链,视频直链]
 * WX: [文本,xml,图片直链]
 * WEB: [文本(支持html转义),图片直链,视频直链]
 * WX公众号: [文本,图片直链,视频直链]
 * @param data          消息对象
 * @param isManager     是否将该消息发送给管理员
 * @param uId           用户id                  选填    不填则默认发送给当前用户
 * @returns {Promise<any>}
 */
async function sendMessage(data, isManager, uId) {
  if (!data || !data.message) {
    console.log("消息内容不允许为空")
    return;
  }
  if (isManager && !adminId) {
    console.log(`error：无法将消息发送给管理员，你似乎尚未配置管理员账号`);
    return;
  }
  if (isManager) {
    uId = adminId;
  } else {
    uId = uId || userId;
  }
  if (!uId) {
    console.log("用户id不允许为空")
    return;
  }
  let res = await api({
    url: serverPath + `api/send/message/${uId}`,
    method: 'post',
    searchParams: {
      ...data
    }
  }).json()
  console.log(res)
  return res;
}


/**
 *  可给任意任意发送通讯消息
 * @param commType    通讯类型
 * @param commId      通讯id
 * @param messageType 消息类型
 * @param frId        发送给的好有id，如果发生目的地是群聊则则会@frid
 * @param message     发送的消息
 * @param msgId   qq渠道试用，可回复该消息
 * @param gpId        发送消息到群组，可与frid关联
 * @returns {Promise<unknown>}
 */
async function sendCommMessage(commType, commId, messageType, frId, message, msgId, gpId) {
  let data = await api({
    url: serverPath + `api/send/message`,
    method: 'post',
    body: JSON.stringify({
      communicationType: commType,
      communicationId: commId,
      messageType,
      friendId: frId,
      message,
      groupId: gpId,
      msgId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).json()
  console.log(data)
  return data;
}


/**
 *  向用户发送email通知邮件
 *  目前仅支持邮件通知推送,需先配置邮件服务. 支持自定义邮件模板(详见文件template/email), 支持纯文本邮件
 * @param data   发送的邮件信息所需json数据
 * @param uId    用户id                     选填
 * @returns {Promise<any>}
 */
async function sendNoticeEmail(data, uId) {
  return await api({
    url: serverPath + `api/send/notice/${uId || userId}`,
    method: 'post',
    body: JSON.stringify({
      data,
      noticeType: 'email'
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  删除好友 仅支持qq通讯渠道
 * @param friend 好友账号 qq号         必填
 * @param commId 要操作的通讯端点id     选填    默认为任务触发所在通讯端点
 * @returns {Promise<any>}
 */
async function deleteFriend(friend, commId) {
  return await api({
    url: serverPath + `api/common/friend/${commId || communicationId}/${friend}`,
    method: 'delete',
    searchParams: {
      communicationType: 1    // 仅限qq通讯渠道
    }
  }).json();
}


/**
 *  QQ群组禁言
 * @param isBanned  是否禁言          必填
 * @param group     qq群组号          选填   默认为任务触发所在群组
 * @param commId   要操作的通讯端点id   选填   默认为任务触发所在通讯端点
 * @returns {Promise<any>}
 */
async function banGroup(isBanned, group, commId) {
  return await api({
    url: serverPath + `api/common/group/${commId || communicationId}/${group || groupId}/${isBanned}`,
    method: 'put',
    searchParams: {
      communicationType: 1    // 仅限qq通讯渠道
    }
  }).json();
}


/**
 *  QQ群组踢人
 * @param member    群组内被剔除成员QQ号    必填
 * @param group     qq群组号             选填   默认为任务触发所在群组
 * @param commId    要操作的通讯端点id     选填   默认为任务触发所在通讯端点
 * @returns {Promise<any>}
 */
async function deleteGroupMember(member, group, commId) {
  return await api({
    url: serverPath + `api/common/group/${commId || communicationId}/${group || groupId}/${member}`,
    method: 'delete',
    searchParams: {
      communicationType: 1    // 仅限qq通讯渠道
    }
  }).json();
}


/**
 *  QQ群组单人禁言
 * @param member    群组内被剔除成员QQ号    必填
 * @param second    禁言时长，单位秒       必填   0为解禁言
 * @param group     qq群组号             选填   默认为任务触发所在群组
 * @param commId    要操作的通讯端点id     选填   默认为任务触发所在通讯端点
 * @returns {Promise<any>}
 */
async function banGroupMember(member, second, group, commId) {
  return await api({
    url: serverPath + `api/common/group/${commId || communicationId}/${group || groupId}/${member}/${second}`,
    method: 'put',
    searchParams: {
      communicationType: 1    // 仅限qq通讯渠道
    }
  }).json();
}


/**
 *  QQ群组根据消息id撤回消息
 * @param messageId   需要被撤回的消息id     必填
 * @param commId      要操作的通讯端点id     选填   默认为任务触发所在通讯端点
 * @returns {Promise<any>}
 */
async function recallMessage(messageId, commId) {
  return await api({
    url: serverPath + `api/common/message/${commId || communicationId}/${messageId}`,
    method: 'put',
    searchParams: {
      communicationType: 1    // 仅限qq通讯渠道
    }
  }).json();
}


/**
 *  回滚对步骤任务会话
 * @param step   需要回滚或前进的任务步数，默认回滚1步
 * @param tId    需要回滚的任务id     选填
 * @param uId    用户id             选填
 * @returns {Promise<any>}
 */
async function rollBackTaskSession(step, tId, uId) {
  return await api({
    url: serverPath + `api/common/session/${uId || userId}/${tId || taskId}`,
    method: 'put',
    searchParams: {
      step: step || -1
    }
  }).json();
}


/**
 *  提前结束任务会话
 * @param tId    需要回滚的任务id     选填
 * @param uId    用户id             选填
 * @returns {Promise<any>}
 */
async function finishTaskSession(tId, uId) {
  return await api({
    url: serverPath + `api/common/session/${uId || userId}/${tId || taskId}`,
    method: 'delete'
  }).json();
}


/**
 *  保存key:value对到指定长会话中
 * @param uId
 * @param data
 * @returns {Promise<unknown>}
 */
async function saveDataToLongSession(data, uId) {
  let op = {
    url: serverPath + `api/common/longSession/${uId || userId}`,
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return await api(op).json();
}


module.exports = {
  sendMessage,
  sendCommMessage,
  sendMessageText,
  sendMessageImg,
  sendMessageVideo,
  sendMessageXml,
  sendMessageTextCard,
  sendMessageMarkdown,
  sendMessageNews,
  sendNoticeEmail,
  deleteFriend,
  banGroup,
  deleteGroupMember,
  banGroupMember,
  recallMessage,
  rollBackTaskSession,
  finishTaskSession,
  saveDataToLongSession
}

