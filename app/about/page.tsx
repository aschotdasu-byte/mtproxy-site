import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <Link href="/">← На главную</Link>

      <h1>О нас</h1>

      <p style={{ marginTop: 20, lineHeight: 1.8, maxWidth: 700 }}>
        Мы сделали простой и удобный сайт для быстрого доступа к Telegram через
        MTProto proxy. Наша цель — дать пользователям понятный интерфейс,
        быстрый доступ к рабочим серверам и удобную инструкцию по подключению.
      </p>

      <ul style={{ marginTop: 20, lineHeight: 1.8 }}>
        <li>Публикуем доступные прокси</li>
        <li>Делаем подключение максимально простым</li>
        <li>Поддерживаем мобильные устройства</li>
        <li>Добавляем быстрый доступ на главный экран</li>
      </ul>
    </main>
  );
}
