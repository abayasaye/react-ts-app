const UserService = async ()=>{
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/users")
        .then((response)=>response.json())
        .then((res)=>console.log(res)
        )
    } catch (error) {
        
    }
    finally{

    }
}
export default UserService