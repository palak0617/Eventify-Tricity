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
        }
    ],
    cultural: [
        {
            id: 3,
            title: "Annual Cultural Fest",
            date: "2024-04-05",
            time: "11:00 AM",
            venue: "Main Auditorium",
            university: "Panjab University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Three-day cultural extravaganza featuring music, dance, and art."
        },
        {
            id: 4,
            title: "Battle of Bands",
            date: "2024-04-10",
            time: "06:00 PM",
            venue: "Open Air Theatre",
            university: "Thapar University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Inter-college band competition."
        }
    ],
    nontech: [
        {
            id: 5,
            title: "Sports Tournament",
            date: "2024-03-30",
            time: "08:00 AM",
            venue: "Sports Complex",
            university: "PEC University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Inter-university sports competition."
        },
        {
            id: 6,
            title: "Literary Festival",
            date: "2024-04-02",
            time: "10:00 AM",
            venue: "Central Library",
            university: "Panjab University",
            image: "https://www.etown.edu/newsandevents/images/campus-events-310.jpg",
            description: "Celebrating literature through poetry, debates, and more."
        }
    ]
};

function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

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
                    <a href="#" class="event-btn register-btn">Register Now</a>
                    <a href="#" class="event-btn details-btn">Learn More</a>
                </div>
            </div>
        </div>
    `).join('');
}