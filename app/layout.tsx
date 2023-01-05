'use client'

import './globals.css'
import Image from 'next/image'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <section className='titleBar'>
          <Image src='../public/vscode.svg' alt='vscode-icon' width={42} height={42}/>
          <p>File</p> 
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
          <div className="title">
            Kevin Stoll - Visual Studio Code
          </div>
          <div className="window-btns">
            <RemoveOutlinedIcon />
            <Image src='../public/window-restoredown.svg' alt='window-restoredown' width={42} height={42}/>
            <CloseOutlinedIcon />
          </div>
        </section>
        {children}</body>
    </html>
  )
}
