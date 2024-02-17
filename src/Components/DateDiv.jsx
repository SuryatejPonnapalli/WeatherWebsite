const Date = ({isDarkMode,search,data}) => {
    return ( 
        <section className={`flex flex-col items-center justify-center shadow-xl shadow-black  pt-4 w-96 rounded-3xl mt-8 pb-4 ${isDarkMode?"text-white bg-[#444444]":"text-black bg-[#D9D9D9]"}`}>
            <header className="font-bold text-3xl">
               Athens
            </header>
            <h1 className="font-bold text-6xl pt-12">
                09:03
            </h1>
            <p>
                Thursday,31 Aug
            </p>
        </section>

     );
}
 
export default Date;