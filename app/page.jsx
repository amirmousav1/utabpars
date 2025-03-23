import Image from "next/image";
import MultipleItems from "./_components/ProjectsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedClients from "./_components/TrustedClients";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="order-last md:order-first col-span-2 flex flex-col justify-center">
            <h1 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#001733]">
              دیجیتال مارکتینک یوتاب پارس
            </h1>
            <p className="mt-8 leading-[32px] font-light text-[#001733]">
              با خدمات حرفه‌ای دیجیتال مارکتینگ، ما کمک می‌کنیم کسب‌وکار شما
              دقیقاً به دست مخاطبان هدف برسد. از طراحی وب‌سایت‌های کاربرپسند و
              بهینه‌سازی برای موتورهای جستجو گرفته تا تبلیغات در شبکه‌های
              اجتماعی و تولید محتوای جذاب، همه چیز را برای رشد آنلاین شما فراهم
              کرده‌ایم. تیم متخصص ما با تحلیل دقیق بازار و شناخت نیازهای شما، یک
              برنامه سفارشی طراحی می‌کند تا برندتان را به بهترین شکل ممکن ارتقا
              دهد.
            </p>
            <button className="relative overflow-hidden w-fit text-white py-3 px-5 mt-5 rounded-lg cursor-pointer text-xl bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">بیشتر بخوانید</span>
            </button>
          </div>
          <div className="order-first md:order-last">
            <img className="object-cover" src="/1.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="container my-40 mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#001733]">
          خدمات یوتاب پارس
        </h2>
        <div className="mt-10 text-[#001733] gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative shadow-[0px_24px_60px_0px_#00000012] py-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffe6c5] to-[#f9bd67] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[140px] bg-gradient-to-br rounded-4xl from-[#ffe6c5] to-[#f9bd67] group-hover:from-[rgba(255,255,255,0.16)] group-hover:to-[rgba(255,255,255,0.16)]  aspect-square relative">
                <Image className="p-5" src="/web.png" alt="طراحی وبسایت" fill />
              </div>
              <h4 className="font-bold text-3xl mt-10 group-hover:text-white transition-all duration-300">
                طراحی وبسایت
              </h4>
              <p className="mx-3 text-center mt-5 leading-[30px] font-light group-hover:text-white transition-all duration-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="relative shadow-[0px_24px_60px_0px_#00000012] py-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3ebbc8] to-[#007f8b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[140px] bg-gradient-to-br rounded-4xl from-[#3ebbc8] to-[#007f8b] group-hover:from-[rgba(255,255,255,0.16)] group-hover:to-[rgba(255,255,255,0.16)]  aspect-square relative">
                <Image
                  className="p-5"
                  src="/content.png"
                  alt="تولید محتوا"
                  fill
                />
              </div>
              <h4 className="font-bold text-3xl mt-10 group-hover:text-white transition-all duration-300">
                تولید محتوا
              </h4>
              <p className="mx-3 text-center mt-5 leading-[30px] font-light group-hover:text-white transition-all duration-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="relative shadow-[0px_24px_60px_0px_#00000012] py-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffc5c9] to-[#fb626b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[140px] bg-gradient-to-br rounded-4xl from-[#ffc5c9] to-[#fb626b] group-hover:from-[rgba(255,255,255,0.16)] group-hover:to-[rgba(255,255,255,0.16)]  aspect-square relative">
                <Image
                  className="p-5"
                  src="/seo.png"
                  alt="سئو و بهینه سازی"
                  fill
                />
              </div>
              <h4 className="font-bold text-3xl mt-10 group-hover:text-white transition-all duration-300">
                سئو و بهینه سازی
              </h4>
              <p className="mx-3 text-center mt-5 leading-[30px] font-light group-hover:text-white transition-all duration-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="relative shadow-[0px_24px_60px_0px_#00000012] py-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a7f6ff] to-[#48b8c2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-[140px] bg-gradient-to-br rounded-4xl from-[#a7f6ff] to-[#48b8c2] group-hover:from-[rgba(255,255,255,0.16)] group-hover:to-[rgba(255,255,255,0.16)]  aspect-square relative">
                <Image
                  className="p-5"
                  src="/social.png"
                  alt="سوشال مدیا"
                  fill
                />
              </div>
              <h4 className="font-bold text-3xl mt-10 group-hover:text-white transition-all duration-300">
                سوشال مدیا
              </h4>
              <p className="mx-3 text-center mt-5 leading-[30px] font-light group-hover:text-white transition-all duration-300">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-40 mx-auto px-4">
        <div className="md:grid grid-cols-1 md:grid-cols-3 flex flex-col justify-center gap-10">
          <div className="flex items-center">
            <img className="object-cover" src="/2.svg" alt="" />
          </div>
          <div className="col-span-2 flex flex-col justify-center">
            <h3 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#001733]">
              درباره تیم دیجیتال مارکتینگ ما
            </h3>
            <p className="mt-8 leading-[32px] font-light text-[#001733]">
              در تیم دیجیتال مارکتینگ ما، معتقدیم که ترکیب خلاقیت، تخصص و نوآوری
              می‌تواند کسب‌وکار شما را به سطحی جدید از موفقیت برساند. با تحلیل
              دقیق نیازهای شما و ارائه راهکارهای سفارشی، استراتژی‌های هدفمند
              برای جذب مخاطب و رشد آنلاین طراحی می‌کنیم. از بهینه‌سازی سایت برای
              موتورهای جستجو (SEO) گرفته تا تبلیغات آنلاین و مدیریت شبکه‌های
              اجتماعی، ما همواره در تلاشیم تا نتایج فراتر از انتظارات شما رقم
              بزنیم. هدف ما همراهی شما در مسیر رشد پایدار است، با رویکردی شفاف و
              مؤثر که شما را به موفقیت‌های چشمگیر در دنیای دیجیتال هدایت می‌کند.
            </p>
            <button className="relative overflow-hidden w-fit text-white py-3 px-5 mt-5 rounded-lg cursor-pointer text-xl bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">بیشتر بخوانید</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#01808c] py-20">
        <div className="container flex flex-col mx-auto px-10">
          <h2 className="text-center text-white text-4xl font-bold mb-14">
            نمونه کارهای یوتاب پارس
          </h2>
          <MultipleItems />
          <button className="relative mx-auto overflow-hidden w-fit text-white py-3 px-5 mt-10 rounded-lg cursor-pointer text-xl bg-gradient-to-b from-[#ff9198] to-[#f85963] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#6ccdd6] before:to-[#047c8c] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
            <span className="relative z-10">مشاهده همه</span>
          </button>
        </div>
      </section>
      <section className="container mx-auto my-40 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="order-last md:order-first col-span-2 flex flex-col justify-center">
            <h4 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#001733]">
              همراه شما در دنیای دیجیتال
            </h4>
            <p className="mt-8 leading-[32px] font-light text-[#001733]">
              ما در تیم دیجیتال مارکتینگ خود اعتقاد داریم که ترکیب خلاقیت، تخصص
              و نوآوری می‌تواند کسب‌وکار شما را به سطح جدیدی از موفقیت برساند.
              با ارائه راهکارهای سفارشی و تحلیل دقیق نیازهای شما، استراتژی‌هایی
              هدفمند برای جذب مخاطب و رشد آنلاین طراحی می‌کنیم. از بهینه‌سازی
              سایت برای موتورهای جستجو (SEO) گرفته تا تبلیغات آنلاین و مدیریت
              شبکه‌های اجتماعی، هدف ما این است که شما را در مسیر رسیدن به نتایج
              مطلوب و فراتر از انتظارات‌تان همراهی کنیم. تیم ما همیشه در کنار
              شماست، با رویکردی شفاف و مؤثر، تا به رشد پایدار و موفقیت‌های
              چشمگیر دست پیدا کنید.
            </p>
            <button className="relative overflow-hidden w-fit text-white py-3 px-5 mt-5 rounded-lg cursor-pointer text-xl bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">بیشتر بخوانید</span>
            </button>
          </div>
          <div className="order-first md:order-last flex items-center">
            <img
              className="object-cover"
              src="/3.svg"
              alt="همراه شما در دنیای دیجیتال"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#01808c]">
        <div className="container flex flex-col mx-auto px-10 py-20">
          <h2 className="text-center text-white text-4xl font-bold mb-14">
            نظرات مشتریان
          </h2>
          <TrustedClients />
        </div>
      </section>
      <section className="container my-20 mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#001733]">
          پلن های طراحی سایت
        </h2>
        <div className="mt-10 text-[#001733] gap-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <div className="relative p-3 justify-between border-t-4 border-t-[#f9bd67] text-center shadow-[0px_24px_60px_0px_#00000012] pt-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffe6c5] to-[#f9bd67] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl transition-all duration-300">
                طراحی سایت استاندارد وردپرسی
              </h4>
              <span className="font-bold text-xl mt-8">15,700,000 تومان</span>
              <ul className="w-full text-right flex flex-col gap-3 mt-10 text-sm font-light">
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span> 1 گیگ هاست</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>1 سال دامنه ir.</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>سئو اولیه</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>بارگذاری محتوای 5 صفحه</span>
                </li>
              </ul>
            </div>
            <button className="relative overflow-hidden w-full text-white py-2 px-5 mt-5 rounded-3xl cursor-pointer bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">دریافت مشاوره</span>
            </button>
          </div>
          <div className="relative p-3 justify-between border-t-4 border-t-[#007f8b] text-center shadow-[0px_24px_60px_0px_#00000012] pt-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3ebbc8] to-[#007f8b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl transition-all duration-300 group-hover:text-white">
                طراحی سایت حرفه ای وردپرسی
              </h4>
              <span className="font-bold text-xl mt-8 group-hover:text-white transition-all duration-300">
                23,500,000 تومان
              </span>
              <ul className="w-full text-right flex flex-col gap-3 mt-5 text-sm font-light group-hover:text-white transition-all duration-300">
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 group-hover:fill-white transition-all duration-300 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span> 5 گیگ هاست</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 group-hover:fill-white transition-all duration-300 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>1 سال دامنه ir. و com.</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 group-hover:fill-white transition-all duration-300 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>سئو اولیه</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 group-hover:fill-white transition-all duration-300 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>بارگذاری 20 محصول نمونه</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 group-hover:fill-white transition-all duration-300 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>با هویت بصری مشتری</span>
                </li>
              </ul>
            </div>
            <button className="relative overflow-hidden w-full text-white py-2 px-5 mt-5 rounded-3xl cursor-pointer bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">دریافت مشاوره</span>
            </button>
          </div>
          <div className="relative p-3 justify-between border-t-4 border-t-[#fb626b] text-center shadow-[0px_24px_60px_0px_#00000012] pt-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffc5c9] to-[#fb626b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl transition-all duration-300">
                طراحی سایت فروشگاهی اختصاصی
              </h4>
              <span className="font-bold text-xl mt-8">29,700,000 تومان</span>
              <ul className="w-full text-right flex flex-col gap-3 mt-5 text-sm font-light">
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span> 5 گیگ هاست</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>دامنه ir. و com.</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>سئو اولیه</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>طراحی با رنگ سازمانی</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>طراحی با تمام امکانات</span>
                </li>
              </ul>
            </div>
            <button className="relative overflow-hidden w-full text-white py-2 px-5 mt-5 rounded-3xl cursor-pointer bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">دریافت مشاوره</span>
            </button>
          </div>
          <div className="relative p-3 justify-between border-t-4 border-t-[#48b8c2] text-center shadow-[0px_24px_60px_0px_#00000012] pt-10 group hover:-translate-y-2 transition-all duration-300 h-[400px] rounded-3xl flex flex-col items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#a7f6ff] to-[#48b8c2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h4 className="text-xl transition-all duration-300">
                طراحی سایت فروشگاهی اختصاصی
              </h4>
              <span className="font-bold text-xl mt-8">29,700,000 تومان</span>
              <ul className="w-full text-right flex flex-col gap-3 mt-5 text-sm font-light">
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span> 5 گیگ هاست</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>دامنه ir. و com.</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>سئو اولیه</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>طراحی با رنگ سازمانی</span>
                </li>
                <li className="flex items-center gap-1">
                  <svg
                    className="size-4 fill-[#001733]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
                  </svg>
                  <span>طراحی با تمام امکانات</span>
                </li>
              </ul>
            </div>
            <button className="relative overflow-hidden w-full text-white py-2 px-5 mt-5 rounded-3xl cursor-pointer bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0">
              <span className="relative z-10">دریافت مشاوره</span>
            </button>
          </div>
        </div>
      </section>
      <section className="container my-20 mx-auto px-4">
        <h4 className="text-center text-4xl font-bold text-[#001733]">
          وبلاگ یوتاب پارس
        </h4>
        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          <div className="rounded-2xl shadow-[0px_24px_60px_0px_#00000012] hover:-translate-y-5 transition-all duration-300">
            <div className="relative w-full aspect-video">
              <Link href="/">
                <Image
                  className="object-cover rounded-t-2xl"
                  src="/blog1.jpg"
                  alt="چگونه از بازاریابی محتوا برای جذب مشتریان استفاده کنیم؟"
                  fill
                />
              </Link>
            </div>
            <div className="p-4">
              <Link href="/">
                <span className="text-[#01808c]">تجارت</span>
              </Link>
              <Link href="/">
                <h5 className="font-bold text-xl leading-[32px] mt-2">
                  چگونه از بازاریابی محتوا برای جذب مشتریان استفاده کنیم؟
                </h5>
              </Link>
            </div>
            <div className="flex justify-between items-center px-4 pb-4">
              <div className="flex items-center gap-2 text-[#001733]">
                <Image
                  src="/avatar.jpg"
                  alt="امیر موسوی"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                امیر موسوی
              </div>
              <span className="text-[#555]">18 آذر 1399</span>
            </div>
          </div>
          <div className="rounded-2xl shadow-[0px_24px_60px_0px_#00000012] hover:-translate-y-5 transition-all duration-300">
            <div className="relative w-full aspect-video">
              <Link href="/">
                <Image
                  className="object-cover rounded-t-2xl"
                  src="/blog2.jpg"
                  alt="چرا طراحی لوگو و برندینگ قوی برای سایت شما ضروری است؟"
                  fill
                />
              </Link>
            </div>
            <div className="p-4">
              <Link href="/">
                <span className="text-[#01808c]">دسته‌بندی نشده</span>
              </Link>
              <Link href="/">
                <h5 className="font-bold text-xl leading-[32px] mt-2">
                  چرا طراحی لوگو و برندینگ قوی برای سایت شما ضروری است؟
                </h5>
              </Link>
            </div>
            <div className="flex justify-between items-center px-4 pb-4">
              <div className="flex items-center gap-2 text-[#001733]">
                <Image
                  src="/avatar.jpg"
                  alt="امیر موسوی"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                امیر موسوی
              </div>
              <span className="text-[#555]">18 آذر 1399</span>
            </div>
          </div>
          <div className="rounded-2xl shadow-[0px_24px_60px_0px_#00000012] hover:-translate-y-5 transition-all duration-300">
            <div className="relative w-full aspect-video">
              <Link href="/">
                <Image
                  className="object-cover rounded-t-2xl"
                  src="/blog3.jpg"
                  alt="به چه صورت تجربه کاربری (UX) وب‌سایت خود را بهبود دهیم؟"
                  fill
                />
              </Link>
            </div>
            <div className="p-4">
              <Link href="/">
                <span className="text-[#01808c]">تجارت</span>
              </Link>
              <Link href="/">
                <h5 className="font-bold text-xl leading-[32px] mt-2">
                  به چه صورت تجربه کاربری (UX) وب‌سایت خود را بهبود دهیم؟
                </h5>
              </Link>
            </div>
            <div className="flex justify-between items-center px-4 pb-4">
              <div className="flex items-center gap-2 text-[#001733]">
                <Image
                  src="/avatar.jpg"
                  alt="امیر موسوی"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                امیر موسوی
              </div>
              <span className="text-[#555]">18 آذر 1399</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container my-40 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="order-last md:order-first col-span-2 flex flex-col justify-center">
            <h1 className="font-bold text-xl sm:text-3xl lg:text-5xl text-[#001733]">
              درخواست مشاوره
            </h1>
            <p className="mt-8 leading-[32px] font-light text-[#001733]">
              تیم متخصص ما آماده است تا با ارائه مشاوره‌ای حرفه‌ای و هدفمند، شما
              را در مسیر رشد و موفقیت همراهی کند. همین حالا درخواست مشاوره خود
              را ثبت کنید و گام اول را برای رسیدن به اهدافتان بردارید.
            </p>
            <form className="md:mx-auto relative mt-5">
              <input
                className="bg-[#01808c] py-5 px-8 w-full md:w-[500px] rounded-xl placeholder:text-[#eee] outline-none text-white"
                type="email"
                placeholder="آدرس ایمیل خود را وارد کنید"
              />
              <button
                className="absolute cursor-pointer left-0 h-[calc(100%-10px)] mt-[5px] ml-[5px] rounded-xl bg-[#fc858c] text-white px-5"
                type="submit"
              >
                مشترک شوید
              </button>
            </form>
          </div>
          <div className="order-first md:order-last">
            <img className="object-cover" src="/4.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
