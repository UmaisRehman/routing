import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
   <h1>Home</h1>
    <div>

   <Link href={"/users"}><button>users</button></Link>
   <Link href={"/about"}><button>about</button></Link>
   <Link href={"/contact"}><button>contact</button></Link>




   <Link href={"contact/person"}><button>Author</button></Link>

    </div>
    
    
    
    </>
  )
}

export default page