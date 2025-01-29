export default function Navbar(){
    return (
        <nav
        className="fixed top-0 left-0 w-full px-6 py-4 flex justify-end items-center">

            <div>
                <button className="bg-red-950 hover:bg-red-900 text-white px-8 py-3 rounded-full text-base font-semibold flex items-center mx-auto" >
                    login
                </button>
            </div>
        
        </nav>
    )
}