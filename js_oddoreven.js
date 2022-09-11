function oddoreven(a){
    let total = 0;
    var a_str = a.toString();
    var len = a_str.length;

    for (let i = 0; i < len  ; i+=1){
        let num = a_str[i];
        num = parseInt(num);
        total += num;

    } 


    if (total%2 == 1){
        return "Odd";
    }

    else if (total%2 == 0){
        return "Even";
    }

}
