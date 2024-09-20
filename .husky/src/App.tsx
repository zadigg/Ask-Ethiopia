import Header from './components/Header/Header';
import Posts from './components/body/Posts';
import TrendingSection from './components/carousel/TrendingSection';

const App = () => {
  return (
    <div className='p-5'>
      <Header />
      <TrendingSection />
      <Posts />
    </div>
  );
};

export default App;
