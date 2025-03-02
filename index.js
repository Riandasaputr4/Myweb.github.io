document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".nav");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

    document.getElementById("whatsapp-button").addEventListener("click", function() {
        // Ganti dengan nomor WhatsApp Anda (gunakan format internasional tanpa tanda +)
        let phoneNumber = "6287894150066"; 
        let message = "Halo, saya tertarik dengan portofolio Anda!";
        
        // Encode URL untuk memastikan karakter khusus aman dikirim
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        // Redirect ke WhatsApp
        window.open(url, "_blank");
    });

