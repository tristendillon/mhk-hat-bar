'use client'

import { useState } from 'react'
import { PROCESS_STEPS } from '@/lib/constants'
import { CheckIcon } from '@/icons'
import { cn } from '@/lib/utils'

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayStep, setDisplayStep] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const goToStep = (next: number) => {
    if (next === currentStep) return
    setIsVisible(false)
    setTimeout(() => {
      setDisplayStep(next)
      setCurrentStep(next)
      setIsVisible(true)
    }, 180)
  }

  const goNext = () =>
    goToStep(Math.min(currentStep + 1, PROCESS_STEPS.length - 1))
  const goPrev = () => goToStep(Math.max(currentStep - 1, 0))

  const step = PROCESS_STEPS[displayStep]

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Creating your custom hat is simple, fun, and unforgettable.
          </p>
        </div>

        {/* Body: stepper left + content right */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Vertical Stepper */}
          <nav className="flex flex-row lg:flex-col items-center lg:items-start justify-center lg:justify-start gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 h-full">
            {PROCESS_STEPS.map((s, i) => {
              const isActive = i === currentStep
              const isCompleted = i < currentStep

              return (
                <button
                  key={i}
                  onClick={() => goToStep(i)}
                  className="group flex-1 relative flex
                   lg:flex-col gap-4 cursor-pointer text-left pr-6 lg:pr-0 lg:pb-0 shrink-0"
                >
                  {/* Connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <>
                      {/* Mobile — horizontal line */}
                      <div
                        className={cn(
                          'absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 md:hidden',
                          isCompleted ? 'bg-purple-400' : 'bg-gray-200'
                        )}
                      />

                      {/* Desktop — vertical line */}
                      <div
                        className={cn(
                          'absolute top-10 left-5 hidden h-full w-0.5 -translate-x-1/2 md:block',
                          isCompleted ? 'bg-purple-400' : 'bg-gray-200'
                        )}
                      />
                    </>
                  )}

                  <div className="flex items-center gap-4 lg:pb-10">
                    {/* Circle */}
                    <div
                      className={cn(
                        'relative z-10 flex h-10 min-w-[72px] md:min-w-0 md:h-10 md:w-10 shrink-0',
                        'items-center justify-center rounded-full border-2 font-bold text-sm transition-all duration-300',
                        isActive
                          ? 'border-purple-600 bg-purple-600 text-white shadow-md shadow-purple-200'
                          : isCompleted
                          ? 'border-purple-400 bg-purple-50 text-purple-600'
                          : 'border-gray-200 bg-white text-gray-400 group-hover:border-purple-300 group-hover:text-purple-400'
                      )}
                    >
                      {isCompleted ? (
                        <CheckIcon className="w-4 h-4" />
                      ) : (
                        <span className="text-sm font-bold">
                          <span className="md:hidden">Step</span> {s.step}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <div className="hidden lg:block">
                      <p
                        className={cn(
                          'text-sm font-semibold transition-colors duration-200',
                          isActive
                            ? 'text-gray-900'
                            : isCompleted
                            ? 'text-purple-600'
                            : 'text-gray-400 group-hover:text-gray-600'
                        )}
                      >
                        {s.title}
                      </p>
                      <p
                        className={cn(
                          'text-xs mt-0.5 transition-colors duration-200',
                          isActive ? 'text-purple-500' : 'text-gray-400'
                        )}
                      >
                        Step {s.step}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </nav>

          {/* Right: Step Content */}
          <div
            className={cn(
              'transition-all duration-200 ease-in-out',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3'
            )}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100 mb-8">
              <img
                src={step.image.src}
                alt={step.image.alt}
                className="w-full h-full object-cover"
              />
              {/* Step badge over image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 shadow-sm">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-bold">
                  {step.step}
                </div>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Step {step.step} of {PROCESS_STEPS.length}
                </span>
              </div>
            </div>

            {/* Text */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-500 text-base leading-relaxed max-w-lg mb-8">
              {step.description}
            </p>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className={cn(
                  'px-5 py-2.5 rounded-full border font-medium text-sm transition-all duration-200 cursor-pointer',
                  currentStep === 0
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-400'
                )}
              >
                Back
              </button>
              <button
                onClick={goNext}
                disabled={currentStep === PROCESS_STEPS.length - 1}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer',
                  currentStep === PROCESS_STEPS.length - 1
                    ? 'bg-purple-300 text-white cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg'
                )}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
