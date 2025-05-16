import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email,setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading,setLoading]=useState<boolean>(false)
    const [error , setError] = useState<string>('')
    const navigate = useNavigate()

    const handleSubmit= ()=>{

    }
  return (
    <div style={styles.container} >
      <div style={styles.cardLogin}>
        <div style={styles.sectionFirst}>
          <div style={styles.titleSign}>Sign In</div>
          <div style={styles.alternativeLogin}></div>
          <form onSubmit={handleSubmit} style={styles.formLogin}>
            <input 
              type="email"
              placeholder='email@mail.co.id'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              style={styles.input}
             />
            <input 
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={styles.input}
             />

              {error && <p style={styles.error}>{error}</p>}
              <button type="submit" disabled={loading} style={styles.button}>
                {loading ? "Loading..." : "Login"}
              </button>
          </form>
        </div>
        <div style={styles.sectionSecond}>
          <div style={styles.fontH2}>WELCOME BACK</div>
          <div style={styles.fontLabel1}>To keep conneted with us please 
          login with your personal info</div>
        </div>
      </div>
    </div>
  )
}

const styles : {[key:string]:React.CSSProperties}  ={
  container :{
    width : "100vw",
    height : "100vh",
    backgroundImage: 'url("/assets/background.png")',
    backgroundSize: "cover",           
    backgroundPosition: "center", 
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:'center',
    fontFamily:'monospace',

  },

  cardLogin:{
    width:'1236px',
    height:'700px',
    background:'white',
    borderRadius:'50px',
    display:'flex',
    flexDirection:'row',
  },
  sectionFirst:{
    width :'60%',
    backgroundImage:'url("/assets/login.png")',
    backgroundSize: "cover",           
    borderRadius:'50px',
    alignItems:'center',
    display:'flex',
    flexDirection:'column',
  },
  sectionSecond:{
    height:'100%',
    width:'40%',
    borderRadius:'50px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    color:'#46A2AE',
  },
  fontH2:{
     fontSize:'50px',
  },
  fontLabel1:{
    width:'300px',
    textAlign:'center'
  },
  titleSign:{
    fontSize:'40px',
    color:'#46A2AE',
    marginTop:'30px'
  },

  formLogin:{
    width:'60%',
    height:'70%',
    display:'flex',
    flexDirection:'column',
    gap:'30px',
    // background:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },

  input:{
    width:'85%',
    borderRadius:'25px',
    height:'45px',
    paddingLeft:'20px'
  },

  button:{
    width:'150px',
    height:'60px',
    borderRadius:'40px',
    fontSize:'20px',
    background:'#46A2AE',
    borderColor:'transparent',
    marginTop:'40px'

  },
  alternativeLogin:{
    height:'10%',
    width:'50%',
    // background:'yellow'
  }

}
