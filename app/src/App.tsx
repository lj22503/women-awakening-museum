import { Navigation } from '@/components/Navigation';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { Hero } from '@/sections/Hero';
import { ProblemRadar } from '@/sections/ProblemRadar';
import { MBTIGallery } from '@/sections/MBTIGallery';
import { ExhibitionHalls } from '@/sections/ExhibitionHalls';
import { DailyCard } from '@/sections/DailyCard';
import { DataWall } from '@/sections/DataWall';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FloatingActionButton />
      <main>
        <Hero />
        <ProblemRadar />
        <ExhibitionHalls />
        <MBTIGallery />
        <DailyCard />
        <DataWall />
      </main>
      <Footer />
    </div>
  );
}

export default App;
