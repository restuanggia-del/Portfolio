import { useState, useEffect } from "react";

// ===== RESPONSIVE HOOK =====
function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    if (typeof window === "undefined")
      return { isMobile: false, isTablet: false, isDesktop: true };
    const w = window.innerWidth;
    return {
      isMobile: w < 640,
      isTablet: w >= 640 && w < 1024,
      isDesktop: w >= 1024,
    };
  });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBp({
        isMobile: w < 640,
        isTablet: w >= 640 && w < 1024,
        isDesktop: w >= 1024,
      });
    };
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

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
    tags: ["Nuxt.js", "Supabase"],
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
      "Perbandingan mendalam antara TailwindCSS dengan CSS konvensional dari sisi produktivitas.",
    date: "2 Apr 2025",
    readTime: "6 menit",
    tag: "CSS",
  },
  {
    id: 3,
    title: "Belajar Git dari Nol: Panduan untuk Pemula",
    excerpt:
      "Langkah demi langkah mempelajari Git mulai dari instalasi hingga workflow kolaborasi tim.",
    date: "18 Mar 2025",
    readTime: "10 menit",
    tag: "Git",
  },
  {
    id: 4,
    title: "Optimasi Performa Web dengan Lighthouse",
    excerpt:
      "Teknik-teknik praktis meningkatkan skor Lighthouse dan membuat website kamu jauh lebih cepat.",
    date: "5 Feb 2025",
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
  { label: "GitHub", icon: "GH", url: "https://github.com" },
  { label: "LinkedIn", icon: "in", url: "https://linkedin.com" },
  { label: "Instagram", icon: "IG", url: "https://instagram.com" },
  { label: "Twitter", icon: "TW", url: "https://twitter.com" },
];

const EXPERIENCES = [
  {
    year: "2024 – Sekarang",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    desc: "Mengerjakan berbagai proyek web untuk klien dari berbagai industri, mulai dari landing page hingga aplikasi web kompleks.",
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

// ===== THEME =====
const t = (dark) => ({
  bg: dark ? "#0f0f0f" : "#ffffff",
  bgAlt: dark ? "#111827" : "#f0f9ff",
  bgCard: dark ? "#111827" : "#f8fafc",
  bgInput: dark ? "#1e293b" : "#ffffff",
  text: dark ? "#f1f5f9" : "#0f172a",
  muted: dark ? "#94a3b8" : "#475569",
  border: dark ? "#1e3a8a" : "#bfdbfe",
  shadow: dark ? "#1e3a8a" : "#93c5fd",
});

// ===== PRIMITIVES =====
function SectionLabel({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{ width: 32, height: 4, background: "#2563EB", flexShrink: 0 }}
      />
      <span
        style={{
          fontWeight: 800,
          fontSize: "0.75rem",
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

function Tag({ label, dark }) {
  return (
    <span
      style={{
        background: dark ? "#1e3a8a" : "#dbeafe",
        border: `1px solid ${dark ? "#2563EB" : "#93c5fd"}`,
        color: dark ? "#93c5fd" : "#1D4ED8",
        fontSize: "0.68rem",
        fontWeight: 700,
        padding: "2px 7px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

const pressDown = (e) => {
  e.currentTarget.style.boxShadow = "2px 2px 0 #0a0a0a";
  e.currentTarget.style.transform = "translate(3px,3px)";
};
const pressUp = (e) => {
  e.currentTarget.style.boxShadow = "5px 5px 0 #0a0a0a";
  e.currentTarget.style.transform = "translate(0,0)";
};

function PrimaryBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      onMouseDown={pressDown}
      onMouseUp={pressUp}
      style={{
        fontWeight: 800,
        fontSize: "0.95rem",
        background: "#2563EB",
        color: "#fff",
        border: "3px solid #0a0a0a",
        boxShadow: "5px 5px 0 #0a0a0a",
        padding: "12px 24px",
        cursor: "pointer",
        transition: "all 0.1s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function OutlineBtn({ children, onClick, dark }) {
  return (
    <button
      onClick={onClick}
      onMouseDown={pressDown}
      onMouseUp={pressUp}
      style={{
        fontWeight: 800,
        fontSize: "0.95rem",
        background: "transparent",
        color: dark ? "#f1f5f9" : "#0f172a",
        border: `3px solid ${dark ? "#e2e8f0" : "#0a0a0a"}`,
        boxShadow: `5px 5px 0 ${dark ? "#e2e8f0" : "#0a0a0a"}`,
        padding: "12px 24px",
        cursor: "pointer",
        transition: "all 0.1s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function SmallBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontWeight: 700,
        fontSize: "0.88rem",
        background: "#2563EB",
        color: "#fff",
        border: "2px solid #1D4ED8",
        boxShadow: "4px 4px 0 #1D4ED8",
        padding: "9px 18px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

// ===== CARDS =====
function ProjectCard({ project, darkMode, large }) {
  const th = t(darkMode);
  return (
    <div
      style={{
        background: th.bgCard,
        border: `2px solid ${th.border}`,
        boxShadow: `5px 5px 0 ${th.shadow}`,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.12s, box-shadow 0.12s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-3px,-3px)";
        e.currentTarget.style.boxShadow = `8px 8px 0 ${th.shadow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = `5px 5px 0 ${th.shadow}`;
      }}
    >
      <div
        style={{
          height: large ? 100 : 72,
          background: project.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: large ? "2rem" : "1.5rem",
        }}
      >
        💻
      </div>
      <div style={{ padding: large ? "16px" : "12px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 6,
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontWeight: 800,
              fontSize: large ? "0.95rem" : "0.85rem",
              color: th.text,
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              color: th.muted,
              fontSize: "0.68rem",
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {project.year}
          </span>
        </div>
        {large && (
          <p
            style={{
              color: th.muted,
              fontSize: "0.8rem",
              lineHeight: 1.6,
              margin: "0 0 10px",
            }}
          >
            {project.desc}
          </p>
        )}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} dark={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog, darkMode }) {
  const th = t(darkMode);
  return (
    <div
      style={{
        background: th.bgCard,
        border: `2px solid ${th.border}`,
        boxShadow: `5px 5px 0 ${th.shadow}`,
        padding: "16px",
        cursor: "pointer",
        transition: "transform 0.12s, box-shadow 0.12s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translate(-3px,-3px)";
        e.currentTarget.style.boxShadow = `8px 8px 0 ${th.shadow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0,0)";
        e.currentTarget.style.boxShadow = `5px 5px 0 ${th.shadow}`;
      }}
    >
      <span
        style={{
          background: "#dbeafe",
          border: "1.5px solid #2563EB",
          color: "#1D4ED8",
          fontWeight: 700,
          fontSize: "0.68rem",
          padding: "2px 9px",
          alignSelf: "flex-start",
          marginBottom: 10,
        }}
      >
        {blog.tag}
      </span>
      <h3
        style={{
          fontWeight: 800,
          fontSize: "0.9rem",
          color: th.text,
          margin: "0 0 8px",
          lineHeight: 1.4,
          flex: 1,
        }}
      >
        {blog.title}
      </h3>
      <p
        style={{
          color: th.muted,
          fontSize: "0.8rem",
          lineHeight: 1.6,
          margin: "0 0 10px",
        }}
      >
        {blog.excerpt.slice(0, 80)}…
      </p>
      <p style={{ color: th.muted, fontSize: "0.7rem", margin: 0 }}>
        {blog.date} · {blog.readTime}
      </p>
    </div>
  );
}

// ===== CONTACT CTA =====
function ContactCTA({ darkMode, setActivePage }) {
  const { isMobile } = useBreakpoint();
  return (
    <div
      style={{
        background: "#2563EB",
        border: "3px solid #0a0a0a",
        boxShadow: "8px 8px 0 #0a0a0a",
        padding: isMobile ? "2rem 1.25rem" : "3rem",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: isMobile ? "flex-start" : "center",
        gap: "1.5rem",
      }}
    >
      <div>
        <h2
          style={{
            fontWeight: 900,
            fontSize: isMobile ? "1.5rem" : "2rem",
            color: "#fff",
            margin: "0 0 8px",
            letterSpacing: "-1px",
          }}
        >
          Punya Ide Proyek? 💡
        </h2>
        <p style={{ color: "#bfdbfe", fontSize: "0.9rem", margin: 0 }}>
          Mari wujudkan bersama! Saya siap membantu mewujudkan visi digital
          Anda.
        </p>
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          onMouseDown={pressDown}
          onMouseUp={pressUp}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#22c55e",
            border: "3px solid #0a0a0a",
            boxShadow: "5px 5px 0 #0a0a0a",
            color: "#fff",
            fontWeight: 800,
            fontSize: "0.95rem",
            padding: "12px 22px",
            textDecoration: "none",
            transition: "all 0.1s",
          }}
        >
          💬 WhatsApp
        </a>
        <button
          onClick={() => setActivePage("kontak")}
          onMouseDown={pressDown}
          onMouseUp={pressUp}
          style={{
            fontWeight: 800,
            fontSize: "0.95rem",
            background: "#fff",
            color: "#1D4ED8",
            border: "3px solid #0a0a0a",
            boxShadow: "5px 5px 0 #0a0a0a",
            padding: "12px 22px",
            cursor: "pointer",
            transition: "all 0.1s",
          }}
        >
          Kirim Pesan
        </button>
      </div>
    </div>
  );
}

// ===== NAVBAR =====
function Navbar({ activePage, setActivePage, darkMode, setDarkMode }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const th = t(darkMode);
  const isSmall = isMobile || isTablet;

  const navigate = (id) => {
    setActivePage(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: th.bg,
        borderBottom: "3px solid #2563EB",
        boxShadow: "0 4px 0 0 #1D4ED8",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 62,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("beranda")}
          style={{
            fontWeight: 900,
            fontSize: "1.25rem",
            color: th.text,
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "-1px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 0,
          }}
        >
          <span
            style={{
              background: "#2563EB",
              color: "#fff",
              padding: "1px 8px",
              border: "2px solid #0a0a0a",
              boxShadow: "2px 2px 0 #0a0a0a",
            }}
          >
            RE
          </span>
          <span>Restu.</span>
        </button>

        {/* Desktop nav */}
        {!isSmall && (
          <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => navigate(link.id)}
                style={{
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  color: activePage === link.id ? "#2563EB" : th.muted,
                  background:
                    activePage === link.id
                      ? darkMode
                        ? "#1e3a8a30"
                        : "#dbeafe"
                      : "none",
                  border:
                    activePage === link.id
                      ? "2px solid #2563EB"
                      : "2px solid transparent",
                  padding: "6px 13px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                marginLeft: 8,
                width: 36,
                height: 36,
                background: darkMode ? "#1D4ED8" : "#dbeafe",
                border: "2px solid #1D4ED8",
                boxShadow: "3px 3px 0 #1D4ED8",
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        )}

        {/* Mobile controls */}
        {isSmall && (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: 34,
                height: 34,
                background: darkMode ? "#1D4ED8" : "#dbeafe",
                border: "2px solid #1D4ED8",
                cursor: "pointer",
                fontSize: "0.95rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: 34,
                height: 34,
                background: "transparent",
                border: `2px solid ${th.border}`,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: 0,
              }}
            >
              {menuOpen ? (
                <span
                  style={{ fontSize: "1rem", color: th.text, lineHeight: 1 }}
                >
                  ✕
                </span>
              ) : (
                <>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        display: "block",
                        width: 14,
                        height: 2,
                        background: th.text,
                      }}
                    />
                  ))}
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isSmall && menuOpen && (
        <div
          style={{
            background: th.bg,
            borderTop: `2px solid ${th.border}`,
            padding: "0.5rem 1.25rem 1rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => navigate(link.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: activePage === link.id ? "#2563EB" : th.text,
                background:
                  activePage === link.id
                    ? darkMode
                      ? "#1e3a8a20"
                      : "#dbeafe"
                    : "none",
                border: "none",
                borderLeft:
                  activePage === link.id
                    ? "4px solid #2563EB"
                    : "4px solid transparent",
                padding: "10px 14px",
                cursor: "pointer",
                marginBottom: 2,
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ===== FOOTER =====
function Footer({ darkMode, setActivePage }) {
  const { isMobile, isTablet } = useBreakpoint();
  const muted = "#94a3b8";
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "2fr 1fr 1fr";

  return (
    <footer
      style={{
        background: darkMode ? "#080808" : "#0f172a",
        borderTop: "4px solid #2563EB",
        padding: isMobile ? "3rem 1.25rem 1.5rem" : "4rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            gap: isMobile ? "2rem" : "3rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.35rem",
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
                  padding: "1px 9px",
                  border: "2px solid #fff",
                  boxShadow: "2px 2px 0 #2563EB",
                }}
              >
                RE
              </span>
              Restu.
            </div>
            <p
              style={{
                color: muted,
                lineHeight: 1.7,
                maxWidth: 280,
                fontSize: "0.88rem",
                margin: "0 0 1.25rem",
              }}
            >
              Frontend Developer yang bersemangat membangun pengalaman web yang
              menarik dan fungsional.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    background: "transparent",
                    border: "2px solid #334155",
                    color: muted,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.68rem",
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
                    e.currentTarget.style.color = muted;
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontWeight: 700,
                color: "#fff",
                marginBottom: 14,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: "0.75rem",
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
                    color: muted,
                    cursor: "pointer",
                    textAlign: "left",
                    fontSize: "0.88rem",
                    padding: 0,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#2563EB")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {!isMobile && (
            <div>
              <p
                style={{
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 14,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontSize: "0.75rem",
                }}
              >
                Kontak
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "restuanggia@email.com",
                  "Bandar Lampung, Indonesia",
                  "Tersedia untuk freelance",
                ].map((item, i) => (
                  <p
                    key={i}
                    style={{ color: muted, fontSize: "0.85rem", margin: 0 }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            borderTop: "1px solid #1e293b",
            paddingTop: 18,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: 8,
          }}
        >
          <p style={{ color: "#475569", fontSize: "0.8rem", margin: 0 }}>
            © 2025 Restu Anggia. Dibuat dengan ❤️ menggunakan React + Vite.
          </p>
          <p style={{ color: "#475569", fontSize: "0.8rem", margin: 0 }}>
            Neobrutalism Design
          </p>
        </div>
      </div>
    </footer>
  );
}

// ===== HOME PAGE =====
function HomePage({ darkMode, setActivePage }) {
  const { isMobile, isTablet } = useBreakpoint();
  const th = t(darkMode);
  const isSmall = isMobile || isTablet;
  const projCols = isMobile
    ? "1fr 1fr"
    : isTablet
      ? "1fr 1fr"
      : "repeat(4, 1fr)";

  return (
    <div style={{ background: th.bg }}>
      {/* HERO */}
      <section
        style={{
          padding: isMobile
            ? "6.5rem 1.25rem 3.5rem"
            : isTablet
              ? "8rem 2rem 5rem"
              : "9rem 1.5rem 6rem",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: 80,
              right: isTablet ? 30 : 80,
              width: isTablet ? 140 : 200,
              height: isTablet ? 140 : 200,
              background: "#2563EB",
              border: "4px solid #0a0a0a",
              boxShadow: `8px 8px 0 ${th.shadow}`,
              zIndex: 0,
              opacity: 0.1,
            }}
          />
        )}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#dbeafe",
              border: "2px solid #2563EB",
              boxShadow: "4px 4px 0 #1D4ED8",
              padding: "5px 14px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#22c55e",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{ fontWeight: 600, color: "#1D4ED8", fontSize: "0.82rem" }}
            >
              Tersedia untuk Proyek Baru
            </span>
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: isMobile
                ? "2rem"
                : isTablet
                  ? "2.8rem"
                  : "clamp(2.8rem,5vw,4.2rem)",
              color: th.text,
              lineHeight: 1.08,
              marginBottom: 18,
              letterSpacing: "-2px",
            }}
          >
            Halo, Saya{" "}
            <span
              style={{
                color: "#2563EB",
                borderBottom: "5px solid #2563EB",
                paddingBottom: 2,
              }}
            >
              Restu Anggia
            </span>
            <br />
            Frontend Developer 🚀
          </h1>

          <p
            style={{
              fontSize: isMobile ? "0.92rem" : "1.05rem",
              color: th.muted,
              maxWidth: 540,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            Saya membangun antarmuka web yang indah, cepat, dan mudah digunakan.
            Spesialis React.js & TailwindCSS berbasis di Bandar Lampung,
            Indonesia.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <PrimaryBtn onClick={() => setActivePage("portfolio")}>
              Lihat Portfolio →
            </PrimaryBtn>
            <OutlineBtn onClick={() => setActivePage("kontak")} dark={darkMode}>
              Hubungi Saya
            </OutlineBtn>
          </div>

          <div
            style={{
              display: "flex",
              gap: isMobile ? 20 : 36,
              marginTop: 44,
              paddingTop: 32,
              borderTop: `2px dashed ${th.border}`,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "20+", label: "Proyek Selesai" },
              { num: "3+", label: "Tahun Pengalaman" },
              { num: "10+", label: "Klien Puas" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: isMobile ? "1.5rem" : "1.9rem",
                    color: "#2563EB",
                    margin: 0,
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    color: th.muted,
                    fontSize: "0.8rem",
                    margin: "3px 0 0",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG SINGKAT */}
      <section
        style={{
          padding: isMobile ? "3rem 1.25rem" : "5rem 1.5rem",
          background: th.bgAlt,
          borderTop: `3px solid ${th.border}`,
          borderBottom: `3px solid ${th.border}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Tentang Saya" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isSmall ? "1fr" : "1fr 1fr",
              gap: isSmall ? "2rem" : "4rem",
              alignItems: "center",
              marginTop: 32,
            }}
          >
            <div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? "1.4rem" : "1.9rem",
                  color: th.text,
                  marginBottom: 14,
                  letterSpacing: "-0.5px",
                }}
              >
                Developer yang suka kerapian kode dan keindahan UI
              </h2>
              <p
                style={{
                  color: th.muted,
                  lineHeight: 1.8,
                  marginBottom: 20,
                  fontSize: "0.92rem",
                }}
              >
                Saya adalah seorang Frontend Developer dengan passion besar pada
                dunia web. Berfokus pada pembuatan antarmuka yang tidak hanya
                indah secara visual, tapi juga performa tinggi dan aksesibel.
              </p>
              <button
                onClick={() => setActivePage("tentang")}
                style={{
                  fontWeight: 700,
                  background: "transparent",
                  border: "2px solid #2563EB",
                  color: "#2563EB",
                  padding: "9px 20px",
                  cursor: "pointer",
                  boxShadow: "4px 4px 0 #2563EB",
                  fontSize: "0.88rem",
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
                gap: 10,
              }}
            >
              {SKILLS.slice(0, 4).map((sk) => (
                <div
                  key={sk.label}
                  style={{
                    background: darkMode ? "#1e293b" : "#fff",
                    border: `2px solid ${th.border}`,
                    boxShadow: `4px 4px 0 ${th.shadow}`,
                    padding: 14,
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: th.text,
                      fontSize: "0.82rem",
                      margin: "0 0 7px",
                    }}
                  >
                    {sk.label}
                  </p>
                  <div
                    style={{
                      height: 6,
                      background: darkMode ? "#334155" : "#e2e8f0",
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
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      margin: "4px 0 0",
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

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: isMobile ? "3rem 1.25rem" : "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Portfolio" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              margin: "14px 0 24px",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: isMobile ? "1.4rem" : "1.9rem",
                color: th.text,
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Proyek Terbaru
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: projCols, gap: 14 }}
          >
            {PROJECTS.slice(0, 4).map((p) => (
              <ProjectCard key={p.id} project={p} darkMode={darkMode} />
            ))}
          </div>
          <div style={{ textAlign: "right", marginTop: 18 }}>
            <SmallBtn onClick={() => setActivePage("portfolio")}>
              Lihat Selengkapnya →
            </SmallBtn>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section
        style={{
          padding: isMobile ? "3rem 1.25rem" : "5rem 1.5rem",
          background: th.bgAlt,
          borderTop: `3px solid ${th.border}`,
          borderBottom: `3px solid ${th.border}`,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel label="Blog" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              margin: "14px 0 24px",
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                fontSize: isMobile ? "1.4rem" : "1.9rem",
                color: th.text,
                letterSpacing: "-0.5px",
                margin: 0,
              }}
            >
              Blog Terkini
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: projCols, gap: 14 }}
          >
            {BLOGS.map((b) => (
              <BlogCard key={b.id} blog={b} darkMode={darkMode} />
            ))}
          </div>
          <div style={{ textAlign: "right", marginTop: 18 }}>
            <SmallBtn onClick={() => setActivePage("blog")}>
              Lihat Selengkapnya →
            </SmallBtn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: isMobile ? "3rem 1.25rem" : "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ContactCTA darkMode={darkMode} setActivePage={setActivePage} />
        </div>
      </section>
    </div>
  );
}

// ===== TENTANG PAGE =====
function TentangPage({ darkMode }) {
  const { isMobile, isTablet } = useBreakpoint();
  const th = t(darkMode);
  const isSmall = isMobile || isTablet;

  return (
    <div style={{ background: th.bg, minHeight: "100vh", paddingTop: 62 }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: isMobile ? "2.5rem 1.25rem" : "4rem 1.5rem",
        }}
      >
        <SectionLabel label="Tentang Saya" />

        {/* Profile */}
        <div
          style={{
            display: "flex",
            flexDirection: isSmall ? "column" : "row",
            gap: isSmall ? "1.5rem" : "3rem",
            alignItems: isSmall ? "center" : "flex-start",
            marginTop: 32,
            marginBottom: 40,
            textAlign: isSmall ? "center" : "left",
          }}
        >
          <div
            style={{
              width: isSmall ? 120 : 160,
              height: isSmall ? 120 : 160,
              background: "#2563EB",
              border: `4px solid ${darkMode ? "#e2e8f0" : "#0a0a0a"}`,
              boxShadow: `6px 6px 0 ${darkMode ? "#1e3a8a" : "#1D4ED8"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isSmall ? "2.5rem" : "3.5rem",
              flexShrink: 0,
            }}
          >
            👨‍💻
          </div>
          <div>
            <h1
              style={{
                fontWeight: 900,
                fontSize: isMobile ? "1.8rem" : "2.4rem",
                color: th.text,
                margin: "0 0 6px",
                letterSpacing: "-1px",
              }}
            >
              Restu Anggia
            </h1>
            <p
              style={{
                color: "#2563EB",
                fontWeight: 700,
                fontSize: "0.95rem",
                margin: "0 0 12px",
              }}
            >
              Frontend Developer & UI Enthusiast
            </p>
            <p
              style={{
                color: th.muted,
                lineHeight: 1.8,
                fontSize: "0.92rem",
                maxWidth: 480,
              }}
            >
              Halo! Saya Restu, seorang developer yang suka menciptakan
              pengalaman digital yang bermakna. Berasal dari Bandar Lampung,
              Indonesia, saya percaya kode yang baik bukan hanya fungsional tapi
              juga indah dan mudah dibaca.
            </p>
          </div>
        </div>

        {/* Bio */}
        <div
          style={{
            background: th.bgCard,
            border: `2px solid ${th.border}`,
            boxShadow: `5px 5px 0 ${th.shadow}`,
            padding: isMobile ? "1.25rem" : "1.75rem",
            marginBottom: 36,
          }}
        >
          <h2
            style={{
              fontWeight: 800,
              fontSize: "1.2rem",
              color: th.text,
              marginBottom: 12,
            }}
          >
            💡 Siapa Saya?
          </h2>
          <p
            style={{
              color: th.muted,
              lineHeight: 1.9,
              marginBottom: 12,
              fontSize: "0.9rem",
            }}
          >
            Perjalanan saya di dunia programming dimulai dari rasa penasaran —
            bagaimana website bisa terlihat indah sekaligus berfungsi dengan
            baik? Pertanyaan itu mendorong saya belajar HTML, CSS, JavaScript,
            dan akhirnya React.js.
          </p>
          <p
            style={{
              color: th.muted,
              lineHeight: 1.9,
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            Di luar coding, saya gemar membaca artikel teknologi, mengeksplor
            desain antarmuka terbaru, dan berbagi pengetahuan melalui tulisan di
            blog ini.
          </p>
        </div>

        {/* Skills */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.4rem",
            color: th.text,
            marginBottom: 18,
          }}
        >
          🛠 Tech Stack
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {SKILLS.map((sk) => (
            <div
              key={sk.label}
              style={{
                background: th.bgCard,
                border: `2px solid ${th.border}`,
                padding: "13px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: th.text,
                    fontSize: "0.88rem",
                  }}
                >
                  {sk.label}
                </span>
                <span
                  style={{
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "0.82rem",
                  }}
                >
                  {sk.level}%
                </span>
              </div>
              <div
                style={{
                  height: 7,
                  background: darkMode ? "#1e293b" : "#e2e8f0",
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
            </div>
          ))}
        </div>

        {/* Experience */}
        <h2
          style={{
            fontWeight: 800,
            fontSize: "1.4rem",
            color: th.text,
            marginBottom: 18,
          }}
        >
          💼 Pengalaman
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 6 : 22,
                background: th.bgCard,
                border: `2px solid ${th.border}`,
                boxShadow: `4px 4px 0 ${th.shadow}`,
                padding: isMobile ? "14px" : "18px 22px",
              }}
            >
              <div
                style={{
                  minWidth: 130,
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  paddingTop: isMobile ? 0 : 2,
                  flexShrink: 0,
                }}
              >
                {exp.year}
              </div>
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: th.text,
                    margin: "0 0 2px",
                    fontSize: "0.92rem",
                  }}
                >
                  {exp.role}
                </p>
                <p
                  style={{
                    color: "#2563EB",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    margin: "0 0 5px",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    color: th.muted,
                    fontSize: "0.85rem",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
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

// ===== PORTFOLIO PAGE =====
function PortfolioPage({ darkMode }) {
  const { isMobile, isTablet } = useBreakpoint();
  const th = t(darkMode);
  const [filter, setFilter] = useState("Semua");
  const tags = ["Semua", "React", "Next.js", "Vue.js", "HTML"];
  const filtered =
    filter === "Semua"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));
  const cols = isMobile
    ? "1fr 1fr"
    : isTablet
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)";

  return (
    <div style={{ background: th.bg, minHeight: "100vh", paddingTop: 62 }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "2.5rem 1.25rem" : "4rem 1.5rem",
        }}
      >
        <SectionLabel label="Portfolio" />
        <h1
          style={{
            fontWeight: 900,
            fontSize: isMobile ? "1.8rem" : "2.8rem",
            color: th.text,
            marginTop: 14,
            marginBottom: 8,
            letterSpacing: "-1px",
          }}
        >
          Proyek yang Telah Saya Kerjakan
        </h1>
        <p style={{ color: th.muted, marginBottom: 28, fontSize: "0.9rem" }}>
          Kumpulan proyek nyata dari berbagai domain dan teknologi.
        </p>

        {/* Filter chips */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              style={{
                fontWeight: 700,
                fontSize: "0.82rem",
                background: filter === tag ? "#2563EB" : "transparent",
                color: filter === tag ? "#fff" : th.muted,
                border: `2px solid ${filter === tag ? "#1D4ED8" : darkMode ? "#334155" : "#cbd5e1"}`,
                boxShadow: filter === tag ? "3px 3px 0 #1D4ED8" : "none",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 18 }}>
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} darkMode={darkMode} large />
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== BLOG PAGE =====
function BlogPage({ darkMode }) {
  const { isMobile } = useBreakpoint();
  const th = t(darkMode);

  return (
    <div style={{ background: th.bg, minHeight: "100vh", paddingTop: 62 }}>
      <div
        style={{
          maxWidth: 840,
          margin: "0 auto",
          padding: isMobile ? "2.5rem 1.25rem" : "4rem 1.5rem",
        }}
      >
        <SectionLabel label="Blog" />
        <h1
          style={{
            fontWeight: 900,
            fontSize: isMobile ? "1.8rem" : "2.8rem",
            color: th.text,
            marginTop: 14,
            marginBottom: 8,
            letterSpacing: "-1px",
          }}
        >
          Tulisan & Artikel
        </h1>
        <p style={{ color: th.muted, marginBottom: 36, fontSize: "0.9rem" }}>
          Berbagi pengetahuan, pengalaman, dan insight seputar dunia web
          development.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {BLOGS.map((b) => (
            <article
              key={b.id}
              style={{
                background: th.bgCard,
                border: `2px solid ${th.border}`,
                boxShadow: `5px 5px 0 ${th.shadow}`,
                padding: isMobile ? "18px" : "26px 30px",
                cursor: "pointer",
                transition: "transform 0.1s, box-shadow 0.1s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(-2px,-2px)";
                e.currentTarget.style.boxShadow = `7px 7px 0 ${th.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0,0)";
                e.currentTarget.style.boxShadow = `5px 5px 0 ${th.shadow}`;
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    background: "#dbeafe",
                    border: "1.5px solid #2563EB",
                    color: "#1D4ED8",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    padding: "2px 9px",
                  }}
                >
                  {b.tag}
                </span>
                <span style={{ color: th.muted, fontSize: "0.75rem" }}>
                  {b.date} · {b.readTime} baca
                </span>
              </div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: isMobile ? "0.98rem" : "1.1rem",
                  color: th.text,
                  margin: "0 0 8px",
                  letterSpacing: "-0.3px",
                }}
              >
                {b.title}
              </h2>
              <p
                style={{
                  color: th.muted,
                  lineHeight: 1.7,
                  margin: 0,
                  fontSize: "0.88rem",
                }}
              >
                {b.excerpt}
              </p>
              <p
                style={{
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  margin: "12px 0 0",
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

// ===== KONTAK PAGE =====
function KontakPage({ darkMode }) {
  const { isMobile, isTablet } = useBreakpoint();
  const th = t(darkMode);
  const [sent, setSent] = useState(false);
  const isSmall = isMobile || isTablet;

  const inputSt = {
    width: "100%",
    padding: "10px 13px",
    background: th.bgInput,
    border: `2px solid ${th.border}`,
    color: th.text,
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  return (
    <div style={{ background: th.bg, minHeight: "100vh", paddingTop: 62 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: isMobile ? "2.5rem 1.25rem" : "4rem 1.5rem",
        }}
      >
        <SectionLabel label="Kontak" />
        <h1
          style={{
            fontWeight: 900,
            fontSize: isMobile ? "1.8rem" : "2.8rem",
            color: th.text,
            marginTop: 14,
            marginBottom: 8,
            letterSpacing: "-1px",
          }}
        >
          Mari Berkolaborasi! 🤝
        </h1>
        <p style={{ color: th.muted, marginBottom: 36, fontSize: "0.9rem" }}>
          Punya proyek menarik? Atau sekadar ingin ngobrol? Saya selalu terbuka
          untuk diskusi dan kesempatan baru.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isSmall ? "1fr" : "1fr 1.4fr",
            gap: isSmall ? "2rem" : "3rem",
          }}
        >
          {/* Info column */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "📧", label: "Email", value: "restuanggia@email.com" },
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
                    background: th.bgCard,
                    border: `2px solid ${th.border}`,
                    padding: "13px 16px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <p
                      style={{
                        color: th.muted,
                        fontSize: "0.7rem",
                        margin: "0 0 1px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: th.text,
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        margin: 0,
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginTop: 16,
                background: "#22c55e",
                border: "3px solid #0a0a0a",
                boxShadow: "5px 5px 0 #0a0a0a",
                color: "#fff",
                fontWeight: 800,
                fontSize: "0.92rem",
                padding: "12px",
                textDecoration: "none",
              }}
            >
              💬 Chat via WhatsApp
            </a>

            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 14,
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
                    border: `2px solid ${th.border}`,
                    color: th.muted,
                    padding: "6px 12px",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563EB";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "#2563EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = th.muted;
                    e.currentTarget.style.borderColor = th.border;
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
              background: th.bgCard,
              border: "3px solid #2563EB",
              boxShadow: `7px 7px 0 ${darkMode ? "#1e3a8a" : "#1D4ED8"}`,
              padding: isMobile ? "1.25rem" : "1.75rem",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "2.5rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>🎉</div>
                <h3
                  style={{ fontWeight: 800, color: th.text, marginBottom: 6 }}
                >
                  Pesan Terkirim!
                </h3>
                <p style={{ color: th.muted, fontSize: "0.9rem" }}>
                  Terima kasih! Saya akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    color: th.text,
                    margin: 0,
                  }}
                >
                  Kirim Pesan
                </h3>
                {[
                  { label: "Nama Lengkap", type: "text", ph: "John Doe" },
                  { label: "Email", type: "email", ph: "john@email.com" },
                  { label: "Subjek", type: "text", ph: "Kolaborasi Proyek" },
                ].map((f) => (
                  <div key={f.label}>
                    <label
                      style={{
                        display: "block",
                        fontWeight: 700,
                        color: th.text,
                        fontSize: "0.85rem",
                        marginBottom: 6,
                      }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      style={inputSt}
                      onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                      onBlur={(e) => (e.target.style.borderColor = th.border)}
                    />
                  </div>
                ))}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontWeight: 700,
                      color: th.text,
                      fontSize: "0.85rem",
                      marginBottom: 6,
                    }}
                  >
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Ceritakan proyek atau kebutuhan Anda..."
                    style={{ ...inputSt, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2563EB")}
                    onBlur={(e) => (e.target.style.borderColor = th.border)}
                  />
                </div>
                <button
                  onClick={() => setSent(true)}
                  onMouseDown={pressDown}
                  onMouseUp={pressUp}
                  style={{
                    fontWeight: 800,
                    fontSize: "0.92rem",
                    background: "#2563EB",
                    color: "#fff",
                    border: "3px solid #0a0a0a",
                    boxShadow: "5px 5px 0 #0a0a0a",
                    padding: "12px",
                    cursor: "pointer",
                    transition: "all 0.1s",
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

// ===== APP ROOT =====
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif; }
        input, textarea, button, a { font-family: inherit; }
        img { max-width: 100%; display: block; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      `}</style>
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main style={{ minHeight: "100vh" }}>{renderPage()}</main>
      <Footer darkMode={darkMode} setActivePage={setActivePage} />
    </>
  );
}
