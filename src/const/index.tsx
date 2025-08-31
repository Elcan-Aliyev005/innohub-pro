export const centerTitles: { title: string; href: string; description: string }[] = [
  {
    title: "about",
    href: "/info/about",
    description: "about_description"
  },
  {
    title: "vision",
    href: "/info/vision",
    description: "vision_description"
  },
  {
    title: "vacancies",
    href: "/info/vacancies",
    description: "vacancies_description"
  },
  {
    title: "social",
    href: "/info/social-responsibility",
    description: "social_description"
  },
  {
    title: "career_advice",
    href: "/info/career-advice",
    description: "career_advice_description"
  }
];


export const educationTitles: { title: string; href: string; description: string }[] = [
  {
    title: "fullstack",
    href: "/courses/fullstack",
    description: "fullstack_description"
  },
  {
    title: "frontend",
    href: "/courses/frontend",
    description: "frontend_description"
  },
  {
    title: "backend",
    href: "/courses/backend",
    description: "backend_description"
  },
  {
    title: "graphic_design",
    href: "/courses/graphic-design",
    description: "graphic_design_description"
  },
  {
    title: "digital_marketing",
    href: "/courses/digital-marketing",
    description: "digital_marketing_description"
  },
  {
    title: "data_analytics",
    href: "/courses/data-analytics",
    description: "data_analytics_description"
  },
  {
    title: "ui_ux_design",
    href: "/courses/ui-ux-design",
    description: "ui_ux_design_description"
  },
  {
    title: "robotics",
    href: "/courses/robotics",
    description: "robotics_description"
  }
];


export const partners = [
  {
    src: "https://www.vectorlogo.zone/logos/google/google-ar21.svg",
    alt: "Google",
    href: "https://google.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg",
    alt: "Microsoft",
    href: "https://microsoft.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg",
    alt: "Amazon Web Services",
    href: "https://aws.amazon.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/github/github-ar21.svg",
    alt: "GitHub",
    href: "https://github.com",
  },
  {
    src: "https://www.svgrepo.com/show/354513/vercel-icon.svg",
    alt: "Vercel",
    href: "https://vercel.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg",
    alt: "Stripe",
    href: "https://stripe.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg",
    alt: "Spotify",
    href: "https://spotify.com",
  },
  {
    src: "https://www.vectorlogo.zone/logos/netflix/netflix-ar21.svg",
    alt: "Netflix",
    href: "https://netflix.com",
  },
];



import { FaqItem } from '@/components/ui/accordion/faq-accordion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];


export const faqItems: FaqItem[] = [
  {
    question: "Kurs kimlər üçündür?",
    answer:
      "Başlanğıc və orta səviyyə üçün uyğundur. Real layihələr üzərində işləyirik.",
  },
  {
    question: "Dərslər online-dırmı?",
    answer:
      "Bəli, dərslər online keçirilir və bütün yazılar sonra platformada qalır.",
  },
  {
    question: "Ödənişi hissə-hissə edə bilərəm?",
    answer:
      "Bəli, aylıq ödəniş planları mövcuddur. Əlavə sual üçün dəstək ilə əlaqə saxlayın.",
  },
];


export const faqs = [
  {
    question: "Kurslar nə qədər davam edir?",
    answer:
      "Kurslarımız 3-6 ay arasında davam edir. Hər kurs sahəsinə görə müxtəlif müddətlərə malikdir. Fullstack proqramlaşdırma kursu 6 ay, UI/UX dizayn kursu 4 ay, rəqəmsal marketinq kursu isə 3 ay davam edir.",
  },
  {
    question: "Kursları bitirdikdən sonra iş təminatı varmı?",
    answer:
      "Biz məzunlarımıza iş tapma prosesində dəstək göstəririk. Partnyorlarımızla əməkdaşlıq edərək iş imkanları təqdim edirik, CV hazırlama və müsahibə hazırlığı üçün məsləhətlər veririk.",
  },
  {
    question: "Kursların qiyməti nə qədərdir?",
    answer:
      "Kurs qiymətləri sahəyə görə dəyişir. Fullstack proqramlaşdırma kursu 1500 AZN, UI/UX dizayn kursu 1200 AZN, rəqəmsal marketinq kursu 800 AZN-dir. Taksit imkanları da mövcuddur.",
  },
  {
    question: "Online və ya offline kurslar varmı?",
    answer:
      "Həm online, həm də offline kurslarımız mövcuddur. Online kurslar canlı dərslər şəklində keçirilir və bütün dərslər qeydə alınır. Offline kurslar isə Bakı mərkəzimizdə keçirilir.",
  },
  {
    question: "Kurslar üçün hansı tələblər var?",
    answer:
      "Əksər kurslarımız üçün xüsusi tələb yoxdur. Yalnız kompüter istifadəsi bacarığı kifayətdir. Bəzi texniki kurslar üçün əsas riyaziyyat bilikləri tövsiyə olunur.",
  },
  {
    question: "Sertifikat verirlirmi?",
    answer:
      "Bəli, kursu uğurla bitirən bütün tələbələrə beynəlxalq standartlara uyğun sertifikat verilir. Bu sertifikatlar iş axtarışında sizə böyük üstünlük təmin edir.",
  },
]