import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter(
  [
    {
      path:'/',
      element: <Body />,
      children:[
        {
          path:'/',
          element: <MainContainer />
        },
        {
          path:'/watch',
          element: <WatchPage />
        },
        {
          path:'/demo',
          element: <><Demo /> <Demo2 /></>
        }
      ]
    },
  ]
);

function App() {
  return (
    <Provider store={appStore}>
    <div>
     <Header />
     <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;