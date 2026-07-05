export type MenuItem = { name: string; desc: string; price: string; tags: string[] };
export type MenuCategory = { name: string; items: MenuItem[] };
export const menu: MenuCategory[] = [
  {
    "name": "Specialty Coffee",
    "items": [
      {
        "name": "Brasile - Villa Boa",
        "desc": "Il nostro espresso Specialty, un caffè entry level per chi si approccia per la prima volta allo Specialty Coffee.\n\nNote di frutta secca, cioccolato, gianduja e ananas",
        "price": "1,40",
        "tags": []
      },
      {
        "name": "Brasile Daterra Boa Vista",
        "desc": "Un espresso fresco con corpo medio basso e spiccata dolcezza. Un passo in più nel mondo dello Specialty Coffee.\n\nNote di pesca nettarina, caramello e fave di cacao.",
        "price": "1,90",
        "tags": [
          "New"
        ]
      },
      {
        "name": "Etiopia Nensebo",
        "desc": "Un caffè espresso fruttato, un vero viaggio nel mondo dello Specialty Coffee, lontano dalle miscele classiche da bar: dolce, profumato e delicato.\n\nNote di gelsomino, ananas, passion fruit e frutta candita.",
        "price": "2,40",
        "tags": [
          "Specialty"
        ]
      },
      {
        "name": "Decaf Swiss Water",
        "desc": "Un caffè specialty espresso decaffeinato, lavorato ad acqua e sugar cane per estrarne la caffeina. Il risultato è pulito in tazza senza retrogusto fastidioso.\n\nNote di cioccolato fondente, frutta secca, caramello e vaniglia",
        "price": "1,60",
        "tags": []
      },
      {
        "name": "Filter Coffee - Brasile Daterra Boavista",
        "desc": "Caffè estratto con metodo filtro: pulizia in tazza, note aromatiche dolci, il caffè perfetto per la tua pausa relax.\n\nNote di pesca nettarina, caramello e fava di cacao.",
        "price": "2,90",
        "tags": [
          "Specialty"
        ]
      },
      {
        "name": "Brew Tonic",
        "desc": "Una bevanda a base di caffè specialty rinfrescante e sorprendente, perfetta per l'estate (ma non solo)!\n\nUna combinazione di acqua tonica neutra e caffè cold brew estratto a freddo dal profilo delicato.\n\nIl caffè come non te lo aspetti, lo trovi solo qui!",
        "price": "4,90",
        "tags": [
          "Seasonal"
        ]
      },
      {
        "name": "Ice Cappuccino",
        "desc": "Colazione estiva senza rinunciare al cappuccino? Prova il nostro ice cappuccino, non ne potrai più fare a meno!",
        "price": "3,50",
        "tags": []
      },
      {
        "name": "Ice Latte",
        "desc": "La bevanda internazionale per eccellenza la trovi solo al Miriam's Cafè!\n\nRinfrescati con latte, ghiaccio e espresso specialty.",
        "price": "3,50",
        "tags": []
      },
      {
        "name": "Caramel Ice Latte",
        "desc": "La freschezza dell'ice latte con uno shot di caramello. Imperdibile!",
        "price": "4,90",
        "tags": [
          "New"
        ]
      },
      {
        "name": "Colombia - Sirena",
        "desc": "Un caffè straordinario servito esclusivamente in DOPPIO espresso per valorizzarne le note aromatiche:\npesca, cioccolato bianco e wafer\n\nDisponibilità limitata! Non perderlo!",
        "price": "4,90",
        "tags": [
          "Specialty"
        ]
      }
    ]
  },
  {
    "name": "SuperFood",
    "items": [
      {
        "name": "Chai Latte",
        "desc": "La bevanda indiana a base di tè nero, speziata e dalle proprietà rivitalizzanti.\n\nNon lasciartelo sfuggire!",
        "price": "3,90",
        "tags": []
      },
      {
        "name": "Matcha Latte",
        "desc": "Il famoso tè giapponese in polvere è arrivato anche qui: antiossidante ed energizzante.\n\nPerfetto in ogni momento.",
        "price": "3,90",
        "tags": [
          "New"
        ]
      },
      {
        "name": "Açai Latte",
        "desc": "La bevanda a base di bacche di açai brasiliane dalle straordinarie proprietà nutrizionali: ricco di vitamine, minerali, fibre e antiossidanti, l'açai in polvere è un prezioso alleato per la nostra salute.\n\nProvalo subito!",
        "price": "3,90",
        "tags": []
      },
      {
        "name": "Barbie Latte",
        "desc": "Il rosa che conquista tutti! Il superfood più instagrammabile (e sano) del momento!\n\nNon puoi non fotografarlo!",
        "price": "3,90",
        "tags": []
      },
      {
        "name": "Black Latte",
        "desc": "Giornata nera? Tirati su il morale con un black latte: carbone vegetale dalle proprietà digestive e zucchero di cocco. Una combo imperdibile!",
        "price": "3,90",
        "tags": []
      },
      {
        "name": "Strawberry Matcha Latte",
        "desc": "La bevanda dell'estate è qui! Una combo perfetta tra matcha, latte e sciroppo di fragole in versione ice.\n\nTutti ne parlano, ora tu puoi provarlo!",
        "price": "5,90",
        "tags": [
          "Best seller"
        ]
      }
    ]
  },
  {
    "name": "Soft Drink",
    "items": [
      {
        "name": "Aranciata - Limonata - Chinotto - Tonica - Gazzosa - Tè Pesca - Tè Limone - Tè Menta\nF.lli Macario",
        "desc": "Le bevande piemontesi di Fratelli Macario, scoprile tutte, non potrai più farne a meno.\n\nBevi a km0, sostieni con noi le aziende del territorio",
        "price": "4,00",
        "tags": []
      },
      {
        "name": "Mole Cola - Mole Cola Zero",
        "desc": "L'unica e originale cola torinese! \n\nBevi a km0, sostieni con noi le aziende del territorio",
        "price": "4,00",
        "tags": []
      },
      {
        "name": "Succhi di Frutta Bio - Pesca, Pera, Albicocca, Mirtillo",
        "desc": "Succhi biologici dell'azienda agricola “Il Frutto Permesso”, Bibiana (TO)\n\nBuoni e sani!\n\nBevi a km0, sostieni con noi le aziende del territorio",
        "price": "3,50",
        "tags": []
      },
      {
        "name": "Spremuta d'Arancia fresca",
        "desc": "Un classico che non tramonta mai: Spremuta d'Arancia fresca",
        "price": "4,00",
        "tags": []
      }
    ]
  },
  {
    "name": "Coffee Affogato",
    "items": [
      {
        "name": "Cioccolato Fondente",
        "desc": "Caffè espresso affogato nel gelato al cioccolato fondente (vegan e senza lattosio) della gelateria Bon Bon di c.so Francia 125, Rivoli.\n\nL'alternativa che non sapevi di volere!",
        "price": "4,90",
        "tags": []
      },
      {
        "name": "Crema",
        "desc": "Affogato al caffè su gelato alla crema. \n\nLa combo perfetta per chi non vuole rinunciare alla freschezza del gelato e all'energia del caffè espresso.\n\nGelato artigianale della gelateria Bon Bon di corso Francia 125, Rivoli.",
        "price": "4,90",
        "tags": []
      },
      {
        "name": "Affogato Nocciola",
        "desc": "Caffè espresso affogato nel gelato alla nocciola della gelateria Bon Bon di c.so Francia 125, Rivoli.\n\nL'alternativa che non sapevi di volere!",
        "price": "4,90",
        "tags": []
      },
      {
        "name": "Affogato Pistacchio",
        "desc": "Caffè espresso affogato nel gelato al pistacchio della gelateria Bon Bon di c.so Francia 125, Rivoli.\n\nL'alternativa che non sapevi di volere!",
        "price": "4,90",
        "tags": []
      }
    ]
  },
  {
    "name": "Signature Drink",
    "items": [
      {
        "name": "Passion Spritz",
        "desc": "Un abbinamento che non ti aspetti: Caffè Cold Brew monorigine e l'aperitivo italiano per eccellenza.\n\nProvalo, non potrai più farne a meno!\n\nCaffè Cold Brew monorigine (varia in base alla disponibilità stagionale), sciroppo di Passion Fruit, Aperitivo Mediterraneo Gamondi, Birra Pale Golden Ale",
        "price": "5,90",
        "tags": []
      },
      {
        "name": "Black Negroni",
        "desc": "Il classico Negroni rivisitato in chiave moderna: Gin Tanqueray, Vermouth rosso Gamondi, Bitter Gamondi e Caffè Cold Brew monorigine. Un gusto che non ti aspetti!\n\nProvalo e stupisciti!",
        "price": "6,90",
        "tags": []
      },
      {
        "name": "ALCOOL FREE - Analcholic Passion Spritz",
        "desc": "Per chi non sa rinunciare allo spritz ma senza alcool.\n\nUna combo pazzesca tra Spremuta d'Arancia, Sciroppo di Passion Fruit, Caffè Cold Brew monorigine (disponibilità in base alla stagione) e Acqua Tonica Kinley.\n\nProvalo e facci sapere",
        "price": "5,90",
        "tags": []
      },
      {
        "name": "ALCOOL FREE - Coffeein's",
        "desc": "Un aperitivo leggero e rinfrescante! Non accontentarti del solito crodino…\n\nCaffè Cold Brew monorigine (disponibilità in base alla stagione), succo di Limone, sciroppo di Zucchero, Soda",
        "price": "4,90",
        "tags": []
      },
      {
        "name": "ALCOOL FREE - Drupa Colada",
        "desc": "Non si può descrivere, puoi solo gustarlo!\n\nSciroppo di Passion Fruit, Caffè Cold Brew monorigine (disponibilità in base alla stagione), Bevanda Vegetale al Cocco Alpro, succo di Limone\n\nUn'esplosione tropicale!",
        "price": "6,90",
        "tags": []
      },
      {
        "name": "Americano Brew",
        "desc": "L'americano che non ti aspetti: vermouth rosso Gamondi, Bitter Gamondi, Caffè Cold Brew monorigine (disponibilità in base alla stagione).\n\nProvalo e non te ne pentirai!",
        "price": "5,90",
        "tags": []
      },
      {
        "name": "LIMITED EDITION - Disaronno Coffee Sour",
        "desc": "Un drink in limited edition solo per il mese di Giugno!\n\nNon è il solito drink, è un colpo di scena!\n\nAmaretto di Saronno, Caffè Cold Brew monorigine (disponibilità in base alla stagione), Sciroppo di Zucchero e Succo di Limone.\n\nSOLO PER QUESTO MESE! Non perderlo!",
        "price": "6,90",
        "tags": [
          "New"
        ]
      }
    ]
  },
  {
    "name": "Brunch",
    "items": [
      {
        "name": "New Veggie",
        "desc": "Omelette con Spinaci e Formaggio filante, Pancake con sciroppo d'Acero, Pane di Segale tostato con Formaggio fresco spalmabile e Pomodori tagliati a cubetti, Insalatina fresca + Danish Pastry a scelta e Specialty Coffee. Acqua compresa.",
        "price": "14,90",
        "tags": [
          "Vegetarian"
        ]
      },
      {
        "name": "Tradition 2.0",
        "desc": "Omelette con Formaggio filante e Prosciutto cotto, Pancake con Crema di Nocciole e Cacao, Pane di Segale tostato con Formaggio fresco spalmabile e Pomodori tagliati a cubetti, Insalatina fresca + Danish Pastry a scelta e Specialty Coffee. Acqua compresa.",
        "price": "14,90",
        "tags": [
          "Best seller"
        ]
      },
      {
        "name": "Vegan",
        "desc": "Porridge overnight di Avena, Pane di Segale  tostato con Crema di Ceci e Pomodori tagliati a cubetti, Pane di Segale tostato con Paté di Olive e Pomodori secchi, Insalatina fresca + Croissant Vegano con Sciroppo d'Acero e Specialty Coffee. Acqua compresa.",
        "price": "14,90",
        "tags": [
          "Vegan"
        ]
      },
      {
        "name": "Avocado Toast",
        "desc": "Il trend dell'anno è arrivato al Miriam's Cafè! Avocado Toast con Pane di Segale tostato e croccante, Avocado morbido e cremoso, Scramble Eggs e Bacon. Gustalo subito!",
        "price": "4,90",
        "tags": [
          "New"
        ]
      }
    ]
  }
];
