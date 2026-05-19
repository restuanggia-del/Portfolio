import { useState, useEffect, useRef } from "react";

// ===== DATA =====
const NAV_LINKS = [
  { id: "beranda", label: "Beranda" },
  { id: "tentang", label: "Tentang Saya" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "kontak", label: "Kontak" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Dashboard Analitik",
    desc: "Aplikasi dashboard visualisasi data real-time dengan React dan D3.js.",
    tags: ["React", "D3.js", "TailwindCSS"],
    year: "2024",
    color: "#2563EB",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    desc: "Platform toko online lengkap dengan fitur keranjang, pembayaran, dan manajemen produk.",
    tags: ["Next.js", "Prisma", "Stripe"],
    year: "2024",
    color: "#1D4ED8",
  },
  {
    id: 3,
    title: "Sistem Manajemen Kelas",
    desc: "Aplikasi manajemen kelas online untuk sekolah dengan fitur absensi dan nilai.",
    tags: ["Vue.js", "Laravel", "MySQL"],
    year: "2023",
    color: "#1E40AF",
  },
  {
    id: 4,
    title: "Aplikasi Cuaca",
    desc: "Aplikasi cuaca dengan tampilan visual menarik menggunakan OpenWeather API.",
    tags: ["React", "API", "CSS"],
    year: "2023",
    color: "#3B82F6",
  },
  {
    id: 5,
    title: "Landing Page SaaS",
    desc: "Halaman pemasaran untuk produk SaaS dengan animasi smooth dan konversi tinggi.",
    tags: ["HTML", "TailwindCSS", "GSAP"],
    year: "2023",
    color: "#60A5FA",
  },
  {
    id: 6,
    title: "Blog Platform",
    desc: "Platform blog dengan fitur markdown editor, komentar, dan kategorisasi artikel.",
    tags: ["Nuxt.js", "Supabase", "TailwindCSS"],
    year: "2022",
    color: "#2563EB",
  },
];

const BLOGS = [
  {
    id: 1,
    title: "Memahami React Hooks: useState dan useEffect",
    excerpt:
      "Panduan lengkap memahami dua hooks paling fundamental di React yang wajib dikuasai setiap developer.",
    date: "15 Mei 2025",
    readTime: "8 menit",
    tag: "React",
  },
  {
    id: 2,
    title: "TailwindCSS vs CSS Biasa: Mana yang Lebih Baik?",
    excerpt:
      "Perbandingan mendalam antara TailwindCSS dengan CSS konvensional dari sisi produktivitas dan maintainability.",
    date: "2 April 2025",
    readTime: "6 menit",
    tag: "CSS",
  },
  {
    id: 3,
    title: "Belajar Git dari Nol: Panduan untuk Pemula",
    excerpt:
      "Langkah demi langkah mempelajari Git mulai dari instalasi hingga workflow kolaborasi tim.",
    date: "18 Maret 2025",
    readTime: "10 menit",
    tag: "Git",
  },
  {
    id: 4,
    title: "Optimasi Performa Web dengan Lighthouse",
    excerpt:
      "Teknik-teknik praktis meningkatkan skor Lighthouse dan membuat website kamu jauh lebih cepat.",
    date: "5 Februari 2025",
    readTime: "7 menit",
    tag: "Performance",
  },
];

const SKILLS = [
  { label: "HTML & CSS", level: 95 },
  { label: "JavaScript", level: 88 },
  { label: "React.js", level: 85 },
  { label: "TailwindCSS", level: 90 },
  { label: "Node.js", level: 75 },
  { label: "Git & GitHub", level: 85 },
];

const SOCIALS = [
  { label: "GitHub", icon: "⬡", url: "https://github.com" },
  { label: "LinkedIn", icon: "in", url: "https://linkedin.com" },
  { label: "Instagram", icon: "IG", url: "https://instagram.com" },
  { label: "Twitter", icon: "𝕏", url: "https://twitter.com" },
];

// ===== COMPONENTS =====

function Navbar({ activePage, setActivePage, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: darkMode ? "#0a0a0a" : "#ffffff",
        borderBottom: `3px solid ${darkMode ? "#2563EB" : "#1D4ED8"}`,
        boxShadow: darkMode ? "0 4px 0 0 #2563EB" : "0 4px 0 0 #1D4ED8",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setActivePage("beranda")}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: darkMode ? "#ffffff" : "#0a0a0a",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-1px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              background: "#2563EB",
              color: "#fff",
              padding: "2px 8px",
              border: "2px solid #0a0a0a",
              boxShadow: "3px 3px 0 #0a0a0a",
              fontWeight: 900,
              fontSize: "1.1rem",
            }}
          >
            RAP
          </span>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color:
                  activePage === link.id
                    ? "#2563EB"
                    : darkMode
                      ? "#e5e7eb"
                      : "#374151",
                background:
                  activePage === link.id
                    ? darkMode
                      ? "#1e3a8a20"
                      : "#dbeafe"
                    : "none",
                border:
                  activePage === link.id
                    ? "2px solid #2563EB"
                    : "2px solid transparent",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {link.label}
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              marginLeft: 12,
              width: 40,
              height: 40,
              background: darkMode ? "#1D4ED8" : "#dbeafe",
              border: "2px solid #1D4ED8",
              boxShadow: "3px 3px 0 #1D4ED8",
              cursor: "pointer",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s",
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer({ darkMode, setActivePage }) {
  const bg = darkMode ? "#0a0a0a" : "#0f172a";
  const textMuted = "#94a3b8";

  return (
    <footer
      style={{
        background: bg,
        borderTop: "4px solid #2563EB",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "1.6rem",
                color: "#fff",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  background: "#2563EB",
                  color: "#fff",
                  padding: "2px 10px",
                  border: "2px solid #fff",
                  boxShadow: "3px 3px 0 #2563EB",
                }}
              >
                RAP
              </span>
            </div>
            <p
              style={{
                color: textMuted,
                lineHeight: 1.7,
                maxWidth: 300,
                fontSize: "0.95rem",
              }}
            >
              Software Developer yang bersemangat membangun pengalaman perangkat
              lunak yang menarik dan fungsional.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    background: "transparent",
                    border: "2px solid #334155",
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#2563EB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#334155";
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "0.85rem",
              }}
            >
              Navigasi
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setActivePage(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: textMuted,
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "0.95rem",
                    padding: 0,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#2563EB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = textMuted)
                  }
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "0.85rem",
              }}
            >
              Kontak
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "restuanggia@email.com",
                "Bandar Lampung, Indonesia",
                "Tersedia untuk freelance",
              ].map((item, i) => (
                <p
                  key={i}
                  style={{ color: textMuted, fontSize: "0.9rem", margin: 0 }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1e293b",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.85rem", margin: 0 }}>
            © 2025 Restu Anggia Putra. Dibuat dengan sepenuh ❤️.
          </p>
          <p style={{ color: "#475569", fontSize: "0.85rem", margin: 0 }}>
            Neobrutalism Design
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== PAGES =====

function HomePage({ darkMode, setActivePage }) {
  const bg = darkMode ? "#0f0f0f" : "#ffffff";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";
  const cardBg = darkMode ? "#111827" : "#f8fafc";
  const border = darkMode ? "#1e3a8a" : "#bfdbfe";

  return (
    <div style={{ background: bg, minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          padding: "10rem 1.5rem 6rem",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Decorative block */}
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 80,
            width: 220,
            height: 220,
            background: "#2563EB",
            border: "4px solid #0a0a0a",
            boxShadow: darkMode ? "8px 8px 0 #1e3a8a" : "8px 8px 0 #1e40af",
            zIndex: 0,
            opacity: 0.15,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#dbeafe",
              border: "2px solid #2563EB",
              boxShadow: "4px 4px 0 #1D4ED8",
              padding: "6px 16px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#22c55e",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                color: "#1D4ED8",
                fontSize: "0.9rem",
              }}
            >
              Tersedia untuk Proyek Baru
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: text,
              lineHeight: 1.05,
              marginBottom: 24,
              letterSpacing: "-2px",
            }}
          >
            Halo, Saya{" "}
            <span
              style={{
                color: "#2563EB",
                borderBottom: "6px solid #2563EB",
                paddingBottom: 2,
              }}
            >
              Restu Anggia Putra
            </span>
            <br />
            Software Developer 🚀
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: muted,
              maxWidth: 580,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Saya membangun antarmuka web yang indah, cepat, dan mudah digunakan.
            Spesialis React.js & TailwindCSS yang berbasis di Bandar Lampung,
            Indonesia.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => setActivePage("portfolio")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                background: "#2563EB",
                color: "#fff",
                border: "3px solid #0a0a0a",
                boxShadow: "5px 5px 0 #0a0a0a",
                padding: "14px 28px",
                cursor: "pointer",
                transition: "all 0.1s",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(3px, 3px)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(0,0)";
              }}
            >
              Lihat Portfolio →
            </button>
            <button
              onClick={() => setActivePage("kontak")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                background: "transparent",
                color: text,
                border: "3px solid " + (darkMode ? "#e2e8f0" : "#0a0a0a"),
                boxShadow: darkMode ? "5px 5px 0 #e2e8f0" : "5px 5px 0 #0a0a0a",
                padding: "14px 28px",
                cursor: "pointer",
                transition: "all 0.1s",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(3px, 3px)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(0,0)";
              }}
            >
              Hubungi Saya
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 60,
              paddingTop: 40,
              borderTop: `2px dashed ${border}`,
            }}
          >
            {[
              { num: "20+", label: "Proyek Selesai" },
              { num: "3+", label: "Tahun Pengalaman" },
              { num: "10+", label: "Klien Puas" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    color: "#2563EB",
                    margin: 0,
                  }}
                >
                  {stat.num}
                </p>
                <p
                  style={{
                    color: muted,
                    fontSize: "0.9rem",
                    margin: "4px 0 0",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Saya Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: darkMode ? "#111827" : "#f0f9ff",
          borderTop: "3px solid " + border,
          borderBottom: "3px solid " + border,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Tentang Saya" darkMode={darkMode} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: text,
                  marginBottom: 20,
                  letterSpacing: "-1px",
                }}
              >
                Developer yang suka kerapian kode dan keindahan UI
              </h2>
              <p
                style={{
                  color: muted,
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontSize: "1rem",
                }}
              >
                Saya adalah seorang Software Developer dengan passion besar pada
                dunia web development. Berfokus pada pembuatan antarmuka yang
                tidak hanya indah secara visual, tapi juga performa tinggi dan
                aksesibel untuk semua pengguna.
              </p>
              <button
                onClick={() => setActivePage("tentang")}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  background: "transparent",
                  border: "2px solid #2563EB",
                  color: "#2563EB",
                  padding: "10px 22px",
                  cursor: "pointer",
                  boxShadow: "4px 4px 0 #2563EB",
                  transition: "all 0.1s",
                }}
              >
                Selengkapnya →
              </button>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {SKILLS.slice(0, 4).map((sk) => (
                <div
                  key={sk.label}
                  style={{
                    background: darkMode ? "#1e293b" : "#fff",
                    border: "2px solid " + border,
                    boxShadow: darkMode
                      ? "4px 4px 0 #1e3a8a"
                      : "4px 4px 0 #93c5fd",
                    padding: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      color: text,
                      fontSize: "0.9rem",
                      margin: "0 0 8px",
                    }}
                  >
                    {sk.label}
                  </p>
                  <div
                    style={{
                      height: 6,
                      background: darkMode ? "#334155" : "#e2e8f0",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: sk.level + "%",
                        background: "#2563EB",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      color: "#2563EB",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      margin: "6px 0 0",
                    }}
                  >
                    {sk.level}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Portfolio" darkMode={darkMode} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 20,
              marginBottom: 36,
            }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                color: text,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Proyek Terbaru
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} project={p} darkMode={darkMode} />
            ))}
          </div>
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <button
              onClick={() => setActivePage("portfolio")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: "#2563EB",
                color: "#fff",
                border: "2px solid #1D4ED8",
                boxShadow: "4px 4px 0 #1D4ED8",
                padding: "10px 22px",
                cursor: "pointer",
              }}
            >
              Lihat Selengkapnya →
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: darkMode ? "#111827" : "#f0f9ff",
          borderTop: "3px solid " + border,
          borderBottom: "3px solid " + border,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Blog" darkMode={darkMode} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginTop: 20,
              marginBottom: 36,
            }}
          >
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                color: text,
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              Blog Terkini
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {BLOGS.map((b) => (
              <BlogCard key={b.id} blog={b} darkMode={darkMode} />
            ))}
          </div>
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <button
              onClick={() => setActivePage("blog")}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                background: "#2563EB",
                color: "#fff",
                border: "2px solid #1D4ED8",
                boxShadow: "4px 4px 0 #1D4ED8",
                padding: "10px 22px",
                cursor: "pointer",
              }}
            >
              Lihat Selengkapnya →
            </button>
          </div>
        </div>
      </section>

      {/* Kontak CTA */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <ContactCTA darkMode={darkMode} setActivePage={setActivePage} />
      </section>
    </div>
  );
}

function TentangPage({ darkMode }) {
  const bg = darkMode ? "#0f0f0f" : "#ffffff";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";
  const border = darkMode ? "#1e3a8a" : "#bfdbfe";
  const cardBg = darkMode ? "#111827" : "#f8fafc";

  const EXPERIENCES = [
    {
      year: "2024 – Sekarang",
      role: "Freelance Software Developer",
      company: "Self-Employed",
      desc: "Mengerjakan berbagai proyek perangkat lunak untuk klien dari berbagai industri, mulai dari aplikasi web hingga solusi mobile.",
    },
    {
      year: "2023 – 2024",
      role: "Junior Web Developer",
      company: "PT. Teknologi Maju",
      desc: "Membangun dan memelihara antarmuka web menggunakan React.js dan TailwindCSS dalam tim agile.",
    },
    {
      year: "2022 – 2023",
      role: "Intern Frontend Dev",
      company: "Startup Digital XYZ",
      desc: "Membantu pengembangan komponen UI dan mempelajari best practices modern web development.",
    },
  ];

  return (
    <div style={{ background: bg, minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <SectionLabel label="Tentang Saya" darkMode={darkMode} />

        {/* Profile */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 60,
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              background: "#2563EB",
              border: "4px solid " + (darkMode ? "#e2e8f0" : "#0a0a0a"),
              boxShadow: darkMode ? "8px 8px 0 #1e3a8a" : "8px 8px 0 #1D4ED8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              flexShrink: 0,
            }}
          >
            👨‍💻
          </div>
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: "2.5rem",
                color: text,
                margin: "0 0 8px",
                letterSpacing: "-1px",
              }}
            >
              Restu Anggia Putra
            </h1>
            <p
              style={{
                color: "#2563EB",
                fontWeight: 700,
                fontSize: "1.1rem",
                margin: "0 0 16px",
              }}
            >
              Software Developer & UI Enthusiast
            </p>
            <p style={{ color: muted, lineHeight: 1.8, maxWidth: 500 }}>
              Halo! Saya Restu, seorang developer yang suka menciptakan
              pengalaman digital yang bermakna. Berasal dari Bandar Lampung,
              Indonesia, saya percaya bahwa kode yang baik bukan hanya tentang
              fungsionalitas, tapi juga tentang keindahan dan keterbacaan.
            </p>
          </div>
        </div>

        {/* Bio */}
        <div
          style={{
            background: cardBg,
            border: "2px solid " + border,
            boxShadow: darkMode ? "6px 6px 0 #1e3a8a" : "6px 6px 0 #93c5fd",
            padding: "2rem",
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "1.4rem",
              color: text,
              marginBottom: 16,
            }}
          >
            💡 Siapa Saya?
          </h2>
          <p style={{ color: muted, lineHeight: 1.9, marginBottom: 16 }}>
            Perjalanan saya di dunia programming dimulai dari rasa penasaran
            yang besar — bagaimana sebuah website bisa terlihat indah sekaligus
            berfungsi dengan baik? Pertanyaan itulah yang mendorong saya belajar
            HTML, CSS, JavaScript, dan akhirnya React.js.
          </p>
          <p style={{ color: muted, lineHeight: 1.9, marginBottom: 16 }}>
            Saya percaya bahwa desain dan kode harus berjalan beriringan. Itulah
            mengapa saya selalu memperhatikan detail visual sambil tetap menjaga
            kode tetap bersih dan mudah dipelihara.
          </p>
          <p style={{ color: muted, lineHeight: 1.9 }}>
            Di luar coding, saya gemar membaca artikel teknologi, mengeksplor
            desain antarmuka terbaru, dan berbagi pengetahuan melalui tulisan di
            blog ini.
          </p>
        </div>

        {/* Skills */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "1.6rem",
            color: text,
            marginBottom: 24,
          }}
        >
          🛠 Tech Stack
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            marginBottom: 60,
          }}
        >
          {SKILLS.map((sk) => (
            <div
              key={sk.label}
              style={{
                background: cardBg,
                border: "2px solid " + border,
                padding: "16px 20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: text,
                    fontSize: "0.95rem",
                  }}
                >
                  {sk.label}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "0.9rem",
                  }}
                >
                  {sk.level}%
                </span>
              </div>
              <div
                style={{
                  height: 8,
                  background: darkMode ? "#1e293b" : "#e2e8f0",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: sk.level + "%",
                    background: "linear-gradient(90deg, #1D4ED8, #3B82F6)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "1.6rem",
            color: text,
            marginBottom: 24,
          }}
        >
          💼 Pengalaman
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 24,
                background: cardBg,
                border: "2px solid " + border,
                boxShadow: darkMode ? "4px 4px 0 #1e3a8a" : "4px 4px 0 #93c5fd",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  minWidth: 140,
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  paddingTop: 2,
                }}
              >
                {exp.year}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    color: text,
                    margin: "0 0 4px",
                  }}
                >
                  {exp.role}
                </p>
                <p
                  style={{
                    color: "#2563EB",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    margin: "0 0 8px",
                  }}
                >
                  {exp.company}
                </p>
                <p style={{ color: muted, fontSize: "0.9rem", margin: 0 }}>
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioPage({ darkMode }) {
  const bg = darkMode ? "#0f0f0f" : "#ffffff";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const [filter, setFilter] = useState("Semua");
  const tags = ["Semua", "React", "Next.js", "Vue.js", "HTML"];

  const filtered =
    filter === "Semua"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <div style={{ background: bg, minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <SectionLabel label="Portfolio" darkMode={darkMode} />
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "2.8rem",
            color: text,
            marginTop: 20,
            marginBottom: 12,
            letterSpacing: "-1px",
          }}
        >
          Proyek yang Telah Saya Kerjakan
        </h1>
        <p
          style={{
            color: darkMode ? "#94a3b8" : "#475569",
            marginBottom: 36,
            fontSize: "1.05rem",
          }}
        >
          Kumpulan proyek nyata dari berbagai domain dan teknologi.
        </p>

        {/* Filter */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                background: filter === t ? "#2563EB" : "transparent",
                color: filter === t ? "#fff" : darkMode ? "#94a3b8" : "#475569",
                border:
                  "2px solid " +
                  (filter === t ? "#1D4ED8" : darkMode ? "#334155" : "#cbd5e1"),
                boxShadow: filter === t ? "3px 3px 0 #1D4ED8" : "none",
                padding: "8px 18px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} darkMode={darkMode} large />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogPage({ darkMode }) {
  const bg = darkMode ? "#0f0f0f" : "#ffffff";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";

  return (
    <div style={{ background: bg, minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <SectionLabel label="Blog" darkMode={darkMode} />
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "2.8rem",
            color: text,
            marginTop: 20,
            marginBottom: 12,
            letterSpacing: "-1px",
          }}
        >
          Tulisan & Artikel
        </h1>
        <p style={{ color: muted, marginBottom: 48, fontSize: "1.05rem" }}>
          Berbagi pengetahuan, pengalaman, dan insight seputar dunia web
          development.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {BLOGS.map((b) => (
            <article
              key={b.id}
              style={{
                background: darkMode ? "#111827" : "#f8fafc",
                border: "2px solid " + (darkMode ? "#1e3a8a" : "#bfdbfe"),
                boxShadow: darkMode ? "5px 5px 0 #1e3a8a" : "5px 5px 0 #93c5fd",
                padding: "28px 32px",
                cursor: "pointer",
                transition: "all 0.1s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-2px, -2px)";
                e.currentTarget.style.boxShadow = darkMode
                  ? "7px 7px 0 #1e3a8a"
                  : "7px 7px 0 #60a5fa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0,0)";
                e.currentTarget.style.boxShadow = darkMode
                  ? "5px 5px 0 #1e3a8a"
                  : "5px 5px 0 #93c5fd";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    background: "#dbeafe",
                    border: "1.5px solid #2563EB",
                    color: "#1D4ED8",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "3px 10px",
                  }}
                >
                  {b.tag}
                </span>
                <span style={{ color: muted, fontSize: "0.85rem" }}>
                  {b.date} · {b.readTime} baca
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: text,
                  margin: "0 0 12px",
                  letterSpacing: "-0.5px",
                }}
              >
                {b.title}
              </h2>
              <p style={{ color: muted, lineHeight: 1.7, margin: 0 }}>
                {b.excerpt}
              </p>
              <p
                style={{
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  margin: "16px 0 0",
                }}
              >
                Baca Selengkapnya →
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function KontakPage({ darkMode }) {
  const bg = darkMode ? "#0f0f0f" : "#ffffff";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";
  const border = darkMode ? "#1e3a8a" : "#bfdbfe";
  const inputBg = darkMode ? "#111827" : "#f8fafc";
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: bg, minHeight: "100vh", paddingTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <SectionLabel label="Kontak" darkMode={darkMode} />
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "2.8rem",
            color: text,
            marginTop: 20,
            marginBottom: 12,
            letterSpacing: "-1px",
          }}
        >
          Mari Berkolaborasi! 🤝
        </h1>
        <p style={{ color: muted, marginBottom: 48, fontSize: "1.05rem" }}>
          Punya proyek menarik? Atau sekadar ingin ngobrol? Saya selalu terbuka
          untuk diskusi dan kesempatan baru.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "3rem",
          }}
        >
          {/* Info */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "restuanggia@email.com",
                },
                {
                  icon: "📍",
                  label: "Lokasi",
                  value: "Bandar Lampung, Indonesia",
                },
                { icon: "⏰", label: "Zona Waktu", value: "WIB (GMT+7)" },
                { icon: "✅", label: "Status", value: "Tersedia untuk proyek" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: inputBg,
                    border: "2px solid " + border,
                    padding: "16px 20px",
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        color: muted,
                        fontSize: "0.8rem",
                        margin: "0 0 2px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: text,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        margin: 0,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginTop: 20,
                background: "#22c55e",
                border: "3px solid #0a0a0a",
                boxShadow: "5px 5px 0 #0a0a0a",
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                padding: "14px",
                textDecoration: "none",
                transition: "all 0.1s",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>💬</span>
              Chat via WhatsApp
            </a>

            {/* Social Links */}
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 20,
                flexWrap: "wrap",
              }}
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "transparent",
                    border: "2px solid " + border,
                    color: muted,
                    padding: "8px 16px",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563EB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = muted;
                    e.currentTarget.style.borderColor = border;
                  }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: inputBg,
              border: "3px solid " + (darkMode ? "#2563EB" : "#1D4ED8"),
              boxShadow: darkMode ? "8px 8px 0 #1e3a8a" : "8px 8px 0 #1D4ED8",
              padding: "2rem",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div style={{ fontSize: "4rem", marginBottom: 16 }}>🎉</div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    color: text,
                    marginBottom: 8,
                  }}
                >
                  Pesan Terkirim!
                </h3>
                <p style={{ color: muted }}>
                  Terima kasih! Saya akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    color: text,
                    margin: 0,
                  }}
                >
                  Kirim Pesan
                </h3>
                {[
                  {
                    label: "Nama Lengkap",
                    type: "text",
                    placeholder: "John Doe",
                  },
                  {
                    label: "Email",
                    type: "email",
                    placeholder: "john@email.com",
                  },
                  {
                    label: "Subjek",
                    type: "text",
                    placeholder: "Kolaborasi Proyek",
                  },
                ].map((field) => (
                  <div key={field.label}>
                    <label
                      style={{
                        display: "block",
                        fontWeight: 700,
                        color: text,
                        fontSize: "0.9rem",
                        marginBottom: 8,
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: darkMode ? "#1e293b" : "#fff",
                        border: "2px solid " + border,
                        color: text,
                        fontSize: "0.95rem",
                        outline: "none",
                        boxSizing: "border-box",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                      onBlur={(e) => (e.target.style.borderColor = border)}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontWeight: 700,
                      color: text,
                      fontSize: "0.9rem",
                      marginBottom: 8,
                    }}
                  >
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan proyek atau kebutuhan Anda..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: darkMode ? "#1e293b" : "#fff",
                      border: "2px solid " + border,
                      color: text,
                      fontSize: "0.95rem",
                      outline: "none",
                      resize: "vertical",
                      fontFamily: "inherit",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                    onBlur={(e) => (e.target.style.borderColor = border)}
                  />
                </div>
                <button
                  onClick={() => setSent(true)}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    background: "#2563EB",
                    color: "#fff",
                    border: "3px solid #0a0a0a",
                    boxShadow: "5px 5px 0 #0a0a0a",
                    padding: "14px",
                    cursor: "pointer",
                    transition: "all 0.1s",
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.boxShadow = "2px 2px 0 #0a0a0a";
                    e.currentTarget.style.transform = "translate(3px,3px)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
                    e.currentTarget.style.transform = "translate(0,0)";
                  }}
                >
                  Kirim Pesan 🚀
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== REUSABLE COMPONENTS =====

function SectionLabel({ label, darkMode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 32, height: 4, background: "#2563EB" }} />
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "0.8rem",
          color: "#2563EB",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project, darkMode, large }) {
  const cardBg = darkMode ? "#111827" : "#f8fafc";
  const border = darkMode ? "#1e3a8a" : "#bfdbfe";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";

  return (
    <div
      style={{
        background: cardBg,
        border: "2px solid " + border,
        boxShadow: darkMode ? "5px 5px 0 #1e3a8a" : "5px 5px 0 #93c5fd",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.12s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-3px,-3px)";
        e.currentTarget.style.boxShadow = darkMode
          ? "8px 8px 0 #1e3a8a"
          : "8px 8px 0 #60a5fa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = darkMode
          ? "5px 5px 0 #1e3a8a"
          : "5px 5px 0 #93c5fd";
      }}
    >
      {/* Color bar */}
      <div
        style={{
          height: large ? 120 : 80,
          background: project.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: large ? "2.5rem" : "1.8rem",
        }}
      >
        💻
      </div>
      <div style={{ padding: large ? "20px" : "16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: large ? "1.1rem" : "0.95rem",
              color: text,
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <span style={{ color: muted, fontSize: "0.75rem", fontWeight: 600 }}>
            {project.year}
          </span>
        </div>
        {large && (
          <p
            style={{
              color: muted,
              fontSize: "0.85rem",
              lineHeight: 1.6,
              margin: "8px 0",
            }}
          >
            {project.desc}
          </p>
        )}
        <div
          style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: darkMode ? "#1e3a8a" : "#dbeafe",
                border: "1px solid " + (darkMode ? "#2563EB" : "#93c5fd"),
                color: darkMode ? "#93c5fd" : "#1D4ED8",
                fontSize: "0.72rem",
                fontWeight: 700,
                padding: "2px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog, darkMode }) {
  const cardBg = darkMode ? "#111827" : "#f8fafc";
  const border = darkMode ? "#1e3a8a" : "#bfdbfe";
  const text = darkMode ? "#f1f5f9" : "#0f172a";
  const muted = darkMode ? "#94a3b8" : "#475569";

  return (
    <div
      style={{
        background: cardBg,
        border: "2px solid " + border,
        boxShadow: darkMode ? "5px 5px 0 #1e3a8a" : "5px 5px 0 #93c5fd",
        padding: "20px",
        cursor: "pointer",
        transition: "all 0.12s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-3px,-3px)";
        e.currentTarget.style.boxShadow = darkMode
          ? "8px 8px 0 #1e3a8a"
          : "8px 8px 0 #60a5fa";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = darkMode
          ? "5px 5px 0 #1e3a8a"
          : "5px 5px 0 #93c5fd";
      }}
    >
      <span
        style={{
          background: "#dbeafe",
          border: "1.5px solid #2563EB",
          color: "#1D4ED8",
          fontWeight: 700,
          fontSize: "0.75rem",
          padding: "2px 10px",
          alignSelf: "flex-start",
          marginBottom: 12,
        }}
      >
        {blog.tag}
      </span>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "1rem",
          color: text,
          margin: "0 0 10px",
          lineHeight: 1.4,
          flex: 1,
        }}
      >
        {blog.title}
      </h3>
      <p
        style={{
          color: muted,
          fontSize: "0.85rem",
          lineHeight: 1.6,
          margin: "0 0 16px",
        }}
      >
        {blog.excerpt.slice(0, 80)}...
      </p>
      <p style={{ color: muted, fontSize: "0.75rem", margin: 0 }}>
        {blog.date} · {blog.readTime}
      </p>
    </div>
  );
}

function ContactCTA({ darkMode, setActivePage }) {
  const border = darkMode ? "#1e3a8a" : "#1D4ED8";

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        background: "#2563EB",
        border: "3px solid " + (darkMode ? "#e2e8f0" : "#0a0a0a"),
        boxShadow: darkMode ? "8px 8px 0 #1e3a8a" : "8px 8px 0 #0a0a0a",
        padding: "3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      <div>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "2rem",
            color: "#fff",
            margin: "0 0 12px",
            letterSpacing: "-1px",
          }}
        >
          Punya Ide Proyek? 💡
        </h2>
        <p style={{ color: "#bfdbfe", fontSize: "1rem", margin: 0 }}>
          Mari wujudkan bersama! Saya siap membantu mewujudkan visi digital
          Anda.
        </p>
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#22c55e",
            border: "3px solid #0a0a0a",
            boxShadow: "4px 4px 0 #0a0a0a",
            color: "#fff",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            padding: "12px 22px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => setActivePage("kontak")}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            background: "#fff",
            color: "#1D4ED8",
            border: "3px solid #0a0a0a",
            boxShadow: "4px 4px 0 #0a0a0a",
            padding: "12px 22px",
            cursor: "pointer",
          }}
        >
          Kirim Pesan
        </button>
      </div>
    </div>
  );
}

// ===== MAIN APP =====

export default function App() {
  const [activePage, setActivePage] = useState("beranda");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "beranda":
        return <HomePage darkMode={darkMode} setActivePage={setActivePage} />;
      case "tentang":
        return <TentangPage darkMode={darkMode} />;
      case "portfolio":
        return <PortfolioPage darkMode={darkMode} />;
      case "blog":
        return <BlogPage darkMode={darkMode} />;
      case "kontak":
        return <KontakPage darkMode={darkMode} />;
      default:
        return <HomePage darkMode={darkMode} setActivePage={setActivePage} />;
    }
  };

  return (
    <div
      style={{
        fontFamily:
          "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Import Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>{renderPage()}</main>

      <Footer darkMode={darkMode} setActivePage={setActivePage} />
    </div>
  );
}
