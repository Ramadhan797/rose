import RoseCursor from '@/components/RoseCursor';
import FloatingPetals from '@/components/FloatingPetals';
import HeroSection from '@/components/HeroSection';
import GenderSelection from '@/components/GenderSelection';
import RoseMessage from '@/components/RoseMessage';
import RoseGarden from '@/components/RoseGarden';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none overflow-x-hidden">
      {/* Custom Rose Cursor */}
      <RoseCursor />
      
      {/* Floating Petals Background */}
      <FloatingPetals count={25} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section with 3D Rose */}
        <HeroSection />
        
        {/* Gender Selection Section */}
        <GenderSelection />
        
        {/* Romantic Message with Typewriter */}
        <RoseMessage />
        
        {/* Interactive Rose Garden */}
        <RoseGarden />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
