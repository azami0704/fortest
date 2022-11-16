const p = document.getElementById('p');

console.log(navigator.userAgentData.platform);

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

