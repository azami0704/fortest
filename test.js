const p = document.querySelector('p');

console.log(navigator.userAgentData.mobile);

if(navigator.userAgentData.mobile){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent;
    console.log(navigator.userAgent);
}else{
    p.textContent = navigator.userAgentData.platform + navigator.userAgent;
    console.log(navigator.userAgent);
}
