import { DownloadIcon } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [emailContent, setEmailContent] = useState('');

  function getMailTo() {
    return (
      'mailto:shahir.wardak@hotmail.com?subject=' +
      name +
      ' from Shahir.World&body=' +
      emailContent +
      '%0D%0A %0D%0A %0D%0A Sent from Shahir.World'
    );
  }

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='mb-5 flex flex-col self-center lg:w-1/3'>
          <label htmlFor='name-input' className='font-medium'>
            Name
          </label>
          <input
            name='name-input'
            type='text'
            className='mt-2 rounded-sm border-2 border-neutral-700 bg-neutral-700 p-2 hover:border-cyan-600'
            onInput={(e) => setName(e.currentTarget.value)}
          ></input>
        </div>

        <div className='mb-5 flex flex-col self-center lg:w-1/3'>
          <label htmlFor='message-input' className='font-medium'>
            Message
          </label>
          <textarea
            name='message-input'
            rows={5}
            className='mt-2 rounded-sm border-2 border-neutral-700 bg-neutral-700 p-2 hover:border-cyan-600'
            onInput={(e) => setEmailContent(e.currentTarget.value)}
          ></textarea>
        </div>

        <div className='mb-20 flex flex-col self-center lg:w-1/3'>
          <button
            className='w-full rounded-sm bg-cyan-800 p-2 text-lg font-bold hover:bg-cyan-700'
            onClick={(e) => {
              console.log(e);
              window.location.href = getMailTo();
              e.preventDefault();
            }}
          >
            Send email
          </button>
        </div>

        <div className='flex flex-col self-center lg:w-1/3'>
          <a href='/files/Shahir Wardak NO NUMBER.pdf'>
            <button className='flex w-full justify-center gap-4 rounded-sm border-2 border-neutral-400 bg-neutral-900 p-4 text-lg font-semibold hover:bg-neutral-800'>
              Download my CV
              <DownloadIcon />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
