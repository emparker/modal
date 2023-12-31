'use client'

import React from "react"
import ClickableImage from './components/ClickableImage';
import TheModal from './components/TheModal'
import BottomNav from "./components/BottomNav";


export default function Home () {
  const [modalFlip, setModalFlip] = React.useState(true) 

  const handleClick = () => {
    console.log('Image clicked')
    setModalFlip(!modalFlip)
  };

  const handleModalClick = () => {
    console.log('modal clicked');
    setModalFlip(!modalFlip)
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-20 p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WELCOME TO&nbsp;
          <code className="font-mono font-bold">the modal</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/emparker"
            target="_blank"
            rel="noopener noreferrer"
          >
            HER GITHUB
          </a>
        </div>
      </div>
    { modalFlip ?
    <div className="clickable-img">
      <ClickableImage modalFlip={modalFlip} onClick={handleClick}/>
    </div>
    :
    <div className="modal-component">
      <TheModal modalFlip={modalFlip} onClick={handleModalClick} />
    </div>
  }
    <BottomNav />
    </main>
  )
}


