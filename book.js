// const selectedStaff = document.getElementById("staff");
// const selectedDate = document.getElementById("date");
// const selectedTime = document.getElementById("time");
// const selectedService = document.getElementById("service");

const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
console.log("Giriş yapan kullanıcı:", currentUser);

const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.innerHTML = `Welcome,  ${currentUser.signupName}.`;
welcomeMessage.classList.add("title");

const allStaffs = [
  { name: "John Doe", id: 1 },
  { name: "Jane Smith", id: 2 },
  { name: "Alice Johnson", id: 3 },
  { name: "Bob Brown", id: 4 },
];

const services = [
  { name: "HAIRCUT", id: 1 },
  { name: "HAIRCUT AND BEARD TRIM", id: 2 },
  { name: "HAIR & HOT TOWEL SHAVE", id: 3 },
  { name: "SKIN FADE", id: 4 },
  { name: "OAP/ UNDER 16’S", id: 5 },
];

const staffList = document.getElementById("staff-list");
allStaffs.forEach((staff) => {
  const staffItem = document.createElement("li");
  staffItem.innerText = staff.name;
  staffItem.classList.add("select");
  staffList.appendChild(staffItem);
  staffItem.addEventListener("click", function () {
    document.getElementById("select-staff").classList.add("hidden");
    console.log("Staff selected:", staffItem.innerText);
  });
});

const today = new Date();
const availableDays = [];
let date = new Date();

while (availableDays.length < 5) {
  if (date.getDay() !== 0) {
    availableDays.push(new Date(date));
  }

  date.setDate(date.getDate() + 1);
}

const selectDate = document.getElementById("select-date");
availableDays.forEach((day) => {
  const dayItem = document.createElement("li");
  dayItem.innerText = day.toDateString();
  dayItem.classList.add("select");
  selectDate.appendChild(dayItem);
});

const sumbitButton = document.getElementById("submit-button");
sumbitButton.addEventListener("click", function () {});
