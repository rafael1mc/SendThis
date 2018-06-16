const INITIAL_STATE = {
  requestResponseTab: 'Request',
  iconSend: 'placeholder.png',
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  if (action.hasOwnProperty('error')) {
    action.type = 'HIDE_LOADING';
  }
  switch (action.type) {
    case 'LAYOUT_REQUEST_CHANGE_TAB':
      return { ...state, requestResponseTab: action.payload }
    case 'LAYOUT_SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'NEW_REQUEST': {
      return { ...state, requestResponseTab: 'Request' };
    }
    case 'SET_REQUEST': {
      return { ...state, requestResponseTab: 'Request' };
    }
    //return state;
    /*case 'FORM_REQUEST_SEND':
      return { ...state, isLoading: false, requestResponseTab: 'Response' }*/
    default:
      return state;
  }
};