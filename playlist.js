const music = new Audio('after-hours.mp3');

const songs = [
    {
        id:'1',
        songName:` After Hours
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/1.jpg"
    },
    {
        id:'2',
        songName:` Party Monster
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/2.jpg"
    },
    {
        id:'3',
        songName:` Thai Freestyle
        <div class="subtitle">HELLMERRY and Tu$ Brother$</div>`,
        poster: "album/3.jpg"
    },
    {
        id:'4',
        songName:` SMD
        <div class="subtitle">O Side Mafia ft. Paul N Ballin</div>`,
        poster: "album/4.jpg"
    },
    {
        id:'5',
        songName:` Umaasa
        <div class="subtitle">Calein</div>`,
        poster: "album/5.jpg"
    },
    {
        id:'6',
        songName:` Heaven Can Wait
        <div class="subtitle">Michael Jackson</div>`,
        poster: "album/6.jpg"
    },
    {
        id:'7',
        songName:` Drugs in tha Club
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/7.jpg"
    },
    {
        id:'8',
        songName:` Save Your Tears
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/8.jpg"
    },
    {
        id:'9',
        songName:` Die For You
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/9.jpg"
    },
    {
        id:'10',
        songName:` Peaches and Eggplants
        <div class="subtitle">Young Nudy ft. 21 Savage</div>`,
        poster: "album/10.jpg"
    },
    {
        id:'11',
        songName:` That's What I Want
        <div class="subtitle">Lil Nas X</div>`,
        poster: "album/11.jpg"
    },
    {
        id:'12',
        songName:` Creepin'
        <div class="subtitle">Metro Boomin</div>`,
        poster: "album/12.jpg"
    },
    {
        id:'13',
        songName:` Fallen
        <div class="subtitle">Lola Amour</div>`,
        poster: "album/13.jpg"
    },
    {
        id:'14',
        songName:` Out of Time
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/14.jpg"
    },
    {
        id:'15',
        songName:` Wicked Games
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/15.jpg"
    },
    {
        id:'16',
        songName:` The Hills
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/16.jpg"
    },
    {
        id:'17',
        songName:` WELCOME2DTQ
        <div class="subtitle">Hev Abi</div>`,
        poster: "album/17.jpg"
    },
    {
        id:'18',
        songName:` Surround Sound
        <div class="subtitle">JID</div>`,
        poster: "album/18.jpg"
    },
    {
        id:'19',
        songName:` Dance Now
        <div class="subtitle">JID</div>`,
        poster: "album/19.jpg"
    },
    {
        id:'20',
        songName:` I Was Never There
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/20.jpg"
    },
    {
        id:'21',
        songName:` Heartless
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/21.jpg"
    },
    {
        id:'22',
        songName:` Mad
        <div class="subtitle">Ne-Yo</div>`,
        poster: "album/22.jpg"
    },
    {
        id:'23',
        songName:` I Feel It Coming
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/23.jpg"
    },
    {
        id:'24',
        songName:` Is There Someone Else
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/24.jpg"
    },
    {
        id:'25',
        songName:` Faith
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/25.jpg"
    },
    {
        id:'26',
        songName:` Less Than Zero
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/26.jpg"
    },
    {
        id:'27',
        songName:` Blinding Lights
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/27.jpg"
    },
    {
        id:'28',
        songName:` Often
        <div class="subtitle">The Weeknd</div>`,
        poster: "album/28.jpg"
    },
    {
        id:'29',
        songName:` Mood
        <div class="subtitle">Al James</div>`,
        poster: "album/29.jpg"
    },
    {
        id:'30',
        songName:` Marlboro Black
        <div class="subtitle">Because</div>`,
        poster: "album/30.jpg"
    },
    {
        id:'31',
        songName:` Latina
        <div class="subtitle">Al James</div>`,
        poster: "album/31.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem','my_song')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.textContent = 'pause';
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.textContent = 'play_arrow';
        wave.classList.remove('active2');
    }
})

const makeAllPlays = (clickedIndex) => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        if (music.clickedIndex) {
            element.textContent = 'pause_circle';
        } else {
            element.textContent = 'play_circle';
        }
    });
};

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', () => {
        makeAllPlays(index);
        index = element.id;
        if (element.textContent === 'play_circle') {
            element.textContent = 'pause_circle';
        } else {
            element.textContent = 'play_circle';
        }
        music.src = `songs/${index}.mp3`;
        poster_master_play.src = `album/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        if (music.paused || music.currentTime <= 0) {
            music.play();
            masterPlay.textContent = 'pause';
            wave.classList.add('active2');
        }
        music.addEventListener('ended',()=>{
            masterPlay.textContent = 'play_arrow';
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.textContent = 'play_arrow';
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('input', () => {
    updateVolume();
});

vol_dot.addEventListener('mousedown', handleVolumeDotClick);
vol_bar.addEventListener('mousedown', handleVolumeBarClick);

vol_icon.addEventListener('click', () => {
    toggleMute();
});

function updateVolume() {
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    if (music) {
        music.volume = vol_a / 100;
        updateVolumeIcon();
    }
}

function toggleMute() {
    if (music) {
        music.muted = !music.muted;
        updateVolumeIcon();
    }
}

function updateVolumeIcon() {
    if (music) {
        if (music.muted || music.volume === 0) {
            vol_icon.textContent = 'volume_mute';
        } else if (music.volume > 0 && music.volume <= 0.5) {
            vol_icon.textContent = 'volume_down';
        } else {
            vol_icon.textContent = 'volume_up';
        }
    }
}

function handleVolumeDotClick(event) {
    event.preventDefault();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
}

function handleVolumeBarClick(event) {
    let vol_a = (event.clientX - vol_bar.getBoundingClientRect().left) / vol_bar.clientWidth;
    vol.value = vol_a * 100;
    updateVolume();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
    let vol_a = (event.clientX - vol_bar.getBoundingClientRect().left) / vol_bar.clientWidth;
    if (vol_a >= 0 && vol_a <= 1) {
        vol.value = vol_a * 100;
        updateVolume();
    }
}

function handleMouseUp() {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
}

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `album/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();
        if (music.paused || music.currentTime <= 0) {
            music.play();
            document.getElementById(`${index}`).textContent = 'pause';
            document.getElementById(`${index}`).classList.add('active2');
        }
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `songs/${index}.mp3`;
    poster_master_play.src = `album/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        makeAllPlays();
        if (music.paused || music.currentTime <= 0) {
            music.play();
            document.getElementById(`${index}`).textContent = 'pause';
            document.getElementById(`${index}`).classList.add('active2');
        }
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
})