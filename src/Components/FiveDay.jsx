const FiveDay = ({isDarkMode}) => {
    return ( 
        <section className={`flex hidden flex-col pl-6 shadow-2xl w-96 rounded-3xl mt-8 pb-4 shadow-neutral-950 pt-4 ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header>
                <h3 className="text-center text-3xl font-bold">5 Day Forecast:</h3>
            </header>
            <article className="flex flex-row justify-between pt-4 items-center pr-8 pl-2">
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                </div>
                <div>
                <p className="text-xl font-semibold">24°C</p>
                </div>
                <div>
                <p className="text-xl font-semibold">Friday, 1 Sep</p>
                </div>
            </article>
        </section>
     );
}
 
export default FiveDay;