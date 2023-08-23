"use client";
import Image from "next/image";
import "../app/globals.css";
import { useEffect, useState } from "react";

export default function Form() {
  let [name, setName] = useState("");
  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("name") || "";
    setName(value)
  }, []);
  return (
    <div>
      <header>
        <div className="corner">
          <a href="https://instagram.com">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>

        <div className="corner logo">
          <Image src="/images/logo.png" alt="logo" width={300} height={240} />
        </div>
      </header>
      <div className="main-container">
        <div className="text-center centralize">
          <Image
            src="/images/component.png"
            alt="component"
            width="310"
            height="58"
          />
        </div>

        <div className="w-100 text-center centralize mt-1">
          <Image
            src="/images/goodJob.svg"
            alt="good job"
            width="270"
            height="110"
          />
        </div>
        <div className="w-100 centralize">
          <div className="text-center">
            ز طرف تمامی کودکانی که شما بانیِ مهر آن‌ها شدید.
          </div>
        </div>
        <div className="overlap-container">
          <Image
            src="/images/standing.png"
            alt="standing"
            width="85"
            height="240"
          />
          <br />
          <Image
            className="image-overlap"
            src="/images/book.png"
            alt="Welcome"
            width="310"
            height="175"
          />
        </div>

        <div className="paragraph mt-2 mb-1">
          <p>
            <strong className="highlight">مهربان {name} </strong>، می‌تونی با
            زدن دکمه‌ زیر و ذخیره کردن تصویر بالا و منتشر کردن آن به تامین
            ۱۰،۰۰۰ کوله‌پشتی با لوازم التحریر، کمک کنی.
          </p>
        </div>

        <div className="text-center">
          <button>ذخیره کردن</button>
        </div>
      </div>

      <div className="phone-container">
        <div className="text-center mt-2">
          <span>
            مهربان عزیز، می‌تونید با وارد کردن شماره موبایلتون از مراحل کمپین
            #مهر_بانی_میخواهد امسال با خبر شید.
          </span>
        </div>
        <div className="w-100 mt-2">
          <input type="text" autoComplete="given-name" placeholder="" />
        </div>
        <div className="text-center mt-2">
          <button>ثبت شماره</button>
        </div>
      </div>

      <div className="message-container">
        <div className="text-center">
          <span>
            اگر دوست دارید، می‌تونید نامه‌ای به کودکی که کوله‌پشتی به دستش
            می‌رسه، همین پایین بنویسید.
          </span>
        </div>
        <div className="w-100 mt-2">
          <textarea />
        </div>
        <div className="text-center mt-2">
          <button>ارسال نامه</button>
        </div>
      </div>

      <div className="hashtag mt-2 centralize mb-2">
        <Image
          src="/images/hashtag.svg"
          alt="hashtag"
          width="200"
          height="40"
        />
      </div>
    </div>
  );
}
