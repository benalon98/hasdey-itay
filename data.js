// import images
import Logo from "./img/header/logoHasdey.png";

import QuoteImg from "./img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowBack,IoMdArrowForward} from "react-icons/io";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io";

// NAVBAR & HEADER SECTION 

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "כׇּל הַמְרַחֵם עַל הַבְּרִיּוֹת — מְרַחֲמִין עָלָיו מִן הַשָּׁמַיִם"},

  ],
};

export const socialData = [
  { href: "https://facebook.com/", icon: <GrFacebookOption /> },
  { href: "https://instagram.com/", icon: <IoLogoInstagram /> },
  { href: "https://pinterest.com/", icon: <IoLogoPinterest /> },
  { href: "https://twitter.com/", icon: <IoLogoTwitter /> },
  { href: "https://youtube.com/", icon: <IoLogoYoutube /> },
];

// NAVBAR & HEADER SECTION END
////////////////////////////////////
// HERO SECTION

export const heroData = {
  title: "חסדי איתי",
  subtitle:
    "ארוחות חמות מידי יום לנזקקים וקשי יכולת",
  btnText: "צפה בסרטון",
  btnIcon: <IoMdArrowBack />,
};

// HERO SECTION END
///////////////////////////////////
// ABOUT SECTION
export const aboutData = {
  title: "מי אנחנו",
  subtitle1:
  'עם ישראל עם של גומלי חסדים בגופם ובממונם, באהבה ובנדיבות הלב . ♥️ לפניכם גמ"ח "חסדי איתי" אשר פועל לגמילות חסדים,בארוחות חמות מידי יום לנזקקים וקשי יכולת . הגמ"ח הוקם ע"י הרב נתנאל סנדרו בוחניק שליט"א ראש  ישיבת "אוהל בנימין" בבאר שבע . הגמ"ח הוקם כדי לתת מענה לצרכי כלל הציבור, אנשים ונשים טף וחולים , יתומים ואלמנות הזקוקים לארוחה חמה מידי יום . הגמ"ח מופעל ע"י עמותת "אוהל בנימין" המיוחד בגמ"ח שאין שום לקיחת משכורת או אחוזים וכדומה , הגמ"ח מופעל ע"י אברכים ובחורי ישיבה הלומדים בישיבת "אוהל בנימין" . פעילות הגמ"ח נעשת באופן גלוי וכל אחד ואחד יכול להיות שותף למצוה חשובה זו לדאוג לאנשים רעבים בעלות של 10 ₪ בלבד',
  subtitle2:
    'פעילות הגמ"ח מתבצעת ברחוב התלמוד 30 בבאר שבע , בין השעות 12:30-13:30',
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};
// ABOUT SECTION END
/////////////////////////////////////////////////
// GALLERY SECTION
export const galleryData = {
  title: "Gallery",
  btnText: "View all",
  href: "/gallery",
  btnIcon: <IoMdArrowForward />,
  images: [

  ],
};
// GALLERY SECTION END
////////////////////////////////////////////////////////////////
// INTERVIEW SECTION
export const interviewData = {
  title:
    "“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”",
  btnText: "Watch it now",
  btnIcon: <FaPlay />,
};
// INTERVIEW SECTION END
////////////////////////////////////////////////////////////////
// TESTIMONIAL SECTION
export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      `וכל העושה צדקה ומשפט כאילו מילא כל העולם כולו חסד, שנאמר (תהילים ל"ג, ה') אהב צדקה ומשפט, חסד ה' מלאה הארץ`,
    name: "רבי אלעזר",
    occupation: 'סוכה מ"ט',
  },

];
// TESTIMONIAL SECTION END
////////////////////////////////////////////////////////////////////////
// CONTACT SECTION
export const contactData = {
  title: "צור קשר",
  info: [
    {
      title: "חסדי איתי",
      subtitle:
        "גמ״ח יומי ארוחה חמה למעוטי יכולת",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "התלמוד 30, באר שבע",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "054-466-7741",
      },
      email: {
        icon: <FaEnvelope />,
        address: "haravsandro@gmail.com",
      },
    },    
  ],

};
// CONTACT SECTION END
////////////////////////////////////////////////////////////////////////
// FOOTER SECTION
export const footerData = {
  about: {
    title: "צור קשר",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "התלמוד 30, באר שבע",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "054-466-7741",
    },
    email: {
      icon: <FaEnvelope />,
      address: "haravsandro@gmail.com",
    },
  },
};
// FOOTER SECTION END