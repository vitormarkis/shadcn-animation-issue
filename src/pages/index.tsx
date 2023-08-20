import { Inter } from "next/font/google"

import { AlertDialogDemo } from "@/components/AlertDialogDemo"
import { DatePicker } from "@/components/MainProblem"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className="h-screen grid place-items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost">Open</Button>
        </PopoverTrigger>
        <PopoverContent className="p-1 w-[unset]">
          <AlertDialogDemo>
            <Button
              className="h-7"
              variant="ghost">
              Open alert modal
            </Button>
          </AlertDialogDemo>
        </PopoverContent>
      </Popover>
    </main>
  )
}
