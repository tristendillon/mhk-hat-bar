'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Icon } from '@/components/ui/icon'
import { Menu } from '@/icons'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import type { ButtonProps } from '@base-ui/react'
import React from 'react'

interface MobileNavSheetTriggerProps extends ButtonProps {
  className?: string
}

export function MobileNavSheetTrigger({
  className,
  ...props
}: MobileNavSheetTriggerProps) {
  const [open, setOpen] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Hamburger Button as the trigger */}
      <SheetTrigger
        render={() => (
          <Button
            variant={'ghost'}
            size={'icon'}
            className={className}
            onClick={(e) => {
              e.preventDefault()
              setOpen(true)
            }}
            {...props}
          >
            <Icon src={Menu} size={24} />
            <span className="sr-only">Open menu</span>
          </Button>
        )}
      />

      {/* Sheet content */}
      <SheetContent side="right" className="w-64 p-6">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold mb-4">Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              onClick={(e) => {
                setOpen(false)
              }}
              key={link.href}
              href={link.href}
              className="text-gray-800 font-medium hover:text-purple-600 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Event Inquiry — The Manhatter Hat Bar`}
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              className:
                'mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full',
            })}
          >
            Book Now
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
