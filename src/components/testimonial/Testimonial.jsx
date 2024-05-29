    /* eslint-disable react/no-unescaped-entities */

    const Testimonial = () => {
        return (
            <div>
                <section className="text-gray-600 body-font mb-10">
                    {/* main  */}
                    <div className="container px-5 py-10 mx-auto">
                        {/* Heading  */}
                        <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                        {/* para  */}
                        <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>
    
                        <div className="flex flex-wrap -m-4">
                            {/* Testimonial 1 */}
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D03AQHy20WXH71-8w/profile-displayphoto-shrink_200_200/0/1714117041410?e=2147483647&v=beta&t=fPZLv9ARFckwc-BqceQXTK3bGhq-P8xjQ5vrAVIBVrE" />
                                    <p className="leading-relaxed">Designing, coding, and maintaining websites and web applications using frontend and backend technologies.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sohaib Aamir</h2>
                                    <p className="text-gray-500">AI Specialist</p>
                                </div>
                            </div>
    
                            {/* Testimonial 2 */}
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D5603AQHxbjlp_n3c0g/profile-displayphoto-shrink_200_200/0/1716966775966?e=2147483647&v=beta&t=958WNLr_aWxesENZBwcBZfnhPjb0HFZ8nz6KiqpykSE" />
                                    <p className="leading-relaxed">Crafting intuitive, responsive, and visually appealing user interfaces with HTML, CSS, and JavaScript technologies.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mohammad Ali</h2>
                                    <p className="text-gray-500">Web developer</p>
                                </div>
                            </div>
    
                            {/* Testimonial 3 */}
                            <div className="lg:w-1/3 lg:mb-0 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://media.licdn.com/dms/image/D4D03AQG0j3uVPgBEgg/profile-displayphoto-shrink_200_200/0/1707072736366?e=2147483647&v=beta&t=MON6GTaErS1Up39upijvdp_pxnoj7tVhoqMsiCOxpSs" />
                                    <p className="leading-relaxed">Web development requires problem-solving skills and the ability to adapt to new technologies and industry.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Moeez Abdullah </h2>
                                    <p className="text-gray-500">Front-End Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    
    export default Testimonial