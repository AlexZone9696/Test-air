const TOKEN = "7956166311:AAH-RgLDYMaC3bjWoyQkfe3dQBKr3mKdSq0"; // Замените на токен вашего бота
const CHAT_ID = "@CryptoAirdrops678"; // Или -100xxxxxxxxxx

export default async function handler(req, res) {
  const message = `Go to our <b>backup channel</b>\n\nLegal earning schemes only here 👇🏻`;

  const replyMarkup = {
    inline_keyboard: [
      [
        {
          text: "GO 🚀",
          url: "https://t.me/AdBeastClickBot"
        }
      ]
    ]
  };

  const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
      reply_markup: replyMarkup
    })
  });

  if (response.ok) {
    res.status(200).send("✅ Message sent to Telegram");
  } else {
    const error = await response.text();
    res.status(500).send("❌ Error: " + error);
  }
}
