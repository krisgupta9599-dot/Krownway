// ===============================
// KROWNWAY - SCRIPT
// ===============================

// YOUR WHATSAPP NUMBER
const phone = "918810616752";

// Function to open WhatsApp
function openWhatsApp(message) {
    const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// Hire Truck
document.getElementById("hireTruck").addEventListener("click", function () {

    openWhatsApp(
`🚚 KrownWay Truck Enquiry

Name:

Pickup Location:

Drop Location:

Goods Type:

Vehicle Required:

Date:

Additional Details:
`);

});

// Hire Driver
document.getElementById("hireDriver").addEventListener("click", function () {

    openWhatsApp(
`👨 Driver Hiring Request

Company Name:

City:

Vehicle Type:

Salary:

Additional Details:
`);

});

// Put Truck On Duty
document.getElementById("listTruck").addEventListener("click", function () {

    openWhatsApp(
`🚛 List My Truck

Owner Name:

City:

Truck Type:

Model:

Capacity:

Available From:
`);

});

// Find Driver Job
document.getElementById("findJob").addEventListener("click", function () {

    openWhatsApp(
`💼 Driver Job Request

Name:

City:

Licence Type:

Experience:

Preferred Salary:
`);

});
