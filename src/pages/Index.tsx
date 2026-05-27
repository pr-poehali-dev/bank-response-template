import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c6198c78-9a9b-4f30-ba57-25c8853d6a31/files/7c4e2b57-c2de-401f-914f-75f947c9b8e2.jpg";

const steps = [
  {
    number: "01",
    title: "Откройте почту",
    description: "Найдите письмо от нас — оно уже в вашем ящике.",
    icon: "Mail",
  },
  {
    number: "02",
    title: "Нажмите кнопку активации",
    description: "Кликните на кнопку «Подтвердить подписку» внутри письма. Это займёт одну секунду.",
    icon: "MousePointerClick",
  },
  {
    number: "03",
    title: "Получите шаблон",
    description: "Сразу после активации вы получите готовый шаблон ответа банку по 115-ФЗ на свою почту.",
    icon: "FileCheck",
  },
];

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-golos text-gray-900 overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-stretch">

        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse inline-block" />
              <span className="text-sm font-medium text-orange-600 tracking-wide">Регистрация завершена</span>
            </div>

            <h1 className="font-oswald font-700 text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight uppercase mb-6 text-gray-900">
              Один шаг —<br />
              <span style={{ color: "#FF6B35" }}>и шаблон</span><br />
              у вас в руках
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-md">
              Подтвердите почту, чтобы получить готовый шаблон ответа банку при блокировке по&nbsp;115-ФЗ.
            </p>

            {/* Spam notice */}
            <div className="flex items-start gap-3 p-4 border border-gray-200 bg-gray-50 max-w-md">
              <div className="flex-shrink-0 mt-0.5">
                <Icon name="AlertCircle" size={18} style={{ color: "#FF6B35" }} />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Не получили письмо? Проверьте папку <span className="font-semibold text-gray-900">«Спам»</span> — иногда письмо попадает туда автоматически.
              </p>
            </div>

            <p className="mt-6 text-sm text-gray-400 flex items-center gap-2">
              <Icon name="Lock" size={14} />
              Без спама. Отписаться можно в любой момент.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div
          className="flex-1 relative overflow-hidden min-h-64 lg:min-h-screen"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.3s",
          }}
        >
          <img
            src={HERO_IMAGE}
            alt="Визуализация документа 115-ФЗ"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, white 0%, transparent 20%)",
            }}
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ backgroundColor: "#FF6B35" }}
          />
        </div>
      </section>

      {/* ACTIVATION STEPS */}
      <section className="py-24 px-8 md:px-16 lg:px-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-oswald tracking-[0.2em] uppercase text-orange-500 mb-3">Процесс активации</p>
            <h2 className="font-oswald font-600 text-4xl md:text-5xl uppercase text-gray-900 leading-tight">
              Три простых шага
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-0 md:gap-px bg-gray-100">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white p-10 relative group hover:bg-orange-50 transition-colors duration-300"
              >
                <div
                  className="font-oswald text-7xl font-700 leading-none mb-6 select-none"
                  style={{ color: "#FF6B35", opacity: 0.15 }}
                >
                  {step.number}
                </div>
                <div
                  className="w-12 h-12 rounded-none flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#FF6B35", color: "white" }}
                >
                  <Icon name={step.icon} size={22} />
                </div>
                <h3 className="font-oswald text-xl uppercase tracking-wide text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: "#FF6B35" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-16 lg:px-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-oswald text-sm uppercase tracking-widest text-gray-400">
            Шаблон ответа по 115-ФЗ
          </p>
          <p className="text-xs text-gray-300">
            Материал носит информационный характер и не является юридической консультацией
          </p>
        </div>
      </footer>

    </div>
  );
}
