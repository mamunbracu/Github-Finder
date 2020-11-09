//https://api.github.com/users/

// const { UI } = require("winjs");

let searchUser = document.querySelector('#searchUser');
let searchBtn = document.querySelector('#search-btn');
let ui = new UI();

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            //show alert
            if(data.message == 'Not Found'){
               ui.showAlert("User Not found", "alert alert-danger bg-danger text-white");
            }else{
                //show profile
                ui.showProfile(data);
                
            }
        })
    } else{
        //clear profile
        ui.clearProfile()
    }
})
