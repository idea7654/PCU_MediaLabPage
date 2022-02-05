import React from 'react';

function About() {
    return (
        <div>
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
        </div>
    );
}

export default About;
