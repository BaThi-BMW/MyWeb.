document.addEventListener("DOMContentLoaded", function () {
  
  // === 1. ĐIỀU KHIỂN MOBILE MENU (TOGGLE) ===
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
      mainMenu.classList.toggle("active");
    });
  }

  // === 2. ĐĂNG KÝ BẢN TIN (HERO BUTTON) ===
  const helloBtn = document.getElementById("helloBtn");
  const helloResult = document.getElementById("helloResult");

  if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", function () {
      helloResult.textContent = "🎉 Cảm ơn bạn đã đăng ký! Bản tin Esports sẽ được gửi sớm nhất.";
      helloBtn.style.display = "none";
    });
  }

  // === 3. CHUYỂN ĐỔI GIAO DIỆN (THEME SWITCHER) ===
  const themeSelect = document.getElementById("themeSelect");

  if (themeSelect) {
    themeSelect.addEventListener("change", function () {
      // Xóa các class theme cũ
      document.body.classList.remove("dark-mode", "warm-mode");
      
      // Thêm class mới dựa trên option được chọn
      const selectedTheme = themeSelect.value;
      if (selectedTheme) {
        document.body.classList.add(selectedTheme);
      }
    });
  }

  // === 4. TÌM KIẾM GIẢI ĐẤU (REAL-TIME FILTER) ===
  const searchInput = document.getElementById("searchInput");
  const searchItems = document.querySelectorAll(".search-item");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = searchInput.value.toLowerCase().trim();

      searchItems.forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        const description = item.querySelector("p").textContent.toLowerCase();

        if (title.includes(keyword) || description.includes(keyword)) {
          item.style.display = "block"; // Hiển thị nếu khớp
        } else {
          item.style.display = "none";  // Ẩn nếu không khớp
        }
      });
    });
  }

  // === 5. BỘ LỌC THƯ VIỆN KHOẢNH KHẮC (CATEGORY FILTER) ===
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      // Thay đổi nút active
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || itemCategory === filterValue) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // === 6. KIỂM TRA LỖI FORM LIÊN HỆ (VALIDATION) ===
  const contactForm = document.getElementById("contactForm");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn hành vi tải lại trang mặc định

      // Xóa thông báo cũ
      formMessage.textContent = "";
      formMessage.style.color = "";

      // Kiểm tra rỗng trường Họ Tên
      if (fullName.value.trim() === "") {
        formMessage.textContent = "⚠️ Vui lòng không để trống Họ và tên.";
        formMessage.style.color = "#ff3333";
        fullName.focus();
        return;
      }

      // Kiểm tra định dạng Email bằng Regular Expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        formMessage.textContent = "⚠️ Định dạng Email không hợp lệ (Ví dụ: tên@gmail.com).";
        formMessage.style.color = "#ff3333";
        email.focus();
        return;
      }

      // Thành công
      formMessage.textContent = "✅ Gửi thông tin góp ý thành công! Chúng tôi sẽ phản hồi lại bạn.";
      formMessage.style.color = "#00ffcc";
      
      // Xóa sạch form dữ liệu sau khi gửi thành công
      contactForm.reset();
    });
  }

});
