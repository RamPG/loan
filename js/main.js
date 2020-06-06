import MainSlider from "./modules/sliders/MainSlider";
import MainSliderPopup from "./modules/MainSliderPopup";
import ModalVideo from "./modules/ModalVideo";

window.addEventListener("DOMContentLoaded", () => {
    const slider = new MainSlider(".page", ".next");
    const sliderPopup = new MainSliderPopup(".page", ".next", ".hanson");
    slider.bindSlider();
    sliderPopup.bindPopup();
    const modalVideo = new ModalVideo(".page", ".play", ".overlay", ".close");
    modalVideo.addModal();
    modalVideo.initAPI();
});