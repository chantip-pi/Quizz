import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
  
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">Mushroom Personality Quiz</h1>
      <p className="text-lg text-black">
        Discover which mushroom matches your personality!
      </p>
      <Link href="/quiz">
        <Button size="lg">Start Quiz</Button>
      </Link>
    </div>
  </main>
      
  );
}
