function showContent(section, element) {
  const title = document.getElementById('content-title');
  const text = document.getElementById('content-text');

  if (section === 'profile') {
    title.textContent = 'Profile';
    text.innerHTML = `I'm Ittipon Oncharoen, I'm studying in Major of Information Technology at Rajamangala University of Technology Lanna Lampang(RMUTLL).<br>
                     At university, I have learned various programming languages and technologies, including HTML, CSS, JavaScript, and database management.<br>
                     I'm interested in your company and would like to contribute to your team. I believe my skills and knowledge would be a great fit for your organization.<br><br>
                     I'm sending my resume for your consideration.`;
  } else if (section === 'address') {
    title.textContent = 'Address';
    text.textContent = '305 moo 4, Tambon Lampang Luang, Amphoe Koh Kha, Lampang 52130, Thailand';
  } else if (section === 'skill') {
    title.textContent = 'Skill Learning';
    text.innerHTML = `<div class="grid grid-cols-5 gap-4">
        <img src="img/C++.png" alt="c++" class="w-full h-auto rounded-lg">
        <img src="img/bootstrap.png" alt="Bootstrap" class="w-full h-auto rounded-lg">
        <img src="img/node.png" alt="Node.js" class="w-full h-auto rounded-lg">
        <img src="img/next.png" alt="Next.js" class="w-full h-auto rounded-lg">
        <img src="img/React.png" alt="React" class="w-full h-auto rounded-lg">
        <img src="img/chatgpt.png" alt="ChatGPT" class="w-full h-auto rounded-lg">
        <img src="img/Figma.png" alt="Figma" class="w-full h-auto rounded-lg">
        <img src="img/Tailwind.png" alt="Tailwind CSS" class="w-full h-auto rounded-lg">
        <img src="img/Mongodb.png" alt="MongoDB" class="w-full h-auto rounded-lg">
        <img src="img/MySQL.png" alt="MySQL" class="w-full h-auto rounded-lg">
    </div>`;
  }

  // จัดการ active class menu
  document.querySelectorAll('.menu').forEach(menu => {
    menu.classList.remove('bg-blue-600', 'text-white');
    menu.classList.add('hover:bg-gray-200');
  });

  element.classList.add('bg-blue-600', 'text-white');
  element.classList.remove('hover:bg-gray-200');
}

// โหลด modal.html เมื่อหน้าโหลดเสร็จ
window.addEventListener('DOMContentLoaded', () => {
    fetch('modal.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('modalContainer').innerHTML = html;
        });
});

// ฟังก์ชันเปิด modal
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');

    if (modal && modalImage) {
        modalImage.src = imageSrc;
        modal.classList.remove('hidden');
    }
}

// ฟังก์ชันปิด modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}
