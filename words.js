import _ from 'lodash';

let words = {
    colors: {
        Red: 'Kempu',
        White: 'Bili',
        Blue: 'Neeli',
        Black: 'Kappu',
        Colors: 'BannagaLu',
        Green: 'Hasiru',
        Orange: 'KittaLe',
        Pink: 'Gulabi',
        Yellow: 'Haladi',
        Purple: 'Gadugempu (not usually used)',
    },
    regular: {
        'Airport': 'Vimana Nildana',
        'Able': 'Saadhya',
        'Ask/Hear/Listen': 'KeLi',
        'Above': 'Mele',
        'Absent': 'Gairu',
        'Accept': 'Sweekarisku',
        'Agree': 'Oppu',
        'Awake': 'Ecchara',
        'Answer': 'Uttara',
        'Against': 'Nirakarisu',
        'Asleep': 'Nidre',
        'And': 'Mattu',
        'Book': 'Pustaka',
        'Boy': 'Huduga',
        'Big': 'Dodda',
        'Bring': 'Thanni',
        'But': 'Aadre',
        'Come': 'Banni',
        'Coming': 'Bartini',
        'Close': 'Haaki',
        'Cloud': 'Moda',
        'Children': 'Makkalige',
        'Children (with love)': 'Makkale',
        'City': 'Ooru',
        'Country': 'Desha',
        'Cold': 'ThaNNage',
        'Cry': 'ALu',
        'Daalo/Put': 'Haaki',
        'Door': 'Baagilu',
        "Don't tell (plural or with respect)": 'HeLabedi',
        "Don't tell (singular)": 'HeLaBeda',
        'Do': 'Maadi / Maadu (one word sentence)',
        'Doing': 'Maadutini',
        'Day after tomorrow': 'NaaLeDu',
        'Day before yesterday': 'Monne',
        'Ears': 'Kivi',
        'Eyes': 'KaNNu',
        'Everyone': 'YeLLaru',
        'Face': 'Mukha',
        'Fast': 'Bega',
        'First': 'ModaLu',
        'For/To': 'Ge',
        'Far': 'Para',
        'Few': 'Swalpa',
        'Finish': 'Kone (Anthya)',
        'Gents': 'Gandasarige',
        'Get': 'Tartini',
        'Girl': 'Hudugi',
        'Give': 'Kodi / Kodu (one word sentence)',
        'Go': 'Hoogi',
        'Going': 'Hodtini / Hogutide',
        'Hands': 'KaigaLu',
        'Have': 'Ide',
        'Hear/Listen/Ask': 'KeLi',
        'Here': 'illi',
        'How': 'Hege',
        'Happy': 'Khushi',
        'Hot': 'Bisi',
        'House': 'Mane',
        'Hunger/Hungry': 'Hasivu',
        'Important': 'Mukhya',
        'Introduction': 'Parichaya',
        'Inside': 'Olage',
        'Invisible': 'Agochara',
        "It's there": 'Ide',
        'Know': 'Gothu',
        'Language': 'Bhaashe',
        'Ladies': 'Hengasarige',
        'Last': 'Kone',
        'Legs': 'KaaLugaLu',
        'Leave (Holiday)': 'Raje',
        'Lies': 'SuLu',
        'Lips': 'TutigaLu',
        'Like': 'Ishta',
        'Listen/Here/Ask': 'KeLi',
        'Many/More': 'Tumba',
        'Mouth': 'Baayi',
        'Month': 'Tingalu',
        'Money': 'Duddu',
        'Many': 'Thumba',
        'Noisy': 'Gaddala',
        'Not there': 'Illa',
        'No': 'illa',
        'Nose': 'Mugu /Moogu',
        'Now': 'Eega/Evaga',
        'Only': 'Maatra',
        'Over': 'Ayta',
        'Open': 'Tegi',
        'Outside': 'Horage / Aache',
        'Paper': 'Kaagada',
        'Present': 'Hajaru',
        'Poor': 'Badava',
        'Question': 'Prashne',
        'Rail/Train Station': 'Rail Nildana',
        'Run': 'oDu',
        'See': 'NooDi',
        'Sit Down': 'Kulitiko / KutkoLi (with respect)',
        'Speak': 'Mathadu (one word sentence)',
        'Speech': 'Maatu',
        'Speech (like a politician)': 'Bhashana',
        'Stand up': 'Nintuko / Ninkoli',
        'State': 'Rajya',
        'Study': 'Odu',
        'Student': 'Vidhyarthi',
        'Stop': 'Nillu',
        'Sweet': 'Sihi',
        'Start': 'Shuru / Prarambha',
        'Soft': 'Mrudu',
        'Short': 'Kulla',
        'Sick': 'Anarogya',
        'Slow': 'Nidhaana',
        'There': 'Alli',
        'Today': 'Ivathu',
        'To/For': 'Ge',
        'Tongue': 'Naalige',
        'Tomorrow': 'NaLe',
        'Vehicle': 'Gaadi',
        'We': 'Naavu',
        'Want': 'Beku',
        'Week': 'Vaara',
        'What': 'Yenu',
        'When': 'Yaavaaga',
        'Where': 'Yelli',
        'Who': 'Yaaru',
        'With': 'Jote',
        'Why': 'Yaake',
        'Work': 'Kelasa',
        'Window': 'Kitaki',
        'Went': 'Hogide',
        'Wish': 'Shubhashayagalu',
        'Yesterday': 'Nenne',
        'Year': 'Varsha',
        'You': 'Neenu / Neevu',
        'Your': 'Ninna / Nimma',
        'Yours': 'Nindhu / Nimdhu',
        'Ready': "Generally use 'readyu' but Taiyaru",
        'Beka': 'Do you want',
        'Or': 'Athva',
        'After': 'Mattay',
        'Join': 'JoDi',
        'Again': 'Innondusala',
        'Write': 'Bari',
        'Address': 'Vilasa',
        'Meet': 'Beti',
        'Practice': 'Abhyasa',
        'Is': 'Aagide',
        'Shall We': 'agona',
        'Not go': 'Hogalla',
        'Not come': 'Barala or baralilla',
        'Cook (process)': 'Adige',
        'More than good or more happy': 'Chindi',
        'Over happy, super happy': 'Bombat (beyond chindi)',
        'Even more happy than both above': 'Sakkat (Sakkatigide)',
        'Calling someone': 'Guru (with respect like sir, boss)',
        ' without respect': 'Lo.',
        'Close to someone': 'Maga',
        'Use with scolding': 'Magane (Ajit magane)',
        'If someone is doing fraud': 'Chatri (like umbrella)',
        'Younger person close to you': 'Shishya',
        'Fighting with someone, say get lose': 'Hogolo, with girls Hogele',
        'Common insult': 'Nimmajji (grandmother insult)',
        'Complete or finish': 'Mugisi',
        'So much': 'Ishtu',
        'Purchase/Buy': 'Kharidi',
        'Accident': 'Apagaatha (but people use accident only)',
        'Age': 'Vayassu',
        'Application': 'Arji',
        'Air': 'Gaali',
        'Bad': 'KeTta',
        'Baby': 'Magu',
        'Bath': 'Snana',
        'Behaviour': 'Nadavalike',
        'Bell': 'Ghante',
        'Bitter': 'Kahi',
        'Boat': 'Doni',
        'Best': 'Uttama',
        'Birth': 'Huttu',
        'Below': 'Kelage',
        'Chair': 'Kurchi',
        'City': 'Pattana ',
        'Community': 'Jaathi',
        'Congratulations': 'ShubhashayagaLu',
        'Certainly': 'Kanditavaagi',
        'Day': 'Dina',
        'Dance': 'Nrutya',
        'Date': 'Taariku / Dinanka ',
        'Drink': 'Kudi',
        'Death': 'Saavu',
        'Disagree': 'Oppuvudilla',
        'Early': 'Bega',
        'Earth': 'Bhoomi',
        'Education': 'Vidhyabhyas',
        'Empty': 'Khali',
        'Excuse Me': 'Illi NoDu',
        'Father': 'Tande',
        'Fever': 'Jwara',
        'Forest': 'Kaadu',
        'Flower': 'Hoovu',
        'Fortnight': 'Eradu Varakomme',
        'God': 'Devaru',
        'Good': 'Olleya',
        'Give': 'Kodu',
        'Hard': 'Gatti',
        'Healthy': 'Arogyakara',
        'Hear': 'KeLu (OWS) KeLi otherwise',
        'Hello': 'Hello',
        'Help': 'Sahaya',
        'Hire': 'Baadige',
        'Holiday': 'Raja',
        'Inform': 'Tilisu',
        'Keep': 'Yitko (one word sentence)',
        'Knife': 'Chaaku',
        'Kiss': 'Mutu',
        'Less': 'Kadime',
        'Lock': 'Meega',
        'Joke': 'Thamashe',
        'Key': 'Kai',
        'Love': 'Preethi',
        'Lightning': 'Minchu',
        'Laugh': 'Nagu',
        'Live': 'Vasisuttidene',
        'Learn': 'Kali',
        'Market': 'Marukatte',
        'Marriage': 'Maduve',
        'Memory': 'Nenapu',
        'More': 'Jasti',
        'Morning': 'BeLige',
        'Moon': 'Chandra',
        'Mother': 'Taayi',
        'New': 'Hosa',
        'Next Week': 'Mundina Vaara',
        'Numbers': 'SankyegaLu',
        'No Problem': 'Paravagilla',
        'Old': 'Haleya',
        'Pain': 'Novu',
        'Place': 'Stala',
        'Price': 'Bele',
        'Planet': 'GrahagaLu',
        'Prayer': 'Prarthane',
        'Quarrel': 'Jagala',
        'Question': 'Prashne',
        'Quiet': 'Nishyabda',
        'River': 'Nadi',
        'Rain': 'Male',
        'Rich': 'Srimanthike',
        'Sea': 'Samudra',
        'Send': 'Kalisu (one word sentence)',
        'See': 'Nodu (one word sentence)',
        'Sky': 'Aakasha',
        'Spoon': 'Chamacha',
        'Season': 'Gaala',
        'Society': 'Samaja',
        'Sleep': 'Malagu',
        'Song': 'Haadu',
        'Shop': 'Angadi',
        'Some': 'KeLavu',
        'Small': 'Sanna (Chikka)',
        'Sorry': 'Tappaytu/Khsamisi',
        'Summer': 'Besige',
        'Sun': 'Surya',
        'Sunshine': 'Sooryaprakasha',
        'Storm': 'Maaruta',
        'Table': 'Meju',
        'Take this': 'Tegaduko',
        'Tell': 'HeLi',
        'Thief': 'KaLLa',
        'Time': 'Kaala',
        'Town': 'Pattana',
        'Trouble': 'Tondare',
        'Thunder': 'Gudugu',
        'Thank You': 'Dhanyavadagalu',
        'Tall': 'Ettara',
        'Take': 'Thago',
        'Thick': 'Dappa',
        'Thin': 'Badava',
        'Tenses': 'Kaala',
        'Unable': 'Asaadhya',
        'Visible': 'Gochara',
        'Value': 'Maulya',
        'Village': 'Halli',
        'Watch': 'Gadiyara',
        'Wash': 'Toli',
        'Walk': 'NaDi',
        'Wide': 'Agala (window is wide)',
        'Weight': 'Tooka',
        'White Pearl': 'Mutu',
        'Wind': 'Galli',
        'Winter Season': 'Chaligaala',
        'Worst': 'Ketta',
        'Your Welcome': 'Swagatha',
        'Yes': 'Howdu',
        'Cold Weather': 'ChaLLi',
        'Say': 'HeLu',
        'Minute': 'Nimsha',
        'Complete': 'Hogisu (don’t say) or Mogisu ',
        'Shall I': 'Eega',
        'Younger Sister': 'Tangi',
        'Elder Sister': 'Akka',
        'Younger brothher': 'Tamma',
        'Older brother': 'ANNa',
        'Son': 'Maga',
        'Daughter': 'MagaLu',
        'Mother in law': 'AAtte',
        'Daughter in law': 'Sose',
        'Wife': 'Hendati',
        'Husband': 'GenDa',
        'Together': 'Jottege',
        'Donkey': "Katte (you don't understand kannada katte)",
        'Owl': 'Goobe (i understand you Goobe)',
        'Use when someone tries to fool you and you know better': 'Suryangetorcha/Tirupatigeladdu/Samudrageuppa',
        'Behind/Back': 'Hinde',
        'Front': 'Munde (or mumbe)',
        'Run': 'Odu',
        'Later': 'Nantara',
        'Get Up': 'EddeL beku',
        'Sleeping': 'Malko beku',
        'After <something>': 'Idda mele',
        'Snow/Mist': 'Hima',
        'Full': 'Poorna',
        'Rupee': 'Rupay',
        'Everyone': 'Yellaru',
        'Enjoy': 'Maja',
        'Read': 'Hodu',
        'Grandfather': 'Tatta',
        'Land': 'Zameenu',
        'Sell': 'Maaru',
        'Grandson': 'Mommaga',
        'Sell': 'Marata',
        'Didnt Like': 'Ishtailla',
    },
    food: {
        'Potato': 'Alugadde',
        'Onion': 'Iruli',
        'Ginger': 'Shunti',
        'Water': 'Neeru',
        'Vegetable': 'Tarakaari',
        'Curds': 'Mosaru',
        'Breakfast/Tiffen/Snacks': 'Tindi',
        'But': 'Aadre',
        'Come': 'Banni',
        'Coming': 'Bartini',
        'Curds': 'Mosaru',
        'Coconut': 'Tengina Kayi',
        'Eat': 'TinDe',
        'Egg': 'Motte',
        'Fruit': 'Hannu',
        'Green Leaves': 'Soppu',
        'Grape': 'Drakshi',
        'Lunch/Dinner': 'Oota',
        'Milk': 'Haalu',
        'Pour Water': 'Neeru haaki',
        'Salt': 'Uppu',
        'Sugar': 'Sakkare',
        'Butter': 'Benne',
        'Chicken': 'KoLi',
        'Dal': 'Bele',
        'Fish': 'Meenu',
        'Food': 'Ahara',
        'Ghee': 'Tuppa',
        'Mutton': 'Mamsa',
        'Pickle': 'Uppina Kai',
        'Rice': 'Anna',
        'Sambar': 'Saaru',
        'Sabji': 'Palya',
        'Sprouts': 'Molake',
    },
    numbers: {
        'One': 'OOnedu',
        'Two': 'Eradu',
        'Three': 'Mooru',
        'Four': 'Nalku',
        'Five': 'Aydu',
        'Six': 'Aaru',
        'Seven': 'YeLu',
        'Eight': 'Entu',
        'Nine': 'Ombattu',
        'Ten': 'Hattu',
        'Eleven': 'Hann Ondu',
        'Twenty': 'Ipatu',
        'Twenty One': 'Ipatu Ondu',
        'Thirty': 'Muvatu',
        'Thirty Three': 'Muvatu ooru',
        'Fourty': 'Nalavatu',
        'Fourty Four': 'Nalavatu Nalku',
        'Fifty': 'Aivatu',
        'Sixty': 'Aaravatu',
        'Seventy': 'Epatu',
        'Eighty': 'Embatu',
        'Ninety': 'Tombattu',
        'Hundred': 'Nooru',
        'Hundred & One': 'Nooru Onedu',
        'Hundred & Ten': 'Nooru Hattu',
        'Thousand': 'Savira',
        'Lakh': 'Laksha',
        'Crore': 'Koti',
    },
    all: {},
};

_.keys(words).forEach((category) => {
    words.all = _.extend(words.all, words[category]);
});

export default words;
