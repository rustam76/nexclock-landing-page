export type Locale = "en" | "id";

export type Dictionary = {
  nav: {
    features: string;
    faq: string;
    support: string;
    requestDemo: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    requestDemo: string;
    contactSales: string;
  };
  features: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    title: string;
    description: string;
    requestDemo: string;
    contactSales: string;
  };
  footer: {
    tagline: string;
    features: string;
    faq: string;
    requestDemo: string;
    support: string;
    privacy: string;
    terms: string;
    contactSales: string;
    contactSalesHint: string;
    copyright: string;
  };
  supportPage: {
    title: string;
    body: string;
    contactSupport: string;
  };
  privacyPage: {
    title: string;
    intro: string;
    sections: Array<{ heading: string; body: string }>;
  };
  termsPage: {
    title: string;
    sections: Array<{ heading: string; body: string }>;
  };
  wa: {
    demo: string;
    sales: string;
    support: string;
  };
  lang: {
    en: string;
    id: string;
  };
};

const en: Dictionary = {
  nav: {
    features: "Features",
    faq: "FAQ",
    support: "Support",
    requestDemo: "Request a Demo",
  },
  hero: {
    badge: "Workforce & Attendance Management",
    headline: "Smarter Workforce & Attendance Management",
    description:
      "NexClock helps businesses and organizations manage employee attendance, schedules, and workforce operations from one simple platform.",
    requestDemo: "Request a Demo",
    contactSales: "Contact Sales",
  },
  features: {
    title: "Built for modern workforce operations",
    items: [
      {
        title: "Employee Attendance",
        description:
          "Manage employee attendance efficiently from a centralized platform.",
      },
      {
        title: "Face Verification",
        description:
          "Verify employee identity as part of the attendance process.",
      },
      {
        title: "Location-Based Attendance",
        description:
          "Support attendance management based on employee location where applicable.",
      },
      {
        title: "Work Schedules",
        description: "Manage employee working schedules with clear visibility.",
      },
      {
        title: "Shift Management",
        description: "Organize employees across different shifts.",
      },
      {
        title: "Employee Management",
        description:
          "Manage employee information and workforce structure in one place.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    subtitle:
      "Quick answers to help you understand how NexClock works for organizations.",
    items: [
      {
        question: "What is NexClock?",
        answer:
          "NexClock is an independent workforce and attendance management product designed for businesses and organizations. It helps teams manage employee attendance, schedules, and day-to-day workforce operations from one platform.",
      },
      {
        question: "Who is NexClock for?",
        answer:
          "NexClock is built for businesses and organizations with different workforce needs — not for a single exclusive company. Administrators and employees can use NexClock as part of their organization's attendance workflow.",
      },
      {
        question: "How do organizations get started?",
        answer:
          "Organizations interested in NexClock can request a demo or contact the NexClock sales team. There is no self-serve sign-up flow on this website — our team will help configure NexClock for your organization.",
      },
      {
        question: "Does NexClock support face verification?",
        answer:
          "Yes. Face verification can be used as part of the attendance process to help verify employee identity. For details on how facial data is handled, please review our Privacy Policy.",
      },
      {
        question: "How do we contact support?",
        answer:
          "Visit the Support page or contact our team via WhatsApp. We assist organizations and employees with product-related questions and issues.",
      },
      {
        question: "Where can we read the privacy policy?",
        answer:
          "You can read the NexClock Privacy Policy on the Privacy page, including information related to facial and biometric data processing.",
      },
    ],
  },
  cta: {
    title: "Ready to simplify workforce management?",
    description:
      "See how NexClock can help your organization manage employee attendance and workforce operations.",
    requestDemo: "Request a Demo",
    contactSales: "Contact Sales",
  },
  footer: {
    tagline: "Workforce & Attendance Management",
    features: "Features",
    faq: "FAQ",
    requestDemo: "Request Demo",
    support: "Support",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contactSales: "Contact Sales",
    contactSalesHint:
      "Interested in NexClock for your organization? Talk to our sales team.",
    copyright: "All rights reserved.",
  },
  supportPage: {
    title: "NexClock Support",
    body: "Need help with NexClock? Our support team is available to assist organizations and employees with product-related questions and issues.",
    contactSupport: "Contact Support",
  },
  privacyPage: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how NexClock collects, uses, and protects information when organizations and individuals use the NexClock workforce and attendance management product and this website.",
    sections: [
      {
        heading: "Who we are",
        body: "NexClock is an independent workforce and attendance management product designed for businesses and organizations. This policy applies to the NexClock website and product experiences operated by the NexClock team.",
      },
      {
        heading: "Information we collect",
        body: "Depending on how NexClock is used by an organization, we may process information such as account and profile details, employment-related identifiers configured by the organization, attendance records, schedule and shift information, device or app usage data needed to operate the service, and contact details submitted when requesting a demo or contacting support.",
      },
      {
        heading: "How we use information",
        body: "We use information to provide workforce and attendance management features, authenticate and verify attendance activity as configured by the organization, operate and improve the product, respond to demo and support requests, and meet applicable legal obligations.",
      },
      {
        heading: "Facial / Biometric Data",
        body: `NexClock may process facial data as part of face verification during attendance.

What facial data may be collected: facial images or related biometric signals captured during the attendance verification flow, as configured by the organization.

How it is collected: through the NexClock attendance experience on supported devices when face verification is enabled.

Purpose of use: to help verify employee identity as part of recording attendance and reducing fraudulent check-ins.

Whether raw images are stored: [ACTUAL FACIAL DATA PROCESSING METHOD]

Whether biometric templates or embeddings are created: [ACTUAL FACIAL DATA PROCESSING METHOD]

How facial data is stored: [ACTUAL FACIAL DATA PROCESSING METHOD]

Where facial data is stored: [ACTUAL STORAGE LOCATION]

Whether facial data is shared with third parties: [ACTUAL THIRD-PARTY PROCESSOR, IF ANY]

Whether a third-party facial recognition service is used: [ACTUAL THIRD-PARTY PROCESSOR, IF ANY]

Retention period: [ACTUAL RETENTION PERIOD]

How facial data is deleted: upon organizational request, account or employee offboarding processes, or according to [ACTUAL RETENTION PERIOD], subject to applicable law and the organization's configuration.

These placeholder values must be replaced with the actual implementation details before public launch.`,
      },
      {
        heading: "Sharing of information",
        body: "We do not sell personal information. Information may be processed by service providers that help us host, operate, or support NexClock, only as needed to provide the service, and as required by law. Organization administrators control workforce data within their NexClock workspace.",
      },
      {
        heading: "Data retention",
        body: "We retain information for as long as needed to provide the service to the organization, comply with legal obligations, resolve disputes, and enforce agreements. Facial and biometric retention is described in the Facial / Biometric Data section above.",
      },
      {
        heading: "Security",
        body: "We apply administrative, technical, and organizational measures designed to protect information processed by NexClock. No method of transmission or storage is completely secure, and organizations should also follow their own access-control best practices.",
      },
      {
        heading: "Your choices and rights",
        body: "Employees and administrators should contact their organization for requests related to workforce records managed in NexClock. You may also contact NexClock support regarding privacy questions related to this website or product operations.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, contact the NexClock team via the Support page or WhatsApp channel listed on this website.",
      },
      {
        heading: "Updates",
        body: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date when applicable.",
      },
    ],
  },
  termsPage: {
    title: "Terms of Service",
    sections: [
      {
        heading: "Agreement",
        body: "By accessing the NexClock website or requesting a product demonstration, you agree to these Terms of Service. If you are acting on behalf of an organization, you represent that you have authority to bind that organization.",
      },
      {
        heading: "The NexClock product",
        body: "NexClock is an independent workforce and attendance management product designed for businesses and organizations. Access to the product for an organization is arranged through demo and sales engagement with the NexClock team.",
      },
      {
        heading: "Demo and sales requests",
        body: "Submitting a demo or sales inquiry does not create a paid subscription by itself. Any commercial terms will be agreed separately between NexClock and the organization.",
      },
      {
        heading: "Acceptable use",
        body: "You agree not to misuse this website or the NexClock product, including attempting unauthorized access, interfering with service operations, or using the product in violation of applicable law or your organization's policies.",
      },
      {
        heading: "Disclaimer",
        body: "The website and related materials are provided on an as-available basis. To the maximum extent permitted by law, NexClock disclaims warranties not expressly agreed in a separate commercial contract.",
      },
      {
        heading: "Contact",
        body: "Questions about these Terms can be sent through the Support page or by contacting the NexClock sales or support team via WhatsApp.",
      },
    ],
  },
  wa: {
    demo: "Hello, I am interested in a NexClock product demonstration.",
    sales: "Hello, I am interested in NexClock for my organization.",
    support: "Hello, I need help with NexClock.",
  },
  lang: {
    en: "EN",
    id: "ID",
  },
};

const id: Dictionary = {
  nav: {
    features: "Fitur",
    faq: "FAQ",
    support: "Dukungan",
    requestDemo: "Minta Demo",
  },
  hero: {
    badge: "Manajemen Tenaga Kerja & Kehadiran",
    headline: "Manajemen Tenaga Kerja & Kehadiran yang Lebih Cerdas",
    description:
      "NexClock membantu bisnis dan organisasi mengelola kehadiran karyawan, jadwal, dan operasional tenaga kerja dari satu platform yang sederhana.",
    requestDemo: "Minta Demo",
    contactSales: "Hubungi Sales",
  },
  features: {
    title: "Dirancang untuk operasional tenaga kerja modern",
    items: [
      {
        title: "Kehadiran Karyawan",
        description:
          "Kelola kehadiran karyawan secara efisien dari satu platform terpusat.",
      },
      {
        title: "Verifikasi Wajah",
        description:
          "Verifikasi identitas karyawan sebagai bagian dari proses kehadiran.",
      },
      {
        title: "Kehadiran Berbasis Lokasi",
        description:
          "Dukung pengelolaan kehadiran berdasarkan lokasi karyawan jika diterapkan.",
      },
      {
        title: "Jadwal Kerja",
        description:
          "Kelola jadwal kerja karyawan dengan visibilitas yang jelas.",
      },
      {
        title: "Manajemen Shift",
        description: "Atur karyawan lintas shift yang berbeda.",
      },
      {
        title: "Manajemen Karyawan",
        description:
          "Kelola informasi karyawan dan struktur tenaga kerja di satu tempat.",
      },
    ],
  },
  faq: {
    title: "Pertanyaan yang sering diajukan",
    subtitle:
      "Jawaban singkat untuk membantu Anda memahami cara kerja NexClock bagi organisasi.",
    items: [
      {
        question: "Apa itu NexClock?",
        answer:
          "NexClock adalah produk manajemen tenaga kerja dan kehadiran yang mandiri, dirancang untuk bisnis dan organisasi. NexClock membantu tim mengelola kehadiran karyawan, jadwal, dan operasional tenaga kerja harian dari satu platform.",
      },
      {
        question: "Untuk siapa NexClock?",
        answer:
          "NexClock dibuat untuk berbagai bisnis dan organisasi dengan kebutuhan tenaga kerja yang berbeda — bukan aplikasi eksklusif untuk satu perusahaan. Administrator dan karyawan dapat menggunakan NexClock sebagai bagian dari alur kehadiran organisasi mereka.",
      },
      {
        question: "Bagaimana organisasi memulai?",
        answer:
          "Organisasi yang tertarik dengan NexClock dapat meminta demo atau menghubungi tim sales NexClock. Tidak ada proses pendaftaran mandiri di website ini — tim kami akan membantu mengonfigurasi NexClock untuk organisasi Anda.",
      },
      {
        question: "Apakah NexClock mendukung verifikasi wajah?",
        answer:
          "Ya. Verifikasi wajah dapat digunakan sebagai bagian dari proses kehadiran untuk membantu memverifikasi identitas karyawan. Untuk detail penanganan data wajah, silakan baca Kebijakan Privasi kami.",
      },
      {
        question: "Bagaimana cara menghubungi dukungan?",
        answer:
          "Kunjungi halaman Dukungan atau hubungi tim kami melalui WhatsApp. Kami membantu organisasi dan karyawan terkait pertanyaan serta isu seputar produk.",
      },
      {
        question: "Di mana kebijakan privasi tersedia?",
        answer:
          "Anda dapat membaca Kebijakan Privasi NexClock di halaman Privasi, termasuk informasi terkait pemrosesan data wajah dan biometrik.",
      },
    ],
  },
  cta: {
    title: "Siap menyederhanakan manajemen tenaga kerja?",
    description:
      "Lihat bagaimana NexClock dapat membantu organisasi Anda mengelola kehadiran karyawan dan operasional tenaga kerja.",
    requestDemo: "Minta Demo",
    contactSales: "Hubungi Sales",
  },
  footer: {
    tagline: "Manajemen Tenaga Kerja & Kehadiran",
    features: "Fitur",
    faq: "FAQ",
    requestDemo: "Minta Demo",
    support: "Dukungan",
    privacy: "Kebijakan Privasi",
    terms: "Syarat Layanan",
    contactSales: "Hubungi Sales",
    contactSalesHint:
      "Tertarik menggunakan NexClock untuk organisasi Anda? Hubungi tim sales kami.",
    copyright: "Hak cipta dilindungi.",
  },
  supportPage: {
    title: "Dukungan NexClock",
    body: "Butuh bantuan terkait NexClock? Tim dukungan kami siap membantu organisasi dan karyawan untuk pertanyaan serta isu terkait produk.",
    contactSupport: "Hubungi Dukungan",
  },
  privacyPage: {
    title: "Kebijakan Privasi",
    intro:
      "Kebijakan Privasi ini menjelaskan bagaimana NexClock mengumpulkan, menggunakan, dan melindungi informasi ketika organisasi serta individu menggunakan produk manajemen tenaga kerja dan kehadiran NexClock serta website ini.",
    sections: [
      {
        heading: "Siapa kami",
        body: "NexClock adalah produk manajemen tenaga kerja dan kehadiran yang mandiri, dirancang untuk bisnis dan organisasi. Kebijakan ini berlaku untuk website NexClock dan pengalaman produk yang dioperasikan oleh tim NexClock.",
      },
      {
        heading: "Informasi yang kami kumpulkan",
        body: "Tergantung cara organisasi menggunakan NexClock, kami dapat memproses informasi seperti detail akun dan profil, pengenal terkait kepegawaian yang dikonfigurasi organisasi, catatan kehadiran, informasi jadwal dan shift, data perangkat atau penggunaan aplikasi yang diperlukan untuk menjalankan layanan, serta detail kontak yang dikirim saat meminta demo atau menghubungi dukungan.",
      },
      {
        heading: "Bagaimana kami menggunakan informasi",
        body: "Kami menggunakan informasi untuk menyediakan fitur manajemen tenaga kerja dan kehadiran, mengautentikasi serta memverifikasi aktivitas kehadiran sesuai konfigurasi organisasi, mengoperasikan dan meningkatkan produk, menanggapi permintaan demo dan dukungan, serta memenuhi kewajiban hukum yang berlaku.",
      },
      {
        heading: "Data Wajah / Biometrik",
        body: `NexClock dapat memproses data wajah sebagai bagian dari verifikasi wajah saat kehadiran.

Data wajah yang dapat dikumpulkan: gambar wajah atau sinyal biometrik terkait yang diambil selama alur verifikasi kehadiran, sesuai konfigurasi organisasi.

Cara dikumpulkan: melalui pengalaman kehadiran NexClock pada perangkat yang didukung ketika verifikasi wajah diaktifkan.

Tujuan penggunaan: membantu memverifikasi identitas karyawan sebagai bagian dari pencatatan kehadiran dan mengurangi check-in yang tidak sah.

Apakah gambar mentah disimpan: [ACTUAL FACIAL DATA PROCESSING METHOD]

Apakah template atau embedding biometrik dibuat: [ACTUAL FACIAL DATA PROCESSING METHOD]

Bagaimana data wajah disimpan: [ACTUAL FACIAL DATA PROCESSING METHOD]

Di mana data wajah disimpan: [ACTUAL STORAGE LOCATION]

Apakah data wajah dibagikan kepada pihak ketiga: [ACTUAL THIRD-PARTY PROCESSOR, IF ANY]

Apakah layanan pengenalan wajah pihak ketiga digunakan: [ACTUAL THIRD-PARTY PROCESSOR, IF ANY]

Periode retensi: [ACTUAL RETENTION PERIOD]

Bagaimana data wajah dihapus: atas permintaan organisasi, proses offboarding akun atau karyawan, atau sesuai [ACTUAL RETENTION PERIOD], tunduk pada hukum yang berlaku dan konfigurasi organisasi.

Nilai placeholder ini harus diganti dengan detail implementasi sebenarnya sebelum peluncuran publik.`,
      },
      {
        heading: "Pembagian informasi",
        body: "Kami tidak menjual informasi pribadi. Informasi dapat diproses oleh penyedia layanan yang membantu hosting, operasi, atau dukungan NexClock, hanya sejauh diperlukan untuk menyediakan layanan, dan sebagaimana diwajibkan oleh hukum. Administrator organisasi mengontrol data tenaga kerja dalam workspace NexClock mereka.",
      },
      {
        heading: "Retensi data",
        body: "Kami menyimpan informasi selama diperlukan untuk menyediakan layanan kepada organisasi, mematuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. Retensi data wajah dan biometrik dijelaskan pada bagian Data Wajah / Biometrik di atas.",
      },
      {
        heading: "Keamanan",
        body: "Kami menerapkan langkah administratif, teknis, dan organisasi yang dirancang untuk melindungi informasi yang diproses oleh NexClock. Tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, dan organisasi juga perlu mengikuti praktik terbaik kontrol akses mereka sendiri.",
      },
      {
        heading: "Pilihan dan hak Anda",
        body: "Karyawan dan administrator sebaiknya menghubungi organisasi mereka untuk permintaan terkait catatan tenaga kerja yang dikelola di NexClock. Anda juga dapat menghubungi dukungan NexClock terkait pertanyaan privasi pada website ini atau operasi produk.",
      },
      {
        heading: "Kontak",
        body: "Untuk pertanyaan privasi, hubungi tim NexClock melalui halaman Dukungan atau saluran WhatsApp yang tertera di website ini.",
      },
      {
        heading: "Pembaruan",
        body: "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan dipublikasikan di halaman ini beserta tanggal berlaku yang diperbarui jika relevan.",
      },
    ],
  },
  termsPage: {
    title: "Syarat Layanan",
    sections: [
      {
        heading: "Persetujuan",
        body: "Dengan mengakses website NexClock atau meminta demonstrasi produk, Anda menyetujui Syarat Layanan ini. Jika Anda bertindak atas nama organisasi, Anda menyatakan memiliki wewenang untuk mengikat organisasi tersebut.",
      },
      {
        heading: "Produk NexClock",
        body: "NexClock adalah produk manajemen tenaga kerja dan kehadiran yang mandiri, dirancang untuk bisnis dan organisasi. Akses produk bagi suatu organisasi diatur melalui proses demo dan sales dengan tim NexClock.",
      },
      {
        heading: "Permintaan demo dan sales",
        body: "Mengirim permintaan demo atau sales tidak secara otomatis membuat langganan berbayar. Ketentuan komersial akan disepakati secara terpisah antara NexClock dan organisasi.",
      },
      {
        heading: "Penggunaan yang dapat diterima",
        body: "Anda setuju untuk tidak menyalahgunakan website ini atau produk NexClock, termasuk mencoba akses tidak sah, mengganggu operasi layanan, atau menggunakan produk yang melanggar hukum yang berlaku maupun kebijakan organisasi Anda.",
      },
      {
        heading: "Penafian",
        body: "Website dan materi terkait disediakan sebagaimana tersedia. Sejauh diizinkan hukum, NexClock menolak jaminan yang tidak secara tegas disepakati dalam kontrak komersial terpisah.",
      },
      {
        heading: "Kontak",
        body: "Pertanyaan tentang Syarat ini dapat dikirim melalui halaman Dukungan atau dengan menghubungi tim sales maupun dukungan NexClock melalui WhatsApp.",
      },
    ],
  },
  wa: {
    demo: "Halo, saya tertarik untuk meminta demonstrasi produk NexClock.",
    sales: "Halo, saya tertarik menggunakan NexClock untuk organisasi saya.",
    support: "Halo, saya membutuhkan bantuan terkait NexClock.",
  },
  lang: {
    en: "EN",
    id: "ID",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, id };
