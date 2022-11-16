const p = document.querySelector('p');

console.log(navigator.userAgentData.mobile);

if(navigator.userAgentData.mobile){
    location.href='https://www.google.com/';
}else{
    p.textContent = navigator.userAgentData.platform + navigator.userAgent;
    console.log(navigator.userAgent);
}
