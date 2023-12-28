const {bandingUser} = require('./api/user');
const {sendMessageText} = require('./api/message')

const BANDING_CODE = process.env.banding_code;  // 用户绑定码
const nickname = process.env._nickname;

!(async () => {
  let data = await bandingUser(BANDING_CODE);
  console.log("绑定用户状态", data)
  if (data.code !== 200) {
    await sendMessageText(data.message);
    return
  }
  await sendMessageText(`用户信息绑定成功！
昵称：${nickname}`, false, data.data)
})().catch((e) => {console.log("脚本异常：" + e);});