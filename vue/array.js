import { Arr_METHODS } from './config';
import observeArr from './observeArr';
var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

//重写数组的方法
Arr_METHODS.map(function(m) {
    arrMethods[m] = function() {
        // 执行原来的方法
        var args = Array.prototype.slice.call(arguments),
            rt = originArrMethods[m].apply(this, args);
        
        var newArr;
        switch(m) {
            case 'push':
            case 'unshift':
                newArr = args;
                break;
            case 'splice':
                newArr = args.slice(2);
                break;
            default:
                break;
        }

        newArr && observeArr(newArr);
        return rt;
    }
})

export default arrMethods
