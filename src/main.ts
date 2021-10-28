import { SLIDER_OPTIONS } from './mock';

const ANIMATION_OPTIONS: KeyframeAnimationOptions = {
  duration: 300,
  fill: 'forwards',
  easing: 'ease-in-out',
};

const sliderDescriptionArr = SLIDER_OPTIONS.map((option) => option.description);
const sliderContentArr = SLIDER_OPTIONS.map((option) => option.content).reverse();

(document.querySelector<HTMLDivElement>('#slider-container')!).innerHTML = `
  <div class="slide-description-wrap" style="height: calc(${SLIDER_OPTIONS.length} * 100vh);">
    ${sliderDescriptionArr
      .map((descr, i) => {
        return `
                <div class="slide-description" style="color: ${SLIDER_OPTIONS[i].content}">${descr}</div>
              `;
      })
      .join('')
    }
  </div> 
  <div 
    class="slide-content-wrap" 
    style="height: calc(${SLIDER_OPTIONS.length} * 100vh); transform: translateY(calc(${(SLIDER_OPTIONS.length - 1)} * -100vh))"
  >
    ${sliderContentArr
      .map((content) => {
        return `
              <div 
                class="slide-content" 
                style="background: ${content};"
              >
              </div>
          `;
      })
      .join('')
    }
  </div> 
`;

const slideDescriptionWrap = document.querySelector<HTMLDivElement>('.slide-description-wrap')!,
  slideContentWrap = document.querySelector<HTMLDivElement>('.slide-content-wrap')!,
  downBtn = document.querySelector<HTMLButtonElement>('#slider-nav .down')!,
  upBtn = document.querySelector<HTMLButtonElement>('#slider-nav .up')!;

let descrSlideIdx = 0;
let contentSlideIdx = SLIDER_OPTIONS.length - 1;

function getNextSlide() {
  if (descrSlideIdx === SLIDER_OPTIONS.length - 1) {
    return;
  }

  descrSlideIdx++;
  contentSlideIdx--;

  slideDescriptionWrap.animate([
    {transform: `translateY(calc(${descrSlideIdx} * -100vh))`},
  ], ANIMATION_OPTIONS);

  slideContentWrap.animate([
    {transform: `translateY(calc(${contentSlideIdx} * -100vh)`},
  ], ANIMATION_OPTIONS);
}

function getPrevSlide() {
  if (descrSlideIdx === 0) {
    return;
  }

  descrSlideIdx--;
  contentSlideIdx++;

  slideDescriptionWrap.animate([
    {transform: `translateY(calc(${descrSlideIdx} * -100vh))`},
  ], ANIMATION_OPTIONS);

  slideContentWrap.animate([
    {transform: `translateY(calc(${contentSlideIdx} * -100vh)`},
  ], ANIMATION_OPTIONS);
}

downBtn.addEventListener('click', () => {
  getNextSlide();
});

upBtn.addEventListener('click', () => {
  getPrevSlide();
});
