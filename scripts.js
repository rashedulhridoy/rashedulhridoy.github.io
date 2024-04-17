
    const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "dashboard.html"
    }else{
        alert("Wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "Argon 03" && password === "69"){
        return true
    }else{
        return false
    }
}
