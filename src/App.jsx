'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedCube from '../src/components/AnimatedCube'
import {
  Globe, Video, Twitch, Youtube, Link2, Sun, Moon
} from 'lucide-react'

const links = [
  {
    name: 'OLIWIER',
    items: [
      { label: 'Twitch', url: 'https://www.twitch.tv/hexnpl', icon: <Twitch /> },
      { label: 'YouTube', url: 'https://www.youtube.com/@HeXnPL', icon: <Youtube /> },
      { label: 'Twitch Metrics', url: 'https://www.twitchmetrics.net/c/820581587-hexnpl', icon: <Link2 /> },
      { label: 'TikTok', url: 'https://www.tiktok.com/@hexnpl', icon: <Video /> },
    ],
  },
  {
    name: 'iTVT',
    items: [
      { label: 'Website', url: 'https://hub.itvt.xyz', icon: <Globe /> },
      { label: 'Odysee', url: 'https://odysee.com/@itvt:9', icon: <Video /> },
      { label: 'YouTube', url: 'https://www.youtube.com/@iTVT_pl', icon: <Youtube /> },
    ],
  },
]

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme', dark ? 'dark' : 'light'
    )
    const audio = new Audio('/music.mp3')
    audio.loop = true; audio.volume = 0.3
    audio.play().catch(() => {})
    return () => audio.pause()
  }, [dark])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="min-h-screen bg-base-200 dark:bg-base-900"
      >
        <div className="animated-mesh" />

        <main className="container mx-auto p-8 flex flex-col items-center space-y-16">
          {/* Header */}
          <header className="w-full px-4 flex justify-between items-center mb-8 " style={{padding: "10px"}}>
            <motion.div
              className="avatar rounded-full shadow-lg animate-spin-slow"
              transition={{ duration: 20, loop: Infinity, ease: 'linear' }}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg" alt="Logo" width={64} height={64}
                />
              </div>
            </motion.div>
            <button
              className="btn btn-circle"
              onClick={() => setDark(!dark)}
            >
              {dark
                ? <Sun className="w-5 h-5 text-yellow-300" />
                : <Moon className="w-5 h-5 text-blue-400" />}
            </button>
          </header>

          {/* Title */}
          <motion.h1
            className="text-center text-5xl font-bold text-primary mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{fontSize: "35px"}}
          >
            OLIWIER & iTVT
          </motion.h1>

          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full max-w-xl"
          >
            <AnimatedCube />
          </motion.div>

          {/* Links Sections */}
          <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 space-y-8 md:space-y-0">
            {links.map((section, i) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="card glass shadow-xl p-10 max-w-md flex-1 relative top-2"
              >
                <h2 className="card-title mb-6 flex justify-center">{section.name}</h2>
                <ul className="menu menu-vertical space-y-4 block mx-auto">
                  {section.items.map(item => (
                    <li key={item.label}>
                      <a
                        href={item.url}
                        className="btn btn-primary btn-block justify-start gap-4 py-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  )
}
