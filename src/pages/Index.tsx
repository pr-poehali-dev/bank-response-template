import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c6198c78-9a9b-4f30-ba57-25c8853d6a31/files/7c4e2b57-c2de-401f-914f-75f947c9b8e2.jpg";

const steps = [
  {
    number: "01",
    title: "Откройте почту",
    description: "Найдите письмо от нас — оно уже в вашем ящике. Проверьте папку «Спам», если не видите во «Входящих».",
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

const benefits = [
  {
    icon: "ShieldCheck",
    title: "Составлен юристами",
    description: "Шаблон разработан практикующими юристами с опытом в финансовом комплаенсе.",
  },
  {
    icon: "Zap",
    title: "Готов к использованию",
    description: "Заполните поля за 10 минут и отправьте в банк — без лишних слов и ошибок.",
  },
  {
    icon: "BookOpen",
    title: "Ссылки на законы",
    description: "Каждый пункт подкреплён актуальными нормами 115-ФЗ и письмами ЦБ РФ.",
  },
  {
    icon: "RefreshCw",
    title: "Актуальная редакция",
    description: "Обновляется при каждом изменении законодательства. Вы всегда получаете свежую версию.",
  },
];

export default function Index() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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

            <a
              href="#activate"
              className="inline-flex items-center gap-3 text-white font-oswald font-semibold uppercase tracking-widest text-base px-10 py-5 rounded-none transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Активировать подписку
              <Icon name="ArrowRight" size={20} />
            </a>

            <p className="mt-5 text-sm text-gray-400 flex items-center gap-2">
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
          {/* Decorative accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{ backgroundColor: "#FF6B35" }}
          />
        </div>
      </section>

      {/* ACTIVATION STEPS */}
      <section id="activate" className="py-24 px-8 md:px-16 lg:px-20 border-t border-gray-100">
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
                  className="w-12 h-12 rounded-none flex items-center justify-center mb-5 transition-colors duration-300 group-hover:text-white"
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
                {/* Bottom accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: "#FF6B35" }}
                />
              </div>
            ))}
          </div>

          {/* CTA inline */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 border border-gray-200">
            <div className="flex-1">
              <p className="font-oswald text-xl uppercase text-gray-900 mb-1">Проверьте свою почту прямо сейчас</p>
              <p className="text-gray-500 text-sm">Письмо уже отправлено. Осталось только нажать кнопку внутри.</p>
            </div>
            <a
              href="mailto:"
              className="flex-shrink-0 inline-flex items-center gap-2 border-2 font-oswald uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:text-white"
              style={{
                borderColor: "#FF6B35",
                color: "#FF6B35",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#FF6B35";
                (e.currentTarget as HTMLAnchorElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FF6B35";
              }}
            >
              <Icon name="Mail" size={16} />
              Открыть почту
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-8 md:px-16 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-oswald tracking-[0.2em] uppercase text-orange-500 mb-3">Что вы получаете</p>
            <h2 className="font-oswald font-600 text-4xl md:text-5xl uppercase text-gray-900 leading-tight">
              Преимущества шаблона
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-gray-200">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-10 group hover:bg-gray-900 transition-colors duration-300">
                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <Icon name={b.icon} size={18} style={{ color: "white" }} />
                </div>
                <h3 className="font-oswald text-lg uppercase tracking-wide text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                  {b.description}
                </p>
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
