import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    cards
                </div>
            </div>
            <div className={styles.side}>
                    sidemenu
            </div>
        </div>
    );
};

export default Dashboard;