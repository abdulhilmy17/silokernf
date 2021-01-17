function login() {
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");
    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);

    if(uname.value == "admin" && pass.value == "1234"){
      alert("Selamat Datang")
      window.location = "admin.html"
    }else{
      alert("Email atau Password Salah!!")
    }
  }