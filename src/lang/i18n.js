import { createI18n } from "vue3-i18n";

const messages = {
  en: {
    lang: "English",
    menu: ["Home", "Products", "About Us", "Contact"],
    scrollDown: "Scroll down to know us !",
    contactButton: "Contact Now",
    address: "Merbau Street, Selatpanjang Kota",
    city: "Kab. Kepulauan Meranti, Riau, Indonesia",
    productsNav: "Explore Products",
    heroSection: {
      title: "Trust and Develop with Tweak",
      subtitle:
        "Experience the power of innovation with our IT company. We specialize in custom software development, web design, e-commerce solutions, and IT consulting. Transform your business with our expert team. Elevate your digital presence and achieve your goals today.",
      getStartedButton: "Get Started",
      ExploreButton: "Explore",
    },
    chooseSection: {
      title: "Why Choose Us?",
      interestedSection: "Are you interested in working together?",
      cardOne: {
        title: "Legal",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardTwo: {
        title: "Best Price",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardThree: {
        title: "Trusted",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
    },
    productSection: {
      smallTitle: "Let's check",
      bigTitle: "Our Product",
      productSmallTitle: "Our main product are",
      productTitle: "Areca Nut",
      description:
        "Areca nut is a plant belonging to palms. This tree is one of the plants with high economic value and potential. Areca nut is mainly grown for its seeds. Areca nut has many benefits, so that currently areca nut has become a trading commodity.",
      variantTitle: "We export one of kind",
      variant: "Areca Nuts",
      variantDescription:
        "Various types of varieties that exist, namely, areca betara, areca red, areca bulawan, areca palm and areca nut irian.",
      getProductTitle: "Get our areca nuts now",
    },
    getTouchSection: {
      mainTitle: "Get in Touch",
      title: "Have an inquiry?",
      subtitle:
        "Get in touch and ask something. Or visit or social media below",
      name: "Name",
      mail: "Email",
      message: "Message",
      submit: "Send",
    },
    contactPage: {
      mainTitleSub: "Contact us if your have any inquiry or anything about business",
      contactInformation: "Contact Information",
      regency: "Khmelnitskiy, Ukraine",
      phone: "_380633718332",
      mail: "alamat@email.com",
    },
    aboutPage: {
      title: "Know",
      description: "Welcome to Tweak Studio, where we specialize in creating exceptional digital experiences. Our team of talented designers, developers, and strategists blend creativity, innovation, and technology to deliver tailored solutions for businesses of all sizes. From web design and development to digital marketing, we pride ourselves on collaboration, transparency, and delivering outstanding results. Let us bring your vision to life and empower your online presence. Contact us today to discuss your project!",
      thankGreeting: "We are very grateful for all our partners and clients, Following the moment and will always serve the best for all.",
      visi: {
        title: "Vision",
        desc: "Become an exporter with world quality customer service and advance the economy together",
      },
      misi: {
        title: "Mision",
        misi1: "Build good relationships with clients and partners",
        misi2: "Always provide requests with good quality and guaranteed",
        misi3: "Build and have a professional team"
      }
    }
  },
  id: {
    lang: "Українська",
    menu: ["Головна", "Продукти", "Про нас", "Контакти"],
    contactButton: "Зв'язатися зараз",
    address: "вул. Мербау, м. Селатпанджанг Кота",
    city: "Каб. Кепулеаун Меранті, Ріау, Індонезія",
    productsNav: "Досліджуйте продукти",
    heroSection: {
      title: "Надійний експортер горіха арека",
      subtitle:
        "Ми експортери продуктів на Мерантських островах. Один з них - високоякісний горіх арека, характерний для болітного ґрунту Мерантських островів.",
      getStartedButton: "Почати",
      exploreButton: "Досліджувати",
    },
    chooseSection: {
      title: "Чому обрати нас?",
      interestedSection: "Ви зацікавлені в співпраці?",
      cardOne: {
        title: "Юридичність",
        subtitle:
          "Ми є юридичними та сертифікованими від уряду для підприємницької діяльності та експортних галузей.",
      },
      cardTwo: {
        title: "Найкраща ціна",
        subtitle:
          "Ми є юридичними та сертифікованими від уряду для підприємницької діяльності та експортних галузей.",
      },
      cardThree: {
        title: "Надійність",
        subtitle:
          "Ми є юридичними та сертифікованими від уряду для підприємницької діяльності та експортних галузей.",
      },
    },
    productSection: {
      smallTitle: "Перевіримо",
      bigTitle: "Наш продукт",
      productSmallTitle: "Наш головний продукт -",
      productTitle: "Горіх арека",
      description:
        "Горіх арека - рослина, належить до пальм. Це дерево є одним з рослин з високою економічною цінністю та потенціалом. Горіх арека вирощується в основному для його насіння. Горіх арека має багато користі, тому він став товаром для торгівлі.",
      variantTitle: "Ми експортуємо єдиний у своєму роді",
      variant: "Горіх арека",
      variantDescription:
        "Існують різні типи сортів, а саме, арека бетара, червоний арека, золотистий арека, арека пальма та іріанський горіх арека.",
      getProductTitle: "Отримайте наші горіхи арека зараз",
    },
    getTouchSection: {
      mainTitle: "Зв'язатися",
      title: "Маєте запитання?",
      subtitle:
        "Зв'яжіться з нами та запитайте щось. Або відвідайте наші соціальні медіа нижче.",
      name: "Ім'я",
      mail: "Електронна пошта",
      message: "Повідомлення",
      submit: "Надіслати",
    },
    contactPage: {
      mainTitleSub: "Зв'яжіться з нами, якщо у вас є будь-які запитання або питання щодо бізнесу.",
      contactInformation: "Контактна інформація",
      regency: "Провінція Ріау, Індонезія",
      phone: "+628 0000 0000",
      mail: "адреса@емейл.com",
    },
    aboutPage: {
      title: "Дізнайтеся",
      description: "MEIRA Coffee є експортерами провідних сировинних товарів в одній з регіонів Ріау, а саме на Мерантських островах. Будується людьми, які мають спільне бачення та здатні обслуговувати клієнтів професійно.",
      thankGreeting: "Ми дуже вдячні всім нашим партнерам та клієнтам. Ми завжди стараємося надати найкраще для всіх.",
      visi: {
        title: "Бачення",
        desc: "Стати експортером з обслуговування клієнтів світового рівня та розвивати економіку разом",
      },
      misi: {
        title: "Місія",
        misi1: "Будувати добрі взаємини з клієнтами та партнерами",
        misi2: "Завжди надавати запити з гарантованою якістю",
        misi3: "Будувати та мати професійну команду"
      }
    }
  }
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;