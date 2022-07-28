import './sass/index.scss';
import router from './routes';
import DefaultLayout from './components/DefaultLayout';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {router.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<DefaultLayout>{route.component}</DefaultLayout>}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
