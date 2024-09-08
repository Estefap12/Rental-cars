import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function orderConfirmationPage(){
    return (
    <div>
        <Navbar/>
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-2xl">We appreciate your trust in us!</h1>
                <p>You will receive all the information in your email shortly</p>
                <p>All your reservations are available in the client area.</p>
                <Link href="/">
                  <Button>See the products again</Button>
                </Link>
            </div>
        </div>
    </div>
    );
}