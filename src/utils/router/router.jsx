import {createBrowserRouter} from "react-router";
import ChoosePage from "../../pages/choosePage/ChoosePage.jsx";
import ProductList from "../../components/ProductList.jsx";
import UsersPage from "../../pages/usersPage/UsersPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ChoosePage/>,
    },

    {
        path:"/products",
        element:<ProductList/>
    },

    {
        path:"/users",
        element:<UsersPage/>
    }
]);

export default router;
