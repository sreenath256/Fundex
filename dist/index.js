

function handleAnime(){
    const element = document.querySelector('.animate');
    element.classList.add('fa-shake');
    setTimeout(function(){
        element.classList.remove('fa-shake');
    },1000)

}