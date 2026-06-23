/**
 * ESPORTS ZONE - JAVASCRIPT LOGIC TRẬN ĐẤU
 * Thực hiện: Quản lý giao diện, bộ lọc, tìm kiếm và tương tác form nâng cao.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. KHỞI TẠO CÁC PHẦN TỬ ĐIỀU KHIỂN ---
  const menuToggle = document.getElementById("menuToggle");
  const mainMenu = document.getElementById("mainMenu");
  const themeSelect = document.getElementById("themeSelect");
  const searchInput = document.getElementById("searchInput");
  const helloBtn = document.getElementById("helloBtn");
  const helloResult = document.getElementById("helloResult");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // --- 2. XỬ LÝ MENU MOBILE (RESPONSIVE NAVIGATION) ---
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Ngăn sự kiện nổi bọt gây đóng menu ngay lập tức
      mainMenu.classList.toggle("active");
    });

    // Tự động đóng menu khi nhấp vào một liên kết điều hướng
    mainMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => mainMenu.classList.remove("active"));
    });

    // Đóng menu khi người dùng bấm ra ngoài vùng menu
    document.addEventListener("click", (e) => {
      if (!mainMenu.contains(e.target) && e.target !== menuToggle) {
        mainMenu.classList.remove("active");
      }
    });
  }

  // --- 3. BỘ CHUYỂN ĐỔI GIAO DIỆN (THEME SWITCHER) ---
  if (themeSelect) {
    // Lưu và khôi phục giao diện người dùng đã chọn từ LocalStorage
    const savedTheme = localStorage.getItem("esports-theme");
    if (savedTheme) {
      document.body.className = savedTheme;
      themeSelect.value = savedTheme;
    }

    themeSelect.addEventListener("change", (e) => {
      const selectedTheme = e.target.value;
      // Reset toàn bộ class theme cũ rồi nạp class mới
      document.body.className = selectedTheme;
      localStorage.setItem("esports-theme", selectedTheme);
    });
  }

  // --- 4. TÍNH NĂNG TÌM KIẾM GIẢI ĐẤU (REAL-TIME FILTER) ---
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.toLowerCase().trim();
      const tournamentCards = document.querySelectorAll("#tournaments .search-item");

      tournamentCards.forEach((card) => {
        const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
        const desc = card.querySelector("p")?.textContent.toLowerCase() || "";

        // Hiển thị nếu tiêu đề hoặc mô tả chứa từ khóa tìm kiếm
        if (title.includes(keyword) || desc.includes(keyword)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  }

  // --- 5. BỘ LỌC THƯ VIỆN KHOẢNH KHẮC (CATEGORY FILTER) ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. Chuyển trạng thái Active cho nút được nhấn
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 2. Lọc các thẻ hình ảnh dựa vào thuộc tính data-category
      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || itemCategory === filterValue) {
          item.classList.remove("hidden");
          // Hiệu ứng Fade-in nhẹ nhàng khi hiển thị lại
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.transition = "opacity 0.4s ease";
            item.style.opacity = "1";
          }, 5);
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  // --- 6. XỬ LÝ ĐĂNG KÝ BẢN TIN (HERO NEWSLETTER) ---
  if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", () => {
      helloResult.style.color = "var(--cyber-cyan)";
      helloResult.style.marginTop = "15px";
      helloResult.style.fontWeight = "bold";
      helloResult.style.textShadow = "var(--glow-cyan)";
      helloResult.textContent = "⚡ Hệ thống: Đăng ký thành công! Bạn sẽ nhận được mật mã giải đấu sớm nhất.";
      
      // Khóa nút sau khi nhấn để tránh spam hiệu ứng
      helloBtn.disabled = true;
      helloBtn.style.opacity = "0.6";
      helloBtn.style.cursor = "not-allowed";
    });
  }

  // --- 7. KIỂM TRA & XỬ LÝ FORM LIÊN HỆ CHUYÊN NGHIỆP ---
  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Ngăn trang reload khi submit

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();

      // Biểu thức chính quy kiểm tra định dạng Email chuẩn
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Reset thông điệp trước đó
      formMessage.textContent = "";
      formMessage.style.textShadow = "none";

      // Kiểm tra tính hợp lệ dữ liệu đầu vào
      if (fullName === "" || email === "") {
        formMessage.style.color = "var(--neon-red)";
        formMessage.textContent = "❌ Lỗi: Vui lòng không bỏ trống thông tin tuyển thủ!";
        return;
      }

      if (!emailRegex.test(email)) {
        formMessage.style.color = "var(--neon-red)";
        formMessage.textContent = "❌ Lỗi: Địa chỉ Email không hợp lệ trên hệ thống!";
        return;
      }

      // Xử lý thành công (Giả lập gửi dữ liệu lên Server)
      formMessage.style.color = "var(--gold-winner)";
      formMessage.style.textShadow = "0 0 10px rgba(255,170,0,0.5)";
      formMessage.textContent = `🚀 Gửi thành công! Xin chào chiến binh ${fullName}, chúng tôi sẽ phản hồi qua ${email} trong 24h tới.`;

      // Làm sạch dữ liệu form sau khi gửi thành công
      contactForm.reset();
    });
  }
});
