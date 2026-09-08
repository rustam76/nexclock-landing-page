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
      "Effective date: September 9, 2026. This Privacy Policy explains how NexClock collects, uses, and protects information when organizations and individuals use the NexClock workforce and attendance management product and this website.",
    sections: [
      {
        heading: "Who we are",
        body: "NexClock is an independent workforce and attendance management product designed for businesses and organizations. This policy applies to the NexClock website and product experiences operated by the NexClock team.",
      },
      {
        heading: "Information we collect",
        body: "Depending on how NexClock is used by an organization, we may process information such as account and profile details, employment-related identifiers configured by the organization, attendance records, schedule and shift information, device or app usage data needed to operate the service, and contact details submitted when requesting a demo or contacting support. When an organization enables face verification, facial photographs may also be collected as described in the Facial / Biometric Data section. A profile photo chosen by the user is an account avatar only and is not used as a biometric template.",
      },
      {
        heading: "How we use information",
        body: "We use information to provide workforce and attendance management features, authenticate and verify attendance activity as configured by the organization, operate the product, respond to demo and support requests, and meet applicable legal obligations. Facial photographs are used only for attendance identity verification and attendance evidence, as described in the Facial / Biometric Data section. They are not used to improve the product, for advertising, analytics, or profiling.",
      },
      {
        heading: "Facial / Biometric Data",
        body: `NexClock may process facial data only as part of face verification during attendance, when the organization enables that feature.

What facial data may be collected: facial photographs taken for face enrollment, and facial photographs taken for clock-in or clock-out attendance. The mobile app does not collect or store a face embedding, face print, or other biometric template. On-device detection results, such as whether a face is in frame and its position, are used only to guide the camera and are discarded immediately. They are not saved as face data.

How it is collected: through the device camera in the NexClock mobile app during face enrollment and clock-in or clock-out, when face verification is enabled.

Purpose of use: to help verify employee identity as part of recording attendance and reducing fraudulent check-ins. Facial photographs are used only for identity verification and as attendance evidence. They are not used for advertising, analytics, profiling, product improvement, or any other purpose.

Whether raw images are stored: Yes, on the organization's NexClock servers. Face enrollment captures several facial photos, uploads them, and then deletes those files from the device immediately after a successful upload and also when the enrollment screen is closed. Clock-in and clock-out attendance photos, including watermarked images, are uploaded and kept as part of the attendance record. Camera frames used only for on-device guidance are processed in memory and are not stored as face templates.

Whether biometric templates or embeddings are created: Yes, on the NexClock backend only. The mobile app does not create or store face embeddings or biometric templates. Enrollment and identity matching are performed by the NexClock backend and AI service, which generate biometric templates or embeddings from the uploaded facial photographs for verification.

How facial data is stored: Enrollment photos are sent as compressed JPEG images to NexClock face enrollment APIs and are not kept on the device after upload. Attendance photos are compressed, watermarked when applicable, uploaded with clock-in or clock-out submissions, and referenced by server photo URLs. On the device, the app may keep only a face-registration status flag and temporary offline attendance photo files in private app storage. Biometric templates are not stored in the app. If the user chooses Save to gallery, a watermarked attendance photo may be written to the device photo library. That copy is controlled by the user and is not a biometric template.

Where facial data is stored: On the organization's NexClock backend servers, including uploaded attendance photos served through the NexClock API. While the device is offline, the attendance photo needed for that pending clock-in or clock-out is held only in the app's private storage and is deleted automatically after a successful sync. Facial photographs are not written to public storage unless the user explicitly saves a watermarked attendance photo to the photo library.

Whether facial data is shared with third parties: Facial photographs used for enrollment and attendance verification are processed by NexClock systems operated for the organization. Google ML Kit Face Detection runs entirely on the device for camera guidance and does not receive uploaded facial photographs for identity matching. Facial data is not sold and is not shared for advertising. Infrastructure providers that host the organization's NexClock servers may process uploaded images only as needed to provide the service.

Whether a third-party facial recognition service is used: No commercial third-party cloud facial recognition API is used by the mobile app for identity matching. Face enrollment and verification go through NexClock's own backend and AI service. Google ML Kit is used only for on-device face detection and capture guidance, such as pose and liveness cues, not for matching an employee identity and not for storing a biometric template.

Retention period: On the device, enrollment photos are deleted immediately after a successful upload or when enrollment is closed. Offline attendance photos in private app storage are kept only until they sync successfully, then deleted. On the organization's NexClock servers, enrollment templates and attendance photos are retained for as long as the employee's face enrollment remains active and related attendance records are kept, subject to applicable law and the organization's configuration. The app does not apply a separate fixed retention period on the server.

How facial data is deleted: upon organizational request, account or employee offboarding, face reset or re-registration supported by the product, or according to the retention practices above, subject to applicable law and the organization's configuration. On the device, enrollment photos are deleted immediately after a successful upload or when leaving enrollment. Temporary attendance photos in private app storage are deleted automatically after a successful sync. Leftover face files are removed when the account is signed out or switched.`,
      },
      {
        heading: "Sharing of information",
        body: "We do not sell personal information. Facial data is not sold and is not shared for advertising. Sharing of facial photographs is limited to what is described in the Facial / Biometric Data section. Other information may be processed by service providers that help us host, operate, or support NexClock, only as needed to provide the service, and as required by law. Organization administrators control workforce data within their NexClock workspace.",
      },
      {
        heading: "Data retention",
        body: "We retain information for as long as needed to provide the service to the organization, comply with legal obligations, resolve disputes, and enforce agreements. Facial and biometric retention, including immediate deletion of face photos on the device after upload or sync, is described in the Facial / Biometric Data section above.",
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
      "Tanggal berlaku: 9 September 2026. Kebijakan Privasi ini menjelaskan bagaimana NexClock mengumpulkan, menggunakan, dan melindungi informasi ketika organisasi serta individu menggunakan produk manajemen tenaga kerja dan kehadiran NexClock serta website ini.",
    sections: [
      {
        heading: "Siapa kami",
        body: "NexClock adalah produk manajemen tenaga kerja dan kehadiran yang mandiri, dirancang untuk bisnis dan organisasi. Kebijakan ini berlaku untuk website NexClock dan pengalaman produk yang dioperasikan oleh tim NexClock.",
      },
      {
        heading: "Informasi yang kami kumpulkan",
        body: "Tergantung cara organisasi menggunakan NexClock, kami dapat memproses informasi seperti detail akun dan profil, pengenal terkait kepegawaian yang dikonfigurasi organisasi, catatan kehadiran, informasi jadwal dan shift, data perangkat atau penggunaan aplikasi yang diperlukan untuk menjalankan layanan, serta detail kontak yang dikirim saat meminta demo atau menghubungi dukungan. Jika organisasi mengaktifkan verifikasi wajah, foto wajah juga dapat dikumpulkan sebagaimana dijelaskan pada bagian Data Wajah / Biometrik. Foto profil yang dipilih pengguna hanya avatar akun dan tidak digunakan sebagai template biometrik.",
      },
      {
        heading: "Bagaimana kami menggunakan informasi",
        body: "Kami menggunakan informasi untuk menyediakan fitur manajemen tenaga kerja dan kehadiran, mengautentikasi serta memverifikasi aktivitas kehadiran sesuai konfigurasi organisasi, mengoperasikan produk, menanggapi permintaan demo dan dukungan, serta memenuhi kewajiban hukum yang berlaku. Foto wajah hanya digunakan untuk verifikasi identitas absensi dan bukti absensi, sebagaimana dijelaskan pada bagian Data Wajah / Biometrik. Data wajah tidak digunakan untuk meningkatkan produk, iklan, analitik, atau profiling.",
      },
      {
        heading: "Data Wajah / Biometrik",
        body: `NexClock dapat memproses data wajah hanya sebagai bagian dari verifikasi wajah saat kehadiran, jika organisasi mengaktifkan fitur tersebut.

Data wajah yang dapat dikumpulkan: foto wajah untuk pendaftaran wajah, dan foto wajah untuk absensi clock-in atau clock-out. Aplikasi mobile tidak mengumpulkan atau menyimpan embedding wajah, face print, atau template biometrik lain. Hasil deteksi di perangkat, seperti apakah wajah berada di bingkai dan posisinya, hanya dipakai untuk memandu kamera dan langsung dibuang. Hasil itu tidak disimpan sebagai data wajah.

Cara dikumpulkan: melalui kamera perangkat di aplikasi mobile NexClock saat pendaftaran wajah dan clock-in atau clock-out, jika verifikasi wajah diaktifkan.

Tujuan penggunaan: membantu memverifikasi identitas karyawan sebagai bagian dari pencatatan kehadiran dan mengurangi check-in yang tidak sah. Foto wajah hanya digunakan untuk verifikasi identitas dan bukti absensi. Data wajah tidak digunakan untuk iklan, analitik, profiling, peningkatan produk, atau tujuan lain.

Apakah gambar mentah disimpan: Ya, di server NexClock milik organisasi. Pendaftaran wajah mengambil beberapa foto wajah, mengunggahnya, lalu menghapus file tersebut dari perangkat segera setelah unggahan berhasil dan juga saat layar pendaftaran ditutup. Foto absensi clock-in dan clock-out, termasuk gambar ber-watermark, diunggah dan disimpan sebagai bagian dari catatan kehadiran. Frame kamera yang hanya dipakai untuk panduan di perangkat diproses di memori dan tidak disimpan sebagai template wajah.

Apakah template atau embedding biometrik dibuat: Ya, hanya di backend NexClock. Aplikasi mobile tidak membuat atau menyimpan embedding wajah atau template biometrik. Pendaftaran dan pencocokan identitas dilakukan oleh backend dan AI service NexClock, yang menghasilkan template atau embedding biometrik dari foto wajah yang diunggah untuk verifikasi.

Bagaimana data wajah disimpan: Foto enrollment dikirim sebagai gambar JPEG terkompresi ke API pendaftaran wajah NexClock dan tidak disimpan di perangkat setelah diunggah. Foto absensi dikompresi, diberi watermark bila berlaku, diunggah bersama pengiriman clock-in atau clock-out, dan dirujuk melalui URL foto di server. Di perangkat, aplikasi hanya dapat menyimpan status terdaftarnya wajah dan file foto absensi offline sementara di penyimpanan privat aplikasi. Template biometrik tidak disimpan di aplikasi. Jika pengguna memilih Simpan ke galeri, foto absensi ber-watermark dapat ditulis ke galeri foto perangkat. Salinan itu dikontrol oleh pengguna dan bukan template biometrik.

Di mana data wajah disimpan: Pada server backend NexClock milik organisasi, termasuk foto absensi yang dilayani melalui API NexClock. Saat perangkat offline, foto absensi yang diperlukan untuk clock-in atau clock-out yang tertunda hanya disimpan di penyimpanan privat aplikasi dan dihapus otomatis setelah sinkronisasi berhasil. Foto wajah tidak ditulis ke penyimpanan publik kecuali pengguna secara eksplisit menyimpan foto absensi ber-watermark ke galeri.

Apakah data wajah dibagikan kepada pihak ketiga: Foto wajah untuk enrollment dan verifikasi kehadiran diproses oleh sistem NexClock yang dioperasikan untuk organisasi. Google ML Kit Face Detection berjalan sepenuhnya di perangkat untuk panduan kamera dan tidak menerima foto wajah yang diunggah untuk pencocokan identitas. Data wajah tidak dijual dan tidak dibagikan untuk iklan. Penyedia infrastruktur yang menghosting server NexClock organisasi dapat memproses gambar yang diunggah hanya sejauh diperlukan untuk menyediakan layanan.

Apakah layanan pengenalan wajah pihak ketiga digunakan: Tidak ada API pengenalan wajah cloud pihak ketiga komersial yang dipakai aplikasi mobile untuk pencocokan identitas. Enrollment dan verifikasi wajah berjalan melalui backend dan AI service milik NexClock. Google ML Kit hanya dipakai untuk deteksi wajah dan panduan pengambilan gambar di perangkat, seperti pose dan isyarat liveness, bukan untuk mencocokkan identitas karyawan dan bukan untuk menyimpan template biometrik.

Periode retensi: Di perangkat, foto enrollment dihapus segera setelah unggahan berhasil atau saat pendaftaran ditutup. Foto absensi offline di penyimpanan privat aplikasi disimpan hanya sampai sinkronisasi berhasil, lalu dihapus. Di server NexClock organisasi, template enrollment dan foto absensi disimpan selama pendaftaran wajah karyawan tetap aktif dan catatan kehadiran terkait masih disimpan, tunduk pada hukum yang berlaku dan konfigurasi organisasi. Aplikasi tidak menerapkan jangka waktu retensi tetap yang terpisah di server.

Bagaimana data wajah dihapus: atas permintaan organisasi, proses offboarding akun atau karyawan, reset atau pendaftaran ulang wajah yang didukung produk, atau sesuai praktik retensi di atas, tunduk pada hukum yang berlaku dan konfigurasi organisasi. Di perangkat, foto enrollment dihapus segera setelah unggahan berhasil atau saat meninggalkan pendaftaran. Foto absensi sementara di penyimpanan privat aplikasi dihapus otomatis setelah sinkronisasi berhasil. Sisa file wajah dihapus saat akun keluar atau diganti.`,
      },
      {
        heading: "Pembagian informasi",
        body: "Kami tidak menjual informasi pribadi. Data wajah tidak dijual dan tidak dibagikan untuk iklan. Pembagian foto wajah terbatas pada yang dijelaskan di bagian Data Wajah / Biometrik. Informasi lain dapat diproses oleh penyedia layanan yang membantu hosting, operasi, atau dukungan NexClock, hanya sejauh diperlukan untuk menyediakan layanan, dan sebagaimana diwajibkan oleh hukum. Administrator organisasi mengontrol data tenaga kerja dalam workspace NexClock mereka.",
      },
      {
        heading: "Retensi data",
        body: "Kami menyimpan informasi selama diperlukan untuk menyediakan layanan kepada organisasi, mematuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. Retensi data wajah dan biometrik, termasuk penghapusan segera foto wajah di perangkat setelah unggahan atau sinkronisasi, dijelaskan pada bagian Data Wajah / Biometrik di atas.",
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
