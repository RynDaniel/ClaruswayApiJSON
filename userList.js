const tbody = document.getElementById("tbodyUserList");
window.onload = () => {
    getApiUserList();
    setInterval(getApiUserList, 5000);
}
const getApiUserList = async (pageNo) => {
    tbody.innerHTML = "";
    showLoading();
    // const responseData = await axios({
    //     url: "https://reqres.in/api/users?page=1",
    //     method: "get"
    // });

        const responseData = await axios.get("https://reqres.in/api/users?page=1");

    // console.log(responseData.data.data);
    if (responseData.data.data[0].id == undefined) {
        alert("userlist not found!");
        removeLoading();
    }
    else {
        for (let i = 0; i < responseData.data.data.length; i++) {
            tbody.innerHTML += ` <tr>
            <td>
            <img src="${responseData.data.data[i].avatar}"/>
            </td>
            <td>
            ${responseData.data.data[i].id}
            </td>
            <td>
            ${responseData.data.data[i].email}
            </td>
            <td>
            ${responseData.data.data[i].first_name}
            </td>
            <td>
            ${responseData.data.data[i].last_name}
            </td>
     </tr>`;
            removeLoading()
        }
    }
}
