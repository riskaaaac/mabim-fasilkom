function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Riska" && password =="Alfianwar"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/riskaaaac"
            } else {
                alert("Login dibatalkan !");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 
