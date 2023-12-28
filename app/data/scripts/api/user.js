const {api, serverPath} = require("./base")
const {log} = require("qrcode/lib/core/galois-field");

const userId = process.env._userId; // 用户id
const communicationType = process.env._communicationType; //通讯端点id

/**
 *  获取当前触发任务的用户信息
 * @returns {Promise<void>}
 */
async function getUserInfo() {
  return getUserById(userId)
}

/**
 *  查询用户信息
 * @param searchValue       搜索关键词    选填
 * @param status            账户状态     选填
 * @returns {Promise<any>}
 */
async function getUsers(searchValue, status) {
  const data = await api({
    url: serverPath + 'api/user',
    method: 'get',
    searchParams: {
      searchValue,
      status,
      page: 1,
      pageSize: 99999
    },
  }).json();
  return data.data;
}


/**
 *  查询指定用户信息
 * @param uId      用户id            必填
 * @returns {Promise<any>}
 */
async function getUserById(uId) {
  const data = await api({
      url: serverPath + `api/user/${uId}`,
      method: 'get'
  }).json()
  return data.data;
}


/**
 *  更新用户信息
 * @param user   可更新积分、	过期时间、	备注、	账号当前状态,可用值:0,1,2,3,4、账号权重
 * @returns {Promise<any>}
 */
async function updateUser(user) {
  return await api({
    url: serverPath + 'api/user',
    method: 'put',
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  批量删除用户信息
 * @param ids     用户id列表    必填
 * @returns {Promise<any>}
 */
async function deleteUser(ids) {
  return await api({
    url: serverPath + 'api/user',
    method: 'delete',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  更新用户积分数据
 * @param uId       用户id            必填
 * @param variate   增加或减少的积分数   必填
 * @returns {Promise<any>}
 */
async function updateUserCredits(uId, variate) {
  return await api({
    url: serverPath + `api/user/credits/${uId}/${variate}`,
    method: 'put'
  }).json();
}


/**
 *  重置指定用户密码
 * @param uId      用户id            必填
 * @returns {Promise<any>}
 */
async function resetUserPass(uId) {
  return await api({
    url: serverPath + `api/user/reset/${uId || userId}`,
    method: 'put'
  }).json();
}


/**
 *  获取指定用户的绑定码有效期30分钟
 * @param uId   用户id
 * @returns {Promise<unknown>}
 */
async function getBandingCode(uId) {
  return await api({
    url: serverPath + `api/common/banding/${uId || userId}`,
    method: 'get'
  }).json();
}


/**
 *  将指定用户与该绑定码合并，保留原用户信息
 * @param code      绑定码
 * @param uId       指定用户id
 * @param commType  绑定的通讯渠道
 * @returns {Promise<unknown>}
 */
async function bandingUser(code, uId, commType) {
  return await api({
    url: serverPath + `api/common/banding/${uId || userId}`,
    method: 'put',
    searchParams: {
      bandingCode: code,
      communicationType: commType || communicationType
    },
  }).json();
}



module.exports = {
  getUserInfo,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateUserCredits,
  resetUserPass,
  getBandingCode,
  bandingUser
}




