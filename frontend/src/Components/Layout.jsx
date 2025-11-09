import { useNavigate } from 'react-router-dom'

function Layout() {
    const navigate = useNavigate()

    // Handle Menu
    const handleExplore = (e) => {
        e.preventDefault()
        navigate('/explore')
    }

    // Handle Log Out
    const handleLogout = () => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className="flex h-screen text-black font-semibold">
            {/* Sidebar / Dashboard */}
            <div className="w-1/4 bg-white shadow-md flex flex-col justify-between p-6">
                {/* User Profile */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-black">Profile</h2>
                    <div className="space-y-2">
                        <p className="font-medium cursor-pointer">User Name</p>
                        <button className="text-sm text-blue-600 hover:underline cursor-pointer">Settings</button>
                    </div>
                </div>

                {/* Menu */}
                <div className="mt-16 space-y-4">
                    <h3 className="text-4xl font-semibold mb-8 text-center">Menu</h3>
                    <button
                        onClick={handleExplore}
                        className="w-full py-2 rounded-lg bg-blue-400 hover:bg-blue-600 hover:underline cursor-pointer text-white transition">
                        Explore
                    </button>
                    <button className="w-full py-2 rounded-lg bg-blue-400 hover:bg-blue-600 hover:underline cursor-pointer text-white transition">
                        Get Recommendation
                    </button>
                    <button className="w-full py-2 rounded-lg bg-blue-400 hover:bg-blue-600 hover:underline cursor-pointer text-white transition">
                        Playlist
                    </button>
                </div>

                {/* Log Out */}
                <div className="mt-auto pt-8">
                    <button className="w-full py-2 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                        Log out
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300"></div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center text-3xl font-semibold">
                Main Section
            </div>
        </div>
    );
}

export default Layout;
