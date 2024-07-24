class user{
    current_Year=2024
    call_Age(year){
        return this.current_Year - year;
    }
}
let u1=new user();
let u2=new user();
let age1=u1.call_Age(2003)
console.log(age1)