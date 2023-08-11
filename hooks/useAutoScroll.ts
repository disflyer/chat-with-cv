import { throttle } from '@/utils/throttle';
import { useEffect, useRef, useState } from 'react';

export const useAutoScroll = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const warpperRef = useRef<HTMLDivElement>(null);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState<boolean>(true);
  const scrollDown = () => {
    if (autoScrollEnabled) {
      messagesEndRef.current?.scrollIntoView(true);
    }
  };
  const throttledScrollDown = throttle(scrollDown, 250);
  useEffect(() => {
    throttledScrollDown();
  }, [throttledScrollDown]);
  const handleScroll = () => {
    if (warpperRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = warpperRef.current;
      const bottomTolerance = 30;

      if (scrollTop + clientHeight < scrollHeight - bottomTolerance) {
        setAutoScrollEnabled(false);
      } else {
        setAutoScrollEnabled(true);
      }
    }
  };
  return { messagesEndRef, warpperRef, handleScroll };
};
