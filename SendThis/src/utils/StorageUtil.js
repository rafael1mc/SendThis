import { AsyncStorage } from 'react-native';

const PARAMS = {
  superStore: 'SendThis',
  keys: {
    requests: 'requests',
  },
};

const getData = async (key, defaultValue = null) => {
  try {
    const value = await AsyncStorage.getItem(`@${PARAMS.superStore}:${key}`);
    if (value === null) {
      return defaultValue;
    } else {
      return value;
    }
  } catch (error) {
    return defaultValue;
  }
}

const setData = (key, value) => {
  AsyncStorage.setItem(`@${PARAMS.superStore}:${key}`, value)
    .catch(error => { console.log(error) });
}

export default root = {
  storeRequest: async (request) => {
    let requests = await getData(PARAMS.keys.requests, []);
    let id = -1;
    try {
      requests = JSON.parse(requests);
    } catch (error) {
      requests = [];
    }
    if (request.id == null || request.id == -1) {
      requests.push(request);
      id = requests.length - 1;
    } else {
      requests[request.id] = request;
      id = request.id;
    }
    let json = JSON.stringify(requests);
    setData(PARAMS.keys.requests, json);
    return id;
  },
  getRequests: async () => {
    ret = [];
    try {
      let requests = await getData(PARAMS.keys.requests, null);
      requests = JSON.parse(requests);
      ret = requests.map((item, i) => {
        return { ...item, id: i };
      });
    } catch (error) {
      console.log(error);
    }
    return ret;
  },/*
  getMainRequests: async () => {
    var requests = await this.getRequests();

  }
  */
};