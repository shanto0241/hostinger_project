import styles from '../sidebar/sidebar.module.css'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdImageSearch,
    MdArticle,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Images",
                path: "/dashboard/images",
                icon: <MdImageSearch />,
            },
            {
                title: "Blogs",
                path: "/dashboard/blogs",
                icon: <MdArticle />,
            },
        ],
    },
    
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];


const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src="/noavatar.png"
                    alt="User Image"
                    width="50"
                    height="50"
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>User Name</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (<li key={cat.title}>
                    <span className={styles.cat}>{cat.title}</span>
                    {cat.list.map(item => (
                        <MenuLink key={item.title} item={item} />
                    ))}
                </li>))}
            </ul>
            <button className={styles.logout}>
                <MdLogout />
                Logout
            </button>
        </div>
    );
};

export default Sidebar;