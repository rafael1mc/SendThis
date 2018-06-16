import { StackNavigator, } from 'react-navigation';
import MainScreen from './src/components/MainScreen/MainScreen';
import MyRequestsScreen from './src/components/MyRequestsScreen/MyRequestsScreen';
import RequestResponseScreen from './src/components/RequestResponseScreen/RequestResponseScreen';
import MyRequest from './src/components/MyRequest/MyRequest';

//import TestScreen from './src/components/TestScreen/TestScreen';

export default Stack = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null,
    }
  },
  MyRequests: {
    screen: MyRequestsScreen,
    navigationOptions: {
      header: null,
    }
  },
  RequestResponse: {
    screen: RequestResponseScreen,
    navigationOptions: {
      header: null,
    }
  },
  MyRequest: {
    screen: MyRequest,
    navigationOptions: {
      header: null,
    }
  },
  /*
  Test: {
    screen: TestScreen,
    navigationOptions: {
      header: null,
    }
  },
  */
}, {
    //initialRouteName: 'RequestResponse',
    //initialRouteName: 'Test',
    //initialRouteName: 'MyRequests',
    //initialRouteName: 'MyRequest',
    initialRouteName: 'Main'
  }
);