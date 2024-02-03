import { AiFillDashboard, AiOutlineShop } from "react-icons/ai";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard/>,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Order',
        icon: <AiOutlineShop/>,
        role: 'admin',
        path: '/admin/orders'
    }
]