const shareIcon = document.querySelector('.share-icon');
const socialMedia = document.querySelector('.share-active');

shareIcon.addEventListener('click', () => {
    socialMedia.classList.toggle('active')
    console.log(socialMedia);
})