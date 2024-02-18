interface User{
    username: string;
    age: number;
    admin?: boolean
}

function userInfo(user:User):void{
    console.log(`This is the user name ${user.username}`)
    console.log(`This is the user age ${user.age}`)
}