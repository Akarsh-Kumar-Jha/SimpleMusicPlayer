var arr=[
    {songname:"Rama Rama Ratate Ratate",SongCover:"https://img.freepik.com/premium-photo/shree-ram-hindu-god-lord-ram-king-ayodhya_789916-4064.jpg?w=740",url:"./Rama Rama Ratate Ratate    Cover Song By Muzic Mantra  PremBhushan Ji Maharaj  Ram Bhajan.mp3"},
    {songname:"MetaMorphorsis",SongCover:"https://us-tuna-sounds-images.voicemod.net/8af4efbc-0178-483b-92e0-dd168a13bc7a-1673114671161.jpg", url:"./METAMORPHOSIS (Ultra-Slowed  Reverb) (Bass Boosted).mp3"},
    {songname:"Darmiyaan",SongCover:"https://images.hungama.com/c/1/23e/8a8/406607/406607_700x394.jpg", url:"./Darmiyaan ( slowed and reverb )  Nexus Music.mp3"},
    {songname:"Unstopable",SongCover:"https://c.saavncdn.com/936/Unstoppable-English-2015-500x500.jpg", url:"./onlymp3.to - Sia Unstoppable s l o w e d r e v e r b I m unstoppable I m a Porsche with no brakes -IC4eOzgp3G0-192k-1707836035.mp3"},
    {songname:"Khada hu aaj vi whi",SongCover:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/09596085171403.5d73ad3fc1e63.jpg", url:"./onlymp3.to - Khada Hu Aaj Bhi Wahi Slowed Reverb Video Song The Local Train Synctunes-6YUoqa9o7y4-192k-1707836074.mp3"},
    {songname:"Aam Jahe Munde",SongCover:"https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/6016414199135/1605651007/srch_hungama_53443751.jpg", url:"./onlymp3.to - Aam Jahe Munde Slowed Reverb Permish Verma-JKTN-8yAU68-192k-1707836156.mp3"}
]
var audio = new Audio;
var clutter=""
arr.forEach(function(song,index){
clutter +=`<div data-number="${index}" id="list-song">
<div id="list-left">
 <div class="loading">
     <div class="load anim"></div>
     <div class="load"></div>
     <div class="load"></div>
     <div class="load"></div>
   </div>
 <img src="${song.SongCover}" alt="">

</div>
<div id="list-right">
 <h4 data-index="${index}"id="Name">${song.songname}</h4>
</div>
</div>`
})
var play=document.querySelector("#play")
var main_img=document.querySelector("#main-img")
var flag=0;
function main(){
 if(flag==0){
    audio.play()
    play.style.opacity=1;
    play.style.cursor="pointer"
    play.innerHTML= `<span class="material-symbols-outlined">
    pause_circle
    </span>`
    flag=1;
 }
 else{
    audio.pause()
    play.innerHTML=
    `<span class="material-symbols-outlined">
    play_circle
    </span>`
    flag=0;
 }

}
var z;
var currSng = 0;
document.querySelector("#right").innerHTML=clutter
var list=document.querySelectorAll("#list-song");
for(let i=0;i<6;i++){
    list[i].addEventListener("click",function(dets){
            audio.src=arr[dets.target.dataset.number].url
            main_img.src=`${arr[dets.target.dataset.number].SongCover}`
            iflag=1;
            vflag=1;
            currSng=dets.target.dataset.number
            back.style.opacity=1;
            back.style.cursor="pointer"
            next.style.opacity=1;
            next.style.cursor="pointer"
           main()
           z=i;
           applyAnim(i)
        })
       
}
var iflag=0;
play.addEventListener("click",function(){
    if(iflag==0){
        alert('Please Choose a Song To PLay!');
    }
    else{
        main();
    }
   
})
function applyAnim(i){
    var element = document.querySelectorAll(".loading");
    for(let k=0;k<6;k++){
        if(element[k].style.display=="flex"){
            element[k].style.display="none"
        }
    }
      element[i].style.display="flex";
}
var naam=document.querySelectorAll("#Name")
var back;
back= document.querySelector("#back")
    for(let i=0;i<6;i++){
        naam[i].addEventListener("click",function(dets){
            currSng=dets.target.dataset.index;
                audio.src=arr[dets.target.dataset.index].url
                main_img.src=`${arr[dets.target.dataset.index].SongCover}`
                iflag=1;
                vflag=1;
               currSng=dets.target.dataset.number
               back.style.opacity=1;
               back.style.cursor="pointer"
               next.style.opacity=1;
               next.style.cursor="pointer"
               main()
            })
    }
    console.log(next)
    var vflag=0;
function backFord(){
    back.addEventListener("click", function() {
        if(vflag==0){
            alert('Please Choose Any Song To Move BackWard')
        }
        else{
            currSng = (currSng - 1 + 6) % 6;
            audio.src = arr[currSng].url;
            main_img.src = `${arr[currSng].SongCover}`;
            applyAnim(currSng)
            audio.play();
        }
    });
    next.addEventListener("click", function() {
        if(vflag==0){
            alert('Please Choose Any Song To Move ForWard')
        }
        else{
            currSng = (parseInt(currSng) + 1) % 6;
            audio.src = arr[currSng].url;
            main_img.src = `${arr[currSng].SongCover}`;
            applyAnim(currSng)
            audio.play();
        }
    });
}
backFord()
