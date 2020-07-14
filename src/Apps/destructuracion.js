
const user1 = {
    name: 'Yeixon Bastidas',
    username: 'jbastidas',
    country: 'Colombia',
    social: {
        facebook: 'htts://facebook.com',
        twitter: 'https://twitter.com'
    }
}

const saluda = (user) => {
    const { name, social: {twitter} } = user;
    const orden = ['pizza', 'te verde', 'pay', 'tennis', 'camisetas', 'jeans'];
    const [comida, bebida, postre, ...restantes] = orden;
    console.log(`Hola soy ${name} y mi twitter es ${twitter} y  me encanta el ${bebida} y tambien me gustan ${restantes}`);
}

saluda(user1);
