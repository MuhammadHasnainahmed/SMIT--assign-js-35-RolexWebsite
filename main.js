import { client } from "./config.js";
console.log("Initializing Supabase client..." , client);



const { data: { user } } = await client.auth.getUser()

// console.log("Current user:", user);
let accountdropdown = document.querySelector(".account-dropdown");
let fauser = document.querySelector(".fa-user");
let username = document.getElementById("username");
let accounticon = document.querySelector(".account-icon");
let signupbtn = document.querySelector(".signup-btn");
let logoutbtn = document.querySelector("#logout-btn");
if (user) {
  accounticon.style.display = "block";
  username.textContent = user.user_metadata.fullName;
  signupbtn.style.display = "none";
}

logoutbtn.addEventListener("click", async () => {
  
    const { error } = await client.auth.signOut();

    if (error) {
        console.log("Error logging out:", error.message);
        
    }


    window.location.reload();

    

});


fauser.addEventListener("click", () => {
   accountdropdown.style.display = accountdropdown.style.display === "block" ? "none" : "block";

});

