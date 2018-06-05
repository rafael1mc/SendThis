import {GetRequest, PostRequest} from './Request';

export class RequestFactory{
    static getRequest(requestData){
        switch(method){
            case 'GET':
                return new GetRequest(requestData);
            case 'POST':
                return new PostRequest(requestData);
        }
    }
}