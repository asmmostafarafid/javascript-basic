// class Student{
//     constructor(sId,sName){
//         this.sId=sId;
//         this.sName=sName;
//         this.School='Chittagong Govt High school';
//     }
// }
// const Student1=new Student(12, 'Rafid');
// const Student2=new Student(55, 'Arafat');
// const Student3=new Student(22, 'Hakim');
// const Student4=new Student(20, 'Mostafa');

// console.log(Student1.sId,Student1.sName);
// console.log(Student2.sId,Student2.sName);
// console.log(Student3.sId,Student3.sName);



                  //

// function f(phrase) {
//     return class{
//         sayHi() {alert(phrase) }
//     }
// }
// class User extends history('Hello'){}

// new User().sayHi();

                    //  This bind method
        // var obj = {
        //     name: 'Chittagong',

        //     print: function() {
        //         console.log(this);
        //     }
        // }
        // function myObj() {

        //     function inner() {
        //         console.log();
        //     }
        //     inner;
        // }
        // obj.print();

    // var person = {
    //     name: 'ASM Mostafa',
    //     roll: 22,

    //     print: function() {
    //         console.log('Hello '+ this.name,this.roll);
    //     }
    // }
    // person.print();
                            //   var Student= {
                            //       id:22,
                            //       name : 'Rafid',
                            //       Nationality:'Bangladesh',  

                            //       print: function() {
                            //           console.log("Student details: " + this.id,this.name,this.Nationality);
                            //       }
                            //   }
                            //   Student.print();

//    function add(num){
//        return this.value+num; // this.value-num this.value*num this.value/num
//    }
//    var obj={
//        value:10
//    }
//    var obj2={
//        value:50
//    }
//    var binded = add.bind(obj);
//    var result = binded(40);
//    result;

        // function add(num) {
        //     console.log(this);
        //     return this.value+ num;
        // }
        // var obj= {
        //     value:20
        // }
        // var binded = add.bind(obj);
        // var result = binded(100);
        // console.log(result);
 
                        //  function add(num) {
                        //             console.log(this);
                        //             return this.value+ num;
                        //         }
                        //         var obj= {
                        //             value:555
                        //         }
                        //         var binded = add.bind(obj);
                        //         var result = binded(100);
                        //         console.log(result);
       // 2sec por output show korbe 
    
       // var person = {
    //     name:'Rafid',
    //     print: function() {
    //         setTimeout(function(){
    //             console.log('Function Called');
    //         },2000);
    //     }
    // }
        // var person = {
        //     name:'Rafid',

        //     print: function() {
        //         setTimeout (function(){
        //             console.log(this);
        //             console.log('Heloo , '+ this.name);
        //         }.bind(this),2000);
        //     }
        // }


       // json  , faker 

       var fs = require('fs');
       var faker = require('faker');
       var peoples=[];
       for(var i=0; i<10; i++) {
            var people={};
       people.name=faker.name.findName();
       people.email=faker.internet.email();
       people.address= {
           city: faker.address.city(),
           country: faker.address.countery(),
           lat: faker.address.latitude(),
           long: faker.address.longitude()
       };
       peoples.push(people);
     }
    console.log(peoples);
