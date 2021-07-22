const accessJWT = () =>{
    const auth = sessionStorage.getItem("accessJWT");
    return auth
};

export default accessJWT;