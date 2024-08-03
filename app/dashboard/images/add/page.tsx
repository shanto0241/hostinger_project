import styles from '@/app/ui/dashboard/images/addImage/addImage.module.css'
const AddImagesPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>

                <input type='text' placeholder='Image URL' name='imgUrl' required />
                <input type='text' placeholder='title' name='title' required />
                <input type='text' placeholder='caption' name='caption' required />
                <select name='album' id='album'>
                    <option value=''>
                        Album Name
                    </option>
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
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default AddImagesPage;