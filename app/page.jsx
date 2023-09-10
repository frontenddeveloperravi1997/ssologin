import Link from 'next/link'
import Image from 'next/image'
import mypic from '../asset/ssologin.png'
import styles from '../asset/styles.css'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 center-item">
         <Link href="/login">
         <Image
            src={mypic}
            alt="Picture of the author"
            width="350px"
            height="300px"
          />
         </Link>
    </main>
  ) 
}