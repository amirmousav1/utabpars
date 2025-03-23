import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
import MobileMenu from "./_components/MobileMenu";

const iranyekan = localFont({
  src: [
    {
      path: "./IRANYekanWebRegular.woff2",
      weight: "400",
    },
    {
      path: "./IRANYekanWebBold.woff2",
      weight: "700",
    },
    {
      path: "./IRANYekanWebLight.woff2",
      weight: "300",
    },
  ],
});

export const metadata = {
  title: "یوتاب پارس",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir="rtl" className={`${iranyekan.className} antialiased relative`}>
        <header className="container py-5 mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image width={110} height={50} src="/logo.png" alt="لوگو" />
          </Link>
          <nav className="hidden md:flex text-[#001733]">
            <ul className="flex items-center gap-[30px] lg:gap-[50px]">
              <li>
                <Link className="hover:text-[#01808c] duration-300" href="/">
                  خانه
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#01808c] duration-300" href="/">
                  خدمات ما
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#01808c] duration-300" href="/">
                  پروژه ها
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#01808c] duration-300" href="/">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#01808c] duration-300" href="/">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </nav>
          <Link
            href="/"
            className="relative overflow-hidden w-fit text-white py-2 px-4 rounded-lg cursor-pointer text-lg bg-gradient-to-b from-[#6ccdd6] to-[#047c8c] transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#ff9198] before:to-[#f85963] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100 before:z-0"
          >
            <span className="relative z-10">حساب کاربری</span>
          </Link>
          <MobileMenu />
        </header>
        {children}
        <footer className="bg-[#01808c] text-white">
          <div className="container mx-auto px-4 py-5">
            <div className="grid gap-y-10 md:grid-cols-3">
              <div>
                <Image width={110} height={50} src="/logo.png" alt="لوگو" />
                <span>از کلیک تا موفقیت، همراه شما هستیم.</span>
                <ul className="mt-3 flex gap-3">
                  <li>
                    <a
                      className="bg-gradient-to-br rounded-xl from-[#ffc5c9] to-[#fb626b] p-4 w-fit flex items-center justify-center"
                      href="/"
                    >
                      <svg
                        className="size-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path d="M248 8C111.033 8 0 119.033 0 256s111.033 248 248 248 248-111.033 248-248S384.967 8 248 8m114.952 168.66c-3.732 39.215-19.881 134.378-28.1 178.3-3.476 18.584-10.322 24.816-16.948 25.425-14.4 1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25 5.342-39.5 3.652-3.793 67.107-61.51 68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608 69.142-14.845 10.194-26.894 9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7 18.45-13.7 108.446-47.248 144.628-62.3c68.872-28.647 83.183-33.623 92.511-33.789 2.052-.034 6.639.474 9.61 2.885a10.45 10.45 0 0 1 3.53 6.716 43.8 43.8 0 0 1 .417 9.769"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-br rounded-xl from-[#ffc5c9] to-[#fb626b] p-4 w-fit flex items-center justify-center"
                      href="/"
                    >
                      <svg
                        className="size-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="bg-gradient-to-br rounded-xl from-[#ffc5c9] to-[#fb626b] p-4 w-fit flex items-center justify-center"
                      href="/"
                    >
                      <svg
                        className="size-5 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-xl">سرویس‌ها</h6>
                <ul className="font-light flex flex-col gap-2 mt-3">
                  <li>
                    <Link href="/">بهینه‌سازی سئو</Link>
                  </li>
                  <li>
                    <Link href="/">خدمات اپلیکیشن</Link>
                  </li>
                  <li>
                    <Link href="/">طراحی گرافیک</Link>
                  </li>
                  <li>
                    <Link href="/">صفحات لندینگ</Link>
                  </li>
                  <li>
                    <Link href="/">ایمیل مارکتینگ</Link>
                  </li>
                  <li>
                    <Link href="/">توسعه نرم‌افزار</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-xl">ارتباط باما</h6>
                <ul className="flex flex-col gap-5 mt-3 font-light">
                  <li>info@utabpars.com</li>
                  <li>07191013320</li>
                  <li>
                    شیراز، خیابان اردیبهشت شرقی، برج IT، طبقه دوم، واحد 26
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#fb626b]">
            <div className="container mx-auto px-4 py-4">
              <p>
                ©{new Date().getFullYear()} تمامی حقوق این وبسایت محفوظ می باشد.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
