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
    message:
      "You can question me about my experience, to figure out if I'm suitable for your postion. ",
  },
  {
    type: 'apiMessage',
    message: `This bot will answer base on my vita. (e.g. what's your familiar tech stack?)`,
  },
];

export default function Home() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState(defaultMessage);
  const [query, setQuery] = useState<string>();
  const { messagesEndRef, warpperRef, handleScroll } = useAutoScroll();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && query) {
      e.preventDefault();
      // handleSubmit(e)
    } else if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div
      className={`flex h-screen flex-col items-center p-4 py-10 lg:p-24 ${silkscreen.className}`}
    >
      <h1 className="text-2xl md:text-5xl mb-4">
        HELLO, THIS IS <a href="/profile">ALAN</a>
      </h1>
      <div
        ref={warpperRef}
        className="flex-1 border-black border-2 m-0 md:m-10 h-3/6 overflow-y-scroll noscrollbar"
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
                Alan
              </div>
            ),
          )}
          <div ref={messagesEndRef}></div>
        </div>
      </div>
      <div className="border border-black lg:w-6/12 w-full m-4 flex">
        <textarea
          ref={inputRef}
          onKeyDown={handleEnter}
          maxLength={512}
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
