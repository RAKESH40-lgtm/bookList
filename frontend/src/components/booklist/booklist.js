import { Link } from 'react-router-dom'
import styles from './booklist.module.css'
const BookList = () => {
    return (
        <>
            <header>
                <h1 style={{ color: "white", textAlign: "center" }}>Books List</h1>
                <div className={styles.btn}>
                    <button className={styles.button}>Log Out</button>
                </div>

            </header>
            <div className={styles.add}>
                <Link to="/addList">
                    <svg width="17" height="17" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12H4"></path>
                        <path d="M12 20V4"></path>
                    </svg>
                    <span>Add New Book</span>
                </Link>
            </div>
        </>
    )
}
export default BookList