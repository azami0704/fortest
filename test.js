const p = document.getElementById('p');

// console.log(navigator.userAgentData.platform);

// if(navigator.userAgentData.mobile){
//     p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
// }else if(navigator.userAgentData.platform =='Windows'){
//     p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
//     console.log(navigator.userAgent);
// }else if(navigator.userAgentData.platform =='iOS'){
//     p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
//     console.log(navigator.userAgent);
// }else{
//     p.textContent = navigator.userAgentData.platform + navigator.userAgent + navigator.userAgentData.mobile;
// }


p.textContent = navigator.userAgent;

if(navigator.userAgent.toLowerCase().includes("android")){
    // p.textContent = navigator.userAgent + 'OK';
    location.href = 'https://play.google.com/store/games';
}else if(navigator.userAgent.toLowerCase().includes("iphone")){
    location.href = 'https://www.apple.com/tw/app-store/';
}else{
    p.textContent = navigator.userAgent + 'NOTMATCH';
}

