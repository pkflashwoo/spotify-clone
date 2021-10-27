let myProgressBar = document.getElementById('myProgressBar');
    myProgressBar.value=0;
let card = [];
let audioelement = [];
let current=0;
let songs = [{
    songname: "Invincible Pt. II (feat. Sendi Hoxha) ",
    cover: "./musics/cover/invincible-pt-ii-1634814032-uefgaQaLtV.jpg",
    filePath: "./musics/Deaf Kev - Invincible Pt. II (feat. Sendi Hoxha) [NCS Release].mp3",
    text: `Deaf Kev - Invincible Pt. II (feat. Sendi Hoxha) [NCS10 Release]
    Music provided by NoCopyrightSounds`
},
{
    songname: "This Time (ft. CRVN & Molly Ann) [NCS Release]",
    cover: "./musics/cover/this-time-1630411232-M7AjvtkHbk.jpg",
    filePath: "./musics/Diviners, IZECOLD, Tim Beeren - This Time (ft. CRVN & Molly Ann) [NCS Release].mp3",
    text: ` Diviners, IZECOLD, Tim Beeren - This Time (ft. CRVN & Molly Ann) [NCS10 Release]
        Music provided by NoCopyrightSounds`
},
{
    songname: "Halvorsen & Netrum - Phoenix  [NCS Release]",
    cover: "./musics/cover/phoenix-but-its-punk-rock-1634914832-UACyImRudS.jpg",
    filePath: "./musics/Halvorsen & Netrum - Phoenix (But It's Punk Rock) [NCS Release].mp3",
    text: `Halvorsen & Netrum - Phoenix (But It's Punk Rock) [NCS10 Release]
    Music provided by NoCopyrightSounds`
},
{
    songname: "Lost Sky - Vision pt. II (feat. She Is Jules)",
    cover: "./musics/cover/vision-pt-ii-1634893231-hnzcHK0aSw.jpg",
    filePath: "./musics/Lost Sky - Vision pt. II (feat. She Is Jules) [NCS Release].mp3",
    text: `Lost Sky - Vision pt. II (feat. She Is Jules) [NCS10 Release]
    Music provided by NoCopyrightSounds`
},
{
    songname: "Netrum & Halvorsen - Phoenix [NCS Release]",
    cover: "./musics/cover/phoenix-1629450032-e3Y8K6Fqvn.jpg",
    filePath: "./musics/Netrum & Halvorsen - Phoenix [NCS Release].mp3",
    text: `Netrum & Halvorsen - Phoenix [NCS Release]
    Music provided by NoCopyrightSounds`
},
{
    songname: "Time To Talk, Azertion & JJD - Street Lights (Ft. Axollo) [NCS Release]",
    cover: "./musics/cover/street-lights-1633424430-AMDfPmBiA7.jpg",
    filePath: "./musics/Time To Talk, Azertion & JJD - Street Lights (Ft. Axollo) [NCS Release].mp3",
    text: ` Time To Talk, Azertion & JJD - Street Lights (Ft. Axollo) [NCS10 Release]
    Music provided by NoCopyrightSounds`
}


]


for (let index = 0; index < songs.length; index++) {
    card[index] = ` <div class="songItem">
<img class="cover" src=${songs[index].cover} alt="">
<div class="info">
    <strong class="title">
    ${songs[index].songname}
   </strong>
    <p class="attribution">
       ${songs[index].text}
    </p>
</div>
<span id="span${index}" onclick="playpauseCard(${index})">
<i  class="far fa-3x fa-play-circle cardone" id="idplay${index}" ></i>
</span>
</div>`;
    audioelement[index] = new Audio(songs[index].filePath);
    document.getElementById('songs').innerHTML += card[index];

}

//handeled play pause from songItemCards

function playpauseCard(i) {
    current =i;
    let play = `<i  class="far fa-3x fa-play-circle cardone""></i>`;
    let pause = `<i  class="far fa-3x fa-pause-circle cardone " ></i>`;
    let play1 = `<i  class="far fa-2x fa-play-circle""></i>`;
    let pause1 = `<i  class="far fa-2x fa-pause-circle" ></i>`;
    console.log(pause)
    let spanid = "span" + i;

    console.log(i);

    console.log("playing")

    if (!audioelement[i].paused) {
        audioelement[i].pause();
        document.getElementById(spanid).innerHTML = play;
        document.getElementById('playpause').innerHTML = play1;
        document.getElementById('footer-title').innerHTML=songs[i].songname;
        document.getElementById('footer-text').innerHTML=songs[i].text;

    }
    else {

        for (let index = 0; index < audioelement.length; index++) {
            if (index != i) {
                if (audioelement[index].paused || audioelement[index].timestamp <= 0) {
                    audioelement[i].play();
                    document.getElementById(spanid).innerHTML = pause;
                    document.getElementById('playpause').innerHTML = pause1;
                    document.getElementById('footer-title').innerHTML=songs[i].songname;


                }
                else {
                    audioelement[index].pause();
                    document.getElementById("span" + index).innerHTML = play
                    audioelement[i].play();
                    document.getElementById(spanid).innerHTML = pause;
                    document.getElementById('playpause').innerHTML = pause1;
                    document.getElementById('footer-title').innerHTML=songs[i].songname;
                   

                }
            }

        }
    }
    //changing value of seekbaar

    myProgressBar.value=0;
    audioelement[i].addEventListener('timeupdate', () => {
        console.log("updating time");
        progress = parseInt((audioelement[i].currentTime / audioelement[i].duration) * 100);
        myProgressBar.value = progress;
    })
    //changing time through seekbaar
    myProgressBar.addEventListener('change', () => {
        audioelement[i].currentTime = myProgressBar.value * audioelement[i].duration / 100;
    })


}

function playPausePlayer() {
    let play = `<i  class="far fa-3x fa-play-circle cardone "></i>`;
    let pause = `<i  class="far fa-3x fa-pause-circle cardone" ></i>`;
    let play1 = `<i  class="far fa-2x fa-play-circle"></i>`;
    let pause1 = `<i  class="far fa-2x fa-pause-circle" ></i>`;

    console.log(pause)
    
    let progress = 0;
    for (let index = 0; index < audioelement.length; index++) {
        if (!audioelement[index].paused) {
            current = index;
        }

    }
    let spanid = "span" + current;

    if (audioelement[current].paused) {
        audioelement[current].play();
        document.getElementById(spanid).innerHTML = pause;
        document.getElementById('playpause').innerHTML = pause1;

    }
    else {
        audioelement[current].pause();
        document.getElementById(spanid).innerHTML = play;
        document.getElementById('playpause').innerHTML = play1;
    }
    myProgressBar.value=0;
    //changing value of seekbaar
    audioelement[current].addEventListener('timeupdate', () => {
        progress = ((audioelement[current].currentTime / audioelement[current].duration) * 100);
        myProgressBar.value = progress;
    })
    //changing time through seekbaar
    myProgressBar.addEventListener('change', () => {
        audioelement[current].currentTime = myProgressBar.value * audioelement[current].duration / 100;
    })





}

function forward() {
    let play = `<i  class="far fa-3x fa-play-circle cardone""></i>`;
    let pause = `<i  class="far fa-3x fa-pause-circle cardone" ></i>`;
    
    for (let index = 0; index < audioelement.length; index++) {
        if (!audioelement[index].paused) {
            current = index;
        }

    }
    if (current === audioelement.length - 1) {
        current = 0;
        audioelement[audioelement.length - 1].pause();
        document.getElementById("span"+(audioelement.length - 1)).innerHTML=play;
        audioelement[current].play();
        document.getElementById('footer-title').innerHTML=songs[current].songname;
        document.getElementById("span"+current).innerHTML=pause
    }
    else {

        current += 1;
        audioelement[current - 1].pause();
        document.getElementById("span"+(current-1)).innerHTML=play;
        audioelement[current].play();
        document.getElementById('footer-title').innerHTML=songs[current].songname;
        document.getElementById("span"+current).innerHTML=pause;
    }

}
function backward() {
    let play = `<i  class="far fa-3x fa-play-circle cardone"></i>`;
    let pause = `<i  class="far fa-3x fa-pause-circle cardone" ></i>`;
   
    for (let index = 0; index < audioelement.length; index++) {
        if (!audioelement[index].paused) {
            current = index;
        }

    }
    if (current > 0) {
        current -= 1;
        audioelement[current + 1].pause();
        document.getElementById("span"+(current+1)).innerHTML=play;
        audioelement[current].play();
        document.getElementById('footer-title').innerHTML=songs[current].songname;
        document.getElementById()
        document.getElementById("span"+(current)).innerHTML=pause;
    }
    else {
        current = audioelement.length - 1;
        audioelement[0].pause();
        document.getElementById("span"+0).innerHTML=play;
        audioelement[current].play();
        document.getElementById('footer-title').innerHTML=songs[current].songname;
        document.getElementById("span"+current).innerHTML=pause;
    }

}