import Landing from './components/Landing';
import About from './components/About';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ContactUs from './components/ContactUs';

function App() {
    let navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(true);

    React.useEffect(() => {
        setShowModal(true);
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
            <div className="bg-gray-900">
                <div className="max-w-2xl mx-auto text-white py-8">
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; 배재대학교 게임공학과 오승묵, 2022. </p>
                        <div className="order-1 md:order-2">
                            <span
                                className="px-2"
                                onClick={() => {
                                    navigate('/about');
                                }}
                            >
                                About us
                            </span>
                            <span
                                onClick={() => {
                                    navigate('/contact');
                                }}
                                className="px-2 border-l"
                            >
                                Contact us
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">2022년도 1학기 신규인원 모집중!</h3>
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
                                        <p className="my-4 text-blueGray-500 text-2xl leading-relaxed">
                                            MultiMedia_Lab에서 2022년도 1학기 신규인원을 모집하고 있습니다.
                                            <br></br>
                                            신청기간은
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
                    </>
                ) : null}
            </>
        </div>
    );
}

export default App;
