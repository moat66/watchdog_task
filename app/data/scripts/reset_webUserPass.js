/**
 *
 * 重置Web登录密码
 *
 * */
const {sendMessageText} = require('./api/message')
const {resetUserPass} = require("./api/user");

!(async () => {

  if (process.env._communicationType === "3") {
    await sendMessageText("WEB通讯端点不支持重置密码操作")
    return;
  }

  let body = await resetUserPass();
  console.log(body);
  if (body.code !== 200) {
    await sendMessageText(body.message || "重置Web登录密码出错了，请联系管理员吧！");
  } else {
    await sendMessageText(`密码重置成功！
密码：${body.message}
请妥善保管。`);
  }
})().catch((e) => {
  console.log("重置Web登录密码出现异常：");
  console.log(e)
})