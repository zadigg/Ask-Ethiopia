import Header from './components/Header/Header';
import Posts from './components/body/Posts';
import TrendingSection from '@/components/TrendingSection/TrendingSection';

const App = () => {
  return (
    <div className=' px-5 md:px-0'>
      <div className='  mx-auto space-y-5 lg:w-[935px] xl:w-[1296px]'>
        <Header />
        <TrendingSection />
        <Posts />
      </div>
    </div>
  );
};

export default App;
