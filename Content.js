let urlGet=window.location.href;
let convertedUrl = urlGet.toLowerCase();


if(convertedUrl.includes("google")){
    var init = function(){
        const injectFrame = document.createElement('iframe');
        const injectButton = document.createElement('button');
        const lineBreak = document.createElement('br');
        injectButton.innerHTML= "Hover Button";
        injectFrame.innerHTML = urlGet;
        document.body.appendChild(injectButton);
        document.body.appendChild(lineBreak);
        document.body.appendChild(injectFrame);
        
        alert("Inserting the iframe and the button");};
    init();    
}
else{
    alert("not found");
}

 