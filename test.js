const p = document.querySelector('p');

console.log(navigator.userAgentData.platform);

if(navigator.userAgent=='Android'){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
}else if(!navigator.userAgentData.mobile){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
    console.log(navigator.userAgent);
    location.href = 'https://www.google.com/';
}else if(navigator.userAgent=='iOS'){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
    console.log(navigator.userAgent);
}
