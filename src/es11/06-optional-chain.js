const user = {};
//1- Aquí mando a a imprimir propiedades de un objeto que aún no se conoce
//y por lo tanto generará error:
//console.log(user.profile.email); 

//2- Para que no se rompa la app, se hace lo siguiente:
console.log(user?.profile?.email); 

if (user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}