const {sendMessageText} = require('./api/message')
const {syncEnv} = require('./api/env')

// 判断当前是否正则同步
let isSyncEnv = process.env._isSyncEnv == "true";

!(async () => {
  if (isSyncEnv) {
    await sendMessageText("开始同步环境变量了，可能要点时间，骚等一下。", true)
  }
  console.log("环境变量单向同步结果：", await syncEnv())
})().catch((e) => {console.log("脚本异常：" + e);});