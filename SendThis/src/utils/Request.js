import Util from './Util';

class Request{
    constructor(requestData){
        if(!requestData.url.toLowerCase().startsWith('http://') &&
            !requestData.url.toLowerCase().startsWith('https://')){
            requestData.url = 'http://' + url';
        }
        
        this.url        = requestData.url;
        this.headers    = requestData.headers;
        this.method     = requestData.method;
        this.bodyType   = requestData.bodyType;
        this.bodyData   = requestData.bodyData;
    }
    
    getConfig(){ 
        let obj = {
            method: this.method,
            url: this.url,
            headers: this.headers
        };
        obj = Object.assign(obj, this.getConfigSpec());
    }
}

export class GetRequest extends Request{
    getConfigSpec(){
        return {}; // nothing else to add
    }
}

export class PostRequest extends Request {
    getConfigSpec() {
        let data = this.bodyData;
        switch(this.bodyType){
            case 'form_url_encoded':
                data = this.parseUrlEncodedData();
                break;
            case 'text': // all fall through because they are already as text
            case 'json':
            default:
                // do nothig, send as is (as text)
        }
        return {
            data: data
        };
    }
    
    parseUrlEncodedData(){
        let data = Util.convertArrayToKeyValue(this.bodyData);
        let parsedData = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            parsedData.push(encodedKey + "=" + encodedValue);
        }

        parsedData = parsedData.join("&");
        return parsedData;
    }
}