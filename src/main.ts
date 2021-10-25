import './style.css';

const SLIDER_OPTIONS = [
  {
    description: 1,
    content: '#c95656',
  },
  {
    description: 2,
    content: '#4eaf54',
  },
  {
    description: 3,
    content: '#4e88af',
  },
];

const sliderDescriptionArr = SLIDER_OPTIONS.map((option) => option.description);
const sliderContentArr = SLIDER_OPTIONS.map((option) => option.content).reverse();

const sliderContainer = document.querySelector('#slider-container')!;

sliderContainer.innerHTML = `
  <div 
    class="slide-description-wrap" 
    style="height: calc(${SLIDER_OPTIONS.length} * 100vh);"
  >
    ${sliderDescriptionArr.map((descr) => {
      return `
        <div class="slide-description">${descr}</div>
      `;
    })}
  </div> 
  <div 
    class="slide-content-wrap" 
    style="height: calc(${SLIDER_OPTIONS.length} * 100vh); transform: translateY(-200vh)"
  >
    ${sliderContentArr.map((content) => {
      return `
          <div 
            class="slide-content" 
            style="background: ${content};"
          >
          </div>
      `;
    })}
  </div> 
 `;


