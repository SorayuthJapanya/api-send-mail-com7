export function openHouseSendMailTemplate() {
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
      <div class="content-container">
        <h1 style="color: #0ea60e">COM7 ประกาศผลสัมภาษณ์งาน Open House</h1>
          <p style="margin: 0; text-indent: 25px">
            บริษัท คอมเซเว่น จำกัด (มหาชน) ขอขอบพระคุณที่ท่านให้ความสนใจและเข้าร่วมการสัมภาษณ์งานในกิจกรรม
            <strong>COM7 Open House </strong> กับทางบริษัทฯ <br />
          </p>
          <p>
            ท่านสามารถตรวจสอบผลการสัมภาษณ์ได้ที่ลิงก์ด้านล่างนี้
          </p>

        <p style="margin-bottom: 0"><strong>💻 ลิงค์แจ้งผลสัมภาษณ์</strong></p>
        <p style="margin: 0; margin-bottom: 10px;">
          <a href="https://script.google.com/macros/s/AKfycbyHSFor6M05vchLOCdRT--hECY6W4ycWB1cfMSnEVy439YhWCTLnEAz9Fho8NYPZnZyYQ/exec" class="btn-link"
            >https://script.google.com/macros/s/AKfycbyHSFor6M05vchLOCdRT--hECY6W4ycWB1cfMSnEVy439YhWCTLnEAz9Fho8NYPZnZyYQ/exec</a
          >
        </p>

        <p>รายละเอียดดังนี้</p>
        <ul class="steps" style="list-style-type: none; padding-left: 20px;">
          <li>1️⃣ ล็อกอินเข้าสู่ระบบให้เรียบร้อย</li>
          <li>2️⃣ เข้าเมนู <strong>ผลการสัมภาษณ์</strong></li>
        </ul>

        <p style="padding-top: 10px">
          ทั้งนี้ บริษัทฯ ขออนุญาตเก็บข้อมูลใบสมัครของท่านไว้ในฐานข้อมูล เพื่อพิจารณาสำหรับโอกาสในการร่วมงานในอนาคต หากมีตำแหน่งที่เหมาะสม บริษัทฯ จะติดต่อท่านอีกครั้ง
        </p>
        <span>บริษัทฯ ขอขอบพระคุณในความสนใจ และหวังเป็นอย่างยิ่งว่าจะมีโอกาสได้ร่วมงานกับท่านในอนาคต</span>

        <div class="footer-text">
          <p style="color: #0ea60e; font-weight: 600">
            Com7 (Public) Company Limited <br />
            549/1 Sanphawut Rd., Bangna Tai, Bangna, Bangkok 10260<br />
            <span style="color: #000"
              >Tel: 02-017-7777 ต่อ 7209, 7208, 7210, 7217, 7230</span
            >
          </p>
        </div>
      </div>
    </div>
  </body>
</html>

        `;
}
