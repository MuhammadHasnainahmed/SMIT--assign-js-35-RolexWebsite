import { client } from "./config.js";
console.log("Initializing Supabase client..." , client);




let emailcomform = document.getElementById("email-comform");
let comformemail = document.getElementById("email");

let resetForm = document.getElementById("resetForm");
let newPassword = document.getElementById("newPassword");
let confirmPassword = document.getElementById("confirmPassword");

if (emailcomform) {
    

emailcomform.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    let email = comformemail.value;

   const { data, error } = await client.auth.resetPasswordForEmail(email, {
//   redirectTo: 'http://127.0.0.1:5501/updatepassword.html',
})




    if (error) {
        console.log("Error sending reset email:", error.message);
        alert("Error sending reset email: " + error.message);
    } else {
        console.log("Reset email sent:", data);
        alert("Reset email sent! Please check your inbox.");
        window.location.href = "updatepassword.html";


    }
    
    comformemail.value = "";
}
);
}

if (resetForm) {

resetForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let newPass = newPassword.value;
     let confirmPass = confirmPassword.value;
      
     if (newPass !== confirmPass) {
        alert("Passwords do not match!");
        return;
        
     }
    const { data, error } = await client.auth.updateUser({
  password: newPass,
})

if (error) {
    console.log('Error updating password:', error.message);
}else{
    console.log('Password updated successfully:', data);
    alert("Password updated successfully! You can now log in with your new password.");
    window.location.href = "login.html";
    
}

   


});
}
