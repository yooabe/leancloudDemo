// LeanCloud - 初始化 - 将这里的 APP_ID 和 APP_KEY 替换成自己的应用数据
// https://leancloud.cn/docs/sdk_setup-js.html#初始化
const AV = require('leancloud-storage');
var APP_ID = 'KF2UkROSjxhiydRfK6NcWz3s-gzGzoHsz';
var APP_KEY = 'nooF5FNzxhU9WGNvhNEdISnO';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURL: 'https://kf2ukros.lc-cn-n1-shared.com'
});