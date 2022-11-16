const p = document.querySelector('p');

console.log(navigator.userAgentData.platform);

if(navigator.userAgentData.platform =='Android'){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
    location.href = 'https://play.google.com/store/games';
}else if(navigator.userAgentData.platform =='windows'){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
    location.href = 'https://www.google.com/';
    console.log(navigator.userAgent);
}else if(navigator.userAgentData.platform =='iOS'){
    p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
    console.log(navigator.userAgent);
}
