import { useState, useRef, useEffect, useReducer, useMemo } from 'react';

/**
 * @description 倒计时组件
 * @param defaultText 倒计时默认文案
 * @param ms 时间
 */

let timer:NodeJS.Timeout | null = null;

export default function useCountDown (defaultText = '获取验证码', countDefault = 60, ms = 1000) {
  let [count, setCount] = useState(0);
  let [isActive, setActive] = useState(false);
  
  let countText = useMemo(() => {
    if (count == 0) {
      return defaultText
    }
    return count + '秒'
  }, [count])


  const startCountDown = () => {
    setActive(true);
    setCount(countDefault);
    timer && clearInterval(timer);
    timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount - 1 < 0) {
          clearInterval(timer!);
          timer = null;
          setActive(false);
          return 0;
        }
        return prevCount - 1;
      });
    }, ms);

    return () => {
      timer && clearInterval(timer);
      timer = null;
    };
  };

  const clearCount = () => {
    setActive(false);
    setCount(0);
    timer && clearInterval(timer);
    timer = null;
  }

  return {isActive, countText, startCountDown, clearCount};
};