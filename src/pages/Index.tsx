
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Introduction from '@/components/Introduction';
import Causes from '@/components/Causes';
import Timeline from '@/components/Timeline';
import KeyFigures from '@/components/KeyFigures';
import Gallery from '@/components/Gallery';
import Legacy from '@/components/Legacy';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-charcoal min-h-screen">
      <Navigation />
      <Header />
      <Introduction />
      <Causes />
      <Timeline />
      <KeyFigures />
      <Gallery />
      <Legacy />
      <Footer />
    </div>
  );
};

export default Index;
