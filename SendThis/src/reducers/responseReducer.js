const INITIAL_STATE = {
  headers: [
    { key: '', value: '' },
  ],
  body: '',

};

export default requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FORM_REQUEST_SEND': {
      let headers = [];
      for (var k in action.payload.headers) {
        if (action.payload.headers.hasOwnProperty(k)) {
          var hd = {key: [k], value: action.payload.headers[k]};
          headers.push(hd);
        }
      }

      return { ...state, headers: headers, body: action.payload.data };
    }
    default:
      return state;
  }
};
