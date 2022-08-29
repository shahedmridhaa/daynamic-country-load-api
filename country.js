const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayContries(data));
};

const displayContries = (countries) => {
  const contriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    console.log(country)
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML=`
     <h4>Name: ${country.name.common}</h4>
     <p>Capital: ${country.capital}</p>
     <button onclick="lodCountryCode('${country.cca2}')"> country code</button>
    `;
        contriesContainer.appendChild(countryDiv)
    })
  }


  // ===button===
  const lodCountryCode = (code) =>{
   const url = `https://restcountries.com/v3.1/alpha/${code}`
   fetch(url)
   .then(res => res.json())
   .then(data => countryDetils(data[0]))
  }

  const countryDetils =data=>{
    const showCode = document.getElementById('countryCode');
  showCode.innerHTML=`
  <h3>Detils: ${data.name.common}</h3>
  <img src="${data.flags.png}">
  `
  }


loadCountry();


