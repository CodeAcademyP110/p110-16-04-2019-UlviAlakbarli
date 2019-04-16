"use strict"
let folderArea=document.querySelector(".folderArea");
let contextMenu=document.querySelector(".contextMenu");
let input=document.querySelector(".input");

folderArea.oncontextmenu=function(e){
   e.preventDefault();
   let left=e.clientX+"px";
   let top=e.clientY+"px";
   contextMenu.style.top=top;
   contextMenu.style.left=left;
   contextMenu.classList.add("d-block");
   contextMenu.classList.remove("d-none");
   
};
folderArea.onclick=function(){
    contextMenu.classList.add("d-none");
    contextMenu.classList.remove("d-block");
}
contextMenu.onclick=function(){
    contextMenu.classList.add("d-none");
    contextMenu.classList.remove("d-block"); 
    document.querySelector(".overlay").classList.add("d-flex")   

}
document.querySelector(".far.fa-window-close").onclick=function(){
    document.querySelector(".overlay").classList.remove("d-flex")
    document.querySelector(".overlay").classList.add("d-none")
}
document.querySelector(".cancel").onclick=function(){
    document.querySelector(".overlay").classList.remove("d-flex")
    document.querySelector(".overlay").classList.add("d-none")
}
document.querySelector(".create").onclick=function(){
    if(input.value.trim().length>0){
        document.querySelector(".overlay").classList.remove("d-flex")
        document.querySelector(".overlay").classList.add("d-none")   
    let folder=document.createElement("div");
    let ficon=document.createElement("i");
    let fname=document.createElement("p");
    fname.innerText=input.value.trim();
     folder.classList.add("folder");
     ficon.classList.add("fas");
     ficon.classList.add("fa-folder");
     
     folder.appendChild(ficon);
     folder.appendChild(fname);
     folderArea.appendChild(folder);
     folder.oncontextmenu=function(e){
         e.default();
     }
     
     
    }

}

input.onkeyup=function(e){
    if(e.keyCode==13){
        if(input.value.trim().length>0){
            document.querySelector(".overlay").classList.remove("d-flex")
            document.querySelector(".overlay").classList.add("d-none")   
        let folder=document.createElement("div");
        let ficon=document.createElement("i");
        let fname=document.createElement("p");
        fname.innerText=input.value.trim();
         folder.classList.add("folder");
         ficon.classList.add("fas");
         ficon.classList.add("fa-folder");
         
         folder.appendChild(ficon);
         folder.appendChild(fname);
         folderArea.appendChild(folder);
         folder.oncontextmenu=function(e){
             e.default();
         }
         
         
        }
    }

}
