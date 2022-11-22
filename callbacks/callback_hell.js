// callback hell


// Task
// task 1. getting roll number after 2s
// task 2. provinding particular roll number and again getting its name and age after 2s
// task 3. after 2s getting the gender of that rollnumber


const getRollNumbers = () =>{

    //1st task done
    setTimeout(()=>{
        console.log("Hey I am a 1st callback Function");

        let rollnumbers = [2,4,6,8,10,12,14,16,18,20]
        console.log(`Rollnumbers: ${rollnumbers}`);

        //2nd task done
        setTimeout((roll_num)=>{
            const biodata ={
                name:"Afshan",
                age: 22,
                gender:"Female"
            };
            console.log("Hey I am a 2nd callback Function");
            console.log(`Hey, my rollnumber is ${roll_num}.I am ${biodata.name} and I am ${biodata.age} years old!`);

            // 3rd task
            setTimeout((name)=>{
                biodata.gender = "Female"
                console.log("Hey I am a 3rd callback Function");
                console.log(`Hey, my rollnumber is ${roll_num}. I am ${name} and I am ${biodata.age} years old, and my gender is ${biodata.gender}`);
            },2000, biodata.name)
            
        }, 2000, rollnumbers[5])

    }, 2000);
}

getRollNumbers()
