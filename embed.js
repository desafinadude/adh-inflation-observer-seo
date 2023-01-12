
if(location.pathname.includes('inflation-observer')) {

    let country_name = 'South Africa';
    let last_full_year = '2021';
    let latest_month = 'January 2022';
    let annual = 'something';
    let monthly_change_yoy = 'something else';

    let country_text = `
    ${country_name}'s consumer price inflation (CPI) rate for the full year ${last_full_year} was ${annual}%. In ${latest_month} the annualised CPI was ${monthly_change_yoy}%. You can explore more details and the breakdown by category of goods in our ${country_name} Inflation Observer below.
    `

    // Create the new node to insert
    const introPar = document.createElement("span");
    introPar.innerHTML = country_text;
    const parentDiv = document.getElementById("adh-embed").parentNode;
    let embed = document.getElementById("adh-embed");
    parentDiv.insertBefore(introPar, embed);


    
}

