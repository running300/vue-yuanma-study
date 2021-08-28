import { initState } from './init.js';

function Vue(options) {
  //1.初始化
  this._init(options);
}

//初始化的方法
Vue.prototype._init = function (options) {
  var vm = this;

  //把数据挂载到实例上去
  vm.$options = options;

  //初始化状态
  initState(vm);
};

export default Vue;
