
    // arrow function pointouts/bind its parents 'this' rather than its own

    let obj1 = {
        greeting:"Good Morning ",
        names: ["Afshan", "Rabia", "Samia", "Asad"],
        speak(){
            let greeting ="morning"
            this.names.forEach((student)=>{
                console.log(this.greeting+" Obedient "+ student);
            });
        }
    }

    obj1.speak();

