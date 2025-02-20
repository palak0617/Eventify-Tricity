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

const eventsData = {
    technical: [
        {
            title: "Hackathon 2025",
            description: "A 24-hour coding competition.",
            date: "2025-03-15",
            time: "10:00 AM",
            venue: "Main Auditorium",
            university: "Chitkara University",
            image: "images/hackathon.jpg"
        },
        {
            title: "AI Workshop",
            description: "A workshop on Artificial Intelligence.",
            date: "2025-04-10",
            time: "2:00 PM",
            venue: "Room 101",
            university: "Panjab University",
            image: "images/ai-workshop.jpg"
        }
    ],
    cultural: [
        {
            title: "Music Fest",
            description: "A night of music and dance.",
            date: "2025-05-20",
            time: "6:00 PM",
            venue: "Open Grounds",
            university: "Thapar University",
            image: "images/music-fest.jpg"
        },
        {
            title: "Drama Night",
            description: "A night of drama performances.",
            date: "2025-06-15",
            time: "7:00 PM",
            venue: "Main Auditorium",
            university: "PEC University",
            image: "images/drama-night.jpg"
        }
    ],
    nontech: [
        {
            title: "Yoga Session",
            description: "A morning yoga session.",
            date: "2025-07-10",
            time: "6:00 AM",
            venue: "Sports Complex",
            university: "Chandigarh University",
            image: "images/yoga-session.jpg"
        },
        {
            title: "Cooking Class",
            description: "A class on cooking basics.",
            date: "2025-08-05",
            time: "4:00 PM",
            venue: "Cafeteria",
            university: "Chitkara University",
            image: "images/cooking-class.jpg"
        }
    ]
};

async function uploadEventsData() {
    try {
        const eventsRef = firebase.database().ref('events');
        await eventsRef.set(eventsData);
        console.log('Events data uploaded successfully');
    } catch (error) {
        console.error('Error uploading events data:', error);
    }
}

uploadEventsData();