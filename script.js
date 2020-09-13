const songs=[
    "bensound-epic.mp3",
    "bensound-memories.mp3",
    "bensound-slowmotion.mp3",
    "bensound-summer.mp3",
    "bensound-tomorrow.mp3",
]

const createSongList=()=>{
   const list=document.createElement("ol");
   for(let i=0;i<songs.length;i++)
   {
       const item=document.createElement("li");
       item.appendChild(document.createTextNode(songs[i]));
       list.appendChild(item)
   }
   return list
}

document.getElementById("songlist").appendChild(createSongList());

songlist.onclick = (e)=>{
   console.log(e);
   const clickedItem=e.target
   const source= document.getElementById('source');
   source.src='song/'+clickedItem.innerText;

   player.load();
   player.play();
   document.getElementById("currentlyPlaying").innerText=`Currently Playing  \t ${clickedItem.innerText}`;
}

const playAudio=()=>{
    player.readyState?player.play():""
}
const pauseAudio=()=>{
    player.readyState?player.pause():""
}

const updateProgress=()=>{
    if(player.currentTime>0)
    {
        const progress=document.getElementById("progress");
        progress.value=(player.currentTime / player.duration)*100;
    }
  
}

const slider=document.getElementById("volume-sider");
slider.oninput=(e)=>{
    const value=e.target.value;
    player.volume=value;
}

