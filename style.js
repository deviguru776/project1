
function displayStats() {
    const input = document.getElementById('input');
    const city = input.value; // Get the selected city value
    let backgroundImage = '';
    var color = '';
}

    const button = document.querySelector('button');
let resultDiv = document.createElement('div');
resultDiv.id = 'result';
document.getElementById('wrapper').appendChild(resultDiv);
// Event listener
button.addEventListener('click', displayStats);
function displayStats() {
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value; // Corrected 'Input' to 'input'
    let population = 0, literacyRate = 0, language = '';

    // Set background image based on selected city
    switch(city) {
        case 'Pune':
             population = 7345848;
            literacyRate = 2.5;
            language = 'Marathi, Hindi, English';
            backgroundImage = 'url(pune.jfif)';
            color = 'black'
            break;
        case 'Chennai':
            population = 12053697;
            literacyRate = 2.36;
            language = 'Tamil';
            backgroundImage = 'url(chennai.gif)';
            break;
        case 'Coimbatore':
            population = 3084000;
            literacyRate = 2.49;
            language = 'Tamil';
            backgroundImage = 'url(coimbatore.jpg)';
            color = 'yellow'
            break;
        case 'Kanpur':
            population = 3286000;
            literacyRate =1.61;
            language ='Punjabi, Bengali, Marathi, Urdu, Tamil, Oriya';
            backgroundImage = 'url(kanpur.gif)';
            break;
        case 'Varanasi':
            population = 1652000;
            literacyRate = 2.21;
            language = 'Hindi';
            backgroundImage = 'url(varanasi.gif)';
            break;
        case 'Nagpur':
            population = 3084000;
            literacyRate = 2.49;
            language = 'Hindi and Marathi. ';
            backgroundImage = 'url(nagpur.jpg)';
            color = 'black'
            break;
        case 'Mysore':
            population = 1316000;
            literacyRate = 2.17;
            language = 'Tamil, English, Malayalam and Telugu';
            backgroundImage = 'url(mysore.gif)';
            color = 'yellow'
            break;
        case 'Udaipur':
            population = 1054598;
            literacyRate = 1.29;
            language = 'Tamil, English, Malayalam and Telugu';
            backgroundImage = 'url(udaipur.gif)';
             color = 'black'
            break;
        case 'Kolkata':
            population = 1785709;
            literacyRate = 2.19;
            language = 'Tamil, English, Malayalam and Telugu';
            backgroundImage = 'url(kolkata.gif)';
             color = 'white'
            break;
            case '':
             color = 'black'
            break;
        default:
             // Handle unexpected city values
             population = 0;
             literacyRate = 0;
             language = 'Unknown';
            // backgroundImage = 'url(default.jpg)'; // Default image
            break;
    }
    const text = `The Indian city of ${city} has a population of ${population}. The language spoken is ${language} and the literacy rate is ${literacyRate}%.`;
    console.log(text);
    document.getElementById('result').innerHTML = text;


    // Apply the background image to the wrapper element
    wrapper.style.backgroundImage = backgroundImage;
    wrapper.style.color = color;
    wrapper.style.backgroundSize = 'cover'; // Optional: Cover the entire wrapper area
    wrapper.style.backgroundPosition = 'center'; // Optional: Center the background image
}
