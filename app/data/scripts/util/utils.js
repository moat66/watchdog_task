



/**
 * 线程等待
 * @param {any} ms 毫秒
 */
module.exports.sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}


/**
 * 获取一个随机字符串
 * @param {any} len 字符串长度
 * @param {any} radix
 * @param {any} append 在随机字符串中追加自定义字符
 */
module.exports.uuid = function (len, radix, append) {
  var chars = ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + append).split('');
  var uuid = [],
    i;
  radix = radix || chars.length;
  for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  return uuid.join('');
};


module.exports.generateUUID = function generateUUID() {
  let dt = new Date().getTime();
  return uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}
