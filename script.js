const daftarNama = [
  "Ariana Grande", "Billie Eilish",
  "Charlie Puth", "Conan Gray", 
  "Dua Lipa", "Doja Cat", 
  "Ed Sheeran", "Eminem", 
  "Frank Ocean",
  "Green Day", "Harry Styles",
  "Imagine Dragons", "Justin Bieber", 
  "Katy Perry", "Lana Del Rey", "Lil Nas X", 
  "Miley Cyrus", "Nicki Minaj", "Olivia Rodrigo",
  "Post Malone", "Queen", 
  "Rihanna", "Selena Gomez", "The Weeknd",
  "Usher", "Victoria Beckham"
  "Whitney Houston", "Will Smith",
  "Xzibit", "Yiruma", "Young Thug", 
  "Zayn Malik", "Zendaya"
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
