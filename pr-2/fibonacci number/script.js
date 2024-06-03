function fibonaci(){
    let n = parseInt(document.getElementById('value').value);
    let msg="",i,n1=0,n2=1,fbc;

    for(i=1;i<=n;i++){
        msg += n1 + ',';
        fbc = n1 + n2;
        n1 = n2;
        n2 = fbc;
    }
    document.getElementById('res').innerHTML = msg;
}