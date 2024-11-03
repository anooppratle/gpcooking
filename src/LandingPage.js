import React, { useState, useEffect } from "react";
import logo from "./logolight.svg";
const LandingPage = () => {
  const [isDark, setIsDark] = useState(true);
  const [email, setEmail] = useState("");
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
      setScale((prev) => {
        if (rotation < 180) {
          return 1 + (rotation / 180) * 0.2;
        } else {
          return 1.2 - ((rotation - 180) / 180) * 0.2;
        }
      });
    }, 50);

    return () => clearInterval(animationInterval);
  }, [rotation]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div>
      <main
        className={`min-h-screen w-full transition-colors duration-300 ${
          isDark ? "dark bg-zinc-800" : "bg-white"
        }`}
      >
        {/* Theme Toggle - Updated for better responsiveness */}
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors z-50"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-8.364l-1.414 1.414M6.05 17.95l-1.414 1.414m15.364 0l-1.414-1.414M6.05 6.05L4.636 4.636"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <img src={logo} alt="" />
          <span
            className={`text-xl font-bold ${
              isDark ? "dark text-orange-500" : "text-orange-500"
            }`}
          >
            Gopratle
          </span>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-24 lg:pt-32 relative z-10">
          <div className="max-w-2xl">
            <h1
              className={`text-4xl md:text-6xl text-left font-manrope font-bold mb-8 ${
                isDark ? "dark text-white" : "text-zinc-900"
              }`}
            >
              We're building our ecosystem
            </h1>

            <form
              //   onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row sm:gap-0 gap-2 max-w-md"
            >
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border sm:w-80 outline-none border-orange-400 p-2 font-montserrat"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 font-montserrat"
              >
                Sign up
              </button>
            </form>

            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-left sm:w-3/5 sm:mt-60 mt-40 text-orange-500">
              Effortless event planning, tailored for every occasion.
            </h2>
          </div>
        </div>

        {/* Animated Background */}
        <div className="absolute sm:left-80 inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute inset-0 flex items-center justify-center ">
            <div
              className="relative w-[900px] h-[900px]"
              style={{ transform: `scale(${scale})` }}
            >
              {/* Large Circle */}
              <div
                className="absolute inset-0 border-[2px] border-orange-500/20 rounded-full"
                style={{ transform: `rotate(${rotation}deg)` }}
              />

              {/* Medium Circle */}
              <div
                className="absolute inset-[220px] border-[2px] border-orange-500/20 rounded-full"
                style={{ transform: `rotate(${-rotation * 1.5}deg)` }}
              />

              {/* Small Circle */}
              <div
                className="absolute inset-[337px] border-[2px] border-orange-500/20 rounded-full"
                style={{ transform: `rotate(${rotation * 2}deg)` }}
              />

              {/* Center Star (Fixed) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110px] h-[130px] flex items-center justify-center">
                <svg
                  width="175"
                  height="175"
                  viewBox="0 0 175 175"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M173.472 86.6488C174.696 86.753 174.69 88.5466 173.465 88.6422L146.082 90.7784C144.938 90.8677 144.821 92.4995 145.941 92.7511L172.854 98.7969C174.053 99.0661 173.805 100.841 172.579 100.771L144.963 99.2041C143.821 99.1393 143.482 100.733 144.552 101.138L169.82 110.709C170.973 111.146 170.469 112.875 169.262 112.623L142.482 107.036C141.364 106.803 140.791 108.324 141.786 108.886L166.037 122.576C167.108 123.181 166.354 124.81 165.2 124.385L139.4 114.88C138.325 114.484 137.536 115.913 138.445 116.611L160.023 133.18C161 133.93 160.022 135.438 158.939 134.853L135.116 121.981C134.107 121.436 133.124 122.742 133.927 123.561L153.043 143.064C153.904 143.943 152.726 145.299 151.736 144.569L129.617 128.271C128.696 127.592 127.541 128.742 128.216 129.666L144.76 152.315C145.485 153.307 144.13 154.479 143.253 153.619L123.149 133.909C122.331 133.108 121.026 134.087 121.567 135.096L134.652 159.508C135.232 160.591 133.726 161.564 132.977 160.589L116.251 138.806C115.553 137.897 114.123 138.685 114.519 139.76L123.854 165.097C124.28 166.255 122.642 167.007 122.042 165.929L108.811 142.152C108.256 141.154 106.731 141.716 106.957 142.835L112.456 170.136C112.699 171.34 110.976 171.837 110.54 170.688L100.832 145.059C100.426 143.985 98.8262 144.331 98.8993 145.476L100.652 172.931C100.73 174.157 98.9571 174.417 98.6796 173.221L92.4008 146.143C92.1424 145.029 90.5186 145.151 90.4296 146.291L88.2816 173.825C88.186 175.051 86.3924 175.057 86.2882 173.832L83.9437 146.284C83.8467 145.145 82.2222 145.034 81.9716 146.15L76.0119 172.68C75.7418 173.882 73.9597 173.627 74.0382 172.397L75.7659 145.33C75.8388 144.189 74.2474 143.839 73.8351 144.906L63.871 170.696C63.4281 171.842 61.7083 171.334 61.9593 170.131L67.6255 142.972C67.8595 141.851 66.3298 141.281 65.7727 142.282L52.6143 165.929C52.0143 167.007 50.3755 166.255 50.8021 165.097L60.1787 139.646C60.5737 138.574 59.1516 137.785 58.4506 138.687L41.154 160.954C40.4022 161.922 38.904 160.948 39.4829 159.868L52.7091 135.192C53.2514 134.181 51.9399 133.202 51.1242 134.009L31.6287 153.312C30.754 154.178 29.3916 153.005 30.1177 152.011L46.4398 129.666C47.1147 128.742 45.9602 127.592 45.0391 128.271L22.9201 144.569C21.9295 145.299 20.7514 143.943 21.6128 143.064L40.7813 123.508C41.5828 122.69 40.6039 121.386 39.5947 121.927L15.4744 134.855C14.3889 135.437 13.4163 133.924 14.3964 133.178L36.1172 116.647C37.031 115.952 36.2434 114.516 35.1658 114.913L9.20916 124.476C8.05688 124.901 7.30159 123.276 8.36886 122.669L32.5902 108.884C33.5819 108.32 33.0066 106.802 31.8899 107.036L5.50741 112.58C4.29995 112.834 3.79369 111.104 4.94752 110.667L30.1041 101.138C31.1738 100.733 30.8352 99.1393 29.6933 99.2041L2.0774 100.771C0.851305 100.841 0.603366 99.0661 1.80158 98.7969L28.7153 92.7511C29.8351 92.4995 29.7181 90.8677 28.5739 90.7784L1.19116 88.6422C-0.0341339 88.5466 -0.0404482 86.753 1.18414 86.6488L28.7325 84.3042C29.872 84.2073 29.9827 82.5828 28.8669 82.3322L2.33656 76.3724C1.13409 76.1023 1.3895 74.3203 2.61942 74.3988L29.6861 76.1265C30.8279 76.1993 31.1774 74.608 30.1102 74.1957L4.42362 64.2713C3.27651 63.8281 3.7862 62.107 4.98967 62.3599L31.7611 67.9858C32.8812 68.2212 33.4542 66.695 32.456 66.135L8.3751 52.6262C7.30436 52.0256 8.04902 50.3967 9.20383 50.8135L35.2896 60.2279C36.3662 60.6164 37.1455 59.1847 36.2347 58.4915L14.3964 41.8712C13.4163 41.1253 14.3889 39.6122 15.4744 40.1941L39.5947 53.1225C40.6039 53.6635 41.5828 52.3589 40.7813 51.5412L21.6127 31.9854C20.7514 31.1066 21.9295 29.7504 22.9201 30.4803L44.9654 46.7242C45.8884 47.4043 47.0438 46.249 46.3636 45.326L30.1198 23.2807C29.3898 22.2901 30.7461 21.112 31.6248 21.9733L51.1806 41.1419C51.9983 41.9434 53.3029 40.9645 52.762 39.9553L39.8335 15.835C39.2516 14.7495 40.7647 13.7769 41.5106 14.757L58.1309 36.5953C58.8241 37.5061 60.2558 36.7268 59.8673 35.6502L50.4529 9.56442C50.0361 8.40962 51.665 7.66496 52.2656 8.73569L65.7744 32.8166C66.3344 33.8148 67.8606 33.2418 67.6252 32.1217L61.9993 5.35026C61.7464 4.14679 63.4675 3.63709 63.9107 4.7842L73.8351 30.4708C74.2474 31.538 75.8388 31.1885 75.7659 30.0467L74.0382 2.98C73.9597 1.75007 75.7418 1.49467 76.0119 2.69713L81.9688 29.2149C82.2195 30.331 83.8446 30.2198 83.9409 29.08L86.2882 1.30413C86.3917 0.078784 88.1866 0.0850458 88.2816 1.31109L90.4323 29.074C90.5206 30.2145 92.145 30.337 92.4034 29.2226L98.6796 2.15648C98.9571 0.960049 100.73 1.22039 100.652 2.44607L98.8993 29.9006C98.8262 31.0462 100.426 31.392 100.832 30.3186L110.503 4.78892C110.938 3.63911 112.662 4.137 112.418 5.34198L106.957 32.2576C106.73 33.3754 108.251 33.9405 108.809 32.9457L122.141 9.18033C122.743 8.10602 124.377 8.85943 123.951 10.0153L114.552 35.5264C114.155 36.604 115.591 37.3916 116.287 36.4777L132.817 14.757C133.563 13.7769 135.076 14.7495 134.495 15.835L121.516 40.0489C120.976 41.0555 122.274 42.0343 123.094 41.2389L143.256 21.6701C144.136 20.8152 145.485 21.9927 144.757 22.9809L128.292 45.326C127.612 46.249 128.767 47.4043 129.691 46.7242L151.736 30.4803C152.726 29.7504 153.904 31.1066 153.043 31.9854L133.927 51.4882C133.124 52.3073 134.107 53.6132 135.116 53.0679L158.939 40.1959C160.022 39.6107 161 41.1191 160.023 41.8688L138.331 58.5254C137.425 59.2209 138.205 60.6469 139.28 60.2592L165.208 50.9016C166.365 50.4841 167.108 52.118 166.034 52.716L141.921 66.1333C140.92 66.6904 141.49 68.2201 142.612 67.9861L169.77 62.3199C170.973 62.0689 171.481 63.7887 170.335 64.2316L144.546 74.1957C143.478 74.608 143.828 76.1993 144.97 76.1265L172.036 74.3988C173.266 74.3203 173.522 76.1023 172.319 76.3724L145.789 82.3322C144.673 82.5828 144.784 84.2073 145.923 84.3042L173.472 86.6488Z"
                    fill="currentColor"
                    className="text-orange-500"
                  />
                </svg>
              </div>

              {/* Orbital Dots */}
              <div
                className="absolute w-10 h-10 bg-orange-500 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${rotation}deg) translate(450px) rotate(-${rotation}deg)`,
                }}
              />
              <div
                className="absolute w-12 h-12 bg-orange-500 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${
                    -rotation * 1.5
                  }deg) translate(340px) rotate(${rotation * 1.5}deg)`,
                }}
              />
              <div
                className="absolute w-16 h-16 bg-orange-500 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${
                    rotation * 2
                  }deg) translate(230px) rotate(-${rotation * 2}deg)`,
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
