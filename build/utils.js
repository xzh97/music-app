
const merge = (source, obj) => {
    let res = {}
    for(let key in source) {
        // 两个配置都有该属性
        if(obj.hasOwnProperty(key)){
            res[key] = obj[key]
        }
        else {
            res[key] = source[key]
        }
    }
}

const isPlainObject = (obj) => {
    
}

module.exports = {
    merge
}