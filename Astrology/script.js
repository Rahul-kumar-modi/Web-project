const zodiacSigns = [
    "Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

//Based on Date, size 31
const compliments = [
  "You have a great sense of humor",
  "You are very intelligent",
  "You have a kind heart",
  "You are incredibly creative",
  "You bring positive energy",
  "You are a quick learner",
  "You inspire others",
  "You have a great attitude",
  "You are very reliable",
  "You are confident and strong",
  "You make people feel comfortable",
  "You have excellent communication skills",
  "You are thoughtful and caring",
  "You are very talented",
  "You have a unique perspective",
  "You are hardworking",
  "You are a natural leader",
  "You are honest and trustworthy",
  "You handle challenges well",
  "You have great problem-solving skills",
  "You are disciplined",
  "You are emotionally intelligent",
  "You have a positive mindset",
  "You are supportive of others",
  "You have great focus",
  "You are ambitious",
  "You have a calm presence",
  "You are dependable",
  "You are adaptable",
  "You have strong values",
  "You make a difference"
];

// size 20
const victimCardCompliments = [
  "You are stronger than you realize",
  "You handled a difficult situation with courage",
  "Your feelings are valid",
  "You showed great resilience",
  "You didn’t deserve what happened",
  "You are brave for speaking up",
  "You are not alone",
  "You survived something hard",
  "Your strength inspires others",
  "You did your best",
  "You are worthy of respect",
  "You are allowed to heal",
  "Your pain matters",
  "You are more than your past",
  "You have incredible inner strength",
  "You are allowed to take your time",
  "You showed remarkable endurance",
  "You are still standing",
  "You deserve peace",
  "You are worthy of kindness"
];

// size 30
const recommendations = [
  "Take a deep breath and slow down",
  "Focus on what you can control",
  "Give yourself permission to rest",
  "Talk to someone you trust",
  "Set healthy boundaries",
  "Take care of your mental health",
  "Drink enough water today",
  "Write down your thoughts",
  "Spend time in nature",
  "Practice gratitude daily",
  "Avoid overthinking small things",
  "Believe in your own pace",
  "Take one step at a time",
  "Celebrate small wins",
  "Get enough sleep",
  "Limit negative influences",
  "Be kind to yourself",
  "Learn from experiences, not mistakes",
  "Stay consistent with good habits",
  "Do something you enjoy",
  "Trust the process",
  "Let go of what drains you",
  "Ask for help when needed",
  "Focus on progress, not perfection",
  "Keep learning new things",
  "Make time for self-reflection",
  "Stay connected with loved ones",
  "Choose peace over pressure",
  "Take breaks when needed",
  "Prioritize your well-being"
];

// size 20
const predictions = [
  "A new opportunity will come your way soon",
  "Positive changes are approaching",
  "You may receive good news unexpectedly",
  "Your efforts will start showing results",
  "A meaningful conversation will bring clarity",
  "Financial stability will improve gradually",
  "Someone will appreciate your work",
  "You will overcome a current challenge",
  "A fresh start is on the horizon",
  "Your confidence will grow",
  "An old problem may finally resolve",
  "You will feel more motivated",
  "Support will come when you need it",
  "A small risk may bring rewards",
  "Your patience will be tested but rewarded",
  "A new idea may turn into success",
  "Peace and balance will return",
  "You will gain valuable insight",
  "Good energy will surround you",
  "A positive decision will shape your future"
];


const form = document.getElementById("astroForm");
const result = document.getElementById("result");

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const text = `Hi ${name} ${surname}, Your Zodiac sign is: ${zodiacSigns[month-1]}. ${compliments[day-1]}. ${victimCardCompliments[year%20]}. ${recommendations[(day*month)%30]} . ${predictions[(name.length*surname.length)%20]}`

    result.textContent = text;
})