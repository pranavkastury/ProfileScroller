const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Hyd TG",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 32,
    gender: "female",
    lookingfor: "male",
    location: "Mumbai MH",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "Cheryl Johnson",
    age: 38,
    gender: "female",
    lookingfor: "female",
    location: "Madurai TN",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
];

const profiles = profileIterator(data);

//Call it first
nextProfile();

//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li> 
      <li class="list-group-item">Age: ${currentProfile.age}</li> 
      <li class="list-group-item">Gender: ${currentProfile.gender}</li> 
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li> 
      <li class="list-group-item">Location: ${currentProfile.location}</li> 
      </ul>
  `;
    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">
  `;
  } else {
    //No more profiles
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
