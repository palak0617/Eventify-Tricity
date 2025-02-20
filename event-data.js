const eventData = [
    {
        "title": "Tech Fest 2025",
        "date": "March 10, 2025",
        "time": "10:00 AM",
        "location": "Panjab University",
        "description": "Join us for a day of innovation, coding, and networking!"
    },
    {
        "title": "Cultural Night",
        "date": "April 5, 2025",
        "time": "7:00 PM",
        "location": "Thapar University",
        "description": "An evening filled with music, dance, and fun activities."
    }
];


const firebaseConfig = {
    apiKey: "AIzaSyBiucGvP-mJ_yWbZFfvU__g53iIBmC_xKo",
    authDomain: "eventify-tricity.firebaseapp.com",
    databaseURL: "https://eventify-tricity-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eventify-tricity",
    storageBucket: "eventify-tricity.firebasestorage.app",
    messagingSenderId: "464396529197",
    appId: "1:464396529197:web:c605539fc7623b799112a4"
};

firebase.initializeApp(firebaseConfig);

async function loadEventsFromFirebase() {
    try {
        const eventsRef = firebase.database().ref('events');
        const snapshot = await eventsRef.once('value');
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

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function renderEvents(events) {
    const eventsList = document.getElementById('events-list');
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