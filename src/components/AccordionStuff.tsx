import React, { useState } from "react"

import { cn } from "@/lib/utils"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export type AccordionStuffProps = React.ComponentPropsWithoutRef<"div"> & {}

export const AccordionStuff = React.forwardRef<React.ElementRef<"div">, AccordionStuffProps>(
  function AccordionStuffComponent({ ...props }, ref) {
    const [whichAccordionOpen, setWhichAccordionOpen] = useState("")

    const handleToggleAccordion = () => {
      setWhichAccordionOpen(openedNow => (openedNow === "subtasks" ? "" : "subtasks"))
    }

    const isAccordionOpen = whichAccordionOpen === "subtasks"

    return (
      <Accordion
        type="single"
        collapsible
        className="flex-1"
        value={whichAccordionOpen}
        onValueChange={setWhichAccordionOpen}>
        <AccordionItem
          value="subtasks"
          className="flex flex-col">
          <div className="flex justify-between grow py-2">
            <span>Checkbox and label</span>
            <button
              onClick={handleToggleAccordion}
              className={cn(
                "h-7 grid place-items-center rounded-md px-4 text-xs bg-background-shadow",
                isAccordionOpen && "bg-[#f00]"
              )}>
              {!isAccordionOpen && <span>Click me</span>}
              {isAccordionOpen && <span>Click me AGAIN!</span>}
            </button>
          </div>
          <AccordionContent className="flex data-[state=open]:pb-4 w-full">
            subtasks
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                {[0, 1, 2].map(subtask => (
                  <div
                    key={subtask}
                    className="__two h-7 bg-background w-full"
                  />
                ))}
              </div>
              <button>Add new subtask</button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
)

AccordionStuff.displayName = "AccordionStuff"
