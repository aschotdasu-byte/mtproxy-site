import Link from 'next/link';

export default function HowPage() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <Link href="/">← На главную</Link>

      <h1>Как подключить</h1>

      <ol style={{ marginTop: 20, lineHeight: 1.8 }}>
        <li>Перейди в раздел «Прокси»</li>
        <li>Нажми кнопку «Подключить»</li>
        <li>Подтверди подключение в Telegram</li>
      </ol>
    </main>
  );
}
