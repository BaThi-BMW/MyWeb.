// === CHẶNG 01: Kiểm tra JavaScript đã chạy bằng console và biến ===
const siteName = "Esports Zone";
let mainTopic = "Thể thao điện tử chuyên nghiệp";
let totalImages = 3;
let isSystemReady = true;

console.log("=== ESPORTS WEBSITE JS LOADED ===");
console.log("Website Name:", siteName);
console.log("Chủ đề chính:", mainTopic);
console.log("Hệ thống sẵn sàng:", isSystemReady);

// === CHẶNG 02: Đổi nội dung tiêu đề bằng DOM ===
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
    mainTitle.textContent = "ĐẤU TRƯỜNG ESPORTS VÔ ĐỊCH";
    welcomeText.textContent = "Cập nhật các giải đấu đỉnh cao và khoảnh khắc huyền thoại.";
}

// === CHẶNG 03: Thêm nút chào mừng bằng sự kiện click ===
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", function() {
        helloResult.textContent = "Chào mừng Game thủ! Chúc đội của bạn đạt thứ hạng cao nhất tại mùa giải năm nay!";
    });
}

// === CHẶNG 05: Menu tương tác (Mở/đóng menu khi responsive) ===
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function() {
        mainMenu.classList.toggle("active");
    });
}

// === CHẶNG 08: Lọc Gallery ảnh theo nhóm (Sân khấu, Tuyển thủ, Cúp) ===
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Xóa class active ở tất cả các nút và thêm vào nút vừa bấm
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.dataset.filter;

        galleryItems.forEach(function(item) {
            const itemCategory = item.dataset.category;
            // Nếu chọn "all" hoặc trùng category thì hiện, ngược lại thì ẩn
            if (filterValue === "all" || itemCategory === filterValue) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// === CHẶNG 09: Kiểm tra Form đăng ký trước khi gửi (submit + preventDefault) ===
const contactForm = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

if (contactForm && fullName && email && formMessage) {
    contactForm.addEventListener("submit", function(event) {
        // Ngăn trình duyệt load lại trang
        event.preventDefault();

        const nameValue = fullName.value.trim();
        const emailValue = email.value.trim();

        // Kiểm tra họ tên trống
        if (nameValue === "") {
            formMessage.textContent = "⚠️ Vui lòng nhập tên Đội trưởng / Tuyển thủ!";
            formMessage.style.color = "#ff003c";
            return;
        }

        // Kiểm tra email trống hoặc thiếu ký tự @
        if (emailValue === "" || !emailValue.includes("@")) {
            formMessage.textContent = "⚠️ Vui lòng nhập địa chỉ Email hợp lệ!";
            formMessage.style.color = "#ff003c";
            return;
        }

        // Nếu tất cả hợp lệ
        formMessage.textContent = "✔️ Đơn đăng ký thành công! Ban tổ chức sẽ liên hệ sớm nhất.";
        formMessage.style.color = "#00ff66";
        
        // Reset form sau khi gửi thành công
        contactForm.reset();
    });
}