interface Cities {
    city: string;
    growth: string;
    latitude: number;
    longitude: number;
    population: string;
    rank: string;
    state: string;
}

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const prom = fetch(endpoint)

const cities: Cities[] = []

prom
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(input: string, cities: Cities[]) {
    return cities.filter(place => {
        const regex = new RegExp(input, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches(this: HTMLInputElement) {
    const matchArr = findMatches(this.value, cities);
    const html = matchArr.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const hlCityName = place.city.replace(regex, `<span class=\"hl\">${this.value}</span>`)

        return `
        <li class="item">
            <span class="name">${hlCityName}, ${place.state}</span>
            <span class="population">${place.population}</span>
        </li>
    `
    })
    if (suggestions) {
        suggestions.innerHTML = html.join('');
    }

}

const searchInput = document.querySelector<HTMLInputElement>(`.search`);
const suggestions = document.querySelector<HTMLElement>(`.suggestions`);


searchInput?.addEventListener('change', displayMatches);
searchInput?.addEventListener('keyup', displayMatches);

