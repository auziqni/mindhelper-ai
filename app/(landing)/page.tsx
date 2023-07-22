import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      landing page
      <div>
        <Link href="/sign-in">
          <Button>sign in</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="destructive">DashbOARD</Button>
        </Link>
      </div>
    </main>
  );
}
