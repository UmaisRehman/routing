import Link from 'next/link';
import React from 'react'

const users = async()  => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await data.json();
  console.log(response);
  return (
    <>
    <h1 className='text-center text-2xl'>User</h1>

        <div>

        {response.map(item =>{

          return   <div>
            <h3 key={item.id}>{item.name}</h3>
            <Link href={`/users/${item.id}`}>
            <button>see all datail of this user</button></Link>
          </div>
          
        })}

        </div>

      </>

  )
}

export default users