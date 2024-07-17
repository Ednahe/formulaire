const seeMessage = () => {
    window.alert("vous avez cliqué sur le bouton")
}

const redirection = () => {
    setTimeout(function(){
        window.location.href="https://www.google.com";
    }, 4000);
}

const reredirection = () => {
    setTimeout(function(){
        window.open("https://www.google.com", 'blank', 'width=500', 'height=400');
    }, 2000);
}


const bouton = document.getElementById('btn');

bouton.addEventListener('click', reredirection);