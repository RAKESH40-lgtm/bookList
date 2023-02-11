import { Link } from 'react-router-dom'
import style2 from './addbook.module.css'
const AddBook = () => {
    return (
        <>
            <div className={style2.add}>
                <Link to="/bookList">
                    <span>Show Book List</span>
                </Link>
            </div>
            <h1 style={{ textAlign: "center", color: "white", margin: "5rem" }}>Add Book</h1>
            <section className={style2.sec}>
                <form>
                    <div className={style2.form}>
                        <div className={style2.data_fileds}>
                            <input type="text" name="title" id=""
                                placeholder='Title of the book' />
                        </div>
                        <div className={style2.data_fileds}>
                            <input type="text" name="isbn" id=""
                                placeholder='ISBN' />
                        </div>
                        <div className={style2.datafileds}>
                            <input type="text" name="author" id=""
                                placeholder='Author' />
                        </div>
                        <div className={style2.datafileds}>
                            <input type="text" name="desc" id=""
                                placeholder='Describe the book' />
                        </div>
                        <div className={style2.datafileds}>
                            <input type="text" name="pubDate" id=""
                                placeholder='published_date' />
                        </div>
                        <div className={style2.datafileds}>
                            <input type="text" name="publisher" id=""
                                placeholder='Publisher of the book' />
                        </div>
                        <div className={style2.sub}>
                            <button>Submit</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
export default AddBook