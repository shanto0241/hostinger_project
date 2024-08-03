import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image';

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src= "/noavatar.png" alt="" fill />
                </div>
                John doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="hidden" name="id" value='' />
                    <label>Username</label>
                    <input type="text" name="username" placeholder='username' />
                    <label>Email</label>
                    <input type="email" name="email" placeholder='email' />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder='phone' />
                    <label>Address</label>
                    <input type="text" name="address" placeholder='address' />

                    <label>Is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option >Yes</option>
                        <option >No</option>
                    </select>
                    <label>Is Active?</label>
                    <select name="isActive" id="isActive">
                        <option >Yes</option>
                        <option >No</option>
                    </select>
                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;