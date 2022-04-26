const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const modal = document.getElementById('modal');
// const content = document.getElementById('content');




fetch(APIURL).then(res => res.json()).then(data=>{

    // console.log(data.results);
    data.results.forEach(element => {
        var content = document.createElement('div');
        content.classList.add("content")
        var image=IMGPATH+element.poster_path;
        var images=document.createElement('img');
        var modalInfo = document.createElement('div');
        var titre = document.createElement('h3');
        var titreoverview = document.createElement('h3');
        var span = document.createElement('span');
        var describe = document.createElement('div');
        var p = document.createElement('p');

        modal.className="modal";
        content.className="content";
        span.className="";
        
        modalInfo.className="modal-info";
        describe.className="describe";
        // createModal(content);
        titre.innerHTML=element.title;
        titreoverview.innerHTML=`Overview:`; 
        span.innerHTML=element.vote_average;
        // console.log(element.vote_average);
        p.innerHTML=element.overview;

        //note-Color

        // noteColor(vote_average);
        if (element.vote_average >= 8){
            span.className='green';
        } else if(element.vote_average >= 5){
            span.className='orange';
        }else{
            span.className='red';
        }

        var images=document.createElement('img');
        var image=IMGPATH+element.poster_path;
        images.src=image;


        modal.appendChild(content);
        content.append(images,modalInfo,describe);
        modalInfo.append(titre,span);
        content.appendChild(describe);
        describe.append(titreoverview,p);

    });
});
/*---------------------Note-Color----------------------------*/

// function noteColor(note) {
//     var classNote=span.className
//     if (note >= 8) {
//         classNote='green';
//         // return 'green';
//     } else if(note >= 5){
//         classNote='orange';
//         // return 'orange';
//     }else{
//         classNote='red';
//         // return 'red';
//     }
//     return classNote;
// }

/*-------------------------------function-Create-Modal-------------------------------------*/

// function createModal(div) {
//     var div = document.createElement('div');
//     div.classList.add("div");
//     // var image=IMGPATH+element.poster_path;
//     var images=document.createElement('img');
//     var modalInfo = document.createElement('div');
//     var titre = document.createElement('h3');
//     var titreoverview = document.createElement('h3');
//     var span = document.createElement('span');
//     var describe = document.createElement('div');

//     modal.className="modal";
//     span.className="green";
//     modalInfo.className="modal-info";
//     describe.className="describe";

//     describe.appendChild(titreoverview);
//     modal.appendChild(div);
//     div.append(images,modalInfo,describe);
//     // div.appendChild(modalInfo);
//     modalInfo.append(titre,span);

//     return div;
// }


