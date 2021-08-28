const apiRegister = async() => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    await fetch("https://reqres.in/api/users?page=2", {
        method:"GET"
        })
        .then(response =>response.json())
        .then(response =>{
            if(response.data[0].id != "0"){
                for(let i = 0; i<response.data.length; i++){
                    $("#tbodyUserList").append(`
                    <tr>
                            <td>
                            <img src=""/>
                            </td>
                            <td>
                            
                            </td>
                            <td>
                            
                            </td>
                            <td>
                            
                            </td>
                            <td>
                            
                            </td>
                     </tr>`)
                }

            }
        })
        .catch((e)=> console.log(e))
}