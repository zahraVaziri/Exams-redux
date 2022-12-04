import './App.css';
import {Provider} from 'react-redux'
import  store  from './redux/store';
import CakeContainer from './component/cakeContainer';
import HookCakeContainer from './component/HookCakeContainer';
import IcecreamContainer from './component/IcecreamContainer';
import FetchUserContainer from './component/FetchUserContainer';
import PostSaga from './component/PostSaga';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
     <HookCakeContainer/>
     <IcecreamContainer/>
        <FetchUserContainer/>
        <PostSaga />
      </div>
    </Provider>
  );
}

export default App;
