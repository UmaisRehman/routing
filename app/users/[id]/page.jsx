import React from 'react'

const page = async({ params: { id } }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await data.json();
    console.log(response);
    return (
        <>
        <div>your id is {id}</div>

            <h1>Fullname: {response.name}</h1>
            <h1>username: {response.username}</h1>
            <h1>user email: {response.email}</h1>

        </>
    )
}

export default page