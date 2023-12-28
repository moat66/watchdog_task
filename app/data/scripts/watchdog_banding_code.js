const {getBandingCode} = require('./api/user');
const {sendMessageText} = require('./api/message')

!(async () => {
  let data = await getBandingCode();
  console.log("用户绑定码", data)
  if (data.code !== 200) {
    await sendMessageText(data.message);
    return
  }
  await sendMessageText(`绑定码：${data.data}
绑定码有效期为30分钟，过期无效
你可在此时间段内将绑定码发送给其它通讯端点机器人
其它通讯渠道的用户信息将合并到此绑定码所属用户`)
})().catch((e) => {console.log("脚本异常：" + e);});