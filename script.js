const questions = [
    {
        image: "vegetables.png",
        correct: 3,
        question: "Which advertisement is about ___?",
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
        ]
    },
    {
        image: "football.png",
        correct: 2,
        question: "Which advertisement is about ___?",
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
        ]
    },
    {
        image: "taco.png",
        correct: 4,
        question: "Which advertisement is about ___?",
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
        ]
    },
    {
        image: "estate.png",
        correct: 1,
        question: "Which advertisement is about ___?",
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
        ]
    },
    {
        image: "speaking.png",
        correct: 0,
        question: "Which advertisement is about ___?",
        options: [
            "a training event offering complimentary materials",
            "a building that was revamped from a manor",
            "a chance to participate in a nearby competition",
            "a place to purchase newly harvested regional goods",
            "a chance to try traditional dishes of some country",
            "a travelling opportunity",
            "a horse-riding school",
            "an art gallery"
        ]
    }
  ];
  
  const questionsTask2 = [
    {
        correct: 2,
        question: "6. What is one of the main benefits of visiting historical music sites according to the text?",
        options: [
            "It allows travelers to participate in local music competitions.",
            "It helps travelers learn about regional food traditions.",
            "It enables travelers to witness the evolution of music.",
            "It gives travelers discounts on local music festivals."
        ]
    },
    {
        correct: 0,
        question: "7. How does the text suggest that music can help people understand different cultures?",
        options: [
            "By allowing people to experience emotions and stories without words.",
            "By translating the lyrics into different languages.",
            "By offering free music lessons to travelers.",
            "By encouraging people to play musical instruments from different cultures."
        ]
    },
    {
        correct: 3,
        question: "8. According to the text what unique aspects can be discovered through historical music sites?",
        options: [
            "Current trends in popular music worldwide",
            "The influence of social media on contemporary music.",
            "The design of modern concert halls.",
            "Regional music practices and instruments that are distinctive to each location."
        ]
    },
    {
        correct: 1,
        question: "9. What does the word 'lasting' in PARAGRAPH 5 mean?",
        options: [
            "Temporary.",
            "Continuing for a specified period of time.",
            "Quick.",
            "Easily forgotten."
        ]
    },
    {
        correct: 2,
        question: "10. What does the text imply about the relationship between music and cultural identity?",
        options: [
            "Music is less important in shaping cultural identity today.",
            "Music tourism only affects the economic aspects of culture.",
            "Music is a key element in exploring and understanding cultural identity.",
            "Music is primarily an entertainment form with no cultural significance."
        ]
    }
  ];
  
  const questionsTask3 = [
    {
        text: "In June 2018, after football practice, 12 boys and their 25-year-old coach decided to explore Tham Luang cave in Thailand. They walked into the cave, but a flash flood forced them deeper, and they ended up on a platform four kilometers in. The cave filled with water, trapping them for 17 days. With no food for the first nine days, they drank water from dripping stalactites and took turns digging a hole, hoping to escape. Finally, some divers found them. It was a long and dangerous journey to bring them out of the cave. The boys had to wear special masks to breathe underwater and hold hands with two divers while they swam through dark, narrow tunnels. Sadly, one rescuer, a former Thai Navy Seal died during that operation.",
        questionText: "11. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 1
    },
    {
        text: "Cindy Busick from Sanford, NC, had a incredible escape from a tornado. The tornado struck her home, tearing it apart and sending her 75 yards away while she was in her bathtub. 'I flew a football field length in a bath tub,' remembered Cindy, the survivor. The woman had crawled under the bathtub to stay safe. After the tornado, she found that her belongings were scattered up to 70 miles away. With only a few clothes left, Cindy got emergency help from the Red Cross. Her husband, Kevin, who came back from Africa after the tornado, found his wedding band in the ruins. Cindy and Kevin are grateful for the help they had received and plan to give back when they can.",
        questionText: "12. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 6
    },
    {
        text: "The Sierra Nevada mountains are a popular destination for tourists and hikers. On August 6, 2014, Mike Vilhauer set out for a day of fly fishing in this picturesque region. After several hours of unsuccessful fishing, he decided to use grasshoppers instead of flies and went to find some. Enjoying the walk, Mike lost track of time and realized it was getting dark. Unable to return to his spot, he spent the night under a pine tree. His phone signal was blocked by the mountains. Some days he followed a small stream but got even more lost. Then he heard a rescue helicopter but it didn't spot him. Returning to his temporary camp, he finally saw a rescue dog and a search team. They had been looking for him since Friday. Mike was exhausted but otherwise fine.",
        questionText: "13. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 7
    },
    {
        text: "British dairy farmer Dougal Robertson wanted to give his family an adventure, so on January 27, 1971, he, his wife, and their four children set sail on a wooden boat named Lucette. Despite Dougal's background in the British merchant navy, he hadn't prepared much for the trip. The family enjoyed their time sailing until June 15, 1972, when killer whales attacked their boat near the Galapagos Islands, damaging it badly and causing it to sink. With only a lifeboat, a small dinghy, and six days' worth of food, they survived on rainwater and hunted turtles. After 16 days, their lifeboat became unusable, and they moved to the overcrowded dinghy. They were rescued by Japanese fishermen on July 23, 1972. The Robertson family had been lost at sea for 38 days.",
        questionText: "14. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 3
    },
    {
        text: "Aron Ralston's survival story is an example of extraordinary courage. In 2003, while he was hiking alone in Utah's Bluejohn Canyon, a big stone fell and trapped his right arm. With no hope of rescue and limited resources, Ralston faced an impossible decision. After five days of unimaginable suffering, he made the drastic choice to amputate his own arm to free himself. Afterwards, he walked seven miles to his truck and a tourist family found him. Despite the physical and mental trauma, Ralston survived. Nowadays, he continues to climb mountains and is an inspiration to many through his unbelievable story.",
        questionText: "15. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 5
    },
    {
        text: "Spending 13 months adrift at sea made José Salvador Alvarenga, a Salvadoran fisherman, the first person known to survive over a year on a small boat at sea. In November, 2012, Alvarenga and a young fisherman Ezequiel Cordoba set out from a fishing village in southern Mexico. They aimed for a short trip to catch sharks and tunas. A severe storm hit shortly after, damaging their boat and radio. The rescue team had no success. The fishermen were believed to die during the storm. Without supplies, the men survived by eating raw fish, turtles, and jellyfish, and drinking rainwater and turtle blood. Cordoba fell ill and died after months at sea. Alvarenga was alone for nine more months before spotting an island and swimming to shore. He was found by a local couple in the Marshall Islands, having been in the sea for over 438 days.",
        questionText: "16. Which of the options states that...",
        options: [
            "A. The man didn't mean to make such a long voyage alone.",
            "B. An unusual way was found to get saved from the cavern.",
            "C. That woman lived alone in a temporary camp for two years.",
            "D. The voyage was interrupted by marine animals.",
            "E. The expedition was too dangerous for these scientists to move on.",
            "F. That person had to injure himself to survive.",
            "G. That person had a short flight in an unusual vehicle.",
            "H. That person got lost looking for some insects."
        ],
        correct: 0
    }
  ];
  
  const questionsTask4 = [
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "17.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 3
    },
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "18.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 0
    },
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "19.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 4
    },
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "20.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 2
    },
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "21.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 1
    },
    {
        text: "The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____. Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts. The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator. In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896. The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history. Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals. Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____.",
        questionText: "22.",
        options: [
            "to watch events like running, boxing",
            "the photo finish and the Olympic flame",
            "took place in Athens",
            "as part of a religious festival for Zeus",
            "Greece was conquered by Rome",
            "have grown into a global event",
            "high costs and economic challenges",
            "and the 1850 Wenlock Olympian Games"
        ],
        correct: 6
    }
  ];
  
  const questionsTask5 = [
    {
        text: "Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____ a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that about 1.4% of gamers may be addicted, though the majority don't have this issue. For children, understanding their gaming habits and setting healthy boundaries is (27)_____.",
        questionText: "23.",
        options: [
            "expectation",
            "benefits",
            "relaxation",
            "reduction"
        ],
        correct: 1
    },
    {
        text: "Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____ a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that about 1.4% of gamers may be addicted, though the majority don't have this issue. For children, understanding their gaming habits and setting healthy boundaries is (27)_____.",
        questionText: "24.",
        options: [
            "impacts",
            "controls",
            "spoils",
            "corrupts"
        ],
        correct: 0
    },
    {
        text: "Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____ a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that about 1.4% of gamers may be addicted, though the majority don't have this issue. For children, understanding their gaming habits and setting healthy boundaries is (27)_____.",
        questionText: "25.",
        options: [
            "interferes",
            "enhances",
            "resolves",
            "monitors"
        ],
        correct: 0
    },
    {
        text: "Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____ a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that about 1.4% of gamers may be addicted, though the majority don't have this issue. For children, understanding their gaming habits and setting healthy boundaries is (27)_____.",
        questionText: "26.",
        options: [
            "prioritizing",
            "neglecting",
            "forgetting",
            "avoiding"
        ],
        correct: 0
    },
    {
        text: "Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____ a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that about 1.4% of gamers may be addicted, though the majority don't have this issue. For children, understanding their gaming habits and setting healthy boundaries is (27)_____.",
        questionText: "27.",
        options: [
            "minimal",
            "unnecessary",
            "essential",
            "unbelievable"
        ],
        correct: 2
    }
  ];
  
  const questionsTask6 = [
    {
        text: "At the National Air Guitar Championships, Mia felt a mix of excitement and nerves. After (28)_____ she finally stepped onto the stage. The crowd roared as she pretended to strum her (29)_____ guitar, losing (30)_____ in the music. The competition was fierce, but she loved every moment of it. 'I felt like a rock star.' she said. 'It was amazing (31)_____ my passion with others who love air guitar just as much as I do.' (32)_____ not winning, Mia walked away with great memories and new friends. The experience made her even more excited for the World Finals in Oulu.",
        questionText: "28.",
        options: [
            "practicing",
            "practiced",
            "been practiced",
            "practice"
        ],
        correct: 0
    },
    {
        text: "At the National Air Guitar Championships, Mia felt a mix of excitement and nerves. After (28)_____ she finally stepped onto the stage. The crowd roared as she pretended to strum her (29)_____ guitar, losing (30)_____ in the music. The competition was fierce, but she loved every moment of it. 'I felt like a rock star.' she said. 'It was amazing (31)_____ my passion with others who love air guitar just as much as I do.' (32)_____ not winning, Mia walked away with great memories and new friends. The experience made her even more excited for the World Finals in Oulu.",
        questionText: "29.",
        options: [
            "imagine",
            "imaginary",
            "imaginative",
            "image"
        ],
        correct: 1
    },
    {
        text: "At the National Air Guitar Championships, Mia felt a mix of excitement and nerves. After (28)_____ she finally stepped onto the stage. The crowd roared as she pretended to strum her (29)_____ guitar, losing (30)_____ in the music. The competition was fierce, but she loved every moment of it. 'I felt like a rock star.' she said. 'It was amazing (31)_____ my passion with others who love air guitar just as much as I do.' (32)_____ not winning, Mia walked away with great memories and new friends. The experience made her even more excited for the World Finals in Oulu.",
        questionText: "30.",
        options: [
            "her",
            "herself",
            "them",
            "themselves"
        ],
        correct: 1
    },
    {
        text: "At the National Air Guitar Championships, Mia felt a mix of excitement and nerves. After (28)_____ she finally stepped onto the stage. The crowd roared as she pretended to strum her (29)_____ guitar, losing (30)_____ in the music. The competition was fierce, but she loved every moment of it. 'I felt like a rock star.' she said. 'It was amazing (31)_____ my passion with others who love air guitar just as much as I do.' (32)_____ not winning, Mia walked away with great memories and new friends. The experience made her even more excited for the World Finals in Oulu.",
        questionText: "31.",
        options: [
            "share",
            "sharing",
            "to share",
            "have shared"
        ],
        correct: 2
    },
    {
        text: "At the National Air Guitar Championships, Mia felt a mix of excitement and nerves. After (28)_____ she finally stepped onto the stage. The crowd roared as she pretended to strum her (29)_____ guitar, losing (30)_____ in the music. The competition was fierce, but she loved every moment of it. 'I felt like a rock star.' she said. 'It was amazing (31)_____ my passion with others who love air guitar just as much as I do.' (32)_____ not winning, Mia walked away with great memories and new friends. The experience made her even more excited for the World Finals in Oulu.",
        questionText: "32.",
        options: [
            "Despite",
            "Even though",
            "Although",
            "Regardless"
        ],
        correct: 0
    }
  ];
  const questionsContainer = document.getElementById("questions");

  questions.forEach((q, index) => {
    const qNumber = index + 1;
    const div = document.createElement("div");

    div.className = "question" + (index === 0 ? " active" : "");
  
    div.innerHTML = `
      <img src="${q.image}" alt="question image" width="500px" style="margin-bottom: 20px;"><br/>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
      </div>
    `;
  
    questionsContainer.appendChild(div);
  });

  questionsTask2.forEach((q, index) => {
    const qNumber = index + questionsTask2.length + 1; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML = `
      <h2 style="font-size:40px; font-weight:600">How Colours Affect Emotions and Behaviors </h2>
      <p>Colours are more than just visual elements; they play a significant role in shaping our emotions and behaviors. Understanding colour psychology helps us navigate our environment and make informed choices about colour in various aspects of our lives. </p>
        <p>Colours can evoke specific emotions and impact our behavior. For example, bright colours like red and yellow are often associated with high energy and strong emotions. Red can increase feelings of passion and urgency, making it a popular choice for stimulating action. Yellow, on the other hand, is linked to happiness and optimism, though too much can cause anxiety.</p>
      <p>Cool colours such as blue and green are known for their calming effects. Blue often creates a sense of tranquility and trust, making it a common choice for professional settings. Green, the colour of nature, promotes balance and renewal, providing a soothing atmosphere. Purple combines the calm of blue and the energy of red, fostering creativity and
sophistication.</p>
      <p>Neutral colours like gray, beige, and white do not evoke strong emotions but provide stability and balance. They are often used as backgrounds to highlight other colours or create a calming environment.</p>
      <p>Two main theories explain how we react to colours:
Associative Learning: This theory suggests that we form emotional connections to colours based on * personal experiences and <b>cultural conditioning</b>.
For example, red might evoke excitement because it is commonly used in signs that signal warnings or sales. Ecological Valence Theory: This theory posits that our preferences for certain colours have evolutionary roots. Early humans may have favored colours associated with survival, such as green for vegetation and blue for water.</p>
        <p>Cultural context significantly shapes our colour perceptions. For instance, while white represents purity and new beginnings in many Western cultures, it symbolizes mourning in some Eastern cultures. These cultural differences must be considered, especially in marketing and design, to ensure that colours communicate the intended message.</p>
        <p>To create a positive environment or enhance your mood, choose colours that align with your goals.
For a relaxing space, opt for calming cool colours.
To boost energy or motivation, incorporate warm colours like red and yellow. Balancing these with neutral tones can provide stability and focus.</p>
        <p>Understanding and using colour psychology can improve your well-being and help you create spaces that reflect your personality and desired atmosphere.</p>
        <br>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
      </div>
    `

    questionsContainer.appendChild(div);
});

  questionsTask3.forEach((q,index)=>{
    const qNumber = index + questionsTask4.length + 10; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2><b>${q.heading}</b></h2>
      <br>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText} <b>Which festival ___?</b></p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  
  questionsTask4.forEach((q,index)=>{
    const qNumber = index + questionsTask3.length + 20; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center; font-size:40px; font-weight:600">Expressing Yourself Through Fashion</h2>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  
  questionsTask5.forEach((q,index)=>{
    const qNumber = index + questionsTask4.length + 30; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
      
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })
  questionsTask6.forEach((q,index)=>{
    const qNumber = index + questionsTask5.length + 40; // Унікальний номер
      const div = document.createElement("div");
  
      div.className = "question";
  
      div.innerHTML=`
      <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
      <p>${q.text}</p>
      <p style="font-weight: bold;">${q.questionText}</p>
      <div class="space-y-3">
          ${q.options.map((opt, i) => `
            <label for="q${qNumber}a${i+1}" class="block">
              <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);">
              <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
            </label><br>
          `).join("")}
          <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
        </div>
      `
      questionsContainer.appendChild(div);
  })

  function markSelected(radio) {
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    radio.nextElementSibling.classList.add("selected");
  }

  const Questions = document.querySelectorAll('.question'); 
const nav = document.getElementById('taskNav');
const buttons = [];
let currentQuestion=0
    Questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      btn.onclick = () => showQuestion(i);
      if (i === 0) btn.classList.add('active');
      nav.appendChild(btn);
      buttons.push(btn);
    });

    function showQuestion(index) {
      Questions.forEach(q => {q.classList.remove('active');
      });
      Questions[index].classList.add('active');

      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[index].classList.add('active');
      currentQuestion = index;
    }

    function checkAnswers() {
      const allQuestions = [...questions, ...questionsTask2, ...questionsTask3, ...questionsTask4, ...questionsTask5, ...questionsTask6];
      let score = 0;
      const tryAgainButton = document.getElementById('again');
      tryAgainButton.style.display = 'block';
      
      // Fix: Use document.getElementsByClassName to get elements with class 'CorrectAnswer'
      const correctAnswers = document.getElementsByClassName('CorrectAnswer');
      Array.from(correctAnswers).forEach((el) => {
        el.style.display = 'block';
      });
      
      Questions.forEach((qElement, i) => {
        const selected = qElement.querySelector('input[type="radio"]:checked');
        const selectedIndex = selected ? Array.from(qElement.querySelectorAll('input[type="radio"]')).indexOf(selected) : -1;
        const isCorrect = selectedIndex === allQuestions[i].correct;
    
        qElement.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
    
        const correctRadio = qElement.querySelectorAll('input[type="radio"]')[allQuestions[i].correct];
        if (correctRadio && correctRadio.nextElementSibling) {
          correctRadio.nextElementSibling.classList.add('correct-answer');
        }
    
        if (selected && !isCorrect && selected.nextElementSibling) {
          selected.nextElementSibling.classList.add('incorrect-answer');
        }
    
        buttons[i].classList.remove('correct-answer', 'incorrect-answer');
        if (isCorrect) {
          score++;
          buttons[i].classList.add('correct-answer');
        } else {
          buttons[i].classList.add('incorrect-answer');
        }
    
        qElement.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = true;
        });
      });
    
      document.getElementById('result').textContent = `Ваш результат: ${score} з ${allQuestions.length}`;
    }
      
    

    function nextQuestion() {
      // Hide current question
      Questions[currentQuestion].classList.remove('active');
      buttons[currentQuestion].classList.remove('active');

      // Move to next question
      currentQuestion = (currentQuestion + 1) % Questions.length;

      // Show the next question
      Questions[currentQuestion].classList.add('active');
      buttons[currentQuestion].classList.add('active');
    }
    function tryAgain() {
      buttons.length = 0;
      nav.innerHTML = '';
      const correctAnswers = document.getElementsByClassName('CorrectAnswer');
      Array.from(correctAnswers).forEach((el) => {
        el.style.display = 'none';
      });
    
      Questions.forEach((q, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => showQuestion(i);
        if (i === 0) btn.classList.add('active');
        nav.appendChild(btn);
        buttons.push(btn);
    
        // Reset all radio buttons and styling
        q.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = false;
          radio.checked = false;
        });
    
        // Remove correct-answer, incorrect-answer, and selected classes from option-btn divs
        q.querySelectorAll('.option-btn').forEach(option => {
          option.classList.remove('correct-answer', 'incorrect-answer', 'selected');
        });
      });
    
      showQuestion(0);
      document.getElementById('result').textContent = '';
      document.getElementById('again').style.display = 'none';
    }
