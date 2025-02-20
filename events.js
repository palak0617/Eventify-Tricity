document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.getElementById("event-container");

    if (!eventContainer) {
        console.error("Event container not found!");
        return;
    }

    if (typeof eventData === "undefined" || eventData.length === 0) {
        eventContainer.innerHTML = "<p>No events available at the moment.</p>";
        return;
    }

    let eventHTML = "";
    eventData.forEach(event => {
        eventHTML += `
            <div class="event-card">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date} | <strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;
    });

    eventContainer.innerHTML = eventHTML;
});
 
