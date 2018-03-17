import axios from 'axios';

export const changeUrlAction = (url) => {
  return {
    type: 'FORM_REQUEST_CHANGE_URL',
    payload: url
  }
};

export const changeMethodAction = (method) => {
  return {
    type: 'FORM_REQUEST_CHANGE_METHOD',
    payload: method
  }
};

export const changeHeaderKeyAction = (index, text) => {
  return {
    type: 'FORM_REQUEST_CHANGE_HEADER_CONTENT',
    payload: { index: index, from: 'key', data: text }
  };
};

export const changeHeaderValueAction = (index, text) => {
  return {
    type: 'FORM_REQUEST_CHANGE_HEADER_CONTENT',
    payload: { index: index, from: 'value', data: text }
  };
};

export const changeBodyTypeAction = (type) => {
  return {
    type: 'FORM_REQUEST_CHANGE_POST_TYPE',
    payload: type
  };
};

export const changeBodyKeyAction = (index, text) => {
  return {
    type: 'FORM_REQUEST_CHANGE_BODY_PAIR',
    payload: { index: index, from: 'key', data: text }
  };
};

export const changeBodyValueAction = (index, text) => {
  return {
    type: 'FORM_REQUEST_CHANGE_BODY_PAIR',
    payload: { index: index, from: 'value', data: text }
  };
};

export const changeBodyRawAction = (text) => {
  return {
    type: 'FORM_REQUEST_CHANGE_BODY_RAW',
    payload: text,
  }
};

export const sendRequestAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'LAYOUT_SET_LOADING', payload: true });
    let request = createRequest(getState().request);
    dispatch(
      request.then(response => {
        dispatch({ type: 'LAYOUT_SET_LOADING', payload: false })
        dispatch({ type: 'LAYOUT_REQUEST_CHANGE_TAB', payload: 'Response' })
        return { type: 'FORM_REQUEST_SEND', payload: response }
      })
    ).catch(error => {
      return dispatch({ type: 'LAYOUT_SET_LOADING', payload: false })
    });
  };
  /*
  let request = createRequest(requestData);
  return {
    type: 'FORM_REQUEST_SEND',
    payload: request,
  };
  */
};

const createRequest = (requestData) => {
  let { method } = requestData;
  switch (method) {
    case 'get':
      return makeGet(requestData);
    case 'post':
      return makePost(requestData);
  }
}

const makeGet = (requestData) => {
  let { url, headers } = requestData;
  return makeRequest(
    {
      url: url,
      method: 'GET',
    },
    headers
  );
};

const makePost = (requestData) => {
  let { url, bodyType, bodyRaw, headers, bodyData } = requestData;


  let formBody = {};
  switch (bodyType) {
    case 'form_url_encoded':
      let newBody = [...bodyData]; // prevent slicing original array

      newBody.forEach(function (item, index, object) {
        if (item.key == '') {
          object.splice(index, 1);
        }
      });
      
      let bodyObj = Object.assign({}, ...(newBody.map(item => ({ [item.key]: item.value }))));

      formBody = [];
      for (var property in bodyObj) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(bodyObj[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      
      formBody = formBody.join("&");
      break;
    case 'raw':
      formBody = bodyRaw;
  }

  return makeRequest(
    {
      url: url,
      method: 'post',
      data: formBody
    },
    headers
  );
};

const makeRequest = (request, headers = []) => {

  if (!request.url.startsWith('http://') && (!request.url.startsWith('https://'))) {
    request.url = 'http://' + request.url
  }
  let newHeaders = [...headers]; // prevent changing original array
  newHeaders.forEach(function (item, index, object) {
    if (item.key == '') {
      object.splice(index, 1);
    }
  });
  let headerObj = Object.assign({}, ...(newHeaders.map(item => ({ [item.key]: item.value }))));
  if (Object.keys(headerObj).length > 0) {
    request.headers = headerObj;
  }
  request.transformResponse = (req) => {
    // Do your own parsing here if needed ie JSON.parse(req);
    return req;
  };
  return axios(request);
};