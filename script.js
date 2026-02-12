document.getElementById("result").innerHTML = "";

function suggest() {
    const type = document.getElementById("type").value;
    const budget = document.getElementById("budget").value;
    const location = document.getElementById("location").value;

    // Simulated API call to fetch recommendations
    const recommendations = getRecommendations(type, budget, location);
    
    displayRecommendations(recommendations);
}

function getRecommendations(type, budget, location) {
    // This is a mock function. Replace it with an actual API call to the backend.
    const mockData = {
        Mountain: {
            Low: ["Himalayas, India", "Andes, South America"],
            Medium: ["Rocky Mountains, USA", "Alps, Europe"],
            High: ["K2, Pakistan", "Mount Everest, Nepal"]
        },
        Ocean: {
            Low: ["Goa, India", "Bali, Indonesia"],
            Medium: ["Maldives", "Hawaii, USA"],
            High: ["Great Barrier Reef, Australia", "Seychelles"]
        },
        Nightlife: {
            Low: ["Pune, India", "Bangkok, Thailand"],
            Medium: ["Las Vegas, USA", "Ibiza, Spain"],
            High: ["Rio de Janeiro, Brazil", "Tokyo, Japan"]
        },
        "Day Enjoyment": {
            Low: ["Local Parks", "Beaches Nearby"],
            Medium: ["National Parks", "Cultural Festivals"],
            High: ["Luxury Resorts", "Exclusive Tours"]
        },
        Adventure: {
            Low: ["Hiking Trails", "Local Adventure Parks"],
            Medium: ["White Water Rafting", "Zip Lining"],
            High: ["Skydiving", "Bungee Jumping"]
        },
        Relaxation: {
            Low: ["Local Spas", "Quiet Beaches"],
            Medium: ["Wellness Retreats", "Yoga Centers"],
            High: ["Luxury Spas", "Private Villas"]
        },
        Historical: {
            Low: ["Local Museums", "Historical Sites Nearby"],
            Medium: ["Ancient Ruins", "World Heritage Sites"],
            High: ["Guided Historical Tours", "Exclusive Access to Sites"]
        },
        Nature: {
            Low: ["Botanical Gardens", "Nature Reserves"],
            Medium: ["Wildlife Sanctuaries", "Scenic Hikes"],
            High: ["Private Nature Tours", "Luxury Eco-Lodges"]
        }
    };

    return mockData[type][budget];
}

function displayRecommendations(recommendations) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (recommendations.length === 0) {
        resultDiv.innerHTML = "No recommendations found.";
        return;
    }

    const ul = document.createElement("ul");
    recommendations.forEach(place => {
        const li = document.createElement("li");
        li.textContent = place;
        ul.appendChild(li);
    });

    resultDiv.appendChild(ul);
}