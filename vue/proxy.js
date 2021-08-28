//代理
function proxyData(vm, target, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[target][key];
    },
    set(newValue) {
      if (newValue === vm[target][key]) return;
      vm[target][key] = newValue;
    },
  });
}

export default proxyData;
