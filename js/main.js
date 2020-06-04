import MainSlider from "./modules/sliders/MainSlider";
import MainSliderPopup from "./modules/MainSliderPopup";
window.addEventListener("DOMContentLoaded", () => {
    const sliderPopup = new MainSliderPopup(".page", ".next", ".hanson");
    const slider = new MainSlider(".page", ".next");
    slider.bindSlider();
    sliderPopup.setTimerOnPopup();
});