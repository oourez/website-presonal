let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains1 = document.getElementById('mountains1');
let mountains2 = document.getElementById('mountains2');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Ourez = document.querySelector('.Ourez');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains1.style.top = value * 2 + 'px';
    mountains2.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Ourez.style.fontSize = value + 'px';
        if(scrollY >= 67){
        Ourez.style.fontSize = 67 + 'px';
        Ourez.style.position = 'fixed';
        if(scrollY >= 420){
            Ourez.style.display = 'none';
        }else{
            Ourez.style.display = 'block';
        }
        
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#5e9cc9,#10001f)';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
        }
}

}
