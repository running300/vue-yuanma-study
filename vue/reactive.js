import observe from "./observe";

function defineReactiveData(data, key, value) {
  observe(value);//递归的观察
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if ((newValue = value)) return;
      //如果newValue是对象 或者 数组再次观察
      observe(newValue);
      value = newValue;
    },
  });
}

export default defineReactiveData