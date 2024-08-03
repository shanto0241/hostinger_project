import Image from 'next/image';
import styles from '../grid/grid.module.css'
const Grid = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Favourites</h1>
                <p>See All</p>
            </div>
            <div className={styles.grid}>
                <div className={styles.box}>
                    <Image
                        src='/1.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/2.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/3.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/4.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/5.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/6.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/7.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/8.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/9.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>

                <div className={styles.box}>
                    <Image
                        src='/1.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/2.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/3.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/4.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/5.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/6.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/7.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/8.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
                <div className={styles.box}>
                    <Image
                        src='/9.jpg'
                        alt="nature"
                        width={300}
                        height={300}
                        className={styles.img}
                    />
                </div>
            </div>

        </div>







    );
};

export default Grid;


