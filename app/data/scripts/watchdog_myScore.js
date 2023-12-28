const {getUserInfo} = require('./api/user');
const {sendMessageText} = require('./api/message')

!(async () => {
  let user = await getUserInfo();
    console.log(user)
    console.log(typeof user)
  await sendMessageText(`绑定QQ：${user.qqId || '未绑定'}
绑定微信：${user.wxNickname || '未绑定'}
绑定WEB：${user.webUsername || '未绑定'}
剩余积分：${user.credits}
到期时间：${user.expirationTime || '未更新'}`);
})().catch((e) => {console.log("脚本异常：" + e);});
