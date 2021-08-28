window.onload = function(){
    setTimeout(fillFormInput, 1000)
};

const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";
    localStorage.setItem("email", email);
}
// XMLHTTPREQUEST
// const apiRegister = () => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     const bodyData = {
//         email : email,
//         password : password
//     }
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "https://reqres.in/api/register");
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(bodyData));
//     xhr.onload = function(){
//         console.log(xhr.responseText);
//         let data = JSON.parse(xhr.responseText);
//         if(data.id != "0"){
//             console.log(data);
//             localStorage.setItem("token", data.token);
//         }
//     }
// }

const apiRegister = async() => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
       const bodyData = {
        email : email,
        password : password
    }
    console.log(bodyData);
    console.log(JSON.stringify(bodyData));

    await fetch("https://reqres.in/api/register", {
        method:"POST",
        headers:{
            "Content-Type" : 'application/json'},
        body:  JSON.stringify(bodyData)  
        })
        .then(response =>response.json())
        .then(data =>{
            if(data.id != "0"){
                console.log(data);
                alert("Welcome " + email.split("@")[0]);
                sessionStorage.setItem("token", data.token);

            }
        })
        .catch((e)=> console.log(e))
}

