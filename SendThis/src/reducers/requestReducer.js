const INITIAL_STATE = {
  url: '',
  method: 'get',

  headers: [
    { key: '', value: '' },
  ],

  bodyType: 'form_url_encoded',
  bodyData: [
    { key: '', value: '' },
  ],
  bodyRaw: '',
};

export default requestReducer = (state = INITIAL_STATE, action) => {
  if (action.hasOwnProperty('error')) {
    if (action.error) { action.type = 'NON_EXISTING_ACTION' }
  }
  switch (action.type) {
    case 'FORM_REQUEST_CHANGE_URL': {
      return { ...state, url: action.payload };
    }
    case 'FORM_REQUEST_CHANGE_METHOD': {
      return { ...state, method: action.payload };
    }
    case 'FORM_REQUEST_CHANGE_HEADER_CONTENT': {
      return changeHeaderContent(state, action);
    }
    case 'FORM_REQUEST_CHANGE_POST_TYPE': {
      return { ...state, bodyType: action.payload }
    }
    case 'FORM_REQUEST_CHANGE_BODY_PAIR': {
      return changeBodyContent(state, action);
    }
    case 'FORM_REQUEST_CHANGE_BODY_RAW': {
      return { ...state, bodyRaw: action.payload }
    }
    case 'FORM_REQUEST_SEND': {
      return state;
      //return { ...state, bodyRaw: action.payload.data }
    }
    default:
      return state;
  }
};

const changeHeaderContent = (state, action) => {
  let index = action.payload.index;
  let from = action.payload.from;
  let data = action.payload.data;

  let newState = {
    ...state,
    headers:
      // prevent 'headers' from mutating
      Object.assign(
        [],
        state.headers,
        {
          // prevent headers[index] from mutating
          [index]: Object.assign(
            {},
            state.headers[index],
            { [from]: data }
          )
        }
      )
  };
  if (index == state.headers.length - 1) {
    // since already created a new array, just push new item
    newState.headers.push({ key: '', value: '' });
  }
  return newState;
};

const changeBodyContent = (state, action) => {
  let index = action.payload.index;
  let from = action.payload.from;
  let data = action.payload.data;

  let newState = {
    ...state,
    bodyData:
      // prevent 'bodyData' from mutating
      Object.assign(
        [],
        state.bodyData,
        {
          // prevent bodyData[index] from mutating
          [index]: Object.assign(
            {},
            state.bodyData[index],
            { [from]: data }
          )
        }
      )
  };
  if (index == state.bodyData.length - 1) {
    // since already created a new array, just push new item
    newState.bodyData.push({ key: '', value: '' });
  }
  return newState;
};