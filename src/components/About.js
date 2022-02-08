import React from 'react';
import { useNavigate } from 'react-router-dom';
function About() {
    let navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(false);
    const [sub1Title, setSub1Title] = React.useState('1월 정기 성과발표회');
    function returnMain(e) {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <nav class="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
                <div class="logo">
                    <h1 onClick={returnMain} class="text-white ml-4 cursor-pointer text-2xl">
                        MultiMedia_Lab
                    </h1>
                </div>
            </nav>
            <main class="py-12 md:px-20 sm:px-14 px-6">
                <div class="sm:flex items-center shadow-md">
                    <div class="md:px-10 sm:px-5">
                        <h1 class="text-gray-800 font-bold text-2xl my-2">Study About Algorithm</h1>
                        <p class="text-gray-700 mb-2 md:mb-6">
                            백준 사이트에서 매주 7~10문제의 알고리즘 문제를 해결합니다.
                            <br />
                            일주일에 1번씩 해결했던 알고리즘 문제를 기반으로
                            <br />
                            코드 리뷰를 진행합니다.
                        </p>
                        <div class="flex justify-between mb-2">
                            <div></div>
                            <span class="sm:block hidden mb-2 text-gray-800 font-bold">
                                <a href="https://github.com/idea7654/MediaLab_Algorithm">Show Repository</a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <img
                            class="bg-cover"
                            //src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            src={`${process.env.PUBLIC_URL}/algorithm.jpg`}
                            alt=""
                        />
                    </div>
                </div>
                <div class="mt-6 md:flex space-x-6">
                    <div>
                        <img
                            //src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            src={`${process.env.PUBLIC_URL}/about2.jpg`}
                            alt=""
                        />
                        <div>
                            <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">{sub1Title}</h1>
                            <p class="text-gray-700 mb-2">
                                MultiMedia_Lab에서 1월 정기 성과발표회를 진행하였습니다.
                                <br />
                                내부 발표의 형태로 학과의 교수님들이 참가해주셨습니다.
                            </p>
                            <div class="flex justify-between mt-4 focus:outline-none hover:underline">
                                <div></div>
                                <span onClick={setShowModal} class="mb-2 text-gray-800 font-bold">
                                    Read more
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt=""
                        />
                        <div>
                            <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">Comming Soon...</h1>
                            <p class="text-gray-700 mb-2">Comming Soon!</p>
                            <div class="flex justify-between mt-4">
                                <div></div>
                                <span class="mb-2 text-gray-800 font-bold">Read more</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                            alt=""
                        />
                        <div>
                            <h1 class="mt-3 text-gray-800 text-2xl font-bold my-2">Comming Soon...</h1>
                            <p class="text-gray-700 mb-2">Comming Soon!</p>
                            <div class="flex justify-between mt-4">
                                <div></div>
                                <span class="mb-2 text-gray-800 font-bold">Read more</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </main>
            {showModal ? (
                <div>
                    <div className="pt-32 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">{sub1Title}</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        <img src={`${process.env.PUBLIC_URL}/about2.jpg`} alt="" />
                                        <br></br>
                                        여기다가 내용을 적으면 됩니다.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}
        </div>
    );
}

export default About;
