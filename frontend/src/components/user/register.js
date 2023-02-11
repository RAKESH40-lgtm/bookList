import { Link } from "react-router-dom"
import styles from './user.module.css'
const Register=()=>{
return(
    <section>
    <h1 style={{color:"grey",textAlign:"center"}}>Register</h1>
    <form>
       <div className={styles.main}>
        <div className={styles.datafields}>
            <input type="text" name="uName" id="" placeholder="Username" />
        </div>
        <div className={styles.datafields}>
            <input type="text" name="pwd" id="" placeholder="Password" />
        </div>
        <div className={styles.datafields}>
            <input type="text" name="conpwd" id="" placeholder="confirm Password" />
        </div>
         <div className={styles.submit}>
            <button>Register</button>
         </div>
         </div>
         <div className={styles.other}>
            <Link to={"/"}>
                <p className={styles.linked}>Logined Member</p>
            </Link>
         </div>
    </form>
</section>
)
}
export default Register