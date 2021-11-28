// let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [
        '"The only easy day was yesterday."',
        '"If people are not laughing at your goals,then your goals are too small. ~ Albert Einstein"',
        '"To begin, begin. ~ William Wordsworth"',
        '"Faith moves mountains, love transforms hearts.~John Paul Warren"',
        '"This is your story, You are meant to be the hero of your own story. ~ Rachel Hollis"',
        '"Change the way you look at things and the things you look at change. ~ Wayne W. Dyer"',
        '"Learn the rules like a pro, so you can break them like an artist. ~ Pablo Picasso"',
        '"Lack of direction, not lack of time, is the problem. We all have twenty-four hour days. ~ Zig Ziglar"',
        '"Act the way you would like to be and soon you will be the way you would like to act. ~ Bob Dylan"',
        '"If it is bread that you seek, you will have bread. If it is the soul you seek, you will find the soul. If you understand this secret, you know you are that which you seek. ~ Rumi"',
        '"Although the world is full of suffering, it is full also of the overcoming of it. ~ Helen Keller"',
        '"We are what we repeatedly do. Excellence, then, is not an act, but a habit. ~ Aristotle"',
        '"The unexamined life is not worth living. ~ Socrates"',
        '"Life is a flower of which love is the honey. ~ Victor Hugo"',
        '"The man who moves a mountain begins by carrying away small stones.~ Confucius"',
        '"Live life as though nobody is watching, and express yourself as though everyone is listening. ~ Nelson Mandela"',
        '"The best revenge is massive success. ~ Frank Sinatra"',
        '"But when your sword breaks, you draw your dagger. ~ C.S. Lewis"',
        '"Either you do it or you do not do it. ~ Jiddu Krishnamurti"',
        '"Whatever the mind can conceive and believe, it can achieve. ~ Napoleon Hill"',
        '"The lust for comfort kills the passions of the soul. ~ Khalil Gibran"',
        '"Fortune sides with him who dares. ~ Virgil"',
        '"There has never been a meaningful life built on easy street. ~ John Paul warren"',
        '"What is done is done for the love of it- or not really done at all. ~ Robert Frost"',
        '"You can only work on yourself. Start there. ~ Alice O. Howell"',
        '"At the end of the day, let there be no excuses, no explanations, no regrets. ~ Steve Maraboli"',
        '"Amateurs sit and wait for inspiration, the rest of us just get up and go to work. ~ Stephen King"',
        '"You don’t need to see the whole staircase, just take the first step. ~ Martin Luther King Jr."',
        '"You are the average of the five people you spend the most time with. ~ Jim Rohn"',
        '"The world is full of suffering but we can escape with a song in our hearts. ~ Lailah Gifty Akita"',
        '"Get action. Seize the moment. Man was never intended to become an oyster. ~ Theodore Roosevelt"',
        '"First say to yourself what you would be; and then do what you have to do. ~ Epictetus"',
        '"When something is important enough, you do it even if the odds are not in your favor. ~ Elon Musk"',
        '"Well done is better than well said. ~ Benjamin Franklin"',
        '"It is not what we do once in a while that shapes our lives. It is what we do consistently. ~ Anthony Robbins"',
        '"Your greatness is measured by your horizons. ~ Michelangelo"',
        '"Too many of us are not living our dreams because we are living our fears. Les Brown"',
        '"Learn everything you can, anytime you can, from anyone you can, there will always come a time when you will be grateful you did. Sarah Caldwell"',
        '"Wherever you are, be all there. Jim Elliot"',
        '"Times will change for the better when you change. Maxwell Maltz"',
        '"Keep your focus on what you are becoming, not your current circumstances. Bohdi Sanders"',
        '"You can never quit. Winners never quit, and quitters never win. Ted Turner"',
        '"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. Plato"',
        '"What is life without a little risk? J.K. Rowling"',
        '"There is no hurdle too high for you to jump over. Michael H. Forde"',
        '"We become what we think about. Earl Nightingale"',
        '"You may have to fight a battle more than once to win it. Margaret Thatcher"',
        '"Everything is hard before it is easy. Goethe J.W. Never, never, never give"',
        '"Only do what your heart tells you. Princess Diana"',
        '"Intelligence without ambition is a bird without wings. Salvador Dali"',
        '"The miracle is not that we do this work, but that we are happy to do it. Mother Teresa"',
        '"The trouble is, you think you have time. Buddha"',
        '"There is only one thing that will make them stop hating you. And that is being so good at what you do that they can nott ignore you. Orson Scott Card"',
        '"Do whatever you do intensely. Robert Henri"',
        '"If you want your prayers answered, get up off your knees and do something about them. Wally Lamb"',
        '"What you do today can improve all your tomorrows. Ralph Marston"',
        '"The secret of getting ahead is getting started. Mark Twain"',
        '"The sun himself is weak when he first rises, and gathers strength and courage as the day gets on. Charles Dickens"',
        '"If the fire in your heart is strong enough, it will burn away any obstacles that come your way. Suzy Kassem"',
        '"Make each day your masterpiece. John Wooden"',
        '"Each man follows his own path - his own destiny, if you will. And only he is responsible for the choice. Heather Graham"',
        '"Be so good they can’t ignore you. Steve Martin"',
        '"Be so good they can’t ignore you. Steve Martin"',
        '"When the going gets tough, the tough get going. Billy Joel"',
        '"You can never cross the ocean until you have the courage to lose sight of the shore. Christopher Columbus"',
        '"Holding on to the past will hold you down in life. Learn from it but move on. Jonathan Anthony Burkett"',
        '"Real difficulties can be overcome; it is only the imaginary ones that are unconquerable. Theodore N. Vail"',
        '"Ever Tried. Ever Failed. No matter. Try again. Fail again. Fail better. Samuel Beckett"',
        '"It is our choices that show what we truly are, far more than our abilities. J. K. Rowling"',
        '"The more we do, the more we can do. William Hazlitt"',
        '"Believe you can and you are halfway there. Theodore Roosevelt"',
        '"Live for each second without hesitation. Elton John"',
        '"Build your own dreams, or someone else will hire you to build theirs. Farrah Gray"',
        '"The power of imagination makes us infinite. John Muir"',
        '"When they give you lined paper, write the other way. Ray Bradbury"',
        '"If you don’t stand for something, you’ll fall for anything. Malcolm X"',
        '"I have nothing to lose but something to gain. Eminem"',
        '"What hurts you blesses you. Rumi"',
        '"Find a purpose to serve, not a lifestyle to live. Criss Jami"',
        '"Success is the only motivational factor that a boy with character needs. Woody Hayes"',
        '"You can nott cross the sea merely by standing and staring at the water. Rabindranath Tagore"',
        '"I have not failed. I’ve just found 10,000 ways that won’t work. Thomas A. Edison"',
        '"Setting goals is the first step in turning the invisible into the visible. Tony Robbins"',
        '"Follow your inner moonlight; don not hide the madness. Allen Ginsberg"',
        '"Motivation comes from working on things we care about. Sheryl Sandberg"',
        '"Go for it now. The future is promised to no one. Wayne Dyer"',
        '"Never retreat. Never explain. Get it done and let them howl. Benjamin Jowett"',
        '"This could be our best day yet! Eldon Henson"',
        '"A somebody was once a nobody who wanted to and did. John Burroughs"',
        '"Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE. Joss Whedon"',
        '"You just can not beat the person who never gives up. Babe Ruth"',
        '"Life manifests only the thoughtful intentions of our desires, conciously or subconsciously. Neo Charles"',
        '"Often any decision, even the wrong decision, is better than no decision. Ben Horowitz"',
        '"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice. Brian Herbert"',
        '"Life’s like a movie, write your own ending. Keep believing, keep pretending. Jim Hensen"',
        '"Life is either a daring adventure or nothing at all. Helen Keller"',
        '"The dog that trots about finds a bone. Golda Meir"',
        '"Whatever you do never run back to what broke you. Frank Ocean"',
        '"You’re off to Great Places! Today is your day! Your mountain is waiting, so… get on your way! Dr. Seuss"',
        '"Work like there is someone working twenty four hours a day to take it away from you. Mark Cuban"',
        '"Get a grip on yourself. There is only one god here on earth, and that is you. If you don not like the world, make one you like better. Yasmina Khadra"',
        '"Without passion, you don’t have energy. Without energy, you have nothing. Warren Buffett"',
        '"Don’t stay in bed unless you can make money in bed. George Burns"',
        '"If we are not ashamed to think it, we should not be ashamed to say it. Marcus Tullius Cicero"',
        '"You only pass through this life once, you don’t come back for an encore. Elvis Presley"',
        '"f it doesn’t challenge you, it doesn’t change you. Fred DeVito"',
        '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten. Neil Gaiman"',
        '"It’s not what happens to you but how you react to it that matters. Epictetus"',
        '"Work until your rivals become idols. Drake"',
        '"It’s not the load that breaks you down, it’s the way you carry it. Lou Holtz"',
        '"Nothing drives without hope, never let it drives out. Mac Alvi A. R"',
        '"If not me who? Afroz shah"',
        '"If you work on something a little bit every day, you end up with something that is massive. Kenneth Goldsmith"',
        '"We cannot be sure of having something to live for unless we are willing to die for it. Ernesto Che Guevara"',
        '"Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted. Christine Caine"',
        '"Doubt kills more dreams than failure ever will. Suzy Kassem"',
        '"Don not get too deep, it leads to over thinking, and over thinking leads to problems that do not even exist in the first place. Nicole Rae"',
        '"Two roads diverged in a wood and I took the one less traveled by, and that made all the difference. Robert Frost"',
        '"The big lesson in life is never be scared of anyone or anything. Frank Sinatra"',
        '"You get in life what you have the courage to ask for. Nancy D. Solomon"',
        '"Imitation is suicide. Ralph Waldo Emerson"',
        '"If everything seems to be under control, you’re not going fast enough. Mario Andretti"',
        '"The elevator to success is out of order. You’ll have to use the stairs, one step at a time. Joe Girard"',
        '"You never know what motivates you. Cicely Tyson"',
        '"In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it. Jane Smiley"',
        '"The most effective way to do it, is to do it. Amelia Earhart"',
        '"One may miss the mark by aiming too high as too low. Thomas Fuller"',
        '"If you never get off-trail you never discover new landscapes. Maxime Lagacé"',
        '"Keep your fears to yourself, but share your courage with others. Robert Louis Stevenson"',
        '"Do not wait to strike till the iron is hot; but make it hot by striking. William Butler Yeats"',
        '"The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies was made in the interiors of collapsing stars. We are made of star-stuff. Carl Sagan"',
        '"Victory has a hundred fathers and defeat is an orphan. John F. Kennedy"',
        '"Deserve your dream. Octavio Paz"',
        '"At the center of all achievement is personal growth. Isaac Mashman"',
        '"Life is like a sewer… what you get out of it depends on what you put into it. Tom Lehrer"',
        '"Uncertainty will always be part of the taking charge process. Harold Geneen"',
        '"Despite everything, it is still you. Toby Fox"',
        '"Success doesn’t come to you, you’ve got to go to it. Marva Collins"',
        '"If you can’t outplay them, outwork them. Ben Hogan"',
        '"Just one small positive thought in the morning can change your whole day. Dalai Lama"',
        '"Reality is wrong, dreams are for real. Tupac"',
        '"The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson."',
        '"No guts, no story. Chris Brady"',
        '"The most beautiful moments in life are moments when you are expressing your joy, not when you are seeking it. Jaggi Vasudev"',
        '"If you resist change, you resist life. Sadhguru"',
        '"The fear is simply because you are not living with life, You are living in your mind. Sadhguru"',
    ]

btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

// function newQuote(){
//     var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//     document.getElementById('output');
// }
// newQuote();

// window.addEventListener('load',newQuote,true);
// window.onload = newQuote;

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
window.onload = function(){
    setTimeout(function(){
        popup.style.visibility = "visible";

    },3000)
};

close.addEventListener('click',() =>{
    popup.style.visibility = "hidden";
});


// const quotePopup = document.querySelector(".container");
// window.addEventListener("load",function(){
//     showPopup();
// })

// function showPopup(){
//     const timeLimit = 5;
//     let i = 0;
//     const timer = setInterval(function(){
//         i++;
//         if(i == timeLimit){
//             clearInterval(timer);
//             quotePopup.classList.add("show");
//         }
//         console.log(i);
//     },1000)
// }