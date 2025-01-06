import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Integration with React
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            main: "Main",
            Privacy_Policy: "Privacy Policy",
            Terms_And_Conditions: "Terms And Conditions",
            contacts: "Contact",
          },
          financialOpportunities: {
            title:
              "How Ordinary People Achieved Success Through Financial Literacy",
            description:
              "Stories of real people who improved their lives by learning how to manage finances",
            cta: "Learn More",
          },
          savings_success: {
            title: "Success in Saving for a Big Purchase!",
            message: "You're almost there! Your efforts are paying off.",
            story:
              "Success Story: Alex dreamed of a new car, but his budget was limited. He decided to invest part of his savings in the stock market, which brought him additional income. After a year, he saved enough money to buy the car of his dreams. His perseverance, discipline, and smart investments helped him make his dream come true!",
            progress: "Your savings progress:",
          },
          investment_success: {
            title: "How Investments Helped Create Additional Income!",
            message:
              "Investing is not just a way to preserve capital, but also a path to additional income.",
            story:
              "Success Story: Maria was an ordinary office worker but wanted to improve her financial situation. She began investing in stocks and cryptocurrency, keeping up with trends and analyzing the market. After a year, her investments started bringing in steady income, and she was able to increase her savings by 30%. This allowed her to travel and enjoy life without financial constraints.",
            progress: "Your investment progress:",
          },
          family_planning_success: {
            title: "How Family Planning Improved Financial Stability",
            intro:
              "Family planning is not just about creating a budget for the family but also controlling expenses, planning savings, and investments.",
            story:
              "Success Story: Alexander and Olga had lived for a long time without a clear financial plan, which led to constant debt issues. One day, they decided to sit down and create a family budget, which helped them not only control their expenses but also start investing in long-term projects. After a year, their financial situation improved significantly, and they were able to save for their first house and create a fund for their children's education.",
            cta: "Send us your stories, and maybe we'll publish yours!",
          },
          contact: {
            title: "Contact Us",
            subtitle: "We will be glad to hear from you!",
            form: {
              name: "Your Name",
              email: "Your Email",
              message: "Your Message",
              submit: "Send Message",
            },
            info: {
              phone: "Phone",
              address: "Address",
              email: "Email",
            },
          },
          privacy_policy: {
            title: "Privacy Policy",
            sections: {
              information_gathering: "Information Gathering",
              personal_information:
                "Privacy Policy: Your privacy is important to us. We collect and use personal information solely for providing and improving our services. By using this website, you agree to our Privacy Policy. You can request to access, update, or delete your data at any time by contacting support@НАШДОМЕН.com.",
            },
          },
          terms_conditions: {
            title: "Terms & Conditions",
            sections: {
              generalInformation: {
                title: "1. General Information",
                text: "The content of this website is for informational purposes only. It does not constitute financial, investment, or legal advice. All information is provided 'as is' without any warranties, express or implied.",
              },
              userObligations: {
                title: "2. User Obligations",
                text: "By using this website, you agree to comply with all applicable laws and regulations. You agree not to use the website in any way that may harm the platform, other users, or third parties.",
              },
              intellectualProperty: {
                title: "3. Intellectual Property",
                text: "All content on this website, including text, graphics, logos, and software, is the property of Smart Wealth Strategies or its content suppliers. You may not reproduce, distribute, or exploit any content without written permission.",
              },
              limitationOfLiability: {
                title: "4. Limitation of Liability",
                text: "Smart Wealth Strategies is not liable for any direct, indirect, or consequential loss arising from the use of this website or the information provided. Users assume full responsibility for any actions taken based on the information provided.",
              },
              thirdPartyLinks: {
                title: "5. Third-Party Links",
                text: "Our website may contain links to third-party websites. We are not responsible for the content or practices of these websites. Accessing third-party links is done at the user’s own risk.",
              },
              modificationOfTerms: {
                title: "6. Modification of Terms",
                text: "We reserve the right to update or change these Terms & Conditions at any time. Changes will be effective immediately upon posting to the website.",
              },
              privacy: {
                title: "7. Privacy",
                text: "Your use of this website is also governed by our Privacy Policy. We are committed to protecting your personal information in compliance with applicable laws.",
              },
              governingLaw: {
                title: "8. Governing Law",
                text: "These Terms & Conditions are governed by the laws of [Country/Region]. Any disputes arising will be subject to the exclusive jurisdiction of the courts of [Country/Region].",
              },
              contactInformation: {
                title: "9. Contact Information",
                text: "If you have any questions about these Terms & Conditions, please contact us at: Email: support@strategiesfell.com Address: Keizersgracht 424, 1001 AB Amsterdam, Netherlands",
              },
            },
          },
          cookies: {
            description:
              "We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of cookies.",
            button: "I Agree",
          },
          footer: {
            contact_us: "contact us",
            email: "email:",
            phone: "phone:",
            address: "address:",
          },
        },
      },
      ru: {
        translation: {
          nav: {
            main: "Главная",
            Privacy_Policy: "Политика конфиденциальности",
            Terms_And_Conditions: "Условия использования",
            contacts: "Контакты",
          },
          financialOpportunities: {
            title:
              "Как обычные люди добились успеха с помощью финансовой грамотности",
            description:
              "Истории реальных людей, которые улучшили свою жизнь благодаря умению управлять финансами",
            cta: "Узнать больше",
          },
          savings_success: {
            title: "Успех в накоплении на крупную покупку!",
            message:
              "Вы почти достигли своей цели! Ваши усилия приносят плоды.",
            story:
              "История успеха: Алексей мечтал о новом автомобиле, но его бюджет был ограничен. Он решил инвестировать часть своих сбережений в фондовый рынок, что принесло ему дополнительный доход. Через год он накопил достаточную сумму, чтобы купить машину своей мечты. Его упорство, дисциплина и правильные инвестиции помогли ему осуществить задуманное!",
            progress: "Ваш прогресс накоплений:",
          },
          investment_success: {
            title: "Как инвестиции помогли создать дополнительный доход!",
            message:
              "Инвестирование — это не только способ сохранения капитала, но и путь к дополнительному доходу.",
            story:
              "История успеха: Мария была обычным офисным работником, но хотела улучшить свою финансовую ситуацию. Она начала инвестировать в акции и криптовалюту, следила за трендами и анализировала рынок. Через год её вложения начали приносить стабильный доход, и она смогла увеличить свои сбережения на 30%. Это дало ей возможность путешествовать и наслаждаться жизнью без финансовых ограничений.",
            progress: "Ваш прогресс в инвестировании:",
          },
          family_planning_success: {
            title: "Как семейное планирование улучшило финансовое состояние",
            intro:
              "Семейное планирование — это не только создание бюджета для семьи, но и контроль расходов, планирование сбережений и инвестиций.",
            story:
              "История успеха: Александр и Ольга долгое время жили без четкого финансового плана, что приводило к постоянным долговым проблемам. Однажды они решили сесть и составить семейный бюджет, который помог им не только контролировать свои расходы, но и начать инвестировать в долгосрочные проекты. Через год их финансовое положение значительно улучшилось, и они смогли накопить на свой первый дом, а также создать фонд для образования детей.",
            cta: "Присылайте свои истории, и, возможно, мы опубликуем вашу!",
          },
          contact: {
            title: "Свяжитесь с нами",
            subtitle: "Мы будем рады услышать вас!",
            form: {
              name: "Ваше имя",
              email: "Ваш Email",
              message: "Ваше сообщение",
              submit: "Отправить сообщение",
            },
            info: {
              phone: "Телефон",
              address: "Адрес",
              email: "Эл. почта",
            },
          },
          privacy_policy: {
            title: "Политика конфиденциальности",
            sections: {
              information_gathering: "Сбор информации",

              personal_information:
                "Ваше конфиденциальность важна для нас. Мы собираем и используем персональную информацию исключительно для предоставления и улучшения наших услуг. Используя этот сайт, вы соглашаетесь с нашей Политикой конфиденциальности. Вы можете запросить доступ, обновление или удаление ваших данных в любое время, связавшись с нами по адресу support@НАШДОМЕН.com",
            },
          },
          terms_conditions: {
            title: "Условия и положения",
            sections: {
              generalInformation: {
                title: "1. Общая информация",
                text: "Содержание этого сайта предназначено только для информационных целей. Оно не является финансовым, инвестиционным или юридическим советом. Вся информация предоставляется 'как есть' без каких-либо гарантий, явных или подразумеваемых.",
              },
              userObligations: {
                title: "2. Обязанности пользователя",
                text: "Используя этот сайт, вы соглашаетесь соблюдать все применимые законы и регламенты. Вы соглашаетесь не использовать сайт таким образом, который может нанести вред платформе, другим пользователям или третьим лицам.",
              },
              intellectualProperty: {
                title: "3. Интеллектуальная собственность",
                text: "Все материалы на этом сайте, включая текст, графику, логотипы и программное обеспечение, являются собственностью Smart Wealth Strategies или ее поставщиков контента. Вы не можете воспроизводить, распространять или использовать какие-либо материалы без письменного разрешения.",
              },
              limitationOfLiability: {
                title: "4. Ограничение ответственности",
                text: "Smart Wealth Strategies не несет ответственности за прямые, косвенные или случайные убытки, возникшие в результате использования этого сайта или предоставленной информации. Пользователи принимают на себя полную ответственность за любые действия, предпринятые на основе предоставленной информации.",
              },
              thirdPartyLinks: {
                title: "5. Ссылки на сторонние сайты",
                text: "Наш сайт может содержать ссылки на сторонние сайты. Мы не несём ответственность за содержание или практики этих сайтов. Переход по сторонним ссылкам осуществляется на ваш собственный риск.",
              },
              modificationOfTerms: {
                title: "6. Изменения условий",
                text: "Мы оставляем за собой право обновлять или изменять эти Условия и положения в любое время. Изменения вступают в силу сразу после их размещения на сайте.",
              },
              privacy: {
                title: "7. Конфиденциальность",
                text: "Использование этого сайта также регулируется нашей Политикой конфиденциальности. Мы обязуемся защищать вашу личную информацию в соответствии с применимыми законами.",
              },
              governingLaw: {
                title: "8. Применяемое право",
                text: "Эти Условия и положения регулируются законами [страны/региона]. Все споры, возникающие из этих условий, подлежат исключительной юрисдикции судов [страны/региона].",
              },
              contactInformation: {
                title: "9. Контактная информация",
                text: "Если у вас есть вопросы по этим Условиям и положениям, пожалуйста, свяжитесь с нами по электронной почте: support@strategiesfell.com Адрес: Keizersgracht 424, 1001 AB Amsterdam, Netherlands",
              },
            },
          },
          cookies: {
            description:
              "Мы используем cookies для улучшения вашего опыта на нашем сайте. Продолжая просматривать, вы соглашаетесь с использованием cookies.",
            button: "Я согласен",
          },
          footer: {
            contact_us: "Свяжитесь с нами",
            email: "Электронная почта:",
            phone: "Телефон:",
            address: "Адрес:",
          },
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // Safe for React
    },
  });

export default i18n;
