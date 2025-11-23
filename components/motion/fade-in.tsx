"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  fullWidth?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  className,
  duration = 0.6,
  direction = "up",
  fullWidth = false,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction === "up" ? 24 : direction === "down" ? -24 : 0,
      x: shouldReduceMotion ? 0 : direction === "left" ? 24 : direction === "right" ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={cn(fullWidth ? "w-full" : "", className)}
    >
      {children}
    </motion.div>
  )
}

interface StaggerFadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export function StaggerFadeIn({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
}: StaggerFadeInProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion()

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
