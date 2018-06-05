import axios from 'axios';
import Util from './Util';
import {RequestFactory} from './RequestFactory';

function generateRequest(requestData){
    requestData.header = Util.convertArrayToKeyValue(requestData.header);
    
    let request = RequestFactory.getRequest(requestData);
    return request.getConfig();
}

export function makeRequest(method, url, header, bodyType, bodyData){
    let requestData = {
        method: method,
        url: url,
        header: header,
        bodyType: bodyType,
        bodyData: bodyData
    };
    
    return axios(
        generateRequest(requestData)
    );
}