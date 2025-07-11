function deepCopy(obj) {
    if (obj === null) return null;
    if (obj === undefined) return undefined;
    if (typeof obj === 'number' && isNaN(obj)) return NaN;
    if (typeof obj !== 'object') return obj;
    if (typeof obj === 'function') return obj;

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    const newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}


let original = {
    name: 'Test',
    value: NaN,
    extra: {
        inner: 'data',
        flag: null,
        log: () => console.log('inside')
    }
};

let copy = deepCopy(original);

console.log(copy);
copy.extra.log(); 
