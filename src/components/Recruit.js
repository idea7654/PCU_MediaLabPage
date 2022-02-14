import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Recruit({ setShowModal }) {
    let navigate = useNavigate();

    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [gpa, setGpa] = useState('');

    function returnMain(e) {
        e.preventDefault();
        navigate('/');
        setShowModal(true);
    }

    function buttonClick(e) {
        e.preventDefault();
        //email.js로 보낼거 넣으면됨

        if (id === '' || message === '' || name === '' || tel === '' || gpa === '') {
            alert('빈 칸을 입력해주세요.');
            return;
        }

        const formData = {
            user_name: name,
            user_phone: tel,
            user_subject: id,
            user_gpa: gpa,
            message: message,
        };

        emailjs.send('service_jr2u9kh', 'template_s0g3o4e', formData, 'user_teRW5LKjdVewRwjCDkvsh').then(
            (result) => {
                console.log(result.text);
            },
            (err) => {
                console.log(err.text);
            },
        );
        alert('지원 완료되었습니다.');
        navigate('/');
    }
    return (
        <div className="bg-blue-100">
            <nav class="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
                <div class="logo">
                    <h1 onClick={returnMain} class="text-white ml-4 cursor-pointer text-2xl">
                        MultiMedia_Lab
                    </h1>
                </div>
            </nav>
            <form>
                <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
                    <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
                        <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">지원 Form</h1>
                        <div class="space-y-4">
                            <div>
                                <label for="title" class="text-lx font-serif">
                                    학번
                                </label>
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setId(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="xx880xx"
                                    id="title"
                                    class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label for="description" class="block mb-2 text-lg font-serif">
                                    지원동기 및 자기소개:
                                </label>
                                <textarea
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setMessage(e.target.value);
                                    }}
                                    id="description"
                                    cols="30"
                                    rows="10"
                                    placeholder="write here.."
                                    class="bg-blue-100 w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                                ></textarea>
                            </div>
                            <div>
                                <label for="name" class="text-lx font-serif">
                                    이름:
                                </label>
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setName(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="name"
                                    id="name"
                                    class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label for="tel" class="text-lx font-serif">
                                    전화번호:
                                </label>
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setTel(e.target.value);
                                    }}
                                    type="tel"
                                    placeholder="010-xxxx-xxxx"
                                    id="tel"
                                    class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label for="email" class="text-lx font-serif">
                                    직전학기 성적(전공):
                                </label>
                                <input
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setGpa(e.target.value);
                                    }}
                                    type="text"
                                    placeholder="3.73"
                                    id="email"
                                    class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                                />
                            </div>
                            <br />
                            <div className="text-green-600">기타 문의사항은 010-4071-1402 또는 Contact us로 문의 바랍니다.</div>
                            <br />
                            <button
                                onClick={buttonClick}
                                class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  "
                            >
                                지원하기
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Recruit;
