import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
  BellRing,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "Apakah ada masa trial gratis?",
    answer:
      "Ya, Kostmu menyediakan paket gratis selama 1 bulan untuk membantu Anda mencoba fitur dasar seperti pencatatan penyewa, pembayaran, dan laporan sederhana.",
  },
  {
    icon: Route,
    question: "Bagaimana cara memantau pembayaran penyewa?",
    answer:
      "Anda dapat memantau status pembayaran secara real-time di dashboard. Sistem juga memberikan notifikasi otomatis jika ada penyewa yang belum membayar.",
  },
  {
    icon: BellRing,
    question: "Apakah ada reminder pembayaran via WhatsApp?",
    answer:
      "Ya, Kostmu mendukung pengingat pembayaran melalui WhatsApp secara otomatis. Pengingat dikirim dengan frekuensi yang aman agar tidak dianggap spam atau diblokir oleh WhatsApp.",
  },
  {
    icon: BadgeDollarSign,
    question: "Metode pembayaran apa yang tersedia?",
    answer:
      "Kami mendukung transfer bank, e-wallet (OVO, GoPay, Dana), dan pembayaran kartu kredit/debit. Semua transaksi dijamin aman dan cepat.",
  },
  {
    icon: ShieldCheck,
    question: "Apakah data penyewa saya aman?",
    answer:
      "Ya, Kostmu menggunakan enkripsi tingkat lanjut dan sistem keamanan berlapis untuk melindungi data penyewa dan transaksi Anda.",
  },
  {
    icon: UserRoundCheck,
    question: "Bagaimana cara menghubungi dukungan pelanggan?",
    answer:
      "Anda dapat menghubungi tim support kami melalui WhatsApp resmi atau email di support@kostmu.com. Kami siap membantu setiap hari kerja.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tight text-center">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Jawaban cepat untuk membantu Anda memahami cara kerja Kostmu.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
