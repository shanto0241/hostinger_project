import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'
const AddUsersPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type='text' placeholder='username' name='username' required />
                <input type='email' placeholder='email' name='email' required />
                <input type='password' placeholder='password' name='password' required />
                <input type='phone' placeholder='phone' name='phone' />
                <select name='isAdmin' id='isAdmin'>
                    <option value=''>
                        Is Admin?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <select name='isActive' id='isActive'>
                    <option value=''>
                        Is Active?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    placeholder="Address"
                ></textarea>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default AddUsersPage;