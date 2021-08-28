//观察者
import Observer from './observer.js'

function observe(data) {
    //不进行观察
    if(typeof data !== 'object' || data === null) return;
    return new Observer(data);
}

export default observe;
