// Class
class user{
    // Private Variable
    #password;

    constructor(name, userName, password){
        // Global or Public Variables
        this.name = name;
        this.userName = userName;
        this.#password = password
    }

    login(userName, password){
        if( userName === this.userName &&  password === this.#password){
            console.log(`Welcome ${this.name}, you have successfully logged-in`)
        }
        else{
            console.log("Authentication failed!!!")
        }
    }

    setPassword(newPassword){
        this.#password = newPassword;
        console.log(`Your new Password is: ${newPassword}`)
    }
}

//objects
const user1 = new user("Afshan", "Afshan_bh","afshanbhutto");
const user2 = new user("Hassan", "Hasaan_ali","hassan123");

// calling login() method
user1.login("Afshan_bh","afshanbhutto") // successful login
user1.login("Afshan","afshanbhutto") //  Authentication Failed

user2.login("Hasaan_ali","hassan123") // successful login
user2.login("Hassan","hassan123") //  Authentication Failed

// calling setPassword() method
user1.setPassword("afshan123"); // password changed
user1.login("Afshan_bh","afshanbhutto"); //  Authentication Failed
user1.login("Afshan_bh", "afshan123")// successful login