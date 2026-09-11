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
    sections: Array<{ heading: string; body: string; id?: string }>;
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
          "You can read the NexClock Privacy Policy on the Privacy page, including the Face Data / Biometric Data section.",
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
      "Effective date: September 12, 2026. This Privacy Policy explains how NexClock collects, uses, stores, shares, retains, secures, and deletes information when organizations and individuals use the NexClock workforce and attendance management product, the NexClock iOS and Android apps, and this website. Face data handling is described in the dedicated Face Data / Biometric Data section.",
    sections: [
      {
        heading: "Who we are",
        body: "NexClock is an independent workforce and attendance management product designed for businesses and organizations. This policy applies to the NexClock website and product experiences operated by the NexClock team.",
      },
      {
        heading: "Information we collect",
        body: "Depending on how NexClock is used by an organization, we may process information such as account and profile details, employment-related identifiers configured by the organization, attendance records, schedule and shift information, device or app usage data needed to operate the service, and contact details submitted when requesting a demo or contacting support. When an organization enables face verification, face photographs may also be collected as described in the Face Data / Biometric Data section. A profile photo chosen by the user is an account avatar only and is not used as a biometric template.",
      },
      {
        heading: "How we use information",
        body: "We use information to provide workforce and attendance management features, authenticate and verify attendance activity as configured by the organization, operate the product, respond to demo and support requests, and meet applicable legal obligations. Face photographs are used only for employee attendance identity verification and attendance evidence, as described in the Face Data / Biometric Data section. They are not used to improve the product, for advertising, analytics, tracking, or profiling.",
      },
      {
        id: "face-data-biometric-data",
        heading: "Face Data / Biometric Data",
        body: `This dedicated Face Data / Biometric Data section explains collection, use, storage, sharing/disclosure, retention, security, and deletion of face data in the NexClock mobile app. Face data is processed only when an organization enables face verification for employee attendance.

1. What face data is collected
NexClock collects facial photographs of the enrolled employee only:
• Enrollment photos: up to five compressed JPEG photographs (front, left, right, and extra poses) captured during face enrollment in the app.
• Attendance photos: one compressed JPEG photograph at each clock-in and clock-out. The photograph may be watermarked with attendance details. The same photograph may first be sent to the organization's NexClock backend to validate identity, then submitted as the attendance record.
The mobile app does not collect or store a face print, face embedding, or other biometric template on the device. On-device detection results used only to guide the camera (whether a face is in frame and its position) are computed in memory and discarded immediately. They are not saved or uploaded as face data. Depth maps, ARKit face meshes, and 3D facial geometry are not collected.

2. Purpose of use
Face data is used only to verify employee identity as part of attendance (clock-in and clock-out) and to keep a photograph as evidence of that attendance event. Enrollment photos are used by the organization's NexClock backend to create a biometric template so later attendance photos can be matched to the enrolled employee. Face data is not used to identify a person outside this attendance verification feature.

3. Sharing and disclosure (third parties)
No. Face data is not sold and is not shared with third parties for their own purposes. It is not shared with advertising networks, analytics companies, data brokers, or commercial cloud facial-recognition APIs. Photographs are uploaded only to the organization's NexClock backend over HTTPS. Google ML Kit Face Detection runs entirely on the device during clock-in and clock-out camera guidance and does not receive uploaded face photographs. Firebase Cloud Messaging is used only for push notifications and does not receive face photographs. Infrastructure providers that host the organization's NexClock servers may process stored images solely as processors to provide hosting, not for their independent use. Organization administrators may view attendance photographs as attendance evidence inside their NexClock workspace.

4. Where face data is stored and how it is secured
• Device: enrollment and attendance photographs are written only as temporary files in the app's private sandbox. Biometric templates are not stored on the device. A watermarked attendance photo is saved to the device photo library only if the user explicitly chooses Save to gallery.
• Server: uploaded photographs and any biometric template derived from enrollment photos are stored on the organization's NexClock backend (the API host configured for that organization).
Security measures include HTTPS/TLS in transit, authenticated API access, private on-device sandbox storage, deletion of temporary face files after upload or sync, and no biometric template stored on the device. Store builds do not enable the in-app network inspector.

5. How long face data is retained
• Device enrollment photos: deleted immediately after a successful upload, when the enrollment screen is closed, or when the user signs out.
• Device attendance photos in private storage: kept only while a clock-in or clock-out is pending (including the offline queue), then deleted after a successful sync.
• On-device camera-guidance results: not retained.
• Server enrollment photos and biometric templates: retained only while the employee's face enrollment remains active. They are replaced when the employee updates enrollment, and deleted when face data is deleted in the app, when the employee requests account deletion, or when the organization offboards the employee.
• Server attendance photographs: retained with the related attendance record for as long as the organization keeps that record, subject to applicable law. There is no separate advertising or analytics retention period for face data.

6. How face data is deleted
When the employee no longer needs NexClock, or wants face data removed:
• Profile > Settings > Delete face data: the app requests deletion of server enrollment and biometric template data, deletes leftover face files on the device, and requires new consent before any future enrollment.
• Profile > Settings > Update face recognition: a successful new enrollment replaces the previous enrollment.
• Profile > Delete Account: requests deletion of face enrollment on NexClock servers, deletes local face files, tokens, and cached data, signs the user out, and notifies NexClock support so the organization can complete deletion of remaining workforce records, subject to applicable law.
• Sign out: leftover enrollment and guidance files on the device are deleted.
Organization administrators can also offboard an employee, which removes that employee's access and associated face enrollment according to the organization's configuration. Camera permission can be turned off in iOS Settings for NexClock at any time.

7. What face data is not used for
Face data is not used for tracking, advertising, marketing, profiling, product improvement, analytics, or identifying a person outside the employee attendance verification feature described in this section. Camera and facial-mapping data from Camera APIs is not used for marketing, advertising, or use-based data mining, including by third parties.`,
      },
      {
        heading: "Sharing of information",
        body: "We do not sell personal information. Face data is not sold and is not shared with third parties for their own purposes, including advertising. Sharing and disclosure of face photographs is limited to what is described in the Face Data / Biometric Data section. Other information may be processed by service providers that help us host, operate, or support NexClock, only as needed to provide the service, and as required by law. Organization administrators control workforce data within their NexClock workspace. Any third party with whom NexClock shares user data in accordance with this policy—including infrastructure tools if used, advertising networks (none are used for face or camera data), third-party SDKs such as Google ML Kit Face Detection (on-device only), and any parent, subsidiary, or related entity that has access to user data—will provide the same or equal protection of user data as stated in this Privacy Policy and required by Apple App Store Review Guideline 5.1.1.",
      },
      {
        heading: "Third-party processors",
        body: "NexClock does not sell personal data and does not use third-party advertising networks in the mobile app. The mobile app uploads account, attendance, and face photographs to the organization's NexClock API host configured for that deployment. Camera frames used for clock-in and clock-out guidance are processed on the device by Google ML Kit Face Detection and are not uploaded to Google. Face enrollment and attendance identity matching are performed by the organization's NexClock backend, not by a commercial third-party cloud facial-recognition API. The optional in-app AI assistant sends the user's typed or spoken prompt to NexClock's AI service so it can answer workforce questions; it is not used to process face photos. If the user enables voice input, Apple speech recognition may convert speech to text on-device or via Apple before the text is sent to NexClock. Firebase Cloud Messaging delivers push notifications and may process a device token; it is not used for advertising or tracking and does not receive face photographs. Hosting and infrastructure providers that store the organization's NexClock servers may process uploaded images and other records only as needed to provide hosting. Those processors, SDKs, and related entities provide the same or equal protection of user data as stated in this Privacy Policy. We obtain permission through the iOS camera prompt, in-app face-enrollment consent, and organization-provisioned account access before face photographs are collected and uploaded.",
      },
      {
        heading: "Data retention",
        body: "We retain information for as long as needed to provide the service to the organization, comply with legal obligations, resolve disputes, and enforce agreements. Face data retention, including immediate deletion of enrollment photos on the device after upload, is described in the Face Data / Biometric Data section above.",
      },
      {
        heading: "Security",
        body: "We apply administrative, technical, and organizational measures designed to protect information processed by NexClock. Face photographs are transmitted only over HTTPS/TLS to the organization's authenticated NexClock API. Temporary face files on the device are stored in the app's private sandbox and deleted after upload or sync. Biometric templates are not stored on the device. Store builds do not enable the in-app network inspector. No method of transmission or storage is completely secure, and organizations should also follow their own access-control best practices.",
      },
      {
        heading: "Your choices and rights",
        body: "This Privacy Policy is available at https://nexclock.my.id/privacy and inside the NexClock app (login screen and Profile > Privacy Policy). The Face Data / Biometric Data section is at https://nexclock.my.id/privacy#face-data-biometric-data.\n\nRevoke consent: you can turn off Camera, Location, Microphone, Speech Recognition, or Photo Library access in iOS Settings for NexClock. The app respects those permission settings. Face attendance, location-based attendance, voice input to the AI assistant, or choosing a profile photo will not work without the related permission. Paid features, if any, are not conditioned on granting these permissions.\n\nDelete face data: in the app, open Profile > Settings > Delete face data to remove face enrollment from NexClock servers and leftover face files on the device; or open Profile > Settings to update face enrollment (the previous enrollment is replaced after a successful save); or open Profile > Delete Account.\n\nDelete your account: NexClock accounts are created and managed by your employer or organization; there is no public self-serve sign-up. Use Profile > Delete Account in the NexClock app to start deletion. That flow (1) requests deletion of face enrollment on NexClock servers, (2) deletes local photos, tokens, and cached app data on the device, (3) signs you out, and (4) notifies NexClock support so your organization can complete deletion of remaining workforce records, subject to applicable law and the organization's configuration. You may also ask your organization administrator or contact NexClock support via the Support page or WhatsApp.",
      },
      {
        heading: "Contact",
        body: "For privacy questions, account deletion, or facial-data requests, use Delete Account or Privacy Policy in the NexClock app (Profile), contact your organization administrator, or contact the NexClock team via the Support page or WhatsApp channel listed on this website.",
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
          "Anda dapat membaca Kebijakan Privasi NexClock di halaman Privasi, termasuk bagian Data Wajah / Data Biometrik.",
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
      "Tanggal berlaku: 12 September 2026. Kebijakan Privasi ini menjelaskan bagaimana NexClock mengumpulkan, menggunakan, menyimpan, membagikan, menahan, mengamankan, dan menghapus informasi ketika organisasi serta individu menggunakan produk manajemen tenaga kerja dan kehadiran NexClock, aplikasi iOS dan Android NexClock, serta website ini. Penanganan data wajah dijelaskan pada bagian khusus Data Wajah / Data Biometrik.",
    sections: [
      {
        heading: "Siapa kami",
        body: "NexClock adalah produk manajemen tenaga kerja dan kehadiran yang mandiri, dirancang untuk bisnis dan organisasi. Kebijakan ini berlaku untuk website NexClock dan pengalaman produk yang dioperasikan oleh tim NexClock.",
      },
      {
        heading: "Informasi yang kami kumpulkan",
        body: "Tergantung cara organisasi menggunakan NexClock, kami dapat memproses informasi seperti detail akun dan profil, pengenal terkait kepegawaian yang dikonfigurasi organisasi, catatan kehadiran, informasi jadwal dan shift, data perangkat atau penggunaan aplikasi yang diperlukan untuk menjalankan layanan, serta detail kontak yang dikirim saat meminta demo atau menghubungi dukungan. Jika organisasi mengaktifkan verifikasi wajah, foto wajah juga dapat dikumpulkan sebagaimana dijelaskan pada bagian Data Wajah / Data Biometrik. Foto profil yang dipilih pengguna hanya avatar akun dan tidak digunakan sebagai template biometrik.",
      },
      {
        heading: "Bagaimana kami menggunakan informasi",
        body: "Kami menggunakan informasi untuk menyediakan fitur manajemen tenaga kerja dan kehadiran, mengautentikasi serta memverifikasi aktivitas kehadiran sesuai konfigurasi organisasi, mengoperasikan produk, menanggapi permintaan demo dan dukungan, serta memenuhi kewajiban hukum yang berlaku. Foto wajah hanya digunakan untuk verifikasi identitas absensi karyawan dan bukti absensi, sebagaimana dijelaskan pada bagian Data Wajah / Data Biometrik. Data wajah tidak digunakan untuk meningkatkan produk, iklan, analitik, pelacakan, atau profiling.",
      },
      {
        id: "face-data-biometric-data",
        heading: "Data Wajah / Data Biometrik",
        body: `Bagian khusus Data Wajah / Data Biometrik ini menjelaskan pengumpulan, penggunaan, penyimpanan, pembagian/pengungkapan, retensi, keamanan, dan penghapusan data wajah di aplikasi mobile NexClock. Data wajah diproses hanya jika organisasi mengaktifkan verifikasi wajah untuk absensi karyawan.

1. Data wajah apa yang dikumpulkan
NexClock mengumpulkan foto wajah karyawan yang didaftarkan, dan hanya itu:
• Foto pendaftaran: hingga lima foto JPEG terkompresi (tampak depan, kiri, kanan, dan pose tambahan) yang diambil saat pendaftaran wajah di aplikasi.
• Foto absensi: satu foto JPEG terkompresi pada setiap clock-in dan clock-out. Foto dapat diberi watermark berisi detail absensi. Foto yang sama dapat dikirim lebih dulu ke backend NexClock organisasi untuk validasi identitas, lalu dikirim sebagai catatan absensi.
Aplikasi mobile tidak mengumpulkan atau menyimpan face print, embedding wajah, atau template biometrik lain di perangkat. Hasil deteksi di perangkat yang hanya dipakai untuk memandu kamera (apakah wajah ada di bingkai dan posisinya) dihitung di memori dan langsung dibuang. Hasil itu tidak disimpan atau diunggah sebagai data wajah. Depth map, mesh wajah ARKit, dan geometri wajah 3D tidak dikumpulkan.

2. Tujuan penggunaan
Data wajah hanya digunakan untuk memverifikasi identitas karyawan sebagai bagian dari absensi (clock-in dan clock-out) dan menyimpan foto sebagai bukti peristiwa absensi tersebut. Foto pendaftaran dipakai backend NexClock organisasi untuk membuat template biometrik agar foto absensi berikutnya dapat dicocokkan dengan karyawan yang terdaftar. Data wajah tidak digunakan untuk mengidentifikasi seseorang di luar fitur verifikasi absensi ini.

3. Pembagian dan pengungkapan (pihak ketiga)
Tidak. Data wajah tidak dijual dan tidak dibagikan kepada pihak ketiga untuk kepentingan mereka sendiri. Data wajah tidak dibagikan kepada jaringan iklan, perusahaan analitik, data broker, atau API pengenalan wajah cloud komersial. Foto hanya diunggah ke backend NexClock organisasi melalui HTTPS. Google ML Kit Face Detection berjalan sepenuhnya di perangkat saat panduan kamera clock-in dan clock-out dan tidak menerima foto wajah yang diunggah. Firebase Cloud Messaging hanya dipakai untuk notifikasi push dan tidak menerima foto wajah. Penyedia infrastruktur yang menghosting server NexClock organisasi dapat memproses gambar yang disimpan semata-mata sebagai prosesor untuk menyediakan hosting, bukan untuk kepentingan mandiri mereka. Administrator organisasi dapat melihat foto absensi sebagai bukti kehadiran di dalam workspace NexClock mereka.

4. Di mana data wajah disimpan dan bagaimana diamankan
• Perangkat: foto pendaftaran dan absensi hanya ditulis sebagai file sementara di sandbox privat aplikasi. Template biometrik tidak disimpan di perangkat. Foto absensi ber-watermark disimpan ke galeri hanya jika pengguna secara eksplisit memilih Simpan ke galeri.
• Server: foto yang diunggah dan template biometrik yang dihasilkan dari foto pendaftaran disimpan di backend NexClock organisasi (host API yang dikonfigurasi untuk organisasi tersebut).
Langkah keamanan meliputi HTTPS/TLS saat transmisi, akses API yang terautentikasi, penyimpanan sandbox privat di perangkat, penghapusan file wajah sementara setelah unggahan atau sinkronisasi, dan tidak ada template biometrik di perangkat. Build toko tidak mengaktifkan inspektur jaringan di dalam aplikasi.

5. Berapa lama data wajah disimpan
• Foto pendaftaran di perangkat: dihapus segera setelah unggahan berhasil, saat layar pendaftaran ditutup, atau saat pengguna keluar akun.
• Foto absensi di penyimpanan privat perangkat: disimpan hanya selama clock-in atau clock-out masih tertunda (termasuk antrean offline), lalu dihapus setelah sinkronisasi berhasil.
• Hasil panduan kamera di perangkat: tidak disimpan.
• Foto pendaftaran dan template biometrik di server: disimpan hanya selama pendaftaran wajah karyawan tetap aktif. Diganti saat karyawan memperbarui pendaftaran, dan dihapus saat data wajah dihapus di aplikasi, saat karyawan meminta penghapusan akun, atau saat organisasi melakukan offboarding karyawan.
• Foto absensi di server: disimpan bersama catatan kehadiran terkait selama organisasi menyimpan catatan itu, tunduk pada hukum yang berlaku. Tidak ada periode retensi terpisah untuk iklan atau analitik atas data wajah.

6. Bagaimana data wajah dihapus
Jika karyawan tidak lagi membutuhkan NexClock, atau ingin data wajah dihapus:
• Profil > Pengaturan > Hapus data wajah: aplikasi meminta penghapusan pendaftaran dan template biometrik di server, menghapus sisa file wajah di perangkat, dan mensyaratkan persetujuan baru sebelum pendaftaran berikutnya.
• Profil > Pengaturan > Perbarui pengenalan wajah: pendaftaran baru yang berhasil menggantikan pendaftaran lama.
• Profil > Hapus Akun: meminta penghapusan pendaftaran wajah di server NexClock, menghapus file wajah lokal, token, dan data cache, mengeluarkan pengguna dari akun, serta memberi tahu dukungan NexClock agar organisasi menyelesaikan penghapusan sisa catatan tenaga kerja, tunduk pada hukum yang berlaku.
• Keluar akun: sisa file pendaftaran dan panduan di perangkat dihapus.
Administrator organisasi juga dapat melakukan offboarding karyawan, yang menghapus akses karyawan dan pendaftaran wajah terkait sesuai konfigurasi organisasi. Izin Kamera dapat dimatikan kapan saja di Pengaturan iOS untuk NexClock.

7. Data wajah tidak digunakan untuk tujuan lain
Data wajah tidak digunakan untuk pelacakan, iklan, pemasaran, profiling, peningkatan produk, analitik, atau mengidentifikasi seseorang di luar fitur verifikasi absensi karyawan yang dijelaskan di bagian ini. Data kamera dan pemetaan wajah dari Camera API tidak digunakan untuk pemasaran, iklan, atau penambangan data berbasis penggunaan, termasuk oleh pihak ketiga.`,
      },
      {
        heading: "Pembagian informasi",
        body: "Kami tidak menjual informasi pribadi. Data wajah tidak dijual dan tidak dibagikan kepada pihak ketiga untuk kepentingan mereka sendiri, termasuk iklan. Pembagian dan pengungkapan foto wajah terbatas pada yang dijelaskan di bagian Data Wajah / Data Biometrik. Informasi lain dapat diproses oleh penyedia layanan yang membantu hosting, operasi, atau dukungan NexClock, hanya sejauh diperlukan untuk menyediakan layanan, dan sebagaimana diwajibkan oleh hukum. Administrator organisasi mengontrol data tenaga kerja dalam workspace NexClock mereka. Setiap pihak ketiga yang menerima data pengguna sesuai kebijakan ini—termasuk alat infrastruktur jika dipakai, jaringan iklan (tidak dipakai untuk data wajah atau kamera), SDK pihak ketiga seperti Google ML Kit Face Detection (hanya di perangkat), serta entitas induk, anak, atau terkait yang memiliki akses ke data pengguna—akan memberikan perlindungan yang sama atau setara terhadap data pengguna sebagaimana dinyatakan dalam Kebijakan Privasi ini dan diwajibkan oleh Apple App Store Review Guideline 5.1.1.",
      },
      {
        heading: "Prosesor pihak ketiga",
        body: "NexClock tidak menjual data pribadi dan tidak memakai jaringan iklan pihak ketiga di aplikasi mobile. Aplikasi mobile mengunggah data akun, kehadiran, dan foto wajah ke host API NexClock organisasi yang dikonfigurasi untuk deployment tersebut. Frame kamera untuk panduan clock-in dan clock-out diproses di perangkat oleh Google ML Kit Face Detection dan tidak diunggah ke Google. Pendaftaran wajah dan pencocokan identitas absensi dilakukan oleh backend NexClock organisasi, bukan API pengenalan wajah cloud pihak ketiga komersial. Asisten AI opsional di aplikasi mengirim prompt ketikan atau suara pengguna ke AI service NexClock untuk menjawab pertanyaan tenaga kerja; tidak dipakai untuk memproses foto wajah. Jika pengguna mengaktifkan input suara, pengenalan ucapan Apple dapat mengubah suara menjadi teks di perangkat atau melalui Apple sebelum teks dikirim ke NexClock. Firebase Cloud Messaging mengirim notifikasi push dan dapat memproses token perangkat; tidak dipakai untuk iklan atau pelacakan dan tidak menerima foto wajah. Penyedia hosting dan infrastruktur yang menyimpan server NexClock organisasi dapat memproses gambar dan catatan yang diunggah hanya sejauh diperlukan untuk hosting. Prosesor, SDK, dan entitas terkait tersebut memberikan perlindungan yang sama atau setara terhadap data pengguna sebagaimana dinyatakan dalam Kebijakan Privasi ini. Izin diperoleh melalui prompt kamera iOS, persetujuan pendaftaran wajah di dalam aplikasi, dan akses akun yang disediakan organisasi sebelum foto wajah dikumpulkan dan diunggah.",
      },
      {
        heading: "Retensi data",
        body: "Kami menyimpan informasi selama diperlukan untuk menyediakan layanan kepada organisasi, mematuhi kewajiban hukum, menyelesaikan sengketa, dan menegakkan perjanjian. Retensi data wajah, termasuk penghapusan segera foto pendaftaran di perangkat setelah unggahan, dijelaskan pada bagian Data Wajah / Data Biometrik di atas.",
      },
      {
        heading: "Keamanan",
        body: "Kami menerapkan langkah administratif, teknis, dan organisasi yang dirancang untuk melindungi informasi yang diproses oleh NexClock. Foto wajah dikirim hanya melalui HTTPS/TLS ke API NexClock organisasi yang terautentikasi. File wajah sementara di perangkat disimpan di sandbox privat aplikasi dan dihapus setelah unggahan atau sinkronisasi. Template biometrik tidak disimpan di perangkat. Build toko tidak mengaktifkan inspektur jaringan di dalam aplikasi. Tidak ada metode transmisi atau penyimpanan yang sepenuhnya aman, dan organisasi juga perlu mengikuti praktik terbaik kontrol akses mereka sendiri.",
      },
      {
        heading: "Pilihan dan hak Anda",
        body: "Kebijakan Privasi ini tersedia di https://nexclock.my.id/privacy dan di dalam aplikasi NexClock (layar masuk serta Profil > Kebijakan Privasi). Bagian Data Wajah / Data Biometrik ada di https://nexclock.my.id/privacy#face-data-biometric-data.\n\nCabut persetujuan: Anda dapat mematikan akses Kamera, Lokasi, Mikrofon, Pengenalan Ucapan, atau Galeri di Pengaturan iOS untuk NexClock. Aplikasi menghormati pengaturan izin tersebut. Absensi wajah, absensi berbasis lokasi, input suara ke asisten AI, atau memilih foto profil tidak akan berfungsi tanpa izin terkait. Fitur berbayar, jika ada, tidak mensyaratkan pemberian izin ini.\n\nHapus data wajah: di aplikasi, buka Profil > Pengaturan > Hapus data wajah untuk menghapus pendaftaran wajah dari server NexClock dan sisa file wajah di perangkat; atau buka Profil > Pengaturan untuk memperbarui pendaftaran wajah (pendaftaran lama diganti setelah penyimpanan berhasil); atau buka Profil > Hapus Akun.\n\nHapus akun Anda: akun NexClock dibuat dan dikelola oleh pemberi kerja atau organisasi Anda; tidak ada pendaftaran mandiri publik. Gunakan Profil > Hapus Akun di aplikasi NexClock untuk memulai penghapusan. Alur itu (1) meminta penghapusan pendaftaran wajah di server NexClock, (2) menghapus foto lokal, token, dan data cache aplikasi di perangkat, (3) mengeluarkan Anda dari akun, dan (4) memberi tahu dukungan NexClock agar organisasi dapat menyelesaikan penghapusan sisa catatan tenaga kerja, tunduk pada hukum yang berlaku dan konfigurasi organisasi. Anda juga dapat meminta administrator organisasi atau menghubungi dukungan NexClock melalui halaman Dukungan atau WhatsApp.",
      },
      {
        heading: "Kontak",
        body: "Untuk pertanyaan privasi, penghapusan akun, atau permintaan data wajah, gunakan Hapus Akun atau Kebijakan Privasi di aplikasi NexClock (Profil), hubungi administrator organisasi Anda, atau hubungi tim NexClock melalui halaman Dukungan atau saluran WhatsApp yang tertera di website ini.",
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
