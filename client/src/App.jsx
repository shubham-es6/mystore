import Header from "@components/Header";
import Footer from "@components/Footer";
import HomeScreen from "@screens/Home";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-200">
      <Header />

      <div className="h-[57px] lg:h-[97px]"></div>

      <div className="grow">
        <HomeScreen />
      </div>
      <Footer />
    </div>
  );
};

export default App;
