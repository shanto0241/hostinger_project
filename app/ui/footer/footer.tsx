import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.logo}>Hostinger Project 2204</div>
                <div className={styles.text}>© All rights reserved.</div>
            </div>

        </div>
    );
};

export default Footer;