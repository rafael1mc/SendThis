/**
Converts object-like array into object.

Ex:
Input
[ {key: 'content-type', value: 'application/json'}, {key: 'Foo', value: 'Bar'} ]

Output
{ 'content-type': 'application/json', Foo: 'Bar'}
*/
function convertArrayToKeyValue(let data){
    let result = {};
    for(let d in data){
        if(data[d].key != null){ // can't have empty key, so ignore if that's the case
            result[data[d].key] = data[d].value;
        }
    }
    return result;
}

/**
Converts object into object-like array.

Ex:
Input
{ 'content-type': 'application/json', Foo: 'Bar'}

Output
[ {key: 'content-type', value: 'application/json'}, {key: 'Foo', value: 'Bar'} ]
*/
function convertKeyValueToArray(let data){
    let result = [];
    for(let d in data){
        result.push({
            key: d,
            value: data[d]
        });
    }
}