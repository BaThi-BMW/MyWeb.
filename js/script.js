<script src="../js/script.js"></script>
// 1. Khai báo các biến mô tả website cá nhân
const siteName = "MyWeb";
let topic = "Chủ đề website cá nhân của em"; // Bạn có thể sửa lại thành chủ đề thật (ví dụ: Du lịch, Thú cưng...)
let imageCount = 5;                        // Số lượng ảnh hiện có trên web
let isReady = true;                        // Trạng thái đã sẵn sàng dùng JS

// 2. Dùng console.log() để in thông tin ra màn hình kiểm tra
console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu của topic:", typeof topic);
// 1. Chọn các phần tử HTML dựa vào ID đã đặt
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

// 2. Kiểm tra xem phần tử có tồn tại trên trang không trước khi thay đổi
if (mainTitle && welcomeText) {
  mainTitle.textContent = "MyWeb đã có JavaScript!";
  welcomeText.textContent = "Nội dung này được cập nhật bằng file js/script.js.";
}
// 1. Lấy các phần tử HTML thông qua ID
const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

// 2. Kiểm tra chắc chắn rằng các phần tử này tồn tại trên trang hiện tại
if (helloBtn && helloResult) {
  // 3. Lắng nghe sự kiện click vào nút
  helloBtn.addEventListener("click", function () {
    // 4. Thay đổi nội dung hiển thị của thẻ p khi click
    helloResult.textContent = "Cảm ơn bạn đã ghé thăm MyWeb!";
  });
}
// 1. Lấy các phần tử HTML từ DOM thông qua ID
const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

// 2. Kiểm tra chắc chắn các phần tử tồn tại trên trang
if (toggleAboutBtn && aboutContent) {
  // 3. Lắng nghe sự kiện click vào nút
  toggleAboutBtn.addEventListener("click", function () {
    // 4. Bật/Tắt (Toggle) class 'hidden' cho khối nội dung
    aboutContent.classList.toggle("hidden");
  });
}
