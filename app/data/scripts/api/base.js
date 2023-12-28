const got = require('got');

let serverPath = process.env._serverPath || "http://localhost:8081/"; //服务地址

if (!serverPath.endsWith("/")) {
  serverPath = serverPath + "/";
}
console.log(process.env._serverPath,"serverPath");
console.log("脚本库更新时间：2023年6月14日");
const api = got.extend({
  retry: { limit: 0 },
   hooks: {
     beforeRequest: [
       options => {
         options.headers.Authorization = "Bearer " + process.env._Authorization;
       }
     ]
   }
});
module.exports = {
  serverPath: serverPath,
  api
};
