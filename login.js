import { client } from "./config.js";

console.log("Initializing Supabase client..." , client);


let loginForm = document.getElementById("login-form");
let useremail = document.getElementById("email");
let userpassword = document.getElementById("password");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    let email = useremail.value;
    let password = userpassword.value;


    const { data, error } = await client.auth.signInWithPassword({
  email,
  password
})

if (error) {
    console.log("Login failed:", error.message);
    
}else {
    console.log("Login successful:", data);
    alert("Login successful!");
    window.location.href = "index.html"; 
}
useremail.value = "";
userpassword.value = "";

});
