import MainSlider from "./modules/sliders/MainSlider";

window.addEventListener("DOMContentLoaded", () => {

    const slider = new MainSlider(".page", ".next");
    slider.bindSlider();
});