studentBtn = document.getElementById("btn1");
facultyBtn = document.getElementById("btn2");

studentBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as student?");
    if(ans == true) {
        window.location.replace("http://google.com");
    } else {
        window.location.href = "http://facebook.com";
    }
})

facultyBtn.addEventListener("click", () => {
    let ans = confirm("Do you want to login as faculty?");
    if(ans == true) {
        window.location.replace("http://twitter.com");
    } else {
        window.location.href = "http://instagram.com";
    }
})