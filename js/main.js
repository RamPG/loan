import MainSlider from "./modules/sliders/MainSlider";
import MainSliderPopup from "./modules/MainSliderPopup";
import ModalVideo from "./modules/ModalVideo";
import SecondarySlider from "./modules/sliders/SecondarySlider";
import Difference from "./modules/Difference";
import Form from "./modules/Form";

window.addEventListener("DOMContentLoaded", () => {
    const sliderIndexMain = new MainSlider({
        containerSelector: ".page",
        nextButtonSelector: ".next",
        activeClass: "active"
    });
    const sliderIndexMainPopup = new MainSliderPopup({
        containerSelector: ".page",
        nextButtonSelector: ".next",
        popupSelector: ".hanson"
    });
    sliderIndexMain.bindSlider();
    sliderIndexMain.logoBind(".main-logo");
    sliderIndexMainPopup.bindPopup();
    const modalVideo = new ModalVideo({
        triggerSelector: ".play",
        modalSelector: ".overlay",
        closeSelector: ".close"
    });
    modalVideo.addModal();
    modalVideo.initAPI();
    const showUpSliderSecondary = new SecondarySlider({
        pageBlockSelector: ".showup",
        containerSelector: ".showup__content-slider",
        prevButtonSelector: ".showup__prev",
        nextButtonSelector: ".showup__next",
        activeClass: "card-active",
    })
    const modulesSliderSecondary = new SecondarySlider({
        pageBlockSelector: ".modules",
        containerSelector: ".modules__content-slider",
        prevButtonSelector: ".slick-prev",
        nextButtonSelector: ".slick-next",
        activeClass: "card-active"
    })
    const feedSliderSecondary = new SecondarySlider({
        pageBlockSelector: ".feed",
        containerSelector: ".feed__slider",
        activeClass: "feed__item-active"
    })
    showUpSliderSecondary.bindSlider();
    modulesSliderSecondary.bindSlider();
    feedSliderSecondary.changeSlidesByTime();
    const differenceOld = new Difference({
        officerSelector: ".officerold",
        differenceCardSelector: ".officer__card-item",
        showSelector: ".add-item"
    })
    differenceOld.officerBind();
    const differenceNew = new Difference({
        officerSelector: ".officernew",
        differenceCardSelector: ".officer__card-item",
        showSelector: ".add-item"
    })
    differenceNew.officerBind();
    const joinForm = new Form({
        formSelector: ".join__evolution > .form",
        path: "../assets/question.php"
    });
    joinForm.bindForm();
    const scheduleForm = new Form({
        formSelector: ".schedule__form > .form",
        path: "../assets/question.php"
    })
    scheduleForm.bindForm();
    const moduleSliderMain = new MainSlider({
        containerSelector: ".moduleapp",
        nextButtonSelector: ".next",
        prevButtonSelector: ".prev",
        activeClass: "active"
    })
    moduleSliderMain.bindSlider();
    moduleSliderMain.logoBind(".main-logo");
});