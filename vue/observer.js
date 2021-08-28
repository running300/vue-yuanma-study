import defineReactiveData from './reactive.js';
import arrMethods from './array.js';
import observeArr from './observeArr';
//对象和数组的处理是不一样的
function Observer(data) {
  if (Array.isArray(data)) {
    data.__proto__ = arrMethods;
    // 数组里面还有没有object 和 数组
    observeArr(data);
  } else {
    this.walk(data);
  }
}

//处理对象格式的数据
Observer.prototype.walk = function (data) {
  var keys = Object.keys(data);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
      value = data[key];
    defineReactiveData(data, key, value);
  }
};
export default Observer;
