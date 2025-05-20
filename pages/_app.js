'use client'

import { AnimatePresence, motion } from 'framer-motion'
import '../src/index.css'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: { opacity: 0, y: 30 },
          pageAnimate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }},
          pageExit:    { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' }},
        }}
        className="min-h-screen"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
