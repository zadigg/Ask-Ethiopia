// src/declarations.d.ts

declare module 'tiny-slider' {
  interface TinySliderSettings {
    container?: HTMLElement | string;
    mode?: 'carousel' | 'gallery';
    axis?: 'horizontal' | 'vertical';
    items?: number;
    gutter?: number;
    edgePadding?: number;
    fixedWidth?: number;
    autoWidth?: boolean;
    viewportMax?: boolean;
    slideBy?: 'page' | number;
    controls?: boolean;
    controlsPosition?: 'top' | 'bottom';
    controlsText?: [string, string];
    controlsContainer?: HTMLElement | string;
    nav?: boolean;
    navPosition?: 'top' | 'bottom';
    arrowKeys?: boolean;
    speed?: number;
    autoplay?: boolean;
    autoplayTimeout?: number;
    autoplayDirection?: 'forward' | 'backward';
    autoplayText?: [string, string];
    autoplayHoverPause?: boolean;
    autoplayButton?: boolean;
    autoplayButtonOutput?: boolean;
    autoplayResetOnVisibility?: boolean;
    touch?: boolean;
    mouseDrag?: boolean;
    swipeAngle?: boolean | number;
    dragHandle?: boolean;
    preventActionWhenRunning?: boolean;
    preventScrollOnTouch?: 'auto' | 'force' | false;
    responsive?: Record<number, Partial<TinySliderSettings>>;
    lazyload?: boolean;
    lazyloadSelector?: string;
    checkVisibility?: boolean;
    loop?: boolean;
    rewind?: boolean;
    autoHeight?: boolean;
    autoHeightViewport?: boolean;
    startIndex?: number;
    nested?: 'inner' | 'outer';
    freezable?: boolean;
    disable?: boolean;
    onInit?: () => void;
  }

  interface TinySliderInfo {
    displayIndex: number;
    index: number;
    slideCount: number;
    container: HTMLElement;
    slideItems: HTMLCollection;
    cloneCount: number;
    slideBy: number;
    controlsContainer: HTMLElement | null;
    navContainer: HTMLElement | null;
    autoplayButton: HTMLElement | null;
    navItems: HTMLCollection | null;
    prevButton: HTMLElement | null;
    nextButton: HTMLElement | null;
    items: number;
    slidesInView: number;
    indexCached: number;
    transform: number;
    hasControls: boolean;
  }

  interface TinySliderEvents {
    on: (event: string, callback: (info: TinySliderInfo) => void) => void;
    off: (event: string, callback: (info: TinySliderInfo) => void) => void;
  }

  interface TinySliderInstance {
    goTo: (index: number) => void;
    play: () => void;
    pause: () => void;
    destroy: () => void;
    events: TinySliderEvents;
    getInfo: () => TinySliderInfo;
  }

  export function tns(settings: TinySliderSettings): TinySliderInstance;
}
