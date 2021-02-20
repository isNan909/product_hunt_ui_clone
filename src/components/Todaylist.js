import React from 'react';
import imageFour from '../assets/imageFour.gif';
import imageFive from '../assets/imageFive.gif';
import imageSix from '../assets/imageSix.png';
import kona from '../assets/kona.jpeg';
import shout from '../assets/shout.png';

export const Todaylist = () => {
  return (
    <div>
      <div className=" mb-3 flex flex-row justify-between items-center">
        <h2 className="text-f20 text-left text-gray-900 text-xl lg:text-1xl font-bold">
          Today
        </h2>
        <span className="text-f11 uppercase font-medium">
          <a className="mr-2" href="javascript.void(0)">
            popular
          </a>
          <a className="mr-2" href="javascript.void(0)">
            newest
          </a>
        </span>
      </div>
      <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6">
        <div className="flex w-full">
          <ul className="w-full">
            <li>
              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20"  src={imageFour} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    Audioblogs
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      Listen to any web article in your podcast player
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        212
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20" src={imageFive} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    RobinWho
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      The first investment app that will make you cry.
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        212
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20"  src={imageSix} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    Lucky Carrot
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      Make employees super engaged, recognized, and appreciated
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        212
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20" src={kona} alt="product hunt" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    Kona
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      Build remote team culture in Slack
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        212
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      2,469
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200">
                <div>
                  <img className="w-20 h-20" src={shout} alt="shout" />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    Shout
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      Attract more customers by highliting why people trust you.
                    </a>
                  </p>
                  <div>
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2">
                      <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.01156 7.83208C1.20956 7.05208 0.726562 6.04508 0.726562 4.94608C0.726562 2.46608 3.18956 0.455078 6.22656 0.455078C9.26456 0.455078 11.7266 2.46508 11.7266 4.94608C11.7266 7.42608 9.26456 9.43808 6.22656 9.43808C5.50211 9.43979 4.78237 9.32152 4.09656 9.08808C3.02656 9.70808 0.930562 10.5281 0.930562 10.5281C0.930562 10.5281 1.63056 8.84308 2.01156 7.83208V7.83208Z"
                          fill="#6F6F6F"
                        />
                      </svg>
                      <p className="text-f11 uppercase ml-1 font-medium">
                        {' '}
                        122
                      </p>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded">
                  <div className="flex-col align-center items-center pl-2 pr-2 pt-4 pb-4 inset-y-3">
                    <svg
                      className="m-auto"
                      width="12"
                      height="11"
                      viewBox="0 0 26 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.134 0.499999C12.5189 -0.166668 13.4811 -0.166667 13.866 0.5L25.1244 20C25.5093 20.6667 25.0281 21.5 24.2583 21.5H1.74167C0.971868 21.5 0.490744 20.6667 0.875644 20L12.134 0.499999Z"
                        fill="black"
                      />
                    </svg>
                    <span className="text-f13 font-semibold mt-1 block">
                      1,200
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todaylist;
