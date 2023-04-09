type A = {
    name: string;
    id: string;
}


const a: A = {name: 'ms', id: '1'};

const printA = ():void => {
    const {name, id} = a;
    console.log(name);
    console.log(id);
}

printA();