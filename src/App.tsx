import Header from './components/Header/Header';
import Posts from './components/body/Posts';
import TrendingSection from '@/components/TrendingSection/TrendingSection';

const App = () => {
  return (
    <div className='px-5 '>
      <Header />
      <div className='section pb-0 pt-14'>
        <div className='xlg:px-[7.5rem] container mx-auto space-y-5'>
          <TrendingSection />
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default App;
