import { Link } from "react-router-dom"

const FeaturedPost = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/*first*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/*image/>*/}
                <img src="featured1.jpg" className="rounded-3xl object-cover" />
                {/*details*/}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/*title*/}
                <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                </Link>
            </div>
            {/*others*/}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">

                <div className=" lg:h-1/3 flex justify-between gap-4">
                    <img src="featured2.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" />
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">01.</h1>
                            <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl  font-medium ">
                            Lorem ipsum dolor sit amet consectetur.
                        </Link>
                    </div>
                </div>
                
                <div className=" lg:h-1/3 flex justify-between gap-4">
                    <img src="featured3.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" />
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">01.</h1>
                            <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl  font-medium ">
                            Lorem ipsum dolor sit amet consectetur.
                        </Link>
                    </div>
                </div>

                <div className=" lg:h-1/3 flex justify-between gap-4">
                    <img src="featured4.jpg" className="rounded-3xl object-cover w-1/3 aspect-video" />
                    <div className="w-2/3">
                        <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                            <h1 className="font-semibold lg:text-lg">01.</h1>
                            <Link className="text-blue-800 lg:text-lg">Web Design</Link>
                            <span className="text-gray-500">2 days ago</span>
                        </div>
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl  font-medium ">
                            Lorem ipsum dolor sit amet consectetur.
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeaturedPost