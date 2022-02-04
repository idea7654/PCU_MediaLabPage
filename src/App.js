function App() {
  return (
    <div className="App">
      <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div class="lg:flex items-center justify-between">
          <div class="lg:w-1/3">
            <h1 class="text-4xl font-semibold leading-9 text-gray-800 dark:text-white">MultiMedia_Lab</h1>
              <p class="text-base leading-6 mt-4 text-gray-600 dark:text-gray-100">
                배재대학교 게임공학과 MultiMedia_Lab
                <br />
                <br />
              </p>
              <button role="button" aria-label="view catalogue" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 dark:text-white flex items-center hover:underline">
                About Us
                <svg class="ml-2 mt-1 dark:text-white" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.33325 4H10.6666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 6.66667L10.6667 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 1.33398L10.6667 4.00065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="lg:w-7/12 lg:mt-0 mt-8">
              <div class="w-full h-full bg-red-200">
                <img src="https://i.ibb.co/cbyDY74/pexels-max-vakhtbovych-6782351-1-1.png" alt="apartment design" class="w-full sm:block hidden" />
                <img src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" class="sm:hidden block w-full" />
              </div>
              <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" class="w-full" alt="kitchen" />
                <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" class="w-full" alt="sitting room" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-900">
          <div class="max-w-2xl mx-auto text-white py-8">
          <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; 배재대학교 게임공학과 오승묵, 2022. </p>
            <div class="order-1 md:order-2">
                <span class="px-2">About us</span>
                <span class="px-2 border-l">Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
