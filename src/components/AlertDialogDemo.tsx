import React from "react"

import { cn } from "@/lib/utils"

import { AccordionStuff } from "@/components/AccordionStuff"
import { DatePicker } from "@/components/MainProblem"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export type AlertDialogDemoProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode
}

export const AlertDialogDemo = React.forwardRef<React.ElementRef<"div">, AlertDialogDemoProps>(
  function AlertDialogDemoComponent({ children, ...props }, ref) {
    return (
      <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent
          {...props}
          className={cn("", props.className)}
          ref={ref}>
          <AlertDialogHeader>
            <DatePicker />
            <AccordionStuff />
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancel</Button>
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
)

AlertDialogDemo.displayName = "AlertDialogDemo"
