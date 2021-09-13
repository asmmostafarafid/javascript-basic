
                   // Inner Function 
// function add (a, b){

//     function sum(){
//         return a+b;
//     }
//     function sub(){
//         return a-b;
//     }
//     function times()
//         return a*b;
//     }
//     function div(){
//         return a/b;
//     }
//     return sum() + sub() + times() + div();
// }

// var result = add(10, 5);
// console.log(result);

        // Callback Function 

    // var me ={
    //     name: 'Rafid',
    //     age: 22,
    //     email:'rafid@gmail.com'
    // }
    // function printSelf(person, Callback){
    //     console.log('person : '+ person.name + '(' + person.age + ')');
    //     if(person.age >= 18){
    //         Callback(person.age);
    //     }else{
    //         console.log('You are too little.......');
    //     }
    // }
    // printSelf(me, function(age){
    //     console.log('email sent to ' + age);
    // });

        // function print(data,Callback1,Callback2){
        //     console.log('Original data :  '+data);
        //     Callback1(data);
        //     Callback2(data);
        // }
        // print('Thid id the beginer ',function(data){
        //     var data = data.toUpperCase();
        //     console.log('UpperCase : ' +data);

        // }, function(data){
        //     var data=data.toLowerCase();
        //     console.log('LowerCase: '+data);
        //     console.log('Length: '+data.length);
        // });
        

            //Return Function  
    // function greetings(msg){
    //     return function(name){
    //         console.log(msg +' ' + name);
    //     }
    // }
    // var good = greetings("Good Afternoon !!!!!!!!");
    // var hello = greetings("Hello ");

    // good('Rafid');
    // hello('Rafid');

       // Return function 

//     function greetings(msg){
//         return function(name){
//             console.log('How are You ??? ');
           
//     }
// }
//     var good = greetings('How are Yiu ?');
//     var hello = greetings('What are you doing ?? ');

//     hello('Rafid');
//     good('Mostafa');

    // Object Create
var book={
    name: 'Functional Javascript',
    author: 'Hm Books',
    published: 2010,
    page:250,
    print:function(){
        console.log(this.name,this.author,this.page);
    }
}
book.publisherYear=2013;

book['price']=20000;




    
    


