import MainSlider from "./modules/sliders/MainSlider";
import MainSliderPopup from "./modules/MainSliderPopup";
import ModalVideo from "./modules/ModalVideo";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider({
        pageSelector: ".page",
        nextButtonSelector: ".next"
    });
    const sliderPopup = new MainSliderPopup({
        pageSelector: ".page",
        nextButtonSelector: ".next",
        popupSelector: ".hanson"
    });
    slider.bindSlider();
    sliderPopup.bindPopup();
    const modalVideo = new ModalVideo({
        pageSelector: ".page",
        triggerSelector: ".play",
        modalSelector: ".overlay",
        closeSelector: ".close"
    });
    modalVideo.addModal();
    modalVideo.initAPI();

});