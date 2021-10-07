"use strict";

const id = document.querySelector("#id"),
    names = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#comfirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디가 입력되지 않았습니다.");
    if(password.value !== confirmPassword.value) return alert('비밀번호가 서로 일치하지 않습니다.');
    const req = {
        id : id.value,
        names: names.value,
        password : password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href="/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}