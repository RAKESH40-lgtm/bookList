import { useState } from "react"
import { Link} from "react-router-dom"
import  styles from "./user.module.css"
const Login=()=>{
    // const navigate = useNavigate();
    const [uName,setuName]=useState('')
    const [password,setPassword]=useState('')
    const [submit,setSubmit]=useState([])
    const userInput=(e)=>{
        let name=e.target.value;
        setuName(name)
    }
    const passworInp=(e)=>{
        let pass=e.target.value
        setPassword(pass)
    }
    const data={
        userName:uName,
        passWord:password
    }
    const submitData=()=>{
        if(uName.trim()!=="" && password.length>=6){
            setSubmit(data)
            // navigate('/bookList')
            
        }else{
            alert("Enter correct one?")
        }
        console.log(data)
    }
    console.log(submit)
    
return(
    <>
        <section>
            <h1 style={{color:"grey",textAlign:"center"}}>Member Login</h1>
            <form onSubmit={submitData}>
               <div className={styles.main}>
                <div className={styles.datafields}>
                    <input type="text" name="uName" id="" value={uName} placeholder="Username" onChange={userInput}/>
                </div>
                <div className={styles.datafields}>
                    <input type="text" name="password" id="" value={password} placeholder="Password" onChange={passworInp}/>
                </div>
                 <div className={styles.submit}>
                    <button>Login</button>
                 </div>
                 </div>
                 <div className={styles.other}>
                    <p style={{color:"red",textAlign:"center"}}>Forget Password?</p>
                    <Link to={"/register"}>
                        <p className={styles.linked}>Register</p>
                    </Link>
                 </div>
            </form>
        </section>
    </>
)
}
export default Login