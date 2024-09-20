/* eslint-disable */

import { type CSSProperties, type MouseEvent, type ForwardedRef } from 'react';
import { forwardRef, useEffect, useRef, useCallback } from 'react';
import {
  tns,
  type TinySliderInfo,
  type TinySliderInstance,
  TinySliderSettings,
} from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { renderToStaticMarkup } from 'react-dom/server';

interface ReactTinySliderConfig extends TinySliderSettings {
  container?: HTMLElement | string;
  swipeAngle?: boolean | number;
  onClick?: (
    slideClicked: number | null,
    info: TinySliderInfo | null,
    event: React.MouseEvent,
  ) => void;
  onInit?: () => void | false;
  onIndexChanged?: (info: TinySliderInfo) => void;
  onTransitionStart?: (info: TinySliderInfo) => void;
  onTransitionEnd?: (info: TinySliderInfo) => void;
  onTouchStart?: (info: TinySliderInfo) => void;
  onTouchMove?: (info: TinySliderInfo) => void;
  onTouchEnd?: (info: TinySliderInfo) => void;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  style?: CSSProperties;
  items?: number;
  mouseDrag?: boolean;
  controls?: boolean;
  nav?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
}

export const TinySlider = forwardRef(
  (
    props: ReactTinySliderConfig,
    ref: ForwardedRef<TinySliderInstance | null>,
  ) => {
    const slider = useRef<TinySliderInstance | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const dragging = useRef<boolean>(false);

    const {
      onClick,
      onIndexChanged,
      onTransitionStart,
      onTransitionEnd,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onInit,
      children,
    } = props;

    const clickHandler = useCallback(
      (event: MouseEvent) => {
        if (dragging.current || !onClick) return;
        if (!slider.current) return onClick(null, null, event);
        const info = slider.current.getInfo();
        onClick(info.index, info, event);
      },
      [onClick],
    );

    const postInit = useCallback(() => {
      const events = slider.current?.events;
      if (events) {
        events.on('dragMove', (info: TinySliderInfo) => {
          dragging.current = true;
          onTransitionStart && onTransitionStart(info);
        });
        events.on('dragEnd', (info: TinySliderInfo) => {
          dragging.current = false;
          onTransitionEnd && onTransitionEnd(info);
        });
        if (onIndexChanged) events.on('indexChanged', onIndexChanged);
        if (onTouchStart) events.on('touchStart', onTouchStart);
        if (onTouchMove) events.on('touchMove', onTouchMove);
        if (onTouchEnd) events.on('touchEnd', onTouchEnd);
      }
      onInit && onInit();
      if (typeof ref === 'function') {
        ref(slider.current);
      } else if (ref) {
        ref.current = slider.current;
      }
    }, [
      onTransitionStart,
      onTransitionEnd,
      onIndexChanged,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onInit,
      ref,
    ]);

    const build = useCallback(
      (newSettings: ReactTinySliderConfig = {}) => {
        const settings: ReactTinySliderConfig = {
          ...newSettings,
          onInit: () => {
            setTimeout(postInit, 0);
          },
          container: containerRef.current?.firstChild
            ?.firstChild as HTMLElement,
        };
        slider.current = tns(settings);
      },
      [postInit, children],
    );

    useEffect(() => {
      build(props);
      return () => {
        if (slider.current?.destroy) slider.current.destroy();
      };
    }, [props, children]);

    const markup = renderToStaticMarkup(
      <div>
        <div>{children}</div>
      </div>,
    );

    return (
      <div
        onClick={clickHandler}
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    );
  },
);
