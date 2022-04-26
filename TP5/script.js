const container = document.querySelector('.container');
const notifications = document.getElementById('notifications');
const buttons = document.querySelectorAll("button");
const notifdiv = document.querySelector(".mes_notif")

// const divNotification = document.createElement('div');
const divNotification1 = document.createElement('div');
const divNotification2 = document.createElement('div');
const divNotification3 = document.createElement('div');
const divNotification4 = document.createElement('div');

divNotification1.setAttribute("class","notificationSuccess");
divNotification2.setAttribute("class","notificationDanger");
divNotification3.setAttribute("class","notificationWarning");
divNotification4.setAttribute("class","notificationInfo");

const title = document.createElement('h1');

for (let i = 0; i< buttons.length; i++){

    buttons[i].addEventListener('click',()=>{
        let divNotif;
        const message="Mon Projet 5";
        if (i==0){
            divNotif=divNotification1
        } 

        if (i==1){
            container.appendChild(divNotification2)
            divNotification2.appendChild(title); 
            title.innerHTML =`Mon Projet 5`;
        }  
        if (i==2){
            container.appendChild(divNotification3)
            divNotification3.appendChild(title); 
            title.innerHTML =`Mon Projet 5`;
        }  
        if (i==3){
            container.appendChild(divNotification4)
            divNotification4.appendChild(title); 
            title.innerHTML =`Mon Projet 5`;
            
        } 
        container.appendChild(divNotif);    
        divNotification1.appendChild(title); 
        title.innerHTML =message ;


        setTimeout(() => {
        divNotification1.remove();
        divNotification2.remove();
        divNotification3.remove();
        divNotification4.remove();
    
        }, 1000);
    })
}



