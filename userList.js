const apiRegister = async() => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    await fetch("https://reqres.in/api/users?page=2", {
        method:"GET"
        })
        .then(response =>response.json())
        .then(response =>{
            if(response.data[0].id != "0"){
                console.log(data);
                alert("Welcome " + email.split("@")[0]);
                sessionStorage.setItem("token", data.token);

            }
        })
        .catch((e)=> console.log(e))
}