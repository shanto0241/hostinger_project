import styles from '@/app/ui/dashboard/images/singleImages/singleImages.module.css'
import Image from 'next/image';
const SingleImagePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill />
                </div>
                John doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="hidden" name="id" value='' />
                    <label>Title</label>
                    <input type="text" name="title" placeholder='title' />
                    <label>Caption</label>
                    <input type="text" name="caption" placeholder='caption' />
                    <label>Album Name</label>
                    <select name="Album name" id="album">
                        <option>Nature</option>
                        <option>Portrait</option>
                        <option>War</option>
                        <option>Street</option>
                        <option>Life</option>
                    </select>
                    <select name='isPublished' id='isPublished'>
                    <option value=''>
                        Is Published?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                </select>

                    <button>Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleImagePage;