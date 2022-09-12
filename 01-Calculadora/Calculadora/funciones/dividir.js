function dividir(a, b){
    if (a == 0 || b == 0){
        if(a != 0){
            var num = a;
        }else if(b != 0){
            var num = b;
        }      
        return `El numero "${num}" No se puede dividir por cero`.red;
    }
    return a / b;
}

module.exports = dividir;
