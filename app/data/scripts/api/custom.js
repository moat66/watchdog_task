const {api, serverPath} = require("./base")




/**
 *  获取指定数据标题内容
 * @param type        标题类型      必填
 * @returns {Promise<any>}
 */
async function getCustomTypeByType(type) {
  const data = await api({
    url: serverPath + `api/customType/${type}`,
    method: 'get'
  }).json()
  return data.data;
}


/**
 *  获取全部自定义数据标题内容
 * @returns {Promise<any>}
 */
async function getCustomType() {
  const data = await api({
    url: serverPath + `api/customType`,
    method: 'get'
  }).json()
  return data.data;
}


/**
 *  添加或更新自定义数据标题
 * @param customTypes    自定义数据标题列表    必须
 * @returns {Promise<any>}
 */
async function addOrUpdateCustomType(customTypes) {
  return await api({
    url: serverPath + `api/customType`,
    method: 'post',
    body: JSON.stringify(customTypes),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  删除自定义数据标题
 * @param types       标题类型列表    必须
 * @returns {Promise<any>}
 */
async function deleteCustomType(types) {
  return await api({
    url: serverPath + `api/customType`,
    method: 'delete',
    body: JSON.stringify(types),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}





/**
 * 获取自定义数据
 * @param type        数据类型      必填
 * @param startTime   数据创建时间 开始
 * @param endTime     数据创建时间 截至
 * @param dataQuery    Data筛选字段 对象
 */
async function getCustomData(type, dataQuery, startTime, endTime) {
  dataQuery = dataQuery || {}
  const data = await api({
    url: serverPath + `api/customData`,
    method: 'get',
    searchParams: {
      type,
      createTimeStart: startTime,
      createTimeEnd: endTime,
      page: 1,
      pageSize: 99999,
      ...dataQuery
    }
  }).json();
  return data;
}


/**
 *  添加自定义数据
 * @param customData    自定义数据列表    必须
 * @returns {Promise<any>}
 */
async function addCustomData(customData) {
  const data = await api({
    url: serverPath + `api/customData`,
    method: 'post',
    body: JSON.stringify(customData),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
  return data;
}


/**
 *  更新自定义数据
 * @param customData    自定义数据列表    必须
 * @returns {Promise<any>}
 */
async function updateCustomData(customData) {
  return await api({
    url: serverPath + `api/customData`,
    method: 'put',
    body: JSON.stringify(customData),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}


/**
 *  删除自定义数据
 * @param ids       自定义数据id列表    必须
 * @returns {Promise<any>}
 */
async function deleteCustomData(ids) {
  return await api({
    url: serverPath + `api/customData`,
    method: 'delete',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json"
    }
  }).json();
}





module.exports = {
  getCustomType,
  getCustomTypeByType,
  addOrUpdateCustomType,
  deleteCustomType,
  getCustomData,
  addCustomData,
  updateCustomData,
  deleteCustomData
}


