import React from 'react'
import { useSession , signOut, getSession } from 'next-auth/react'

const Account = () => {
    const { data: session , status } = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                <p>
                    Welcome {session.user.name} {session.user.email} <br/> <br/> 
                    <button onClick={()=> signOut()}>Sign Out</button>  
                </p>
            </div>
        );
    }
    else
    {
        return
        (
            <div>
                <p>
                    You are not signed in.
                </p>
            </div>
        );
    }
};

export default Account


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
        if(!session) {
            return {
                redirect: {
                    destination: '/login'
                }
            }
        }
    return {
        props: {session},
    };
};