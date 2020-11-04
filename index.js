let developer_info = document.getElementById("developer_info").addEventListener("click", () => {
    data = `Hey!Thanks for downloading AND visiting my website\nMy name is Kamran Rasheed.I am a computer scientist in Lahore.
This is a simple validation of form that i have created using Vanilla(pure)JS.
I have pushed the logic(code) of it on Githiub Already!.
Go grab it.N follow me on Github 
\n\t\t\t\t\t\thttps://github.com/Kamran-360\n\t\t\t\t\t\tThanks!😊 N stay Blessed✌`
    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Developer's_Info.txt");
});
let info = "";
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
//Adding event listeners
let subinfo = "";
name.addEventListener("blur", () => {
    let regex = /^([a-z A-Z]){5,45}$/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.remove("is-invalid");
    } else {
        name.value = null;
        str = null;
        // window.alert("Please Enter the correct name")
        name.classList.add("is-invalid");

    }
})

email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
    } else {
        name.value = null;
        str = null;
        // window.alert("Please Enter the correct name")
        email.classList.add("is-invalid");

    }
})
phone.addEventListener("blur", () => {
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    let check = 0;
    if (regex.test(str)) {
        if (check == 0) {
            phone.classList.remove("is-invalid");
        }
    } else {
        name.value = null;
        str = null;
        // window.alert("Please Enter the correct name")
        phone.classList.add("is-invalid");

    }
})
let Address = document.getElementById("Address");
let message = document.getElementById("message");
let language = document.getElementById("language");
//linking small database😊
let submit = document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    let data = `{
        "Name": ${name.value},
        "Email address": ${email.value},
        "Address": ${Address.value},
        "Phone Number": ${phone.value},
        "language":${language.value},
        "Message ": ${message.value}
    }`;
    html = `<label for="textarea"><hr><h1>
    Check Your Inforamtion
    <hr>
   </h1></label>
   <textarea class="form-control" id="textarea" rows="10">Your name is ${name.value}.Your eamil id is ${email.value}.
Your Address is ${Address.value}.We would contact you on (+92)${phone.value}#.Your master language is ${language.value}
& Your message to our team :\n${message.value}.
check Whether its a correct information for the best of your knowledge
   </textarea><h1>Message from KAMI_360 Team:</h1><h3>\nThanks ${name.value}😊 for filling the credentials .Insha Allah see u soon!</h3>`
    if (name.value != 0 && email.value != 0 && Address.value != 0 && phone.value != 0 && language.value != 0 && message.value != 0) {
        let text = document.getElementById("text");
        text.innerHTML = html;
        html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>success!</strong>Your information has been saved successfully!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>`
        let show = document.getElementById("show");
        setTimeout(() => {
            show.innerHTML = html;
        }, 3000);

    }



});