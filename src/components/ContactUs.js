import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function ContactUs() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function returnMain(e) {
        e.preventDefault();
        navigate('/');
    }

    function sendEmail(e) {
        e.preventDefault();

        const formData = {
            user_name: name,
            user_phone: phone,
            subject: subject,
            message: message,
        };

        if (name == '' || phone == '' || subject == '' || message == '') {
            alert('모든 내용을 채워주세요.');
            return;
        }

        //console.log(formData);
        emailjs.send('service_jr2u9kh', 'template_l88aesn', formData, 'user_teRW5LKjdVewRwjCDkvsh').then(
            (result) => {
                console.log(result.text);
            },
            (err) => {
                console.log(err.text);
            },
        );
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
            <div className="pt-24 w-full bg-blue-200 h-screen text-white">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
                        <form action="" method="post">
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Name</label>
                                    <input
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setName(e.target.value);
                                        }}
                                        type="text"
                                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                                        placeholder="이름을 기입해주세요"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none text-gray-300">Phone</label>
                                    <input
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setPhone(e.target.value);
                                        }}
                                        type="tel"
                                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                                        placeholder="휴대폰 번호를 기입해주세요"
                                    />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Subject</label>
                                    <input
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setSubject(e.target.value);
                                        }}
                                        type="text"
                                        className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                                        placeholder="메일 제목"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none text-gray-300">Message</label>
                                    <textarea
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setMessage(e.target.value);
                                        }}
                                        type="text"
                                        className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                                        placeholder="학과-학번은 반드시 기입해주시길 바랍니다. 외부인의 경우, 소속을 밝혀주시길 바랍니다."
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button
                                    onClick={sendEmail}
                                    className="mt-12 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
