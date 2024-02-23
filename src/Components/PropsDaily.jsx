import Icon from "./Icon";

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
        let width = 0;

        // Media query to check for small screens
        const smallScreenMediaQuery = window.matchMedia('(max-width: 932px)');
        if (smallScreenMediaQuery.matches) {
          width =20; // Set a different width for small screens
        }
      
        // Media query to check for medium screens
        const mediumScreenMediaQuery = window.matchMedia('(min-width: 933px) and (max-width: 1366px)');
        if (mediumScreenMediaQuery.matches) {
          width = 60; // Set a different width for medium screens
        }
      
        const largeScreenMediaQuery = window.matchMedia('(min-width: 1367px) and (max-width: 20000px)');
        if (largeScreenMediaQuery.matches) {
          width = 80; // Set a different width for medium screens
        }
        temperatureContent = validIndices.map(index => (
            <div className="flex flex-row items-center justify-between 2xl:space-y-8 ">
                <div className="2xl:pt-4">
            <Icon width={width} weather={timeHours[index].weather[0].main}  />
                 </div>
            <p key={index} className="text-2xl font-semibold 2xl:text-4xl">{Math.floor(timeHours[index].main.temp)}°C</p>
            <p className="text-2xl font-semibold 2xl:text-4xl">{timeHours[index].dt_txt.split(' ')[0].split('-').reverse().join('-')}</p>
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
