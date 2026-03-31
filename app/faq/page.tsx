import Link from 'next/link';

export default function FaqPage() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <Link href="/">← На главную</Link>

      <h1>FAQ</h1>

      <div style={{ marginTop: 20, lineHeight: 1.8 }}>
        <details style={{ marginBottom: 12 }}>
          <summary><strong>Это бесплатный прокси?</strong></summary>
          <p>Да, сейчас доступен бесплатный сервер для подключения.</p>
        </details>

        <details style={{ marginBottom: 12 }}>
          <summary><strong>Работает ли на телефоне?</strong></summary>
          <p>Да, полностью поддерживаются мобильные устройства.</p>
        </details>

        <details style={{ marginBottom: 12 }}>
          <summary><strong>Можно добавить другие серверы?</strong></summary>
          <p>Да, позже можно расширить список прокси.</p>
        </details>
      </div>
    </main>
  );
}
