const PropsDaily = ({ localTime, timeHours }) => {
    let temperatureContent = null;

    if (timeHours !== null && typeof localTime === 'string') {
        const timeComponents1 = localTime.split(", ")[0].split("/");
        const daysCurrent = timeComponents1[1];
        const validIndices = [];

        for (let i = 0; i < 40; i++) {
            const currentDate = parseInt(timeHours[i].dt_txt.split(' ')[0].split('-')[2]);
            const currentHour = parseInt(timeHours[i].dt_txt.split(' ')[1].split(':')[0]);

            if (currentDate > parseInt(daysCurrent) && currentHour === 15) {
                validIndices.push(i); // Save the value of i
            }
        }

        temperatureContent = validIndices.map(index => (
            <div className="flex flex-row items-center justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            <p key={index} className="text-2xl font-semibold">{Math.floor(timeHours[index].main.temp)}°C</p>
            <p className="text-2xl font-semibold">{timeHours[index].dt_txt.split(' ')[0].split('-').reverse().join('-')}</p>
            </div>
        ));
    }

    return (
        <article className=" pr-8 pl-2">
            <div className="flex flex-col space-y-12">
                {temperatureContent}
            </div>
        </article>
    );
}

export default PropsDaily;
