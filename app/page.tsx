'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleEnter = (e: any) => {
    if (e.key === 'Enter' && query) {
      // handleSubmit(e)
    } else if (e.key == 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-5xl">HELLO, THIS IS ALAN</h1>
      <div className="flex-1 border-black border-2 m-10 w-6/12 overflow-y-scroll">
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
      </div>
      <div className="border border-black w-6/12 flex">
        <textarea
          ref={inputRef}
          maxLength={512}
          rows={1}
          onChange={e => setQuery(e.target.value)}
          placeholder="Send a question you want to know about me."
          spellCheck={false}
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
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
    </div>
  );
}
