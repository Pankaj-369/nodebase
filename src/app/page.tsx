import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

export default function Home() {
  const something = true;
  return (
    <div className="min-h-screen min-w-screen 
    flex items-center justify-center">
      <Button variant="secondary" >
        Click me
      </Button>
    </div>
  )
}