import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

/* 
  Head
  Body
  Sidebar
    MenuItems
  MainContainer
    ButtonsList
    VideoContainer
      VideoCard
*/
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Body />,
        children: [
            {
                path: '/',
                element: <MainContainer />,
            },
            {
                path: 'watch',
                element: <WatchPage />,

            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div>
                <Head />
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
