let audioElement = new Audio('songs/1.mp3');
let index=0;
let masterplay= document.querySelector("#masterplay");
let progressbar = document.querySelector("#progressbar");
let songitem=document.querySelectorAll("#box");
let songs=[
    {
    filepath: "songs/1.mp3",
    coverpath: "image/1.jpg",
    },
    {
    filepath: "songs/2.mp3",
    coverpath: "image/2.jpg",
    },
    {
    filepath: "songs/3.mp3",
    coverpath: "image/3.jpg",
    },
    {
    filepath: "songs/4.mp3",
    coverpath: "image/4.jpg",
    },
    {
    filepath: "songs/5.mp3",
    coverpath: "image/5.jpg",
    },      
    {
    filepath: "songs/6.mp3",
    coverpath: "image/6.jpg",
    },      
    {
    filepath: "songs/7.mp3",
    coverpath: "image/7.jpg",
    },          
    {
    filepath: "songs/8.mp3",
    coverpath: "image/8.jpg",
    },      
    {
    filepath: "songs/9.mp3",
    coverpath: "image/9.jpg",
    },      
    {
    filepath: "songs/10.mp3",
    coverpath: "image/10.jpg",
    },      
    {
    filepath: "songs/11.mp3",
    coverpath: "image/11.jpg",
    },      
    {
    filepath: "songs/12.mp3",
    coverpath: "image/12.jpg",
    },      
]
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused  || audioElement.currentTime<=0)
    {
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    }

})


audioElement.addEventListener('timeupdate', ()=>
{

progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
progressbar.value= progress;
})

progressbar.addEventListener('change', ()=>
{
    audioElement.currentTime= progressbar.value*audioElement.duration/100;
})
const makeallplays=()=>
{
    document.querySelectorAll(".songitemplay").forEach((Element)=>
    {
Element.classList.remove('fa-pause-circle');
Element. classList.add('fa-play-circle');
    })
}

document.querySelectorAll(".songitemplay").forEach((Element)=>
{
    Element.addEventListener('click',()=>
    {
        makeallplays() ;
        index=parseInt(Element.id);                       
       Element.classList.remove('fa-play-circle');
       Element.classList.add('fa-pause-circle');
       audioElement.src=`songs/${index}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
    })
})
document.querySelector("#forward").addEventListener('click',()=>
{
    if(index>=12)
    {
        index=1;
    }
    else{
        index++;
    }
    
    audioElement.currentTime=0;
    audioElement.src=`songs/${index}.mp3`;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
})

document.querySelector("#backward").addEventListener('click',()=>
{
    if(index<=1)
    {
        index=1;
    }
    else{
        index--;
    }
    
    audioElement.currentTime=0;
    audioElement.src=`songs/${index}.mp3`;
       audioElement.play();
       masterplay.classList.remove('fa-play-circle');
       masterplay.classList.add('fa-pause-circle');
})
