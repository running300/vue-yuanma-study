import proxyData from "./proxy.js";
import observe from './observe.js';
function initState(vm) {
  var options = vm.$options;
  //判断是否存在data
  if (options.data) {
    initData(vm);
  }
}

//处理数据data
function initData(vm) {
  var data = vm.$options.data;

  data = vm._data = typeof data === "function" ? data.call(vm) : data || {};

  //代理data
  for (var key in data) {
    proxyData(vm, data, key);
  }

  //观察者模式观察data   
  observe(vm._data);
}

export { initState };
