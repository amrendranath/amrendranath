import { useEffect } from "react";
import Typed from "typed.js";

function App() {
  useEffect(() => {
    let typed = new Typed(".auto-input", {
      strings: ["Amrendra Nath.", "Frontend Engineer."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <main>
      <div className="bg-gray-900 p-10 h-screen flex justify-center items-start flex-col">
        <h1 className="text-5xl text-white">Hello 👋</h1>
        <h1 className="text-5xl text-white pt-20">
          I'm <span className="auto-input"></span>
        </h1>
        <p className="text-gray-400 mt-5 text-lg">
          You can reach out to me if you need any help in making <br /> a
          website for you or your business.
        </p>
        <p className="font-bold text-white py-5">Have a nice day ahead 😊</p>
        <a
          class="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600"
          href="https://drive.google.com/uc?id=1BSOICLWTYtftJ4f4P8kCIwXqdSoLYxqJ&export=download"
          download
        >
          <i className="lni lni-cloud-download" /> Download CV
        </a>
      </div>
    </main>
  );
}

export default App;
