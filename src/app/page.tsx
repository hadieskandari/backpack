"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface FormDataType {
  name: string;
}

export default function Home() {
  const [form, setForm] = useState<FormDataType>({ name: "" });
  const router = useRouter();

  async function create(data: FormDataType) {
    if (typeof window !== "undefined") {
      localStorage.setItem("name", data.name);
    }
    router.push("/form", { scroll: false });
    // try {
    //   fetch("http://localhost:3000/api/create", {
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //   }).then(() => {
    //     setForm({ name: "" });
    //   });
    // } catch (e) {}
  }

  const handleSubmit = (data: FormDataType) => {
    try {
      create(data);
    } catch (e) {}
  };
  return (
    <div className="welcome-container">
      <section>
        <h1 className="mb-0">
          <span className="welcome">
            <Image
              src="/images/text.svg"
              alt="Welcome"
              width="310"
              height="47"
            />
          </span>
        </h1>

        <h2 className="welcome-description">
          <span>
            با وارد کردن اسمتون و یک کلیک می‌تونید بانیِ مهر امسال باشید و در
            تامین ۱۰،۰۰۰ کوله‌پشتی با لوازم‌التحریر یک سال تحصیلی شریک بشید.
          </span>
        </h2>

        <div>
          <Image
            src="/images/backpack.png"
            alt="backpack"
            width="268"
            height="220"
          />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
        >
          <div className="w-100 mt-2">
            <input
              type="text"
              autoComplete="given-name"
              placeholder="اسمت رو وارد کن"
              onChange={(e) => setForm({ name: e.target.value })}
            />
          </div>
          <div className="mt-1">
            <button>! کـلـیک کنیـد</button>
          </div>
        </form>
        <div className="alert-rectangle">
          <div className="hashtag mt-2">
            <Image
              src="/images/hashtag.svg"
              width="100"
              height="90"
              alt="hashtag"
            />
          </div>

          <span>
            هدف کمپین مهر،بانی میخواهد سال ۱۴۰۲، تامین و توزیع ۱۰،۰۰۰ کوله‌پشتی
            برای کودکان بازمانده از تحصیل کشور می‌باشد.
          </span>
        </div>
      </section>
    </div>
  );
}
