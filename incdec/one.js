class user {
    constructor(name , email) {
        this.name = name
        this.email = email
    }
    
    viewdata(){
        console.log("you're viewing the data");
        
    }
}

let Obj = new user("Azan" , "azan@gmail.com")
console.log(Obj);
console.log(Obj.viewdata());

class admin extends user{
    constructor(name,email,status){
        super(name,email);
        this.status = status;
        
    }
    editdata(){
        console.log("some changes edit");
    }

}
let ad = new admin("Saad" , "saad@gmail.com", 'employed')
console.log(ad);