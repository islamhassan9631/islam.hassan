///// object

var firstName = "tamer"
var lastName = "zain"
var age = 10

var arr = ["tamer", "zain", 10]
// arr[0]

var userInfo = {
    firstName: "tamer",
    lastName: "zain",
    nationality: "egyptian",
    birthYear: 2000,
    ////// function inside object ////////
    getAge: function () {
        return 2021 - this.birthYear
    },
    fullName: function () {
        return this.firstName + " " + this.lastName
    }

}
userInfo.address = "october" // set new property
userInfo.birthYear = 1990 // edit property Value


console.log(userInfo)
// console.log(userInfo.lastName) // get property value
// console.log(userInfo.getAge())
// console.log(userInfo.fullName())

/////////////////// send object to function

var bio = function (obj) {
    console.log(obj.firstName)
    console.log(userInfo.getAge())
}

// bio({
//     firstName : "mai",
//     age : 19
// })
// bio(userInfo)

///////////////////// return object from function

var info = () => {
    return {
        firstName: "nada",
        lastName: "ahmed",
        age: function () {
            return 10
        }
    }
}
// console.log(info())
// console.log(info().firstName)
// console.log(info().age())


////////////////////////////////////////////////

var user = {
    firstName: "zain",
    lastName: "tamer"
}

var user2 = {
    firstName: "omar",
    lastName: "ahmed"
}
var user3 = {
    firstName: "marwa",
    lastName: "mohamed"
}

//// Array Of Objects
var users = [{
    firstName: "zain",
    lastName: "tamer"
},
{
    firstName: "omar",
    lastName: "ahmed"
},
{
    firstName: "marwa",
    lastName: "mohamed"
}
]
users[1].address = "nasr city"

console.log(users)
console.table(users)


users.forEach((item , ind)=>{
    console.log(item)
    if(item.firstName == "zain"){
        item.address = "october"
    }
})

//////////////////////////////////////////////////////////////

// Activate owl carousel Plugin

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // items : 2 ,
        margin : 30 ,
        // autoplay:true ,
        autoplayTimeout : 1000 ,
        nav:true ,
        dots : false ,
        loop : true,
        navText : [ '<i class="fas fa-long-arrow-alt-left"></i>' , '<i class="fas fa-long-arrow-alt-right"></i>' ] ,
        responsive:{
            0:{
                items:1,
                dots : true,
                autoplay : true
            },
            // 500:{
            //     items:3
            // },
            1000:{
                items:2,
                autoplay : false
            }
        }

    });
  });
// -------
