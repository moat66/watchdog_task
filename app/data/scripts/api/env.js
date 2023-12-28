const {api, serverPath} = require("./base")



/**
 *  获取统一环境变量信息列表
 * @param name            变量名称    选填
 * @param value            变量值        选填
 * @param envType         变量类型     选填
 * @param userId          用户id      选填
 * @param enable          是否启用      选填
 * @param qlId            绑定容器      选填
 * @returns {Promise<any>}
 */
async function getEnv(name, value, envType, userId, enable, qlId) {
  const data = await api({
    url: serverPath + `api/env`,
    method: 'get',
    searchParams: {
      name,
      value,
      userId,
      envType,
      enable,
      qlId,
      page: 1,
      pageSize: 99999
    }
  }).json();
  return data.data;
}



/**
 *  添加或更新环境变量根据id是否存在
 * @param envs    环境变量列表    必填
 * @returns {Promise<any>}
 */
async function addOrUpdateEnv(envs) {
  const updateEnvs = envs.filter(obj => obj.hasOwnProperty('id'));
  const addEnvs = envs.filter(obj => !obj.hasOwnProperty('id'));
  if (updateEnvs.length > 0) {
    return await updateEnv(updateEnvs)
  }
  if (addEnvs.length > 0) {
    return await addEnv(addEnvs)
  }
}


/**
 *  添加环境变量
 * @param envs    环境变量列表    必填
 * @returns {Promise<any>}
 */
async function addEnv(envs) {
  return await api({
    url: serverPath + `api/env`,
    method: 'post',
    body: JSON.stringify(envs),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}



/**
 *  更新环境变量
 * @param envs    环境变量列表    必填
 * @returns {Promise<any>}
 */
async function updateEnv(envs) {
  return await api({
    url: serverPath + `api/env`,
    method: 'put',
    body: JSON.stringify(envs),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  删除环境变量
 * @param ids    环境变量id列表    必填
 * @returns {Promise<any>}
 */
async function deleteEnv(ids) {
  return await api({
    url: serverPath + `api/env`,
    method: 'delete',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}



/**
 *  禁用环境变量
 * @param ids    环境变量id列表    必填
 * @returns {Promise<any>}
 */
async function disableEnv(ids) {
  return await api({
    url: serverPath + `api/env/disable`,
    method: 'put',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}



/**
 *  启用环境变量
 * @param ids    环境变量id列表    必填
 * @returns {Promise<any>}
 */
async function enableEnv(ids) {
  return await api({
    url: serverPath + `api/env/enable`,
    method: 'put',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  同步环境变量信息至青龙容器
 * @returns {Promise<any>}
 */
async function syncEnv() {
  return await api({
    url: serverPath + `api/env/sync`,
    method: 'put'
  }).json();
}



/**
 *  禁用青龙环境变量
 * @param qlId    容器id          必填
 * @param ids     环境变量id列表    必填
 * @returns {Promise<any>}
 */
async function disable(qlId, ids) {
  return await api({
    url: serverPath + `api/qlEnv/disable/${qlId}`,
    method: 'put',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  启用青龙环境变量
 * @param qlId    容器id          必填
 * @param ids     环境变量id列表    必填
 * @returns {Promise<any>}
 */
async function enable(qlId, ids) {
  return await api({
    url: serverPath + `api/qlEnv/enable/${qlId}`,
    method: 'put',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  获取指定容器环境变量
 * @param qlId          容器id      必填
 * @param searchValue   搜索关键词
 * @returns {Promise<any>}
 */
async function get(qlId, searchValue) {
  return await api({
    url: serverPath + `api/qlEnv/${qlId}`,
    method: 'get',
    searchParams: {
      searchValue
    },
  }).json();
}


/**
 *  为容器添加环境变量
 * @param qlId       容器id                 必填
 * @param envs       要添加的环境变量信息列表   必填
 * @returns {Promise<any>}
 */
async function add(qlId, envs) {
  return await api({
    url: serverPath + `api/qlEnv/${qlId}`,
    method: 'post',
    body: JSON.stringify(envs),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  更新指定容器环境变量
 * @param qlId       容器id                 必填
 * @param env        要更新的环境变量信息      必填
 * @returns {Promise<any>}
 */
async function update(qlId, env) {
  return await api({
    url: serverPath + `api/qlEnv/${qlId}`,
    method: 'put',
    body: JSON.stringify(env),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  删除指定容器环境变量
 * @param qlId       容器id                    必填
 * @param ids        要被删除的环境变量id列表      必填
 * @returns {Promise<any>}
 */
async function deletes(qlId, ids) {
  return await api({
    url: serverPath + `api/qlEnv/${qlId}`,
    method: 'delete',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  获取dd的ck
 * @param uId
 * @returns {Promise<*[]>}
 */
async function getCookies(uId) {
  let data = await getEnv("JD_COOKIE", "pt_pin", 0, uId, true);
  let envs = data.data
  console.log(`用户id：${uId || process.env._userId}`);
  let cookies = [];
  let envCookies = [];
  if (process.env.JD_COOKIE) {
    envCookies = process.env.JD_COOKIE.split("&");
  }

  if (envCookies.length === 0 && envs.length === 0) {
    console.log("未提供环境变量。");
    return [];
  }
  for (let i = 0; i < envs.length; i++) {
    let env = envs[i];
    let cookie = env.value;
    if (!cookie.match(/pt_pin=(.+?);/) || !cookie.match(/pt_key=(.+?);/)) {
      console.log(cookie + "-----不规范，已跳过。");
      continue;
    }
    let pt_key = cookie.match(/pt_key=([^; ]+)(?=;?)/)[1]
    let pt_pin = cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
    let reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    if (reg.test(pt_pin)) {
      pt_pin = encodeURI(pt_pin);
      env.value = `pt_key=${pt_key};pt_pin=${pt_pin};`
    }
    cookies.push(env.value)
  }
  return cookies;
}



module.exports = {
  qinglong: {
    disable,
    enable,
    get,
    add,
    update,
    deletes
  },
  getEnv,
  addOrUpdateEnv,
  addEnv,
  updateEnv,
  deleteEnv,
  enableEnv,
  disableEnv,
  syncEnv,
  getCookies
}


