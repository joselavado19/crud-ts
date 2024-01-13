const nombre:string ="Jose";
const edad: number =99;
const esMayor:boolean = true;

if(esMayor){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}else{
    console.log("te falta crecer");
}

//interface
interface User {
    name:String;
    lastname :String;
    email:String;
    password:String;
    address?:String;
}

const user: User = {
    name : "Jose",
    lastname :"LAvado",
    email :"jj@hotmail.com",
    password :"123",
    
}

const users : User[] = [];
function insertUser(user: User){
    users.push(user);
}

function getNameFromUser(user: User):String {
    return `${user.name} ${user.lastname}`;
}

interface Task {
    title :String;
    date : Date;
    status :Status;
}
//type
type Status = "created" | "on-hold" | "in-progress" ;

const task : Task = {
    title :"pagar",
    date : new Date(),
    status: "on-hold",
}