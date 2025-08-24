export const loginUser = async (email,pw) => {
    const response = await fetch("http://localhost:8000/auth/login",{
        method: "POST",
        body: JSON.stringify({
            username: email,
            password: pw
        }),
        headers:{
            "Content-Type": "application/json"
        }
    });
    
    if (!response.ok){
        throw new Error("Error al iniciar sesion")
    }

    const {accessToken} = await response.json()

    return accessToken


    }