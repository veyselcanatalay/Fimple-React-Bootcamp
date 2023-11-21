const info = (id) =>{
    return new Promise(async(resolve, reject)=>{
        const {data} = await axios ("https://jsonplaceholder.typicode.com/users/" +id)
        resolve(data)
    })
}

const post = (id) =>{
    return new Promise (async(resolve, reject) =>{
        const {data} = await axios ("https://jsonplaceholder.typicode.com/posts/" + id)
        resolve(data)

    })
}
(async()=>
{
    await info(1)
        .then((data)=> console.log(data))
        .catch((e)=> console.log(e))

    await post(1)
        .then((data)=>console.log(data))
        .catch((e)=>console.log(e))
})()

export default info