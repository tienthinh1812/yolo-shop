import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';

const Router = [
    { path: '/', component: <Home /> },
    { path: '/Cart', component: <Cart /> },
    { path: '/catalog', component: <Catalog /> },
    { path: '/catalog/:slug', component: <Product /> },
];

export default Router;
