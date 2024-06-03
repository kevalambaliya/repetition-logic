function prime(){
    let num = parseInt(document.getElementById('num').value);
    let string =" ", count =" ",i,j;
    for(i=1; i<num; i++){
        count = 0;
        for(j=1 ; j < num; j++){
            if(i % j ==0){
                count++;
            }
        }
        if(count == 2){
            string += i + " ";
        }
    }
    document.getElementById('res').innerHTML = string;
}