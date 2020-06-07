import MainSlider from "./modules/sliders/MainSlider";
import MainSliderPopup from "./modules/MainSliderPopup";
import ModalVideo from "./modules/ModalVideo";
import SecondarySlider from "./modules/sliders/SecondarySlider";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({

        containerSelector: ".page",
        nextButtonSelector: ".next",
        activeClass: "active"
    });
    const sliderPopup = new MainSliderPopup({
        containerSelector: ".page",
        nextButtonSelector: ".next",
        popupSelector: ".hanson"
    });
    slider.bindSlider();
    slider.logoBind(".main-logo");
    sliderPopup.bindPopup();
    const modalVideo = new ModalVideo({
        triggerSelector: ".play",
        modalSelector: ".overlay",
        closeSelector: ".close"
    });
    modalVideo.addModal();
    modalVideo.initAPI();
    const showUpSlider = new SecondarySlider({
        pageBlockSelector: ".showup",
        containerSelector: ".showup__content-slider",
        prevButtonSelector: ".showup__prev",
        nextButtonSelector: ".showup__next",
        activeClass: "card-active",
    })
    const modulesSlider = new SecondarySlider({
        pageBlockSelector: ".modules",
        containerSelector: ".modules__content-slider",
        prevButtonSelector: ".slick-prev",
        nextButtonSelector: ".slick-next",
        activeClass: "card-active"
    })
    const feedSlider = new SecondarySlider({
        pageBlockSelector: ".feed",
        containerSelector: ".feed__slider",
        activeClass: "feed__item-active"
    })
    showUpSlider.bindSlider();
    modulesSlider.bindSlider();
    feedSlider.changeSlide()


});