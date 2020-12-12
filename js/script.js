const stone = document.querySelectorAll('.stoneTitle');
const footerNav = document.querySelector('.footerMenuSocialLang').children[0];
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');
const signUp = document.querySelector('.signUp');
const popUpDesk = document.querySelectorAll('.popup');

const signUpPopUp= document.querySelector(".popupSignUp");
const newsPopUp= document.querySelector(".popupNews");
const aboutUsPopUp= document.querySelector(".popupAboutUs");
const contactsPopUp= document.querySelector(".popupContacts");
const helpPopUp= document.querySelector(".popupHelp");
const forgotPassContainer= document.querySelector(".forgotPassContainer");

const forgotPass= document.querySelector(".forgotPass");

const popUp = evt => {
    // evt.preventDefault();

    const target = evt.target;

    if (target.textContent.toLowerCase()=="забыли пароль?"){
        modal.classList.add('modalActive');
        popUpDesk[1].classList.add('modalSignUp');
        popUpDesk[0].classList.add('modalSignUp');
        closeModal.classList.add('closeModalSignUp');

        forgotPassContainer.classList.remove('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
    }
    if (target.textContent.toLowerCase()=="новости") {
        modal.classList.add('modalActive');

        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.remove('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
    }
    if (target.textContent.toLowerCase()=="о нас") {
        modal.classList.add('modalActive');

        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.remove('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
    }
    if (target.textContent.toLowerCase()=="контакты") {
        modal.classList.add('modalActive');

        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.remove('hide');
        helpPopUp.classList.add('hide');
    }
    if (target.textContent.toLowerCase()=="помощь") {
        modal.classList.add('modalActive');

        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.remove('hide');
    }
    if (target.textContent.toLowerCase()=="регистрация") {
        modal.classList.add('modalActive');
        popUpDesk[1].classList.add('modalSignUp');
        popUpDesk[0].classList.add('modalSignUp');
        closeModal.classList.add('closeModalSignUp');

        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.remove('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
    }
    if (target.classList.contains('cancel') || target.classList.contains('modal')){
        modal.classList.remove('modalActive');
        popUpDesk[1].classList.remove('modalSignUp');
        popUpDesk[0].classList.remove('modalSignUp');
        closeModal.classList.remove('closeModalSignUp');

        forgotPassContainer.classList.remove('hide');
        signUpPopUp.classList.remove('hide');
        newsPopUp.classList.remove('hide');
        aboutUsPopUp.classList.remove('hide');
        contactsPopUp.classList.remove('hide');
        helpPopUp.classList.remove('hide');
    }
}

for (var i=0; i<stone.length; i++){
    stone[i].addEventListener('click', popUp);
}

footerNav.addEventListener('click', popUp);
closeModal.addEventListener('click', popUp);
modal.addEventListener('click', popUp);
signUp.addEventListener('click', popUp);
forgotPass.addEventListener('click', popUp);
