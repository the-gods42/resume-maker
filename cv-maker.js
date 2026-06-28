function downloadPDF() {
    var element = document.getElementById('covers');
    html2pdf().from(element).save();
}
 
function updateRangeValue(slider) {
    let valueDisplay = slider.nextElementSibling;
    if (!valueDisplay || !valueDisplay.classList.contains('range-value')) {
        valueDisplay = document.createElement('span');
        valueDisplay.className = 'range-value';
        slider.parentNode.insertBefore(valueDisplay, slider.nextSibling);
    }
    valueDisplay.textContent = slider.value + "%";
}

window.addEventListener('DOMContentLoaded', function() {
    var sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(function(slider) {
        slider.addEventListener('input', function() {
            updateRangeValue(slider);
        });
        updateRangeValue(slider);
    });
});
