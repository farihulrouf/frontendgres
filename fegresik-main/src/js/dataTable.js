
function ambilData() {
    console.log("tester")
}
async function getData() {
    const record = await fetch('https://dummyjson.com/users')
    const data = records.json();
    let tab=''
    data.users.forEach(function(user) {
        tab += `<tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
            <td>${user.email}</td>
        </tr>`
    })
    document.getElementById('#tbody').innerHTML = tab;
    $('#userTable').DataTable({
        "data": data.users,
        "columns": [
            {"data" : 'firstName'},
            {"data" : 'lasttName'},
            {"data" : 'age'},
            {"data" : 'gender'},
            {"data" : 'email'},
            
        ]
    })
}

