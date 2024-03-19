
const Header = () => {
    return (
        <div>
            
            <nav>
                <div class="navbar bg-white text-black">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FFF] rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><input type="text" className='w-full bg-gray-300' placeholder='Search' /></li>
                            </ul>
                        </div>
                        <a class="btn btn-ghost text-xl font-bold lg:text-3xl">Recipe Calories</a>
                    </div>
                    <div class="navbar-center hidden lg:flex items-end">
                        <ul class="menu menu-horizontal px-1 ml-[250px]">
                        <li><a className="font-semibold">Home</a></li>
                            <li><a className="font-semibold">Recipes</a></li>
                            <li><a className="font-semibold">About</a></li>
                            <li className='ml-[200px]'>
                                <div className="bg-gray-200">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" className='w-[180px] font-semibold bg-gray-200 outline-none' placeholder='Search'  />
                            </div>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="navbar-end">
                        <a class="border-0 btn rounded-[30px] text-black hover:text-white bg-[#0BE58A]"><i class="fa-solid fa-user"></i></a>
                    </div>
                </div>
            </nav>
            
        </div>
        
    );
};

export default Header;