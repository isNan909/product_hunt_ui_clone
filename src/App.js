import Navbar from './components/Navbar';
import Mainfeed from './components/Mainfeed';
import Asidebar from './components/Asidebar';

function App() {
  return (
    <header className="text-gray-600 body-font">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-4 sm:col-span-4 lg:col-span-4">
              <Mainfeed />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Asidebar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;  
