import {
  Instagram,
  Globe,
  Camera,
  Sparkles,
  Palette,
} from "lucide-react";

export const SERVICES = [
  {
    icon: Instagram,
    number: "01",
    title: "مدیریت شبکه‌های اجتماعی",
    desc: "تقویم محتوایی هدفمند، ساخت جامعه مخاطبان و کمپین‌های رشد محور؛ ما دنبال‌کنندگان شما را به مشتریان وفادار تبدیل می‌کنیم",
    tag: "رشد",
  },
  {
    icon: Globe,
    number: "02",
    title: "طراحی و توسعه وب‌سایت",
    desc: "تجربه‌های دیجیتال دقیق و مدرن، ساخته‌شده با جدیدترین تکنولوژی‌ها؛ وب‌سایت‌هایی که هم زیبا هستند و هم برای تبدیل بازدیدکننده به مشتری طراحی شده‌اند",
    tag: "دیجیتال",
  },
  {
    icon: Camera,
    number: "03",
    title: "تولید محتوا",
    desc: "تصاویر تأثیرگذار، ویدیوهای حرفه‌ای و داستان‌پردازی خلاقانه؛ هر محتوا فرصتی است برای روایت بهتر برند شما",
    tag: "خلاقیت",
  },
  {
    icon: Palette,
    number: "04",
    title: "طراحی هویت بصری برند",
    desc: "ساخت سیستم‌های بصری منحصربه‌فرد؛ از لوگو و رنگ‌بندی تا زبان حرکتی برند، برای اینکه کسب‌وکار شما ماندگار و قابل تشخیص باشد",
    tag: "هویت برند",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "راهکارهای خلاقانه مبتنی بر هوش مصنوعی",
    desc: "استفاده از جدیدترین ابزارهای هوش مصنوعی برای سرعت‌بخشیدن به تولید، شخصی‌سازی محتوا در مقیاس بزرگ و ایجاد مزیت رقابتی برای برند شما",
    tag: "هوش مصنوعی",
  },
];

export const PORTFOLIO = [
  {
    title: "Instagram Growth Campaign",
    category: "Social Media",
    client: "Maison Beauty",
    result: "+340% engagement",
    span2: true,
    gradient:
      "linear-gradient(135deg, #1a237e 0%, #283593 30%, #4527a0 70%, #311b92 100%)",
    accent: "#7986cb",
  },
  {
    title: "Brand Launch",
    category: "Brand Identity",
    client: "Elevation Labs",
    result: "$2M launch",
    span2: false,
    gradient: "linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #7b1fa2 100%)",
    accent: "#ce93d8",
  },
  {
    title: "Website Redesign",
    category: "Web Design",
    client: "Lumina Co.",
    result: "+180% conversions",
    span2: false,
    gradient: "linear-gradient(135deg, #0d47a1 0%, #1565c0 40%, #283593 100%)",
    accent: "#90caf9",
  },
  {
    title: "AI Content System",
    category: "AI Solutions",
    client: "Scale House",
    result: "10× velocity",
    span2: true,
    gradient: "linear-gradient(135deg, #1a237e 0%, #3949ab 40%, #5e35b1 100%)",
    accent: "#9fa8da",
  },
];

export const PROCESS = [
  {
    number: "۰۱",
    title: "شناخت",
    desc: "اول از همه برند، مخاطب و هدف‌هاتون رو می‌شناسیم. بررسی می‌کنیم کجا هستید، چه چیزی نیاز دارید و بهترین مسیر برای رشدتون چیه.",
  },
  {
    number: "۰۲",
    title: "استراتژی",
    desc: "بعد از شناخت، یک مسیر مشخص می‌چینیم. اینکه چه محتوایی بسازیم، کجا دیده بشید و چطور بهتر با مخاطبتون ارتباط بگیرید",
  },
  {
    number: "۰۳",
    title: "ساختن",
    desc: "اینجا ایده‌ها تبدیل به خروجی واقعی می‌شن؛ از طراحی و محتوا گرفته تا ویدیو، سایت و هر چیزی که برای ساختن یک حضور دیجیتال قوی نیاز دارید",
  },
  {
    number: "۰۴",
    title: "اجرا و رشد",
    desc: "کار رو منتشر می‌کنیم، نتیجه‌ها رو بررسی می‌کنیم و مدام بهترش می‌کنیم تا برند شما فقط دیده نشه، بلکه رشد کنه",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "کار کردن با تیم ارنیک واقعا خوبه چون آدمای حرفه ای هستن و حرفتو میفهمن و دغدغه کسب و کارت رو دارن و این دلسوزی رو دوس دارم",
    author: "امیر سالار",
    role: "بنیانگذار دیزاین مون",
    initials: "اس",
    color: "#4a6cf7",
  },
  {
    quote:
      "من از کار کردن باهاشون لذت میبرم چون انگیزه دارن و میخوان شما رو رشد بدن تا خودشون رشد کنن و همین هم قشنگه",
    author: "ابراهیم حسین جانی",
    role: "مدیرعامل مجموعه فرش بهارستان",
    initials: "اج",
    color: "#8b5cf6",
  },
  {
    quote:
      "میدونن کار رو باید از کجا شروع کنن و کجا ببرن مسیر رو و برای مجموعه ی بزرگ و قدیمی مثل ما مهم ترین چیز اصالت توی کار و رفتار حرفه ای  هست که ارنیک بهترین این کاره",
    author: "سید حامد حسینی",
    role: "مدیر عامل مرکز تجاری گلستان",
    initials: "س ح",
    color: "#4a6cf7",
  },
];
