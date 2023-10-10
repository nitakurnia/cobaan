// document.getElementById("tampilkan-form").addEventListener("click", function () {
//     document.getElementById("hidden-form").style.display = "block";
// });
// yang baru!!
// document.addEventListener("DOMContentLoaded", function () {
//     const hiddenForm = document.getElementById("hidden-form");
//     const showFormButton = document.getElementById("show-form-button");

//     showFormButton.addEventListener("click", function () {
//         hiddenForm.style.display = "block";
//     });
// });
// halaman donasi
document.addEventListener("DOMContentLoaded", function () {
    const hiddenForm = document.getElementById("hidden-form");
    const showFormButton = document.getElementById("show-form-button");
    const closeFormButton = document.getElementById("close-form-button");

    showFormButton.addEventListener("click", function () {
        hiddenForm.style.display = "block";
    });

    closeFormButton.addEventListener("click", function () {
        hiddenForm.style.display = "none";
    });
});

// halaman login
// tombol login di klik
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".btn-login button");

    submitButton.addEventListener("click", function () {
        // Ganti teks tombol dengan pesan "Loading..." saat tombol diklik
        submitButton.innerHTML = "Loading...";
        submitButton.disabled = true;

        // Simulasi pengecekan login (Anda dapat menggantinya dengan logika sesungguhnya)
        setTimeout(function () {
            // Setelah beberapa waktu, kembalikan teks tombol ke semula
            submitButton.innerHTML = "Submit";
            submitButton.disabled = false;

            // Redirect ke halaman lain atau lakukan tindakan login sesungguhnya
            // window.location.href = "halaman-berikutnya.html";
        }, 2000); // Contoh, tunggu 2 detik sebelum kembali ke teks awal
    });
});

// tombol mata untuk melihat password
const passwordField = document.getElementById('pwd');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });
