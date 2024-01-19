function pageUp(){
        window.scrollTo(0,0);
}

function toProjects(){
        window.scrollTo(0,1380);
}

function toContact(){
        window.scrollTo(0,2000);
}

function activeIcons(){
        if(document.getElementById("list").style.display=="block"){
                document.getElementById("list").style.display="none";
        }
        else if(document.getElementById("list").style.display="none"){
                document.getElementById("list").style.display="block";
        }
        document.getElementById("list").style.position="absolute";
        document.getElementById("list").style.top="6vmin";
        document.getElementById("list").style.right="0vmin";
        document.getElementById("list").style.textAlign="left";
        document.getElementById("list").style.backgroundColor="rgb(173, 21, 72)";
        document.getElementById("1").style.paddingLeft="0vmin";
        document.getElementById("2").style.paddingLeft="0vmin";
        document.getElementById("3").style.paddingLeft="0vmin";
        document.getElementById("4").style.paddingLeft="0vmin";
        document.getElementById("5").style.paddingLeft="0vmin";
        document.getElementById("list").style.width="30vmin";
        document.getElementById("1").style.marginBottom="3vmin";
        document.getElementById("2").style.marginBottom="3vmin";
        document.getElementById("3").style.marginBottom="3vmin";
        document.getElementById("4").style.marginBottom="3vmin";
        document.getElementById("5").style.marginBottom="3vmin";
        document.getElementById("1").style.marginTop="3vmin";
        document.getElementById("1").style.marginRightRight="3vmin";
        document.getElementById("2").style.paddingLeft="0vmin";
        document.getElementById("3").style.paddingLeft="0vmin";
        document.getElementById("4").style.paddingLeft="0vmin";
        document.getElementById("5").style.paddingLeft="0vmin";
}