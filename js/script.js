// =========================================================================
// CHẶNG 01: KIỂM TRA JAVASCRIPT ĐÃ CHẠY (CONSOLE + BIẾN)
// =========================================================================
const siteName = "SportX";
let topic = "Thể thao truyền thống & Thể thao điện tử (Esports)";
let sectionCount = 3; // Số lượng danh mục chính (Hero, Thể thao, Esports)
let isReady = true;

// In các giá trị ra cửa sổ Console của trình duyệt
console.log("--- Kiểm tra kết nối SportX ---");
console.log("Tên Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số lượng phân vùng chính:", sectionCount);
console.log("Hệ thống JS đã sẵn sàng?", isReady);
console.log("Kiểu dữ liệu của biến topic:", typeof topic);
console.log("--------------------------------");
// =========================================================================
// CHẶNG 02: ĐỔI NỘI DUNG TIÊU ĐỀ BẰNG DOM (GETELEMENTBYID)
// =========================================================================
// 1. Tìm các phần tử HTML thông qua ID đã đặt
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

// 2. Kiểm tra chắc chắn các phần tử này tồn tại trên trang
if (mainTitle && welcomeText) {
  // 3. Thay đổi nội dung chữ (textContent) bằng JavaScript
  mainTitle.textContent = "SportX - Vũ Đài Tốc Độ & Đam Mê!";
  welcomeText.textContent = "Chào mừng bạn! Nội dung này vừa được cập nhật tự động bằng JavaScript.";
}
// =========================================================================
// CHẶNG 03: NÚT CHÀO MỪNG (CLICK EVENT)
// =========================================================================
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
  helloBtn.addEventListener("click", function () {
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm SportX! Chúc bạn có những giây phút giải trí tuyệt vời.";
    helloResult.style.color = "#00f2fe"; // Tạo điểm nhấn màu sắc cho lời chào
  });
}

// =========================================================================
// CHẶNG 04: ẨN/HIỆN NỘI DUNG GIỚI THIỆU (TOGGLE CLASS)
// =========================================================================
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
  toggleAboutBtn.addEventListener("click", function () {
    aboutContent.classList.toggle("hidden");
  });
}

// =========================================================================
// CHẶNG 05: MENU TƯƠNG TÁC TRÊN MOBILE (RESPONSIVE MENU)
// =========================================================================
const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
  menuToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("active");
    
    // Mở rộng: Đổi chữ nút bấm để tăng trải nghiệm người dùng
    if (mainMenu.classList.contains("active")) {
      menuToggle.textContent = "✖ Đóng";
    } else {
      menuToggle.textContent = "☰ Menu";
    }
  });
}

// =========================================================================
// CHẶNG 06: CHỌN MÀU / CHỦ ĐỀ GIAO DIỆN (CHANGE EVENT)
// =========================================================================
const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
  themeSelect.addEventListener("change", function () {
    // Xóa bỏ các class giao diện cũ để không bị xung đột màu
    document.body.classList.remove("dark-mode", "warm-mode");
    
    // Nếu người dùng chọn giá trị khác mặc định, áp dụng class đó vào body
    if (themeSelect.value !== "") {
      document.body.classList.add(themeSelect.value);
    }
  });
}

// =========================================================================
// CHẶNG 07: TÌM KIẾM NHANH NỘI DUNG (KEYUP EVENT)
// =========================================================================
const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
  searchInput.addEventListener("keyup", function () {
    // Chuyển từ khóa về chữ thường và loại bỏ khoảng trắng thừa hai đầu
    const keyword = searchInput.value.toLowerCase().trim();

    searchItems.forEach(function (item) {
      // Lấy toàn bộ chữ bên trong card bài viết và chuyển về chữ thường
      const text = item.textContent.toLowerCase();
      
      // Nếu văn bản chứa từ khóa thì hiển thị card, ngược lại ẩn đi
      if (text.includes(keyword)) {
        item.style.display = ""; // Khôi phục trạng thái hiển thị mặc định (CSS)
      } else {
        item.style.display = "none"; // Ẩn khối nội dung
      }
    });
  });
}
// =========================================================================
// CHẶNG 08: LỌC GALLERY ẢNH / BÀI VIẾT THEO NHÓM (DATA ATTRIBUTE)
// =========================================================================
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

// Kiểm tra nếu trên trang tồn tại bộ nút lọc và các danh mục cần lọc
if (filterButtons.length > 0 && galleryItems.length > 0) {
  
  // Duyệt qua từng nút bấm trong danh sách bộ lọc
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      
      // Lấy giá trị của thuộc tính data-filter từ nút vừa bấm
      const filterValue = button.dataset.filter;

      // Duyệt qua từng item bài viết/ảnh để kiểm tra
      galleryItems.forEach(function (item) {
        // Lấy giá trị thuộc tính data-category của item
        const itemCategory = item.dataset.category;

        // Nếu bấm nút "all" HOẶC danh mục của item trùng khớp với nút bấm
        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = ""; // Hiển thị lại bình thường
        } else {
          item.style.display = "none"; // Ẩn các item không liên quan
        }
      });
    });
  });
}
