import { AsyncStorage } from 'react-native';

const PARAMS = {
  superStore: 'SendThis',
  keys: {
    requests: 'requests',
  },
};

const getData = async (key, defaultValue = null) => {
  console.log("1");
  try {
    console.log("2");
    const value = await AsyncStorage.getItem(`@${PARAMS.superStore}:${key}`);
    console.log("3");
    if (value === null) {
      console.log("4");
      return defaultValue;
      console.log("5");
    } else {
      console.log("6");
      return value;
      console.log("7");
    }
    console.log("8");
  } catch (error) {
    console.log("9");
    return defaultValue;
    console.log("0");
  }
}

const setData = (key, value) => {
  AsyncStorage.setItem(`@${PARAMS.superStore}:${key}`, value)
    .catch(error => { alert('fudeo'); alert(error); console.log(error) });
}

export default root = {
  storeRequest: async (request) => {
    let requests = await getData(PARAMS.keys.requests, []);
    try {
      requests = JSON.parse(requests);
    } catch (error) {
      requests = [];
    }
    if (request.id == null) {
      requests.push(request);
    } else {
      requests[request.id] = request;
    }
    let json = JSON.stringify(requests);
    setData(PARAMS.keys.requests, json);
  },
  getRequests: async () => {
    var requests = [];
    try {
      requests = await getData(PARAMS.keys.requests, null);
      requests = JSON.parse(requests);
    } catch (error) {
      console.log(error);
    }
    return requests;
  },/*
  getMainRequests: async () => {
    var requests = await this.getRequests();

  }
  */
};