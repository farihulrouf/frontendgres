const token = localStorage.getItem('jwt');
//console.log("data token",token)
if(token==null){
    window.location.href = './index.html'
}
else {
    const jwtPayload = JSON.parse(window.atob(token.split('.')[1]))
    const isExpired = Date.now() >= jwtPayload.exp * 1000;
    if(isExpired){
        window.location.href = './index.html'
    }
    else {
        const user = localStorage.getItem('user');
        const data = JSON.parse(user)
        console.log(data.name)
        str_body = ""
        str_body += `
        ${data.name} 
        `
        $("#namauser").html(str_body)
        //console.log(JSON.parse(user))
    }
}

const logOut = () => {
      
       const jwt = localStorage.removeItem('jwt');
       const user = localStorage.removeItem('user');
    
}
/*
  var jwt = localStorage.getItem("jwt");
  if (jwt != null) {
      window.location.href = './datamaster.html'
  }
  */