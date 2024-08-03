import styles from '../albums/albums.module.css'
import Card from './Card';
const Albums = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Album</h1>
                <p>See All</p>
            </div>
            <div>
                <Card/>
            </div>
        </div>
    );
};

export default Albums;