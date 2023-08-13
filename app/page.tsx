'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { silkscreen } from '@/utils/font';

const defaultMessage = [
  {
    type: 'apiMessage',
    message: 'Welcome to my website.',
  },
  {
    type: 'apiMessage',
    message:
      "I'm Alan, a software engineer. And I'm Seek for a remote fullstack/frontend job.",
  },
  {
    type: 'apiMessage',
    message: 'You can question me.',
  },
  {
    type: 'apiMessage',
    message: `This bot will answer base on my vita. (e.g. what's your familiar tech stack?)`,
  },
];
const controller = new AbortController();
const signal = controller.signal;
export default function Home() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState(defaultMessage);
  const [query, setQuery] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const { messagesEndRef, warpperRef, handleScroll } = useAutoScroll();
  useEffect(() => {
    inputRef.current?.focus();
    return () => controller.abort();
  }, []);
  const handleRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!query) return null;
    setLoading(true);
    const question = query;
    setQuery('');
    setMessages(pre =>
      pre.concat({
        type: 'userMessage',
        message: query!,
      }),
    );
    let res;
    try {
      res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({
          question,
        }),
        signal,
      });
    } catch (error) {
      return setLoading(false);
    }
    const { text } = await res.json();
    setMessages(pre =>
      pre.concat({
        type: 'apiMessage',
        message: text,
      }),
    );
    setLoading(false);
  };
  const handleEnter = async (e: any) => {
    if (e.key === 'Enter' && query) {
      handleRequest(e);
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`flex h-screen flex-col items-center p-4 py-10 lg:p-24 ${silkscreen.className}`}
    >
      <h1 className="text-2xl md:text-5xl mb-4 lg:mb-10">
        HELLO, THIS IS <a href="/profile">ALAN</a>
      </h1>
      <div
        ref={warpperRef}
        className="flex-1 border-black border-2 h-3/6 overflow-y-scroll noscrollbar md:w-10/12 lg:w-8/12"
        onScroll={handleScroll}
      >
        <div>
          {messages?.map((message, index) =>
            message.type === 'apiMessage' ? (
              <div key={index} className="p-3 text-left pr-20">
                {message.message}
              </div>
            ) : (
              <div key={index} className="p-3 text-right pl-20">
                {message.message}
              </div>
            ),
          )}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      <div className="border w-full md:w-10/12 lg:w-8/12 border-black m-4 flex">
        <textarea
          ref={inputRef}
          onKeyDown={handleEnter}
          maxLength={512}
          value={query}
          rows={1}
          onChange={e => setQuery(e.target.value)}
          placeholder="Send a question you want to know about me."
          spellCheck={false}
          className="text-xs h-[60px] noscrollbar w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="flex items-center">
          <Image
            src="/send.svg"
            width={28}
            height={28}
            onClick={handleEnter}
            alt="send icon"
            className="mr-3 hover:bg-slate-500"
          />
        </div>
      </div>
      <footer className="text-slate-400 absolute bottom-5 text-center w-full">
        © Alan&apos;s website
      </footer>
    </div>
  );
}
