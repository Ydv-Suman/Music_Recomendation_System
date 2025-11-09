import logo from '../../assets/logo.png'

function LandingPage() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/** logo side */}
            <div className="w-1/2 flex flex-col items-center justify-center text-center space-y-4">
                <img
                    src={logo}
                    alt="SoundNex Logo"
                    className="w-178 h-auto"
                />
                <p className="text-2xl text-gray-600 max-w-md">
                    Discover your next favorite track with smart, personalized music recommendations.
                </p>
                <p className="text-2xl font-semibold text-gray-700 mt-1.5">
                    Experience music made for you.
                </p>
            </div>

            {/** Middle Line */}
            <div className="w-px bg-gray-400"></div>

            {/** Login side */}
            <div className="w-1/2 flex items-center justify-center ">
                <div className="border p-10 rounded-2xl shadow-md w-[400px] bg-white">
                    <h1 className="text-4xl font-semibold text-center mb-5 text-gray-800">Welcome!!!</h1>

                    <form className="flex flex-col space-y-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                            />
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="mt-2 cursor-pointer bg-blue-300 hover:bg-blue-500 text-white font-semibold py-3 w-80 self-center rounded-md transition-all"
                        >
                            Login
                        </button>

                        {/* Forget Password */}
                        <button
                            type="button"
                            className="cursor-pointer text-blue-700 font-semibold py-1 rounded-md transition-all"
                        >
                            Forget Password
                        </button>

                        <div className="border-b border-gray-300 w-full my-2"></div>

                        {/* Create Account */}
                        <button
                            type="button"
                            className="mt-8 cursor-pointer bg-green-400 hover:bg-green-600 text-white font-semibold py-3 w-60 self-center rounded-md transition-all"
                        >
                            Create Account
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
