import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import store from './store/store';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import ResultsPage from './components/ResultsPage';
import ErrorPage from './ErrorPage';

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

const AppLayout = () => {
    return (
        <>
            <Head />
            <Outlet />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
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
                    {
                        path: 'results',
                        element: <ResultsPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div>
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
