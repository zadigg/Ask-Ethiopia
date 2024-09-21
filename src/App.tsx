import Header from './components/Header/Header';
import Posts from './components/body/Posts';
import TrendingSection from '@/components/TrendingSection/TrendingSection';

const App = () => {
  return (
    <div className='px-5 '>
      <div className='section pb-0 '>
        <div className='container mx-auto space-y-5 lg:px-[7.5rem]'>
          <Header />
          <TrendingSection />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;
