const eventsData = {
    technical: [
        {
            id: 1,
            title: "Hackathon 2024",
            date: "2024-03-25",
            time: "09:00 AM",
            venue: "Innovation Hub",
            university: "PEC University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "24-hour coding competition to solve real-world problems."
        },
        {
            id: 2,
            title: "AI Workshop Series",
            date: "2024-03-28",
            time: "10:00 AM",
            venue: "Tech Center",
            university: "Chitkara University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Learn about artificial intelligence and machine learning."
        },
        {
            id: 3,
            title: "Cybersecurity Bootcamp",
            date: "2024-04-03",
            time: "09:00 AM",
            venue: "Cyber Lab",
            university: "IIT Ropar",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Explore ethical hacking and security measures."
        },
        {
            id: 4,
            title: "Robotics Championship",
            date: "2024-04-08",
            time: "01:00 PM",
            venue: "Robotics Arena",
            university: "Thapar University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Showcase your robotic innovations in a competition."
        },
        {
            id: 5,
            title: "Blockchain Conference",
            date: "2024-04-12",
            time: "11:00 AM",
            venue: "Tech Auditorium",
            university: "PEC University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Discuss the future of blockchain technology."
        },
        {
            id: 6,
            title: "IoT Hackfest",
            date: "2024-04-15",
            time: "10:00 AM",
            venue: "Smart Lab",
            university: "Chandigarh University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Prototype and develop IoT-based solutions."
        },
        {
            id: 7,
            title: "Data Science Symposium",
            date: "2024-04-18",
            time: "02:00 PM",
            venue: "Innovation Lab",
            university: "Chitkara University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Experts talk on data-driven decision-making."
        },
        {
            id: 8,
            title: "App Development Challenge",
            date: "2024-04-22",
            time: "09:00 AM",
            venue: "Tech Incubator",
            university: "LPU",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Build and present an innovative mobile app."
        }
    ],
    cultural: [
        {
            id: 9,
            title: "Annual Cultural Fest",
            date: "2024-04-05",
            time: "11:00 AM",
            venue: "Main Auditorium",
            university: "Panjab University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Three-day cultural extravaganza featuring music, dance, and art."
        },
        {
            id: 10,
            title: "Battle of Bands",
            date: "2024-04-10",
            time: "06:00 PM",
            venue: "Open Air Theatre",
            university: "Thapar University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Inter-college band competition."
        },
        {
            id: 11,
            title: "Bollywood Night",
            date: "2024-04-12",
            time: "07:00 PM",
            venue: "Main Stage",
            university: "LPU",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "A fun-filled night of Bollywood music and dance."
        },
        {
            id: 12,
            title: "Street Play Festival",
            date: "2024-04-14",
            time: "04:00 PM",
            venue: "Amphitheatre",
            university: "Chandigarh University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "A platform to perform and raise awareness through theatre."
        },
        {
            id: 13,
            title: "Fashion Show",
            date: "2024-04-18",
            time: "08:00 PM",
            venue: "Grand Auditorium",
            university: "IIT Ropar",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Showcase your fashion sense on the ramp."
        },
        {
            id: 14,
            title: "Classical Dance Night",
            date: "2024-04-20",
            time: "06:00 PM",
            venue: "Cultural Hall",
            university: "Panjab University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Experience the grace of Indian classical dance forms."
        }
    ],
    nontech: [
        {
            id: 15,
            title: "Sports Tournament",
            date: "2024-03-30",
            time: "08:00 AM",
            venue: "Sports Complex",
            university: "PEC University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Inter-university sports competition."
        },
        {
            id: 16,
            title: "Literary Festival",
            date: "2024-04-02",
            time: "10:00 AM",
            venue: "Central Library",
            university: "Panjab University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Celebrating literature through poetry, debates, and more."
        },
        {
            id: 17,
            title: "Debate Championship",
            date: "2024-04-06",
            time: "02:00 PM",
            venue: "Seminar Hall",
            university: "Thapar University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Battle of wits on contemporary issues."
        },
        {
            id: 18,
            title: "Chess Tournament",
            date: "2024-04-09",
            time: "11:00 AM",
            venue: "Board Room",
            university: "Chandigarh University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Test your strategic thinking in chess."
        },
        {
            id: 19,
            title: "Photography Contest",
            date: "2024-04-15",
            time: "10:00 AM",
            venue: "Art Gallery",
            university: "LPU",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Capture stunning moments in the photography contest."
        },
        {
            id: 20,
            title: "Treasure Hunt",
            date: "2024-04-18",
            time: "03:00 PM",
            venue: "Campus Grounds",
            university: "Chitkara University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Solve clues and find the hidden treasure."
        }
    ]    
};

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Previous eventsData object remains the same...

function renderEvents(category) {
    const eventsList = document.getElementById('events-list');
    const events = eventsData[category];

    eventsList.innerHTML = events.map(event => `
        <div class="event-card">
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <span class="event-date">${formatDate(event.date)}</span>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    <div class="event-detail">
                        <i class="far fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.venue}</span>
                    </div>
                    <div class="event-detail">
                        <i class="fas fa-university"></i>
                        <span>${event.university}</span>
                    </div>
                </div>
                <div class="event-actions">
                    <a href="registration.html?eventId=${event.id}" class="event-btn register-btn">Register Now</a>
                    <a href="#" class="event-btn details-btn">Learn More</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Load events from Firebase instead of static data
async function loadEventsFromFirebase(category) {
    try {
        const eventsRef = firebase.database().ref('events');
        const snapshot = await eventsRef.orderByChild('category').equalTo(category).once('value');
        const eventsData = snapshot.val();
        
        if (eventsData) {
            return Object.entries(eventsData).map(([id, event]) => ({
                ...event,
                id
            }));
        }
        return [];
    } catch (error) {
        console.error('Error loading events:', error);
        return [];
    }
}

// Initialize Firebase when the script loads
document.addEventListener('DOMContentLoaded', async function() {
    if (typeof firebase !== 'undefined') {
        // Your existing Firebase config
        const firebaseConfig = {
            apiKey: "AIzaSyBiucGvP-mJ_yWbZFfvU__g53iIBmC_xKo",
            authDomain: "eventify-tricity.firebaseapp.com",
            databaseURL: "https://eventify-tricity-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "eventify-tricity",
            storageBucket: "eventify-tricity.firebasestorage.app",
            messagingSenderId: "464396529197",
            appId: "1:464396529197:web:c605539fc7623b799112a4"
        };

        // Initialize Firebase if not already initialized
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }
});