import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
const UsersPage =async () => {
    const users: any = await fetchUsers()
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for an user" />
                <Link href='/dashboard/users/add'>
                    <button className={styles.addbutton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user:any) => (
                    <tr key = {user.id}>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={ user.profileImage || '/noavatar.png'} 
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                {users.username}
                            </div>
                        </td>
                        <td>{user.username}</td>
                        <td>20.1.2014</td>
                        <td>admin</td>
                        <td>active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/test`}>
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
                ))}
                </tbody>

            </table>
            <Pagination/>
        </div>
    );
};

export default UsersPage;