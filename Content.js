let urlGet=window.location.href;
let convertedUrl = urlGet.toLowerCase();


if(convertedUrl.includes("iframe")){
    var init = function(){
        const injectFrame = document.createElement('iframe');
        const injectButton = document.createElement('button');
        
        injectButton.innerHTML= "Hover Button";
        injectFrame.innerHTML = urlGet;
        document.body.appendChild(injectButton);
        
        document.body.appendChild(injectFrame);
        
        alert("Inserting the iframe and the button");
        alert("the url is" + urlGet);
    };
    init();    
}
else{
    alert("not found");
}

 
