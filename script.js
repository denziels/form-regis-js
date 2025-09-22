const daftarNama = [
  "Ariana Grande", "Adele",
  "Billie Eilish", "Bruno Mars", 
  "Charlie Puth", "Conan Gray", 
  "Drake", "Dua Lipa", "Doja Cat", 
  "Ed Sheeran", "Elton John", "Eminem", 
  "Frank Ocean", "Fergie", "Flo Rida", 
  "Gwen Stefani", "Green Day", "George Ezra", 
  "Harry Styles", "Halsey", "Hilary Duff", 
  "Imagine Dragons", "Iggy Azalea", "Ice Cube", 
  "Jennifer Lopez", "Justin Bieber", "Jay-Z", 
  "Katy Perry", "Kanye West", "Kelly Clarkson", 
  "Lady Gaga", "Lana Del Rey", "Lil Nas X", 
  "Madonna", "Mariah Carey", "Miley Cyrus", 
  "Nicki Minaj", "Ne-Yo", "Norah Jones", 
  "Olivia Rodrigo", "One Direction", "Ozzy Osbourne", 
  "Post Malone", "Pharrell Williams", "Pink", 
  "Queen", 
  "Rihanna", "Robbie Williams", "Rosé", 
  "Shakira", "Sam Smith", "Selena Gomez", 
  "Taylor Swift", "The Weeknd", "Tinashe", 
  "Usher",
  "Victoria Beckham", "Vanessa Hudgens", 
  "Whitney Houston", "Will Smith",
  "Xzibit", 
  "Yiruma", "Young Thug", 
  "Zayn Malik", "Zedd", "Zendaya"
];
  
const namaInput = document.getElementById("nama");
const suggestionsBox = document.getElementById("suggestions");

namaInput.addEventListener("input", function() {
  const inputVal = this.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  
  if (inputVal) {
    const filtered = daftarNama.filter(nama => 
      nama.toLowerCase().includes(inputVal)
    );

    if (filtered.length > 0) {
      suggestionsBox.style.display = "block";
      filtered.forEach(nama => {
        const div = document.createElement("div");
        div.textContent = nama;
        div.addEventListener("click", function() {
          namaInput.value = this.textContent;
          suggestionsBox.innerHTML = "";
          suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(div);
      });
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
});

// Simulasi submit
document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert(
    "Registrasi berhasil!\n" +
    "Nama: " + namaInput.value + "\n" +
    "NIM: " + document.getElementById("nim").value + "\n" +
    "Mata Kuliah: " + document.getElementById("matkul").value + "\n" +
    "Dosen: " + document.getElementById("dosen").value
  );
});
