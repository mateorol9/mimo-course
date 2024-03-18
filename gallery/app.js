const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__close');
const gallery = document.querySelector('.gallery');
const modalImg = document.querySelector('.modal__img');

gallery.addEventListener('click', function(e){
    if(e.target.matches('.gallery__img')) {
        modal.classList.add('show');
        modalImg.src = e.target.src;
    }
})
// Cierra el modal
modal.addEventListener('click', function(e){
    if(e.target === close) {
        modal.classList.remove('show');
    }
});