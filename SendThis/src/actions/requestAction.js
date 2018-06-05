import SendThis from './../utils/SendThis';

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
    let { url, method, header, bodyType, bodyData, bodyRaw } = getState().request;
    let request = SendThis.makeRequest(method, url, header, bodyType, bodyData, bodyRaw);
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
};