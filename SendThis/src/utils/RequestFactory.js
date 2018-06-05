import {GetRequest, PostRequest} from './Request';

export class RequestFactory{
    static getRequest(requestData){
        switch(requestData.method.toUpperCase()){
            case 'GET':
                return new GetRequest(requestData);
            case 'POST':
                return new PostRequest(requestData);
        }
    }
}