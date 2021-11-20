const loading = document.getElementById("loading");
const submitBtn = document.getElementById("submit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

window.onload = () => {
    setTimeout(fillFormInput, 500);
}

const showLoading = () => {
    loading.style.display = "block";
}

const removeLoading = () => {
    loading.style.display = "none";
}

const fillFormInput = () => {
    email.value = "eve.holt@reqres.in";
    password.value = "pistol";
    localStorage.setItem("email", EncryptStringAES(email.value));
    localStorage.setItem("password", EncryptStringAES(password.value));
}

submitBtn.addEventListener("click", (e) => {
    // e.preventDefault();
    // console.log("clicked");
    apiRegister();
});

const apiRegister = async () => {
    const bodyData = {
        email: email.value,
        password: password.value
    }
    showLoading();
    const response = await axios({
        url: "https://reqres.in/api/register",
        data: bodyData,
        method: "post"
    })
        .then(response => response.data)
        .catch(error => {
            alert(error);
            removeLoading();
        });

    if (response.token == undefined) {
        alert("Undefined " + response.error);
        removeLoading();
    }
    else {
        removeLoading();
        localStorage.setItem("tokenKey", response.token);
        localStorage.setItem("tokenKeyEncrypted", EncryptStringAES(response.token));
        removeLoading();
        window.location.href = "userList.html";
    }
}

// const apiRegister = async () => {
//     const bodyData = {
//         email : email.value,
//         password : password.value
//     }
//     console.log(bodyData);
//     console.log(JSON.stringify(bodyData));
//     showLoading();
//     fetch("https://reqres.in/api/register", {
//         method : "POST",
//         body : JSON.stringify(bodyData),
//         headers : {"Content-Type": "application/json"}
//     })
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//         console.log(jsonResponse);
//         console.log(jsonResponse.token);
//         if (jsonResponse.token == undefined) {
//             alert(jsonResponse.error);
//             removeLoading();
//         }
//         else{
//             removeLoading();
//             localStorage.setItem("tokenKey", jsonResponse.token);
//             localStorage.setItem("tokenKeyEncrypted", EncryptStringAES(jsonResponse.token));
//             // window.location.href = "userList.html";
//         }
//     })
//     .catch((error)=>{
//         alert(error);
//         removeLoading();
//     })
// }






