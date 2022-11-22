const Biodata={

    //properties
    firstname:"Afshan",
    lastname:"bhutto",
    
    sex:"female",
    age:21,
    fullname: function(){
        return this.firstname + " " + this.lastname;
    },

    // nested object
    education:{
        recent:"BE in CSE(2022)",
        intermediate:"Pre-engineering(2018)",
        matric:"General Science(2016)"
    },
    overallEducation:function(){
        return Object.keys(this.education)[0] + ": "+ this.education.recent +" " 
        + Object.keys(this.education)[1] + ": "+ this.education.intermediate +" "
        + Object.keys(this.education)[2] + ": "+ this.education.matric;
    },
    Address:{
        house_no:"12",
        street: "03",
        Block:"A",
        city:"khairpur"
    },
    // method
   
    fullAddress:function(){
        return Object.keys(this.Address)[0] + " "+ this.Address.house_no +" " 
        + Object.keys(this.Address)[1] + " "+ this.Address.street +" "
        + Object.keys(this.Address)[2] + " "+ this.Address.Block + " " 
        + " " + Object.keys(this.Address)[3] +  this.Address.city
    }

};

document.getElementById("fullname").innerHTML = Biodata.fullname();
document.getElementById("address").innerHTML=Biodata.fullAddress();
document.getElementById("education").innerHTML=Biodata.overallEducation();