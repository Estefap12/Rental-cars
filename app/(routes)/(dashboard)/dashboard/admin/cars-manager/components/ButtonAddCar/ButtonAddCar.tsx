"use client"
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar";

export function ButtonAddCar() {
    const[openDialog,setOpenDiaolog] = useState(false)
  return (
    <Dialog open = {openDialog}>
        <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setOpenDiaolog(true)}>
                Add new car
                <PlusCircle className="ml-2"/>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    <FormAddCar setOpenDiaolog={setOpenDiaolog}/>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
  
}
