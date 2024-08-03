import styles from '@/app/ui/dashboard/images/images.module.css'
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';

const ImagesPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for an image" />
                <Link href='/dashboard/images/add'>
                    <button className={styles.addbutton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Image & Title</td>
                        <td>Caption</td>
                        <td>Album</td>
                        <td>Created At</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src='/nature.png'
                                    alt="natuer"
                                    width={60}
                                    height={40}
                                    className={styles.userImage}
                                />
                                Nature 167
                            </div>
                        </td>
                        <td>Glorifying Nature ...</td>
                        <td>Nature</td>
                        <td>20.1.2014</td>
                        <td>Published</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/images/test`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form >
                                    <input type="hidden" name="id" value='id' />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
            <Pagination />
        </div>
    );
};

export default ImagesPage;