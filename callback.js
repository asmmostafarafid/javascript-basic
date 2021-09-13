function explain_callback(name, age, task){
    console.log('Hello ,', name);
    console.log('Your age :', age);
    task();
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}
function scrollFacebook(){
    console.log('Only for scrll facebook but dont like any post');
}
explain_callback('jugir',17 , washHand);
explain_callback('kamal',18, takeShower);
explain_callback('rafid',24, takeShower);
explain_callback('nur', 22, scrollFacebook);