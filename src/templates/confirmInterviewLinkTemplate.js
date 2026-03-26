export function confirmInterviewLinkTemplate({ eventName, date }) {
  const systemLink =
    "https://script.google.com/macros/s/AKfycbyHSFor6M05vchLOCdRT--hECY6W4ycWB1cfMSnEVy439YhWCTLnEAz9Fho8NYPZnZyYQ/exec";
  return `
    <!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        font-family: "Sarabun", Arial, sans-serif;
        color: #333333;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        background-color: #ffffff;
      }
      .img-fluid {
        width: 100%;
        height: auto;
        display: block;
      }
      .content-container {
        padding: 2rem;
      }
      .section-box {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        border-left: 5px solid #7cbd1e;
      }
      .info-list p {
        margin: 5px 0;
      }
      .btn-link {
        color: #007bff;
        word-break: break-all;
        text-decoration: none;
      }
      .steps {
        margin: 0;
        padding: 0;
      }
      .footer-text {
        margin-top: 20px;
        font-size: 0.85em;
        color: #666;
        border-top: 1px solid #eee;
        padding-top: 15px;
      }
      h3 {
        color: #000;
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img
        src="https://i.postimg.cc/wT0T4ty0/image001.jpg"
        alt="COM7 Banner"
        class="img-fluid"
      />

      <div class="content-container">
        <h1 style="color: #0ea60e">COM7 ยืนยันสัมภาษณ์งาน ${eventName}</h1>
        <p>
          ทางบริษัทฯ ขอเรียนเชิญท่านเข้าร่วมการสัมภาษณ์งานในรูปแบบออนไลน์
          โดยมีรายละเอียดดังต่อไปนี้
        </p>

        <div class="section-box info-list">
          <p><strong>⭐ ชื่องาน:</strong> ${eventName}</p>
          <p><strong>🗓 วันที่สัมภาษณ์:</strong> ${date}</p>
          <p>
            <strong>💼 รูปแบบการสัมภาษณ์:</strong> สัมภาษณ์แบบออนไลน์ (Online
            Interview)
          </p>
          <p><strong>👥 ผู้สัมภาษณ์:</strong> ฝ่ายทรัพยากรบุคคล</p>
          <p><strong>⏳ ระยะเวลาโดยประมาณ:</strong> 15 - 20 นาที</p>
        </div>

        <p><strong>💻 ช่องทางการสัมภาษณ์ Online Interview</strong></p>
        <p><a href="${systemLink}" class="btn-link">${systemLink}</a></p>
        <p>รายละเอียดดังนี้</p>
        <ul class="steps" style="list-style-type: none">
            <li>1️⃣ ล็อกอินเข้าสู่ระบบให้เรียบร้อย</li>
            <li>
              2️⃣ เข้าเมนู <strong>ผลการสัมภาษณ์</strong>
            </li>
            <li>
              3️⃣ ลิงก์สัมภาษณ์จะอยู่ในโปรไฟล์ของตำแหน่งงานที่ท่านสมัครไว้
            </li>
        </ul>

        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0" />

        <p><strong>🗓 แจ้งผลสัมภาษณ์ (ไม่เกิน 7 วัน)</strong></p>
        <p><a href="${systemLink}" class="btn-link">${systemLink}</a></p>
        <p>รายละเอียดดังนี้</p>
        <ul class="steps" style="list-style-type: none">
            <li>1️⃣ ล็อกอินเข้าสู่ระบบให้เรียบร้อย</li>
            <li>
              2️⃣ เข้าเมนู <strong>ผลการสัมภาษณ์</strong>
            </li>
            <li>
              3️⃣ ลิงก์สัมภาษณ์จะอยู่ในโปรไฟล์ของตำแหน่งงานที่ท่านสมัครไว้
            </li>
        </ul>

        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0" />

        <div class="section-box" style="border-left-color: #ffc107">
          <p><strong>👔 การแต่งกายสุภาพเรียบร้อย</strong></p>
        </div>

        <p><strong>🔎 ข้อแนะนำในการเตรียมตัวสัมภาษณ์</strong></p>
        <ul class="steps">
          <li>
            ติดตั้งแอปพลิเคชัน Microsoft Teams ในการสัมภาษณ์ออนไลน์
            และทดสอบว่าทุกอย่างพร้อมใช้งาน
          </li>
          <li>ตรวจสอบสัญญาณอินเทอร์เน็ตให้พร้อมใช้งาน</li>
          <li>เลือกสถานที่ในการสัมภาษณ์ให้เหมาะสม ไม่มีเสียงรบกวน</li>
          <li>เตรียมทุกอย่างให้พร้อมก่อนเวลานัดสัมภาษณ์ อย่างน้อย 10 นาที</li>
        </ul>

        <div class="footer-text">
          <p style="color: #0ea60e; font-weight: 800">
            <strong>Com7 (Public) Company Limited</strong><br />
            549/1 Sanphawut Rd., Bangna Tai, Bangna, Bangkok 10260<br />
            <span style="color: #000">Tel: 02-017-7777 #7209 / 096-821-3057</span>
          </p>
        </div>

        <img
        src="https://i.postimg.cc/HnW1b2tt/sanea-khxng-image005.png"
        alt="COM7 Footer"
        style="width: 50%; height: auto; display: block"
      />
      </div>
    </div>
  </body>
</html>

    `;
}
