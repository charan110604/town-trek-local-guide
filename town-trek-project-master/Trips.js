const trips = [
    {
        name: "Charan",
        email: "charan@gmail.com",
        destination: "Hyderabad",
        from: "2025-02-10",
        to: "2025-02-15"
    },
    {
        name: "Rahul",
        email: "rahul@gmail.com",
        destination: "Bangalore",
        from: "2025-03-20",
        to: "2025-03-25"
    },
    {
        name: "Anjali",
        email: "anjali@gmail.com",
        destination: "Chennai",
        from: "2025-04-05",
        to: "2025-04-10"
    },
    {
        name: "Vikram",
        email: "vikram@gmail.com",
        destination: "Pune",
        from: "2025-05-12",
        to: "2025-05-18"
    },
    {
        name: "Sneha",
        email: "sneha@gmail.com",
        destination: "Delhi",
        from: "2025-06-01",
        to: "2025-06-06"
    },
    {
        name: "Arjun",
        email: "arjun@gmail.com",
        destination: "Jaipur",
        from: "2025-07-15",
        to: "2025-07-20"
    },
    {
        name: "Pooja",
        email: "pooja@gmail.com",
        destination: "Kochi",
        from: "2025-08-08",
        to: "2025-08-13"
    },
    {
        name: "Rohan",
        email: "rohan@gmail.com",
        destination: "Kolkata",
        from: "2025-09-22",
        to: "2025-09-27"
    }
];


const tableBody = document.querySelector("#tripTable tbody");

//Book button
function createBookButton() {
    const btn = document.createElement("button");
    btn.textContent = "Book";
    btn.classList.add("btn", "btn-outline-primary", "btn-sm");

    btn.addEventListener("click", () => {
        btn.disabled = true;
        btn.textContent = "Booked ✅";
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-secondary");
    });

    return btn;
}

//rows append
function loadTrips() {
    tableBody.innerHTML = "";

    trips.forEach((trip, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${trip.name}</td>
            <td>${trip.email}</td>
            <td>${trip.destination}</td>
            <td>${trip.from}</td>
            <td>${trip.to}</td>
        `;

        const bookCell = document.createElement("td");
        bookCell.appendChild(createBookButton());
        row.appendChild(bookCell);

        tableBody.appendChild(row);
    });
}

loadTrips();

//Implement validation
const tripForm = document.querySelector("form");
tripForm.addEventListener("submit",function(e) {
    e.preventDefault();

    //collect form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;

    // validation
    if (!name || !email || !destination || !fromDate || !toDate) {
        alert("Please fill in all required fields.");
        return;
    }

    if (new Date(fromDate) > new Date(toDate)) {
        alert("From Date cannot be later than To Date.");
        return;
    }

    trips.push({
        name,
        email,
        destination,
        from: fromDate,
        to: toDate
    });
     
    loadTrips();
    tripForm.reset();
    
});




