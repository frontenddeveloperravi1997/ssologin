import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../asset/styles.css'

const Login = () => {
    const {data: session} = useSession()
    console.log(session);
   if(session)
   {
        return(
            <div className="center-item">
                <h3 className="login-title">Welcome , { session.user.name } </h3>
                <h3 className="login-title">{session.user.email}</h3> 
                <button className="button button2" onClick={()=> signOut()}>Sign Out</button>                  
            </div>  
        )
   }
   else
   {
        return(
            <div className="center-item">
                <h3 className="login-title">You are not signed in</h3>
                <button  className="button button2" onClick={ ()=> signIn() }>Sign In</button>
            </div>
        )
   }
}

export default Login