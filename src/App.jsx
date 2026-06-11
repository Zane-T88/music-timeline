import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

if (typeof window !== "undefined") {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}

const PROJECT_COUNT = 6;

const PROJECTS = [
  {
    id: "dorm-room-demo-tapes",
    title: "Dorm Room Demo Tapes",
    date: "February 27, 2022",
    ttc: "Five Months",
    link: "View project",
    coverImage: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/drdt.jpg",
    bubbleLabel: "2022",
    bubbleOffset: { x: 260, y: 80 },
    narration:
      "Then, Zane Tipton completed his first project. \nHere began a long journey of documenting his inner thoughts and emotions as they came to him.",
    songs: [
      { title: "Genesis", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Well here it is
I hope you like it
And i genuinely mean that
It's why i write it
No i don't mean i do it for you're approval
Nor do i do it in hopes for your removal
I don't do it for me either if that's what you thought
There's a lot more to this picture than what i need and want
I didn't come here for fancy cars or clothes
I came here on a mission to help you through life i suppose
Sure the fortune and fame might be nice
But i'm pretty sure there's more to life
This isn't about who's better or best
More of an outlet for when i get no rest
You see i'm gonna keep it straight
This life stuff isn't too great
Whether inside or out we all struggle sometimes
But i hope that i can help when i put my life into rhymes
Time and time again i find myself lost and confused
Time and time again i looked to music to get me through
That's just my way of expression
My means of impression
And if it helps you relate
I'm glad i could teach you a lesson
Now i'm sure you have reason to doubt
How does a kid know what life's about
But in hopes of persuasion
I have just one sayin
I'm far from finished
This is only my Genesis

It took time
But i feel fine
This is my line
To unwind
I'm on my grind
And i now shine
Whether daytime
Or the nighttime
I'm not lyin
I stay flyin
If you hate mine
Then get in line
I'm not tryin
To be a mime
I'm an ancient Mayan
From another time
Im a roarin lion
I'm in my prime
Ima fold your mind
Like my name prion
So grab the wine
And sit and dine
And hit rewind
And hear my rhyme
And take a lime
And peel the rind
And read the sign
That i'm sublime
I'm on the climb
And it's not a crime
And i'm not cryin
When i feel the grime
Ima keep it slime
Like it's nick and live
And heres a dime
Better pay the fine
And i'm divine
Cause it's his design
And i won't resign
Cause i can't recline
I stay kind
Like the number nine
You can't confine
Cause i won't align
To your asinine
Dumb shrine
I'll stand high
Like a tall pine
Your supine
But i'll be your spine
That's my chime
I've made my tine
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%281%29genesis.wav" },
      { title: "Affliction", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `You know i've been thinkin about this for awhile now
I just never could find the words that really tell how i feel
But it seeeems i did a little soul searchin

Damn your love's an affliction
That's too bad it's an addiction

Fightin for your attention (I need you)
But i always come up missin (Where you at)
You wonder What's my mission? (What you want)
I'm not just here for your submission (No i'm not)
I could leave if you'd like (Bye)
Only have a good night (Bye)
Or i could stay for the day (Hm)
Come around back your way (Hm)
But that's just it That's my message (Yep)
You're not givin me either Not even a vestige (Nothin)
Instead you'd rather mess with my thoughts and mix my emotions (motions)
Inconclusive I don't know your notions (notions)
You'll call my name but you don't wanna talk (Hello)
You say you'll come over but the truth that is not (Lies)
You wanna use my shoulder but leave me out to rot (Damn)
I'm tired of bein ran over I'm not a parkin spot

Damn your love's an affliction
That's too bad it's an addiction

Truly you're all the same (juice juice)
But for whatever reason i never shy away (idk why)
Sadly the same can't be said about you (You)
You've lost all hope In your eyes i'm just another dude (What)
But that couldn't be more farther from the truth (Not at all)
Take a chance see what i will do for you (I'm here)
But you know i really couldn't care more (No more)
I'm tired of lovin I only come up short (I'm done)
Nah ima leave it all up to you (Up to you)
If you want this blessin you gotta put in work too (It's true)
I can't deal with the shame no more (Nope)
I can't deal with the doubt (Mm-mm)
But it's not like i can ignore (Nope)
Cause i might be missin out (Mm-mm)
I'm not your chew toy Chew me up and spit me out (Woof)
If you're gonna be a whore than Aight ima head out
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%282%29affliction.wav" },
      { title: "Dedication", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Ain't confidence it's determination
My minds complex like a space station
I have no time for a vacation
Even when i lose i still have dedication

I'm tired of loooosin
I just always fail
I'm tired of loooosin
I just always fail
I can't get winnin
I'm stuck in a jail
I can't get winnin
I'm stuck in a jail

There are times where you feel you can never get it right
It's hard to tell when it ends just hold on very tight
This life ain't perfect you know this and now so do i
Is it worth it i can't help but wonder this sometimes

So i meditate and contemplate on why i carry on
Then i celebrate cause i know that it won't be too long
Even so that doesn't mean life's all bread and butter
Try and numb the pain never go away shout out to cudder

Ain't confidence it's determination
My minds complex like a space station
I have no time for a vacation
Even when i lose i still have dedication

I'm tired of loooosin
I just always fail
I'm tired of loooosin
I just always fail
I can't get winnin
I'm stuck in a jail
I can't get winnin
I'm stuck in a jail

I don't wanna go no more it's gettin way too hard to carry on
I'm knocked to the floor every time that i think i finally won
But in this i find some comfort cause i know that there's purpose
When you lose its them deciding if you're really truly worth it

If you hustle when your broken it might mean you have the token
Only real ones make it through despite the witches with the potion
In this life you might have trials with a bit of tribulation
But it's through all of your struggles that you get your education

Ain't confidence it's determination
My minds complex like a space station
I have no time for a vacation
Even when i lose i still have dedication
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%283%29dedication.wav" },
      { title: "Affection", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I just felt like i had to do this one
Cause you don't always get the chance to tell that person how you really feel

I'll give you what you want what you didn't know you need
I guarantee you'll get it all from me
Passion like this doesn't come that often
So if you want real love please don't stop it

I owe it all to you
All my heart and time
Cause there's nothing else like you
That fully completes my mind

I meant what i said and i'll say it again
There nothing in the world that can keep me in a pen
But when it comes to you i lose all control
You're the only thing that takes my mind off my goal
i've failed more than once i've failed more than twice
Many times i've lost and it gave me long nights
I can never stop and it seems that's the problem
Its why i hate to lose cause only you can solve em
I love it when you're near and i love it when you text
So when i lose what's dear i really start to stress
I don't know how you do it. You keep me comin back
Without you or the music i might have a heart attack

It's not jealousy it's not lust
Only true affection that i have for us

I'll give you what you want what you didn't know you need
I guarantee you'll get it all from me
Passion like this doesn't come that often
So if you want real love please don't stop it

I owe it all to you
All my heart and time
Cause there's nothing else like you
That fully completes my mind

You keep me wanting more and you keep me intrigued
So when you open the door i really wanna believe
There's two things about you i can never shut out
It's your mind and your body in this i have no doubt
I love to learn your mind i could talk with you all night
Your body's one of a kind i've never seen nothin more fine
When i'm with you i seem to lose track of time
Every time you leave i always wanna rewind

As you can see you really mean a lot to me
The only thing i see you're all the air i breathe
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%284%29affection.wav" },
      { title: "Distraction", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I'm tryna stay focused
In a world that's lost focus
It feels like hocus pocus
Cause i'm in a hypnosis
Racing in my mind
They promise better times
But after i oblige
I learn it was a disguise
Less is more, more is less
Giving in weighs on my conscience
I find it hard to find rest
Dealing with all this stress
There's no better time than the present
So why do i postpone my presence
I'm always looking for the quickest exit
But quickly discover it was just a entrance
It's easier to have fun
Than to work past the sun
But i have to keep it a hun
And ignore all distractions

I'm tryin to fight Distractions Distractions
I'm tryin to fight Distractions Distractions
I'm tryin to fight Distractions Distractions

I don't understand why it's so hard
To look in their eyes and still close the door
I know in my heart that they're all sub par
But even still they knock my mind to the floor
Whether girls or weed or shows or greed
It takes a lot of my will for me to believe
That none of this stuff will help me succeed
It'll all leave me empty most definitely
Women are the worst i've said this before
I hate when i lust there nothing more i abhor
They take and i give and it never seems to change
After awhile i only feel estranged
Their love is a drug but they're not the only ones
Good dope is a rope and it's often self hung
I've had my fair share but it never helped me
Only left me confused and even more hungry
Quick entertainment isnt much better
It comes to my attention like a fancy sealed letter
It's hard to ignore when you got so much on your plate
A nap and a show is such an easy escape.
But there's greed i feed and it's never guaranteed
There's nothing i want more than more than i need
I've looked to things and money for a little satisfaction
But it never lasts long and for more i keep
askin
These are my biggest struggles and the reason i'm late
I've been taken two girls to the same prom date
But i can't keep goin down this road anymore
If i want true bliss than distractions i'll ignore
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%285%29distraction.wav" },
      { title: "Attention", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I can't even look your way
Cause i'll fall for your hypnosis
How i wish you could stay
But then i'll lose all my focus

It never gets easier
No matter how hard i try
I fall for your teasers
When we're eye to eye
I wanna believe ya
When you say that you're mine
But how could i need ya
When you waste all of my time
I wanna do something great
History i could make
But when i see your face
My dreams just seem to change
I give but you just take
Now i feel estranged

I can't even look your way
Cause i'll fall for your hypnosis
How i wish you could stay
But then i'll lose all my focus

I wish it wasn't so hard
But i have to make a choice
My future or your heart
I can't deal with all the noise
You leave your mark
And it cuts itself deep
I'm left with a scar of you
On my memory
I work so hard for this life i desperately want
But every time you come along i just can't get enough
What must i do to rid you out of my life
I try to ignore but you're like a light in the night

I can't even look your way
Cause i'll fall for your hypnosis
How i wish you could stay
But then i'll lose all my focus

I'm sorry if i come across as weird
But i just can't be the one to hold you dear
I've had this dream of mine since i was a but a child
So maybe some other time but for now your mild
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%286%29attention.wav" },
      { title: "Revelation", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Tryna find my way out of a maze
I couldn't help that i was stuck in a daze
Searching through life while fishin for praise
How are you supposed to not end in a craze
I was just lookin for better days
Waitin on a miracle to amaze
I didn't want to be stuck in a graze
So i needed a revelation to save

That's when i thought it
What i needed to solve it
If i wanna get lit
Then i'm gonna need true grit

Work on me there ain't much to it
If i wanna see you bump to the music
Tried the easy way that ain't gonna do it
So i gotta learn to work through it
That's all i got there's not much there
Skill is subjective life isn't fair
But you gotta know how much i care
So i stay up and grind through night air

Now that i've tried i'll say it's worked for me
I feel it in my bones in the air i breathe
I don't have pride but i'm proud of myself
I think they'll write and put my life on a shelf

I just worked
Man i just worked
I just worked
Man i just worked
I just worked
I didn't stop the work
I just worked
All i did was work

Now i got it
Now i got it like that
Now i got it
Now i got it like that
If you want it
You can have it like that
If you want it
You gotta work like that

Believe me though this wasn't easy
Hard to hold on its way too greasy
I did my best and look where it got me
Got no rest but that didn't stop me
Now i know that i'm the man
Didn't need hoes or tricks or bands
I feel this good off my own plans
And putting in the time helped me understand

That it's not the fame that makes you
Nor does cash or how they rate you
Only how you spend your time
Did you waste it or spend it tryin

Just to be clear there's still some tears
The ends not near and it gets worse i fear
But don't be discouraged in fact be couraged
See how far you've come and how much you've foraged

Now you finally know the truth
You don't have to be the best in the room
You just have to work harder than the rest of them do
That's the only way to be above number two
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%287%29revelation.wav" },
      { title: "Paths", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Sometimes i don't even want a crown
I just wanna grow old and settle down
Find a good girl we could both leave town
Lay away as we live safe and sound

Sometimes i don't even want a crown
I just wanna grow old and settle down
Find a good girl we could both leave town
Lay away as we live safe and sound

Sometimes i don't even want a crown
I just wanna grow old and settle down
Find a good girl we could both leave town
Lay away as we live safe and sound

I don't know
Where to go
All i know
Is vertigo

Im stuck between two lives
At the point where the path divides
One to the left is filled with lights
A dream i have that's all about heights
The other one is to the right
It's comforting but less excitin

Where do i go from here
I have too much to fear
Nothing i see is clear
I think i need some air

I think that i'll just give up the crown
Start to grow old after i settle down
Find a good girl that wants to leave town
Lay in shade as we watch all the clouds

No. Actually…

I think that i'll just take up the crown
Start to grow old but never settle down
Leave the good girl they're not real anyhow
Stay up late cause i can't just lay around

Yknow i can't be selfish with this
I've been given a mission an ambition
And i won't stop till it comes to fruition
I've been sent to guide and give hope
Not to enjoy what helps me cope
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%288%29paths.wav" },
      { title: "Kool-Aid", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I can't hide me
I can't hide me
I can't hide me

I don't want
To realize
That i try
To be a lie

Even if
You want me
To fit in
It can't be

That's why i feel
So good surreal
Cause i just do
What i want to

That does not mean that i think that i was born a perfect star
It just means that i know who i am and how
to take that far
Cause when you learn how to truly love the good and bad in you
You learn how to take the world by storm and shape it just for you

Don't drink the Kool-Aid
(Learn to be self made)
Just open your eyes
(Don't need them for highs)
I know the pressure
(I feel the pressure)
When the world weighs down
(It's hard not to drown)

Don't drink the Kool-Aid
(Learn to be self made)
Just open your eyes
(Don't need them for highs)
I know the pressure
(I feel the pressure)
When the world weighs down
(It's hard not to drown)

So next time
You're behind
Check inside
And you'll find

All you need
Is your own
Mind to guide
Soul to grow

To survive
This hard life
It takes you
To realize

They don't tell
What to do
Only you
Controls you

So don't drink
The Kool-Aid
Or you'll need
The first aid
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%289%29kool_aid.wav" },
      { title: "Head", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't

Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't

Head
What's goin on in my head
I can't go to bed
Cause i don't know my head yea

Lost in the world confused
Wanna know the news
But ion know what to do
Findin my own place
But runnin outta thangs
That's keepin me stay sane
What can i find to fight the ride
What can i find to fight the high
What can i find to fight the lie
What can i find to fight the time
What can i find to fight my mind
What can i find to fight

Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't

Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't

I don't know what's in my head
Thought i knew but i didn't
Now i think i might be dead
Will there ever be an end
To all the pain and sufferin
Goin on inside my head
I can never escape
So i must find a way
To live by day by day
Eh but it's gonna alright
It's been a long night
But i'm here to fight

Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't

Head
What's goin on in my head yea
What's goin on in my head yea
I can't i can't i can't i can't
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2810%29head.wav" },
      { title: "Better Times", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I often find myself reminisicin
To the days before i knew that words definition
About a time long gone and in the past
About a time long ago i wish would last
There's nothing i won't do to get it all back
I would even go through another heart attack

I'm holding on to my last thoughts
The remaining reminders go down in these notes i jot
Memories from the past that went by too fast
I didn't even know they were good till i found bad ones never last

There's something about anniversaries
That revive the times i hold close to me
Reminding myself that not long ago
I was spending my time with nothing i loathe
I wanna go back wanna go back so bad
To that time when i thought i had what i had
I lay in my bed laying awake at night
Replaying those memories that bring back a little light
It's all i have left that keeps me going anymore
Because maybe one day i'll relive it once more


I'm holding on to these last thoughts
But holding on long'll cause my brain to rot
Memories from the past that went by too fast
Don't wish away the good because bad ones seem to last

Like i said i wish i could get back the past
But sometimes i only ever want it to pass
It seems while i live in the present
I only want to notice what's unpleasant
But when i finally make it to the future
Only then can i see the bigger picture
So then i'm stuck where i am right now
Wanting to return to a time that's said ciao
This bit is dangerous it just might endanger us
To recall better times and wish that they came to us
We must live in today else we make the same mistake
And miss out on the great that's in front of our face

I'm done holding on to these past thoughts
I'm finally letting go but forget them i will not
Memories from the past that went by too fast
I'm here to see the good knowing bad ones never last
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2811%29better_times.wav" },
      { title: "Doubt", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout

Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout

I'm tired of livin in question
Whether or not i'm the very best in
I'm scared i'm not enough
And one day i'll be out snuffed
Thoughts of doubt run through my mind
And make me waste a lot of my time
No i hate this No i hate that
No nothin of mine is ever up to bat
So i lay in bed and think of times ahead
Where things just aren't as bad or maybe i was dead

Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout

Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout

That's why i gotta be strong
And tell myself you're never wrong
If i believe it can be done
Then i've already won
I might not be the best
I might not get no rest
But as long as i fight the stress
Than i'll be surely blessed
What's the point of livin in doubt
I've only got one life to live it out
So i might as well just never pout
Because i got myself ion need no clout

Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout

Cant live with the doubt
I gotta get it out
So i no longer pout
When i got no clout
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2812%29doubt.wav" },
      { title: "Know Nothin", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `All i know is that i know nothin
Time goes on and i still know nothin
Flipped the script didn't see that comin
What is real i wish i knew somethin

All i know is that it comes and goes
One minute you're fine and the next idk
How long will it take to know i'm sure
What's real and fake no nothing is pure

All i know is that i know nothin
Time goes on and i still know nothin
Flipped the script didn't see that comin
What is real i wish i knew somethin

I've done so much it still ain't enough
To figure out what when why how and stuff
Every time i think i know what it's about
Life switches up and spits me out

All i know is that i know nothin
Time goes on and i still know nothin
Flipped the script didn't see that comin
What is real i wish i knew somethin

I'm tellin you man
This ain't fun and games
The way life works
It's hard not to blame
But one things for sure
Its that i'm never bored
Cause the way life works
I'll won't know the right door

But i just keep goin that's all i can say
Even if i only make a mistake
Cause the funny thing is nothin really matters
So i just do what i want and ignore all the chatters
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2813%29know_nothing.wav" },
      { title: "Curse Breakin", producer:"Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I gave it all up
Or i let go
Which one it was
I don't know
I gave it all up
I thought it wasn't enough
Now looking back is too tough

Gave it all up
Lettin it go
I couldn't live
With losin control
I wish i could
just get it back
But i can't cause
When i'm attached

I lose my mind and start to decline
Nothing of mine lasts me a lifetime
Every time i think that i'm closer
I'm thrown for a loop like a coaster
Then i get scared i'll lose it again
So i backtrack and start to head spin
If i think i might start to have it
I disappear like it was magic
I tell myself that it was sabotage
But deep down i know that's a mirage
I just don't ever wanna be rehurt
Cause it echoes like it's a reverb

Plus you know
It comes and goes
I don't want
To be exposed
Don't let 'em in
Cause they won't get out
Given affection
I'll drought you out

Plus it's not
On my agenda
If i'm with you
How can i end up
On my way
To greater things
That's how i know
I didn't make a mistake
Or maybe i did
And now i can't rest
Cause i'm thinking of you
And how your the best
Thing that's happened
Now i'm obsessed
If i lose you
No ion need the stress
See this is what happens
It happens every time
That's why it's better
Your not my valentine
I just want you
Why can't i have two
I'll take the cake
But this time i'll eat it too

Im tired of losin one or the other
Slipping through my hand like it was butter
I don't want to find me another
So i'll keep you that's on my mother
Who ever said that i can't have both
Must not know that i do what i want
I've been doin that since the beginning
That's how i just keep on uh winning
So when i say that you're my lady
Just know that i'm not talkin crazy
See how i'm just curse breakin baby
I've got it all and it never phased me


I gave it all up
Or i let go
Which one it was
I don't know
I gave it all up
Had to forgo
I let it melt away like snow

But next time i won't end up solo
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2814%29curse_breakin.wav" },
      { title: "Hope", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I find it hard to live with no hope
Cause without hope how're you supposed to cope
It's the only thing that's keeping me alive
It's the only thing that's keeping me up at night
Gotta have hope it's keeping me afloat
Without the hope i should hang from a rope
It's the only thing that keeps me goin
It's the only thing that keeps me flowin

Sometimes all i ever want to believe
There are better times waitin for me
So i stay strong and just carry on
And manifest destiny through hopes sweet song
The one and only reason i'm at where i'm at
The only way i made it without a map
Set up a plan execute an attack
And hope that hope would have my back
It don't always work
I can give you examples
Remember that one time
She gave me a sample
I hoped it would last
And i would be ample
But god had other plans and it fell into shambles
But because of hope i didn't stop there
Nah i shrugged my shoulders and pretended not to care
I just carried on and hoped for some luck
And then i got one that really knew how to
That's all i'm saying that's all that there is
Take a bad time and put hope in the mix
Now you have a reason to pick up your sticks
Build you a house out of the problems you'll fix
It's the only thing that truly made sense
And later in life made me some cents
I hoped that one day i could make life better
And channeled that energy to be a go getter

I find it hard to live with no hope
Cause without hope how're you supposed to cope
It's the only thing that's keeping me alive
It's the only thing that's keeping me up at night
Gotta have hope it's keeping me afloat
Without the hope i should hang from a rope
It's the only thing that keeps me goin
It's the only thing that keeps me flowin

I find it hard to live with no hope
Cause without hope how're you supposed to cope
It's the only thing that's keeping me alive
It's the only thing that's keeping me up at night
Gotta have hope it's keeping me afloat
Without the hope i should hang from a rope
It's the only thing that keeps me goin
It's the only thing that keeps me flowin

It really is the only way that i could have made it this far
Sometimes i thought i was just delusional driving in my car
If there is anything you want i promise that you can get it
All you have to do is use all your hope as a one way ticket

It really is the only way that i could have made it this far
Sometimes i thought i was just delusional driving in my car
If there is anything you want i promise that you can get it
All you have to do is use all your hope as a one way ticket
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2815%29hope.wav" },
      { title: "Trust pt.1", producer:"Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I had no idea that i could
I had know idea that i would make it this far

I felt like i was nothin but a failure
Coming up short i never could make it work
They were everything i'm not
I was just melting pot
Couldn't even think a thought
I thought i would be forgot
Time went on i lost control
I just didn't know what to do
Then i looked on what i did
And i saw so far ahead
It was all inside of me
Everything that i would need
I had put me where i am
Headed for the promised land

Now i know just where I'll go
Cause i know who drives on the road

You don't know what i been through
And i don't know what you been through
But i can tell you something now
Nothing was like layin on cloud
I felt like i wasn't good enough
But now i know that's stupid stuff
Cause none of this had come from luck
It was all in my inner muck
The days i felt that i would lose
Or the days i just didn't cruise
Or the days i just couldn't choose
Or the days i just wouldn't snooze
These we are all my greatest strengths
Not a weakness and i give thanks
They helped just me to climb the ranks
And do more than to play small pranks

All of it was up to me
Since the very beginning
Everything i did and all the bets i bid
They were all on myself and not some Christmas elf

All these things i thought were bad
Helped me leave my mom and dad
And set me out on a mission
For the life that i was missin
Now i'm in the studio
Preaching everything i know
But who knows where i'll go next
Guess i'll trust me for the rest
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2816%29trust_pt_1.wav" },
      { title: "Undefeated", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Yea
I'm like 0 to 100 out here
They don't know what to do
But trust me they're through

I tried tellin em
I'm gonna do whatever it takes
They thought that i was playin
But now they're the ones prayin

I can't be stopped
I'll never drop
Not for the clock
Or a little road block
Undefeated
Sorry your heated
Please be seated
Demons are not needed

I was working on the verge
Of losing it i bout lost my nerve
Tired of being told what to do
I wanted to stand on my own two
But freedom like that comes with a price
There was a lot i had to sacrifice
I knew the world wouldn't be nice
But i bucked back and broke the vice

I can't be stopped
I'll never drop
Not for the clock
Or a little road block
Undefeated
Sorry your heated
Please be seated
Demons are not needed

They even used my one weakness
A lack of love it was ruthless
But i turned it around on them
It pushed me more to see me win
I came out bringing sevenfold
I might bend but i'll never fold
Burning hot or freezing cold
Man i'll still win, with a soul not sold

I can't be stopped
I'll never drop
Not for the clock
Or a little road block
Undefeated
Sorry your heated
Please be seated
Demons are not needed

I'm tellin you bruh this was not some easy task
Honestly i'm surprised i didn't take to the flask
But i conquered my challenges without a mask
And now in the shining sun ill forever bask

I can't be stopped
I'll never drop
Not for the clock
Or a little road block
Undefeated
Sorry your heated
Please be seated
Demons are not needed
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2817%29undefeated.wav" },
      { title: "LTL", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Oh how i love you so much
That word doesn't even describe it enough
Hate to admit but i think you're a crutch
Cause without you i think i'd give up
Remember how i held you while you cried?
Who else would do that on the first night?
That's how you know i'm not some guy
And my love isn't just a high
Apparently i just love it when i lose
Apparently i love touching the bruise
Apparently its what lights up my fuse
Apparently i'm finding an excuse
To explain why i love giving you up
Damn it seems like i just can't get enough
I cant even keep you around for a month
Every time i fall you just want to pack it up
So i buckle down and focus on ahead
It's the only way i stay out of my bed
And not think of ways we might end up wed
Unlike you, my love's not a rose painted red
But i can't complain cause my life isn't plain
Losing you might be the best thing i gain
Not much else really can keep me in my lane
I think i'm in love with the thunderstorms and rain
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2818%29LTL.wav" },
      { title: "VitaCoaster", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics:  `I feel like i'm on a roller coaster
I feel like i'm on a roller coaster
I feel like i'm on a roller coaster
I feel like i'm on a roller coaster

I feel like i'm back at Winnepesauka
I feel like i'm back at Winnepesauka
I feel like i'm back at Winnepesauka
I feel like i'm back at Winnepesauka

Up and Down
Left and Right
All Around
Up all night

Side to side
Back and forth
Changing tide
All out war

I can i cannot
I will i will not
It is it is not
This calls for a shot

Nothing will make sense
Past present future tense
Too much turbulence
I'm stuck in suspense

All that i can do
Hold on till it's through
Answers i have few
What's false what is true

Thought eyes in control
Didn't know i was fooled
My life's a wave pool
But that makes it whole

Up and Down
Left and Right
All Around
Up all night

Side to side
Back and forth
Changing tide
All out war
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2819%29VitaCoaster.wav"},
      { title: "Trust pt.2", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Will it be alright?
Will it be alright?

I'm tryna find
Some kinda sign
To help me realize
That it'll be fine
I only seem to mess it up
I only seem to have bad luck
I only seem to want to give up
But i'll never give up
No i'll never give up

It will be alright
It will be alright

Everything happens for a reason
Especially my wounds and all my lesion
God was not committing treason
But preparing me for my good season

There is a plan
There has to be a plan

I forgot what it's like to lose
All i got my love time cash reign faith trust no pain
I was left with nothing but the
Bad effects like heartache headache frustrate new hate
But now i see there was a bigger purpose
But now i know that all my loss was worth it
Cause now i have more
Than i've ever had
Since i took the bad
And wrote it in my pad
Made a song
That would right my wrong
And then put me on
So all would be by gone

Trust in the plan
Trust in the plan
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2820%29trust_pt_2.wav"},
      { title: "Blessings", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I've been lookin
For a while
But i can't seem to find

All the things that
make me smile
Is life even worth my time

I'm writing this from a saddened perspective
I've lost another one now i have no reason to live
I've lost so much that it's havin me guessing
What do i have to count as my blessing

I'm searching far and wide
For a reason to subside
An artificial high
I've settled for tonight
It's hard to carry on
When all you love is gone
Waiting for the morning dawn
It's taking way too long

I know that they're there
Blessings in the air
But it's hard to find a pair
When life ain't always fair
I know i have a lot
I should be grateful for what i got
But i feel like i been shot
Filled with nothing but bad thought

I know that they're there
Blessings in the air
But it's hard to find a pair
When life ain't always fair
I know i have a lot
I should be grateful for what i got
But i feel like i been shot
Filled with nothing but bad thought

I've been lookin
For awhile
But i think i now find

All the things
That make me smile
They were there the whole time

I know it sometimes feels like everything ain't alright
Lookin down the road it's hard to see the light
The walls are cavin in and it starts to get too tight
Wondering if there's good or life is worth the fight

I know it sometimes feels like everything ain't alright
Lookin down the road it's hard to see the light
The walls are cavin in and it starts to get too tight
I promise there is good and life is worth the fight
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/dorm-room-demo-tapes/%2821%29blessings.wav", coverart: "Zane Tipton" },
    ],
  },
  {
    id: "aging-adolescence",
    title: "Aging Adolescence",
    date: "March 13, 2022",
    ttc: "One Week",
    link: "View project",
    coverImage: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/aa.jpg",
    bubbleLabel: "2022",
    bubbleOffset: { x: -10, y: 80 },
    narration:
      "Shortly after, Zane finished his second project. \nA message to his future self of all this things he might forget.",
    songs: [
      { title: "We'll See", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `1,2,3
I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see

I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see


I went from knowin nothin
To knowin a lot
In the span of 4 months
It was all self taught
They tried to put me down
Between a hard place and a rock
But let me tell you something 
I never forgot
Had hoes that left
But that don’t mean nothin to me
Had dudes tryna check
But i ain’t stressing you’ll see
Everybody tryna flex
But i’m the only one not frontin
Tryna see who’s next
Well look who’s up comin
Who else you know works 24/7 round the clock
Even when i sleep i dream about winnin at the top
You gone try to set me off but i will never ever stop
If there’s one thing you should know my factors all on shock
I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see

I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see
Tryna find my way around
All the bullshit in my town
Look and see what i have found
Bunch a stupid fuckin clowns
On my way up to the crown
I swear y’all wanna put me down
But listen to this here sound 
I’m just way way too profound
Hit ‘em with this dialogue
Different flows no monologue
Y’all think you’re above the law
I’m the only one that’s raw
All i hear is bla bla bla
When you talking hoo ra ra
You don’t want to get involved
Cause you know that you’ll dissolve
I’m not frontin bout this shit 
To me this is too legit 
All the times that i’ve been hit
But i still just never quit
You’d think that i was insane
The way i just play this game
If i ask you what’s my name
You better know that it’s zane
I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see

I got the feeling you don’t believe in me
I guess you don’t see what i see in me 
You don’t think it’ll happen eventually 
But i guess we’ll just have to wait and see

 Yea
 Tellin you
 It’s gonna happen man
 But i guess, i guess we’ll see
 Yea, we’ll see`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%281%29We%27ll_See.wav" },
      { title: "Moments", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Findin a way 
Findin a time
Findin a day
Findin a rhyme
Stuck in my ways
Stuck in a daze
Stuck in a maze
Fuckin insane
Numbin the pain
With novocane
My only way
To keep out my brain
Don’t know what’s wrong
Don’t know what’s right
Should i go fight
Or should i take flight
Lift up the pipe
Just for one night
I swear tonight
I’m outta sight
I don’t know what’s next
Should i go stress
Or should i just chill
Forget all this mess
That’s all there is
All i can do
Enjoy the moment
Till my time is due
Cant stop thinking
And i won’t stop thinking
And i can’t stop thinking
And i won’t stop thinking
And i can’t stop thinking
And i won’t stop thinking
And i can’t stop thinking
And i won’t stop thinking 
Bout what happens next
I’m scared and i’m stressed
If this is a test
I’m a fail at my best
So what do i do
That i don’t know
Where does it go
This endless road
I wanna another moment
To spend it with you
But i don’t know
If god’ll pull through
So i sit and plot
And fill my time with thought
Think of a plan
That’ll get me that spot
But it’s outta my control
That i don’t get
How am i supposed 
To sit and not do shit
I can’t enjoy the moment 
When i want to get lit
So as of right now
I guess i’ll just spit

yea
Its all i can do
but yknow
I’m not done though
hold on we’re gonna switch it up
ready?
I got more to say
I always got more to say

yea yea mm
ready for this?
lets go


Whatcha gonna do
When it’s up to you
I don’t know what’s next
But i know this
I cannot stress
Cause i don’t know this
I don’t know what
I don’t know this
I don’t know life
I don’t know what’s comin tonight
But i know right now
So i’m a sit tight
And just keep on
Cause i’m only promised 
All of the fun
Without the Bahamas 
I don’t need checks
I don’t need commas
Cause as of right now
That’s all behind us
So is the past
That shit didn’t last
But i digress
Cause life moves too fast
And this a moment
I’m in it right now
I should enjoy it
Till the future gets loud
And then we outside
Cause we didn’t turn down
Way too worried bout what’s in the clouds
But nothings there i checked and i looked
Only the air the good stuffs all booked
For what’s on the ground it’s all in right now
I can’t enjoy the moment
I’ve tried and i’ve tried
How do you think i’ll ever survive
This a confession 
I’m done with the lies
Life’s not all good
I cannot disguise
I’m stuck in the house writin this shit
Makin a beat tryna get fit
But none of its worth it 
If i’m not with you
I guess that the payment
This is the cost
Put in time now 
And try to get lost
Lost in the moment 
That’s all i can do
I’ll say it again
In case it missed you
Lost in the moment 
That’s all i can do
This shit sucks
I cannot lie
I cannot stop thinking 
About what is inside
But no i gotta stop
That’s what got me in trouble
Learn to move on
Don’t live in a bubble
Fuck the past
Fuck the future
Live in the moment
Forget the big picture 
Love every moment
Cause it just gets quicker
Before you know it
You’ll need a grave digger yea
You’ll need a grave digger what
You’ll need a grave digger yea


Yknow what that means?
You’re dead 
Υou’re gonna die
So just live in the fucking moment
And don’t worry about shit
Damn
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%282%29Moments.wav" },
      { title: "Maverick", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I’m not in control
Gods in control
So i just do
What i want to

I’m not a fool
I’m not a mule
Only a jewel
Cause i don’t duel

With the possibilities 
Of all my abilities
Of doing everything i please 
Without liabilities

I found that there’s more
When it’s all an open door
No ceiling or floor
To what i’m made for

I can do anything 
Because nothing is everything 
And everything is something
Except that it’s nothing

So i guess it don’t matter
Is the message on the platter
So just be the mad hatter
And listen to the chatter

The voice in your head
That wants to do it
Don’t tell it to quit
Just listen to it

And do what you want
You don’t have to be stuck
Deep down in the muck
Of chance and luck

I’m livin stress free
Cause i’m in a reality
That it’s not up to me
So ima do what i need

To stay out of fear
That i messed up the year
With one little smear
Who cares if it’s clear

So i don’t look back
And i cut me some slack
And i don’t catch flack
When im all out of whack

Cause it don’t really matter
Is still the message on the platter
Let it all shatter
Cause you can do whatever 

14 lives 
Lost in columbine
is what it takes too
Finally realize

Life is too short
Don’t start to abort
Or take it to court
When you sail away from port

It’s all open seas
You have a destiny
So don’t worry 
If you start to feel freeze

You’re all taken care of
So don’t start to wait up
For the right lay up
Make your own day up

Why are you scared 
Of that guy over there
Who you really cares
If you can compare

To anyone else
There’s power in self
Don’t live in stealth
It’s bad for your health

It took me awhile 
To be versatile
But now im all smile 
Cause i got my own style

Im not scared to look
Or write my own book
See the greatness i cook
Now here’s the hook

Some of them will slum again
Its hard to swallow medicine
Most of them are homonym
They’re sittin in the melanin
One of them is the antonym
He don’t succumb to summoning
His little hymn is awakening
And he’s not scared  of anything

Some of them will slum again
Its hard to swallow medicine
Most of them are homonym
They’re sittin in the melanin
One of them is the antonym
He don’t succumb to summoning
His little hymn is awakening
And he’s not scared  of anything 

Some of them will slum again
Its hard to swallow medicine
Most of them are homonym
They’re sittin in the melanin
One of them is the antonym
He don’t succumb to summoning
His little hymn is awakening
And he’s not scared of anything
 
Some of them will slum again
Its hard to swallow medicine
Most of them are homonym
They’re sittin in the melanin
One of them is the antonym
He don’t succumb to summoning
His little hymn is awakening
And he’s not scared of anything 
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%283%29Maverick.wav" },
      { title: "Chill Out", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Need to chill out
Need to chill out
Need to chill out
Need to chill

Need to chill out
Need to chill out
Need to chill out
Need to chill
Nothing set in stone
I can set the tone
So i don’t need to groan
I’ll just get in my zone

Nothing set in stone
I can set the tone
So i don’t need to groan
I’ll just get in my zone
If nothing really matters
Why do i stress bout matters
It’s not all a disaster
I should chill and not live faster

If nothing really matters
Why do i stress bout matters
It’s not all a disaster
I should chill and not live faster

Need to chilllll
I need to chilllll
Need to chilllll
I need to chilllll

I thought that it was over
Couldn’t look over my shoulder
Despite the blocking boulder
Things started to turn over
It got bright like sun exposure 
I got lucky like a clover
So i keep my calm composure
And let the beat just switch over
Now that i did find out
Everything can work out
I don’t need to scream and shout
When i start to doubt
Everything will be fine
There’s no need to rewind
Might as well just recline
It’ll happen in due time

Now that i did find out
Everything can work out
I don’t need to scream and shout
When i start to doubt
Everything will be fine
There’s no need to rewind
Might as well just recline
It’ll happen in due time
So i learn to chill
I don’t care about the hill
Cause i’m in god’s good will 
I know he will fulfill

So i learn to chill
I don’t care about the hill
Cause i’m in god’s good will 
I know he will fulfill

So i learn to chill
I don’t care about the hill
Cause i’m in god’s good will 
I know he will fulfill 
So i learn to chill
I don’t care about the hill
Cause i’m in god’s good will 
I know he will fulfill

So i learn to chill
I don’t care about the hill
Cause i’m in god’s good will 
I know he will fulfill 
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%284%29Chill_Out.wav" },
      { title: "My Mind", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from
 
My mind divine
My mind refined
My mind designed
My mind stream lined
This thing in my head
Might keep me up in bed
Might make me see some red
But it’s all i needed
To take me up in space
Up to a higher place
All the things that i can face
Now that i can levitate

This thing in my head
Might keep me up in bed
Might make me see some red
But it’s all i needed
To take me up in space
Up to a higher place
All the things that i can face
Now that i can levitate
Listen 
It’s still in my system 
Drives my engine Like a piston
All that i need to go ballistic
I guess you could say i’m individualistic
I’m not tryna be unrealistic
I’m not sayin i’m idealistic
But i just might be all holistic
Cause my mind is so deterministic

My mind divine
My mind refined
My mind designed
My mind stream lined

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from

My might comes from my mind
My might comes from my mind
My might comes from my mind
My might comes from `, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%285%29My_Mind.wav" },
      { title: "One Life", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide
I only have one life
So ill throw it up tonight
And start to take flight
Cause im way to bright
Don’t know if i’m wrong
But i’ll just play this song
And ill just keep on
Cause it might not be long
Till i got no life
So ill end it out right
Take it to a new height
You know i just might
Never standby
Never be shy
Never pass by
Never comply
Cause i just want to live a little
Never get to sentimental 
I swear this is too detrimental
That’s why i did an instrumental
Rapping on a paradiddle
Singing on a little fiddle
Cause life is too small and brittle
Don’t be scared like chicken little

Just want to live a little
Never get to sentimental 
I swear this is too detrimental
That’s why i did an instrumental
Rapping on a paradiddle
Singing on a little fiddle
Cause life is too small and brittle
Don’t be scared like chicken little
So just live like
You’re about to die
Cause you know you just might
Before you realize
That you only have this life
You don’t get a second try
So you better recite
I only got one life

So just live like
You’re about to die
Cause you know you just might
Before you realize
That you only have this life
You don’t get a second try
So you better recite
I only got one life

Yea
Uh huh
That’s right
I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide

I only have this here one life
So ill make sure i have no fright
I don’t care if i live it right
Cause its my life shit ill decide
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%286%29One_Life2.wav" },
      { title: "Time Of My Life", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent 
Ha ha you thought that would last for ever
You thought all the good moments in life would just last forever heh you trippin
Look listen i’m a tell you something true
I’ve learned this lesson the hard way
And i know you will too
 
It will never last 
All the moments past
Like an hour glass 
Everything that’s good
Will be gone for good
Don’t get burnt like wood
I’m just tryna help
Many times i have felt
Don’t want you to melt

Alright
Here comes another moment
Let’s see what we learned
This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent

This is the time of my life
I don’t even know what is strife
I don’t ever want it to end
Cause i feel like it was heaven sent 
Haha you feel for it again didnt you
How many times do i have to tell you that will never last, they never last
But on the positive side if the good moments pass so will the bad
 So at least we have that yknow
It will never last 
All the moments past
Time is fleeting fast 
Everything that’s bad
Will turn have not had
So don’t stay so sad
I’m just tryna help
Many times i have felt
They all left a welt
Just dont fall for it next time
Cause it will happen
I promise you`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%287%29Time_Of_My_Life.wav" },
      { title: "For You", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Made this for you
Made this for you
Made this for you
Made this for you


I don’t know how else to say
You’re the one no other way
In my heart and on my mind
I want you for all my life


So i made these songs for you
I hope they’re enough for you
To show that my love is true
Let me know if they charm you
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%288%29For_You.wav" },
      { title: "Memories", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `All of these you memories
They’re the only thing thats saving me
I find
I wanna rewind
All the times
That were behind
When you were mine
It was divine
Give me a sign
That you’ll reply
 
Oh
What do i do
How can i move
To get next to you
Was i fooled or
Was it just a mood
Cant lose my cool
But you’re my soul food
I’m on a fine line
Tryna get you in my life
You’ll prolly just decline
If i call you tonight
But i don’t wanna die
Without you right by my side
So i’ll strategize
Hope you one day realize

I’m on a fine line
Tryna get you in my life
You’ll prolly just decline
If i call you tonight
But i don’t wanna die
Without you right by my side
So i’ll strategize
Hope you one day realize



I’m on a fine line
Tryna get you in my life
You’ll prolly just decline
If i call you tonight
But i don’t wanna die
Without you right by my side
So i’ll strategize
Hope you one day realize

I’m on a fine line
Tryna get you in my life
You’ll prolly just decline
If i call you tonight
But i don’t wanna die
Without you right by my side
So i’ll strategize
Hope you one day realize

 All of these you memories
They’re the only thing thats saving me

 All of these you memories
They’re the only thing thats saving me

 All of these you memories
They’re the only thing thats saving me

Yea`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%289%29Memories.wav" },
      { title: "I'll Wait", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Most will think i’m crazy
Too wait for you baby
But what can i say
Only you are on my brain
I’m tired of lookin around
I wanna stick with what i found 
All the others don’t astound
But to you, to you i’m bound
You don’t know how i feel
I feel i need someone that’s real
Too real that’s you that’s why
I’ll wait till it’s time you’re mine
All mine Cause you’re more than fine
Perfect the way you shine
You don’t realize that you can stop time
Stop time on a dime so i’ll wait 
I’ll wait for you wait for you till i’m through
Through to you cause that’s what you’re supposed to do

I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
Most will think i’m crazy
Too wait for you baby
But what can i say
Only you are on my brain
I’m tired of lookin around
I wanna stick with what i found 
All the others don’t astound
But to you, to you i’m bound
You don’t know how i feel
I feel i need someone that’s real
Too real that’s you that’s why
I’ll wait till it’s time you’re mine
All mine Cause you’re more than fine
Perfect the way you shine
You don’t realize that you can stop time
Stop time on a dime so i’ll wait 
I’ll wait for you wait for you till i’m through
Through to you cause that’s what you’re sposed to do

I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
I’ll wait for you
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%2810%29I%27ll_Wait.wav" },
      { title: "I Try", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I try 
For you
Till i die
I’m for you
What we have
Happens only once
That’s why i 
can’t give up
I try 
For you
Till i die
I’m for you 
Even if
I mess it up
Trust in that
I won’t give up
I try 
For you   
Cause i know
I’m for you
You’re too good
To let go
I’ll hold on
With my soul
I want you to know
You’re my Gal Gadot
So i can’t just go
Or i’ll be in woe
And if i don’t try
How can i reach the sky
Only you’re that high
So i guess that’s why
Great things come with a price
You’re worth my whole life
So ill work all through the night
Just to see you one more time
I’m sorry if i’m persistent
Cant just leave cant just end it
You are  just so transcendent and
I was born with a fighting spirit
I try 
For you
Cause i know
I’m for you
No matter what
I’ll be here
I hope you find
This message clear
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%2811%29I_Try.wav" },
      { title: "All I Need", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `All i needed
All i ever needed 
You’re all i needed
Everything i needed
I do it for you
Everything youre seein
It’s all for you
Anything you dreamin
All i needed 
All i ever needed
So why you leavin
Please don’t say you’re leaving
I did it for you
Everything you’re seeing
But now i bore you
I guess i don’t see it
I’m not saying i needed 
You to survive
Nor am i saying i need
You to keep me alive
But when im with you 
I’m completely satisfied
And when im without you
Well that’s the downside
I might not be what you need
But this i can guarantee
Everything you want and see 
It will all come from me 
That’s the best relationship 
When both sides don’t want to quit
Not because they can’t end it
But because they want every bit
So ill get you what you need
What you want what you plead
Because i want you to see
How much of you that i bleed
These are my final remarks
And then ill take it to the start 
If were looking at a chart
Only you can fill my heart
All i needed
All i ever needed 
You’re all i needed
Everything i needed
I do it for you
Everything youre seein
It’s all for you
Anything you dreamin
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%2812%29All_I_Need.wav" },
      { title: "Love To Give", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `All i have is love for you
All i have is love for you
All i have is love for you
All i have is love for you
All i have to give
Is love for you no kizz 
You’re my heaven sent
No others sharin rent
 
I swear there is too much
Have to pour it out no punch
I think that you’re my drug
I just never get enough
I just want you in my life
You make everything alright
I’m with you i feel delight
Blow me up no dynamite 
I promise i’ll never lie
Everything i say is mine
So when i get intertwined 
I mean that to the finish line
All i have is love for you
All i have is love for you
All i have is love for you
All i have is love for you
I try to make it clear
This love i have is dear
I’ll keep you close and near
Satisfied wit no fear
I hope you understand
How much love i have amen
More than just friend
You are my one reason
Why i get up in the morning
Make my life all fun not boring
You’re the one that i’m adoring
Love so loud my heart is roaring
I’m with you my love is soaring
Give it out now you’re restoring
Have so much it’s all out pouring
Spend some time now we’re exploring
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%2813%29Love_To_Give.wav" },
      { title: "Perfect", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Oh how you’re perfect and you don’t know
You make it worth it this lonely road


The way you shine so bright
You could light the night
You don’t even try
Yet you’re still so fine
Every move you make
You can’t make mistake
When the clouds turn grey
You can make it day
All i want is for you to know
You’re perfect in rain or shine or snow
The way you look the way you think
Theyre so perfectly in sync
You’re too perfect for a ring
You’re an angel without wings


Oh how you’re perfect and you don’t know
You make it worth it this lonely road
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/aging-adolescence/%2814%29Perfect.wav", coverart: "Zane Tipton" },
    ],
  },
  {
    id: "machiavellian-model",
    title: "Machiavellian Model",
    date: "November 5, 2024",
    ttc: "One Month",
    link: "View project",
    coverImage: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/mm.jpg",
    bubbleLabel: "2024",
    bubbleOffset: { x: 265, y: 80 },
    narration:
      "After moving to the city and witnessing more than most in a lifetime, Zane released this project. \nA reflection of the powers that be and the villain within.",
    songs: [
      { title: "Personas", producer: "mzet \nhttps://youtu.be/rONYmVT6RqU?si=caodB_s7Fy3-VzKX", writer: "Zane Tipton", performer: "Zane Tipton", sample: "https://youtu.be/uLcxpKEMH3s?si=oeecGhyZESI4uwqa", lyrics: `Who am i?
What does it matter
Still serve it up on that platter
Like fam from the south
How they whip that batter
Where im from don't define me
I make it up as i go blindly
Who am i?
I move like a fox
Can't put me in a box
You solve my equation
I switch the location
Enjoy entertainment
Thinkin too hard you might go brainless
Who am i?
Wouldn't you like to know
You watered down hoe
You think you'll catch a vibe
But the way i ride we can't go slow
Next time aim a bit more low
Who am i?
Let's follow your dumbass logic
Cause i'm white and rap
You think i'm Logic
That's called a cameo
I don't fuck with that stereo, no, no
Who am i?

Who am i?
I juggle identities
Like the tittities
That's a simile
Albeit grittily
But who's here stoppin me
Who am i?
I study the verse
Not just universe
Yea all of us cursed
But i make it look worse
Should i keep in my lane
Or go insane
I use the whole plane
No space where i can't go
Who am i?
I'm god in this bitch
Lightin rod in this bitch
Doctor who in this bitch
Way i move in this bitch
You run like a bitch
I shun a lil bitch
Who am i?
A physicist
A lyricist
A narcissist
Gotta list of names that are on the list
I run a tight game till i finish this
Who am i?

Who i am.
I've always had the plan
Who i am.
I more than meet demand
Who i am.
I know they wanna ban
Who i am.
I took this shit and ran
Who i am.
I never needed a book
Who i am.
I make you wanna look
Who i am.
I put you on a hook
Who i am.
I ostracize a mook
Who i am.
I'm what i wanna be
Who i am.
I'm clear for you to see
Who i am.
I'm busy like a bee
Who i am.
I give you this for free
Who i am.
I never wanna stop
Who i am.
I make you wanna pop
Who i am.
I'm the best take a drop
Who i am.
Im a mess get the mop
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%281%29Personas.wav" },
      { title: "B.A.M.", producer: "SLP \nhttps://youtu.be/F78wKNB_5Dg?si=_zmGMX7pCD3ayDdN", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Think i give a fuck about the rules
I do this for myself
I don't care bout your mood

Think i wanna spot up in your crew
I sacrificed too much
To be losing all my cool

Think i give a fuck about the rules
I do this for myself
I don't care bout your mood

Think i wanna spot up in your crew
I sacrificed too much
To be losing all my cool

Don't know the places that i been
Things you just can't comprehend
I seen the stars and didn't get go blind
But most would just be paralyzed
I'm livin state to state
You can't find my license plate
I'm dropping calls and debts
Pay no attention to the threats
Most wanna see me fall no winnin
But i'm standin tall for the height i'm feinin
I'll do anything already passed my ceiling
By any means that's B.A.M. the meaning
Always get what i want
No need to stunt
Stay servin cunt
Candy from baby
Can't be lazy
Smokin crazy
Vision hazy
I see my mark and i go get it
Never had to stress about some limit
All that i've done you think god give it
But no that's me sorry i'm conceited
It's hard to believe but i know you see it
Walk a lil different
And talk a lil different
Seem a lil different
Cause i'm a lil different
When i gotta target
I always hit it

Think i give a fuck about the rules
I do this for myself
I don't care bout your mood

Think i wanna spot up in your crew
I sacrificed too much
To be losing all my cool

Think i give a fuck about the rules
I do this for myself
I don't care bout your mood

Think i wanna spot up in your crew
I sacrificed too much
To be losing all my cool
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%282%29BAM.wav" },
      { title: "Machiavellian Madness", producer: "mzet, MOE Beats \nhttps://youtu.be/rX84gnypYrc?si=wzPzYZUZVM0fVRS5", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `I stay uptight
Cause i’m searchin for the light
To give what you need
Hold it on tight
I can’t yet sing
Too much brain for this mic
Come back in a year or so
I’ll have it down right
But until then 
I’ll see you take flight
That’s why i do this here
To put you in cashmere
To pave you a road
To give you a goal
Of making it better
This life that you sow
The way i see it
If you see me go through it
You know you can too
So i can’t be a fool
Gotta stand on my toes
Gotta watch for the hoes
Gonna keep in me check
And i’ll do the same for those
The ones that take the chance
Of charging the lance
And doubling the stance
Of working on their dance
So when they lose sight
They return to the fight
If it’s dust you bite
Overcome that plight

Savior complex when i walk
This life will perplex when i talk
The curve convex when i balk
I place my hex when i stalk

You can reach the sun with it
Cookin up a bun with it
Go have fun wit it
Till you start to run with it

Ima switch up the flow
For you that already know
All the one that seen me grow
All the times i was at my low
And hit rock bottom
I’ve had my share of problems
And i’m not done yet
I mean look at this vest
It’s full of bullet holes
Foretelling of my goals
They dangerous
They play with us
They lay with us
They aim with us
They gain with us
They bang with us
So i keep at least eighty-eight grenade with us

When shit gets heavy
I pull the pin
Lose or win
Rub a djinn
Get a win
Take a twin
Make her bend
Dribblin
Till i grin
Now i’m in the loony bin
If you don’t like where it’s goin
You can take a trip to Fin
Land on the porch
The more you know
more you lurch
Sicken from your church
Tho i could be the cure
Your security for sure
Something of a blur 
Through my vision you’ll concur
Livin chaotically
You might find chemically
You were livin fallacy
Comin back to palaces 
Gettin that comfort
Linkin up wit lover
But don’t stop now
Don’t give up when it’s round
The corner is your former
Destination you wan her
Can’t drop dead
Till your fuckin with coroner
Plenty rest 
When you gravin as a goner
Then you’ll never ever be a loner

Savior complex when i walk
This life will perplex when i talk
The curve convex when i balk
I place my hex when i stalk

You can reach the sun with it
Cookin up a bun with it
Go have fun wit it
Till you start to run with it

1,2,3,4,5,6,7
The places i reach 
Are better than heaven
Rising like my bread
They call that leaven
Won’t stop till i’m dead
That’s two times eleven
Everytime you feel like your bout to stop
Just do what i do and go till you drop
Then pick it back up from where you left off
Nothing stops you from getting to the top
I never had a doubt
I never had a fear
I never had a drought
Cause i never shed a tear
Anytime i stress bout the current atmosphere
I remember i’m the best in any hemisphere
Just watch wear you step cause a mine might be near
Bend i won’t break, impossible to shear 
Nobody comin from the future to stop me
So i must be doin right can’t crop me
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%283%29Machiavellian_Madness.wav" },
      { title: "Apophis", producer: "Sapjer, Morgan \nhttps://youtu.be/u5_56aAc9Os?si=Nyt4a2Glgk9mcHW4", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Chaos
In this life i stay lost
Addicted to my vices
Hopin one day they pay the cost
Cover up my identity
So this is their only memory
Fill my life with insecurity
Always looking for what's new to me

I just talk bout my shit
I don't really rock with my shit
I wanna move on from my shit
But i still hold on to this shit
Only thing i got left in this bitch
Before i give up dead in this bitch
I can never help myself
So i turn my pain into wealth

Ever felt like you can't fix yourself
Runnin in circles while never getting help
So you start to spiral and disregard your health
Always seem chiral when looking at yourself
Difficult to make connections
Too busy making corrections
No matter where you go your pinned in
Happiness always has an ending

This the life of the enemy
Misunderstood
Never had some harmony
If this is truly the best that i can be
I mean can you really blame me

I have to fuck it all up
It's in my blood i have to lock it all up
I never open walls up
Cause when i do i have to hang the call up

Here we go again
(Here we go again)
I lost another friend
(I lost em all)
I never talk to kin
(Never ever)
Claustrophobic in my skin
(goddamit)

Never really felt at home
(Never felt at home)
So i stay stuck in my dome
(In my head)
Not the best place to roam
Never change, i think i'm made out of chrome

Had love but lost it
I'm sorry love i crossed it
It seems i need the mosh pit
But worse now we'll never meet our kid
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%284%29Apophis.wav" },
      { title: "Last Laugh", producer: "Orsix \nhttps://youtu.be/-UHslCS09mQ?si=LdhrZcDXPCaYdHOU", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Don't worry, this not about you
It's for my other one
I mean my second one
I mean my third
Let me stop
Fore i run out of fingers
Cause the rest are in my fourth
I'm traveling north
Too much heat in the south
Heard this word of mouth
Don't need the gram
Emerging from sand
Like the body you tried to bury
Look i'm not in a hurry
Oh wait damn i am
Need my time like the clock i am
Cause i tick tick tick
Till I boom boom boom
Make room for the zoom with the shroom

Let me back it up a minute
And stay on task
For i empty my flask
For too much thinking
Like your doing right now
Takes a special kinda gift
To have em reminisce
About what they had
But now it's too bad
And they're laying sad
Searching for a rebound
Still they know
There's no more soul
Since i left
And nothing will fill
The void that i left
So you turn
To the one that you left
And hope
That you make amends
Good luck with that
If i learned one thing
The flight don't last
It's stuck in the past
And you spend all your time
Searching for a high
That you never will find
Replay rewind
When i made you mine
You thought you were special
Yet so did she
And now you grieve
While i go free
Not braggin not boasting
I'm not even roasting
Just callin the shots
Making predictions
That our present afflictions
Are future omissions
To the life that we livin
When we stop fulfillin
A predetermined mission
Of only one kissin

Just talking my shit
I'm being legit
Your tryna get hit
I'm just tryna split
Cause i gotta new bit
Never celibate
I just make it fit
Now hear me get lit

Sorry that i made you feel a type a way
But you threw your one chance
One life away
We coulda just kicked it
Coulda just licked it
You had the ticket
But you bounced like cricket
And you now you're wishin
You did a lil different
But it's ok
There's still my equal
Oh wait i lied
There's never a sequel
Nobody can match my mark
I'm too set apart
Who else you know can match my groove
Can make a move
Can take a lose
And turn it to a win
I'm spinnin the wheel again
Till i get a bend
In your back
Like heart attack
Your eyes roll back
My heart go black
From all the ichor
And liquor
I tricked her
I picked her
I licked her
I flicked her
And took her
To work her
Her ass over
Summer

Take a lil picture
It'll last long
Never forget
When i put you that song
Gassin you up
Like i lit that bong
Push it to the side
I remove that thong
Never had morals
So i can't do wrong
I can tell you agree
By the way you moan
Addicted to the life
The one that i shown
Next time you see me
You'll have to get flown
To a different country
That's where i come from
Hear it in the voice
In my drawn out tone
You can ride the horse
Up all night long
Hit it with a mallet
Like i struck that gong
I picked you out
From the street filled throng
Hate that i left
Now that i'm gone

Look
Keep pretendin
You don't wanna book
Some time with me
Cause you know i cook
Better than them
I had you shook
I can keep you round
I got you on hook
Top to the bottom
I move like a rook
I can have you comin
Flowin out like a brook
Stole your heart
Now you think i'm a crook
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%285%29Last_Laugh.wav" },
      { title: "Through and Through", producer: "Rhino Beats, Artem from Vybez Studios \nhttps://open.spotify.com/track/5sFBR7MTSNuaKkZFF4OgP5?si=04c307c69af94b4b", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `Through and Through
I make my moves
Only way i know how
Placin sweat on brow
Things move back and forth
Push and pull with the force
Stayin out with them
Lock doors no comin in
Not till you sin
Not till you grin
Verity chagrin
Movin through dimensions
I got like ten of them
Lovers and friends i'm spinnin em
There's no difference when i land
On my own two feet
Or maybe six
Seeing how i run three
You say complicated
I say overrated
After what we overcame
How is that still a game
This is just day by day
Through and Through
The planet i move
The mountains i climb
The oceans i dive
The things i leave behind
I know what's forward
Thats time
It keeps moving on
Whether you like it or not

It'll take your spot
You can jump on the ride and go
Or be left on the floor
I don't make the rules
I just move and adopt
To my habitat
Whatever that means to you
Let it be my truth
Like chameleon
I'm high from the freon
Aggressive like klingon
I've got the subpoena
I take you to court
But i'm not tryna court
Just keepin it short
But if the stars align
And i get round two
Best know i'm comin
Through and Through
What?!?
You don't like that answer
You wanna hold me back
I don't blame you
See greatness walk by
Wanna piece of the pie
But look that's just me
It wasn't in the plan
It was just how i came out
It's just how i sprout
I don't mean to place distance
But I'm distant cause i'm living in the future
Where time moves faster
Cause we think more
And we do more
Why not start today
That's all i say
When i decide my play
That's just the way
I live day by day
Through and Through
Make your next move
I know i'm making mine
Waking up to the shine
Upon my face
I'm sticking my neck out
Showing my weak spots
But i never let my guard down
Good luck getting a hit
You'll never get a lick
Or maybe you will
And that was in the plan
But be careful with collateral
When you get to the top
Don't let the ladder fall
Long way down
But i'm not scared of heights
So i take the plunge
One to the head like grunge
Absorb it all like a sponge
Think i do this shit for fun
Thoughts inside my head
Can't be undone
It's too late for me
So i'm dragging you down
Showing you the road to hell
So you know the way and how to avoid
What will destroy
What can't be koi
I never feel joy
I never been a boy
Skipped to adult
The skin i molt
Shot out like a bolt
Never been a dolt

Continue with the story
I don't like when it's boring
I prefer when it's pouring
When it seems it'll never quit
Most days i just keep it lit
Like a bonfire with the kerosene
I burn bright burn fast
They say stay evergreen
I say stay lean
So you slip through the cracks
And get what they lack
Comin in all attack
I've got the finisher
To finish yuh
Then i'll replenish yuh
So i get to refinish yuh
So you know i'm serious
So you know i'm delirious
Thats just the sentencin
Ten months countin em
Fluid like brownian
Now i'm crownin kin
Best of the best
I don't take the rest
Cause i never settle
Made of a thicker metal
Best believe i'm here for the medals
Switchin gears
While i'm steppin on petals

Breakin hearts
Breakin kettles
Smashin plates
Rippin letters
Linkin fetters
Killin critters
Never bitter
Still a winner
Stay a sinner
Flowin prose
Chronic throes
Changin clothes
Raiding those
Wayward woes
You know, the way it goes
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/machiavellian-model/%286%29Through_and_Through.wav", coverart: "AI generated by my prompt" },
    ],
  },
  {
    id: "the-house-that-built",
    title: "The House That ____ Built",
    date: "January 15, 2025",
    ttc: "A Month and Two Weeks",
    link: "View project",
    coverImage: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/thtwb.jpg",
    bubbleLabel: "2025",
    bubbleOffset: { x: -10, y: 60 },
    narration:
      "Yet he couldn't help but see a much larger perspective. \nAn alternative approach to success. Not just for the parts, but for the whole.",
    songs: [
      { title: "Novelty", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_1.wav" },
      { title: "Obstinance", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", sample: "https://www.youtube.com/watch?v=3_nprPycZow", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_2.wav" },
      { title: "Company", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_3.wav" },
      { title: "Settlin", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_4.wav" },
      { title: "Cookin", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_5.wav" },
      { title: "Planning", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_6.wav" },
      { title: "OCD", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_7.wav" },
      { title: "Ataraxia", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_8.wav" },
      { title: "Fatigue", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_9.wav" },
      { title: "Restlessness", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_10.wav" },
      { title: "Absolving", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_11.wav" },
      { title: "Spirit", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_12.wav" },
      { title: "Clarity", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", sample: "https://www.tiktok.com/@ufc/video/7614256188338752799?lang=en", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_13.wav" },
      { title: "Chronos", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_14.wav" },
      { title: "We", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", sample: "https://www.pbs.org/pov/films/tokyouberblues/", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_15.wav" },
      { title: "Was", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/the-house-that-was-built/thtwb_16.wav", coverart: "Artist Unknown" },
    ],
  },
  {
    id: "pink-skyze-blue-hise",
    title: "Pink Skyze, Blue Hise",
    date: "June 5, 2026",
    ttc: "A Year and Two Months",
    link: "View project",
    coverImage: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/psbh.png",
    bubbleLabel: "2026",
    bubbleOffset: { x: 275, y: 100 },
    narration:
      "So during this project, visions of the future began to appear. \nA revitalization of the self and a method of overcoming the difficulties it would take to get there.",
    songs: [
      { title: "i don't smoke and yet my gums still bleed.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Yea
Mm mm mm
Yea
Mm mm

When i fall 
I see through
I stand tall
I bleed through
And pick my own direction
I don’t need your reflection
I don’t wanna be you
I don’t wanna fade in 
I don’t wanna see you
Take all i’m making
I can’t fall in pieces
And i don’t need your jesus
You lie to me, malfeasance
And i can’t with all the grievance
I don’t need a reason
To live out every season
I’m not into the pleasin
True freedom is not treason
On the bay and on the ground
I’m the one with all the sound 
And look here what i done found
It came back it went full round
I know what im fightin
There’s no message im typing 
I’m only gonna call in
What i see in the writin
So what if im tardy
I’m not late to the party
Just now gettin started
Cause im the one with the hard head
Shout out dearly departed
If there’s a problem i sort it
I’m on attack till we guarded
I hit the gas till i floored it oh

And im falling oh
But i stallin oh
Till im forty oh 
And i’m sorry oh
If i’m gory oh
With my story oh

I can’t go where I come from
No more yea they done
I don’t look at my pay stub
I just rock until the days up
And when night comes I stay up
I don’t hear what they sayin 
And i might go break some
Cause i got no patience

I can’t go where I come from
No more yea they done
I don’t look at my pay stub
I just rock until the days up
And when night comes I stay up
I don’t hear what they sayin 
And i might go break some
Cause i got no patience

Every time i come off me
I don’t give out no apologies
I done said what i said don’t call on me
I did what i did and you follow me
And i don’t take shit i unlock it
All the talkin i clock it 
I don’t fall in i’m just all in
If you call i might just block it
What else could i do
You just come in and break all my shit
Now you’re finally getting all that is due
You won’t even know what had hit
Now hold on 
I am not afraid
And i just go my own way
And i just take it day by day
And i watch you watch me watch my play

And i say now
I’m around
Fill your heart 
With the sound
Too astound and profound
Then i come back to town
With the bass and the drum i will pound

Yea
With the bass and the drum
I won’t take it run
I’m a stand with the gun
And i’ll point at the sun
Cause you all lick a boot
But i know what’s true
With a pink skyze view
Got the blue hise too
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk1.wav" },
      { title: "the oracle at delphi got nothing on me.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Took a ride in the sun
Thought i was finding me
And when i lie down
Don’t ever let me sleep
I’m more than a thought
I’m there empirically 
And i don’t hold my tongue
I won’t speak carefully

Yea i know it’s not fair
But i don’t ever despair
And i don’t really care
Cause you never were there

Done accomplished
Everything thrown my way
And i gotta polish
But i take it day by day
Power is in me it was never all up to you
I don’t care to believe all that you gonna say and do
I know what’s best for me 
And i see me on a beam
Only see you on a screen
You’re not even real to me 
All we done and did
You know that we are candid
We cannot lie to you
The way that these leaders do
Fuck and sicking tired of this being for nothing
For the longest time i thought i had something coming
But no some things don’t work so the demons i summon
And i can’t succumb to doubt 
And im through with the frontin
This surround sound
Comin to you loud now
And i make a vow now
Never want you to bow down
Just want to see you to stand proud
And we gotta raise your voice loud
Cause we all gotta break bounds

This is it
If i don’t make it here
I don’t make it anywhere
And ive come to the conclusion
That its not entirely up to me

Sure there are things 
I could improve
But i’ve come to also come to realize 
That there are powers at play
That dictate parts of our lives that we cannot even see
And yet we have the audacity of free will
All that i’ve done and all that i will do and all that im currently doing and ive seen nothing come out of it
It makes me wonder if someone else is reaping the fruits that i sow
If that’s the case 
Well

Coming to the top
And when i get you
Ima take your spot 
I’m gonna wrench you
Out, the way you took everything from me
I don’t pout i just sit back and wait patiently
Till you drop, you look ancient to me
Time of death i’m not faking the fee
No
So i stay calm and i parlay
Cause i know at the end of the all day
I’m the one that’s dancing round of ya’ll grave
There aint nothin left to say to me no
You can’t even fuckin pray to me no

To save a life
Ima pay the price
Take a knife right
Up to a gun fight
You pulled the wool o’er there eyes but not me
I’m a sheep in a disguise of wolf country
And i don’t play this game you’re gonna sit down
Till i come over there and rip up all your shit down
I can’t even fuck around with all you clit clown
Ima kamikaze through the shit you put down
And you feel the flow you wanna beat me down
So i cut the toe i’m gonna tip the tau

You fuck with my future 
Fuck with my time
And i’m fucking your face with a blind eye
And it’s your life that i wanna finalize
And i can’t have a fucking son you fucking mm mm
When i come in runnin circles round your kin 
You gon wonder what you gonna have to do to settle in
But there’s nothing you could ever do
A shallow grave you’re in
And i see through all the sin that you spin
You done fucked me over
To just box up in a bin
Shit mm
I’m a compete
Just know i never lose
It’s all on me
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk2.wav" },
      { title: "too many decisions and none of them lead to you.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Yea
Mm
Yea
Mmm mmm mm mm
Mmm mmm mm mm
Mmm mmm mm mm
Yea

Big dreams big plans be livin like
Big damn
I could put your ass to sleep that’s a sand man
But even peter parker couldn’t wham bam
And i don’t wanna sue with the violence
But i wanna take your heart to guidance
And i don’t wanna come with the ties in
So i gotta couple foes that im fightin 
And i can’t ever fall can’t sit down
So you know i stand tall got the queen crown 
Tryna kennel up a dog but i can’t pound 
Talk a bunch a new shit with an old sound
And i puttin up a song with a city
And you know that im prince of the petty
I ain’t ever let it go i ain’t ready
So im drummin on your hoe she a baddie

And i sit back and i look pretty
And you know that im not kidding
And dont wanna side with a bed in
I feel that the fire woulda fit in
And i don’t know if i got the red eye
But i think mighta find my third eye
You dont ever cross me im the bad guy
And i never take a loss im a wise guy

And i sip the soul pour a dirty yah
And i fit the flow when i flirting yah
You gon get the pole you a birdy yah
You a pain in my ass you a hernia

Show never over till i curtsy
On an island with pigs like circe
I don’t even need a drop i’m not thirsty 
And i cutting up a snake like percy

And I don’t see how 
You don’t see your the problem
You da fentanyl
And i dont feel you 
In the back of my mind
You the rearview
Too late for you now
You gon watch how i put you in a gown
And you never were nothin even to me now
And i won’t ever stop until i’m proud

I know we’re all the same
We lost here 
We talk here
We fucking things
It’s all clear
It’s all near
It’s all germaine
With all the rain
Down on me
What can i be
How can i see
My way through
I call on you
To pay what’s due
And give your life
To end the strife
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk3.wav" },
      { title: "a dance for tú, i bid you ado.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Yea
Uh huh
Damn right

Walkin up and down the aisle
And i’m feelin good with a smile
Ain’t felt this way in a while
But the look that you giving is vile

And you gotta call me papi
There’s nothing you could do can’t stop me
And i feelin hot wasabi
When you all on my body

Down with the fantasizing
Down with the fit you finalizing
And i’m in the house resizing
And i got the evidence citing
I don’t need my thoughts in order
I dont see a country no border
Started making music recorder
Now i waking up and i court her

No fretting
No fussing
You done made your choice 
Now you cussin
And i’m bussin
While you rusting 
Better take yo meds
Robitussin

Ay Ay
Call a timeout
Ima ride out
Gotta make my move for i crash out
Gotta get it down fore the class out
Ay no
Ion know
Just how it go
I don’t make mistakes 
No typo 
And i got no respect
For da campo
And i pop the pope
Front of popo
And burning up a witch
Like toto
And i bummin on ya bitch sayin oh ohhhh
Ay Ay AY

All the times you 
Ignored me
How you fell down
And i’m soaring
I don’t do rules
No folding
I default to
My calling
No part time
I’m full time
And i come back home 
With a gourmand
Now you drying out the air
Like tucson
But i got a new bit better move on

And i break my tool 
When i talk to you
And i don’t need you
Cause i got masseuse 
Now you gettin wild
You belong in a zoo
Actin juvenile
Lemme time yo shoe
Took what i had opportunity 
So you know just what i soon to be
Now you don’t get none get none for free
And to sum it all up, i got a-d-d

No stopping 
I clock in
I’m poppin
And mocking
You sullen
I posing
You moaning
And groaning
About this 
About that
I’m on track
Get over dat
Got da good cat
And a nice rack
Gonna get cracked
I’m that snack
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk4.wav" },
      { title: "ignoring the flight safety check.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `You see me 
In a solid black tee wanna be me
But you never ever ever gonna keep me
Only got one choice to compete me

And i say
That i am 
On my way
I wont pray
I won’t fall
I won’t break
I stand tall
All the way
Yea

You see me 
In a solid black tee wanna be me
But you never ever ever gonna keep me
Only got one choice to compete me

And i say
That i am 
On my way
I wont pray
I won’t fall
I won’t break
I stand tall
All the way
Yea


I top off
I rise in
I don’t got no more ties in
I’m swimmin
I’m flyin
I got two twin geminin 

I top off
I rise in
I don’t got no more ties in
I’m swimmin
I’m flyin
I got two twin geminin 

Got a couple hits im shinin ay
Got a couple dips all grind ok
I don’t want sit in silence nay
Swinging out the bitch like tarzan hey
Bet i oughta break the ocupade 
Done playing games i don’t play arcade 
Yea im gonna doc but i don’t give aide
Chillin at the top but i dont get paid ay

Ima sign what im sayin yea
Bet it come wit a payment ay
Do it all for entertainment yea
Not one your good at taming ay

And i start where the fame end
I don’t wanna cave in
Told you time and time and again
I don’t stop when the lane end

You see me 
In a solid black tee wanna be me
But you never ever ever gonna keep me
Only got one choice to compete me

And i say
That i am 
On my way
I wont pray
I won’t fall
I won’t break
I stand tall
All the way
Yea

You see me 
In a solid black tee wanna be me
But you never ever ever gonna keep me
Only got one choice to compete me

And i say
That i am 
On my way
I wont pray
I won’t fall
I won’t break
I stand tall
All the way
Yea

Hahahaha 
Fuck it’s fun!

I don’t know if im gonna be the one to do it
But what i gotta do needs to be done!

I said i don’t know if im gonna be the one to do it
But what i gotta do needs to be done!

Mask off not subtle i been
Tipped off on the double
Now im siftin through the rubble
I been griftin making trouble
You been fuckin up a fumble
You be livin in a bubble
And you wanna see me struggle
But i’m way above your level ayyy

Aint no controlling me
Let the I.V. bleed
I don’t need ig
I get hoes naturally
With the natural titties
I got goals you’ll see
Ain’t no exploiting
Cause you’ll never be Z!

I’m so extraditious
Ain’t no pessimist
Only optimistic
How i visualis this

I know how to fall a business
I know how to trim the hedges
I know how to rile the peasants
I know cause we on a vengeance

Bought no home, rent apartment 
Burn up like a comet
Two sides like im garnet 
Essay not no comment

I been in a zone with za men
I wrote a poem on the parliament
I been in a coma with the common
I been flowin with the flaw in
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk5.wav" },
      { title: "how come i never FEEL successful.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `There’s one thing i know it is myself
I don’t belong on a shelf
Dealt a bad hand now i got good health
So i’m on payback and spread the wealth

Let it all pour out of me
How could you not learn from history
Sometimes i feel i’m goin insane
They play with our lives like some damn game

Maybe one day ill leave this plane
But before then they’ll know my name

Yea yea ay
And until then ima top now
I come back home when i walk down
Put and two and two together make it compound 
As a fox we ain’t friends you ain’t that hound
And i’m drumming up a gun like tommy
I don’t zeal im a zoo you a zombie
Ima villainize you like a commie
I dont like the attitude you lay on me
And i can’t put no more dayyys in
Livin on borrowed time i phase in
Ima kill any cop that’s tasin
There ain’t no god that im praising 

And i let yall speak through me
Go a head pass a blunt roll a doobie
Either way none of ya’ll can fool me
Cause im picking up on clues like scooby

And im on the scene
Buildin life i breakin benzene
See it all 
Yea my hindsight keen
Pull it straight it from the source
Ima glean
Take ya ass back to class 
Ima dean
Catch your breath let it soak
Marinate
Rise above all the shit
Levitate 
Even though i don’t wanna date
We can bring it back home fornicate
Cause i’m livin two lives on the lake
And im telling my own tale Alan Wake
But i don’t gotta scratch on my case

Like a jaunty 
I don’t wear no watch got no timepiece
Cause i know while im here ima find peace
And i don’t got the time for the fine things
So ima make it all count archimedes
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk6.wav" },
      { title: "the sounds of space keep me in place.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `I don’t know where i
Get all these feelings
But sometimes i feel
Like i am derailing
I look with wide eyes
Up at the ceiling
And chart the night sky
Hoping it’s revealing

I know my time will come
But i won’t lie im young
I can’t die yet cause i
Have so much yet to hum 
And all our fantasies
They can’t be make believe
It’s up to us to see
They become memories

And by the time that i call
I know that you’ll be appalled
That i done made it here at all
But truth to be told i still feel small
And all we’ve seen and all we’ve been through
I know that we’re gonna make it through
You ain’t got count on me count on you
Despite the blue hise see pink skyze too

I’m gonna shine bright cause i know im faded
And if the times right hope im not belated
Whatever comes next know i cant evade it
I don’t want die yet i just want it dated

I don’t know where i
Get all these feelings
But sometimes i feel
Like i am derailing
I look with wide eyes
Up at the ceiling
And chart the night sky
Hoping it’s revealing

I know my time will come
But i won’t lie im young
I can’t die yet cause i
Have so much yet to hum 
And all our fantasies
They can’t be make believe
It’s up to us to see
They become memories
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk7.wav" },
      { title: "i'm blind from the things that i'll never see.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `I don’t know where i
Get all these feelings
But sometimes i feel
Like i am derailing
I look with wide eyes
Up at the ceiling
And chart the night sky
Hoping it’s revealing

I know my time will come
But i won’t lie im young
I can’t die yet cause i
Have so much yet to hum 
And all our fantasies
They can’t be make believe
It’s up to us to see
They become memories

And by the time that i call
I know that you’ll be appalled
That i done made it here at all
But truth to be told i still feel small
And all we’ve seen and all we’ve been through
I know that we’re gonna make it through
You ain’t got count on me count on you
Despite the blue hise see pink skyze too

I’m gonna shine bright cause i know im faded
And if the times right hope im not belated
Whatever comes next know i cant evade it
I don’t want die yet i just want it dated

I don’t know where i
Get all these feelings
But sometimes i feel
Like i am derailing
I look with wide eyes
Up at the ceiling
And chart the night sky
Hoping it’s revealing

I know my time will come
But i won’t lie im young
I can’t die yet cause i
Have so much yet to hum 
And all our fantasies
They can’t be make believe
It’s up to us to see
They become memories



i’m blind from the things that i’ll never see.

Producer: Zane Tipton
Writer: Zane Tipton
Performer: Zane Tipton

Lyrics:


22 years and counting
Thought i’d be dead
Now doubting
Well since im here ima make the most and dance
Cause i don’t know if ima get another chance
I’m just doing everything that i know to do how
Make it up as i go there ain’t nothing new now
Overwhelmed a little i don’t mind it
Cause i solved the riddle now im timeless

Damn this the life that i chose
Didn’t know how to handle all of my woes
So i filled it up with chains, highs, and bad hoes
And emptied out like all the food from a silo

What i’m saying is that
I like it like that
Compared what i had 
I never had it like that
The ability to choose your life 
And live as you see fit
Βetter or worse
Now im livin what im dreamin 
Ay

Tell the future from a felony
And i gave it up all even family
So you all might remember me
Before i crash and burn out eventually

Do i even want it or should i quit now
But i done gone too far for the fit now
So ima show how to craft it build it all wow
Never seen a future so bright from a song now

Take the damage and the pain that you feel
Lay it down as a lesson for those in the field
Cause i know they gone need it to earn their best
Matter fact ima need just to find rest 

Don’t you see all we do is the future
Live in the present keepin ties in the culture
Stay ever vigilant watch out for the vultures
Cause you know they tryna ride you like a coaster

And i gave it all up, made investments 
Now all i do is run it up countin blessins
All caused i didn’t settle stopped undressing
And get fucked in the ass by a damn reverend 

See they told you the power comes from them
But i’m the proof to see it comes from within
Do everything i want everything i please yea
Cause i know just who i wanna be yea

This supposed to be the outro
But i put in the middle so you all know
How it feel inside how it all go
Enough to make you stop and panic wanna say whoa

Yea
See all the pain all around me 
And then i feel obligated to astound thee
To give you hope for a future you never thought you had
And live it up so you see it ain’t all bad 

And then i see
A part of you
And a part of me
On a side of us
In a world of we
Given time
We can be
Anything
We choose to be
Don’t you see
We’re all we need
To survive
And to thrive


I’m proof you see now
I don’t need money
I don’t need fame
I don’t need some kind of security that tells me that i’m living my best life
I just live it
Whatever i dream it becomes reality
And i only dream good things now
Never nightmares 
Because that’s what i choose
I choose me
I choose my life
And i hope you choose yours too
Or what’s left of it anyway
Don’t let it slip by
It’s over before you know it

So live it up bitches 
The rest is on me 
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk8.wav" },
      { title: "bad bitches break bread.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `I would give it all up for you
I would give it all up i
I would give it all up for you
I would give it all up i
I would give it all up for you
I would give it all up i
I would give it all up for you
I would give it all up i

Take the lead ima follow you
Just tell me what you wanna do
Take the lead ima follow you
Just tell me what you wanna do
Take the lead ima follow you
Just tell me what you wanna do
Take the lead ima follow you
Just tell me what you wanna do

I’m done tryna please yuh
Just wanna leave ya 
Think you bad 
Bitch i’m badder than you
I told you id get it
Watch how i live it
Take all you are
Do better than you
You push and pull
You shit like a bull
You lying it’s true
I see right through you
You got attitude
Cause i’m your whole mood
You think that im rude
But you’re lookin at you
So watch…
Watch me take your style
Might just stay for a while
Eventually leave with your smile
Have you wet like the nile
Think that you gone a whole mile
But no you’re just one in pile
I’m taking your job like AI oh
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk9.wav" },
      { title: "signing the dotted line etc.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `The devil called my phone
Said shewanna make a deal (ah ay)
I see you look alone
Do you want someone that’s real (ah ay)
See right through your tricks
I know there is a catch (ah ay)
Nothing worse than this
Its a deal that i pass (ah ay)

And the devil call my phone
And i pray that i lockjaw (lock that jaw bitch)
I can tell just by your tone
That you pray i don’t block ya (block that phone bitch)
And the devil call my phone
And i pray that i lockjaw (lock that jaw bitch)
I can tell just by your tone
That you pray i don’t block ya (block that phone bitch)

And i kill the booze
Got a short fuse
Ima kill em 
Ima slide em 
Ima eat it up
And i kill the booze
Got a short fuse
Ima kill em 
Ima slide em 
Ima eat it up
And i kill the booze
Got a short fuse
Ima kill em 
Ima slide em 
Ima eat it up
Ima kid em 
Ima slide em 
Ima eat it up
Ima kill em 
Ima slide em 
Ay Ay

I see that you wanna come and top me
Cause you know that you never coulda been me
And I promise that this song ain’t about me
But you lookin through your phone you ring me
Every time that wanna give a side eye
You go blurry with the vision you go tie dye 
Now i’m checkin for a pulse at mount sinai 
Cause the way im breakin hearts im a real lie
And I fine that ima sinner do no wrong 
I’m just taking what im given and I flip that on you
Now you comin at me tell me wanna come through
But you comin at me with a knife I caught you
Tryna stab me in the back just wanna love you
So you wanna play a game ima play it too
And I do it way better than you ever knew 

Now iiiiiii
Won’t siiiiign
My liiiiiiife
Awayyy to you

Now iiiiiii
Won’t siiiiign
My liiiiiiife
Awayyy to you

Nope!

Why’d you turn it down
Go and bring it up
Do no harm babygirl
Ima eat it up
Why’d you turn it down
Go and bring it up
Do no harm babygirl
Ima eat it up
Why’d you turn it down
Go and bring it up
Do no harm babygirl
Ima eat it up
Why’d you turn it down
Go and bring it up
Do no harm babygirl
Ima eat it up
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk10.wav" },
      { title: "finding missing puzzle pieces.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Lead a life you wish to live
Lead a life you wish to live
Lead a life you wish to live
Lead a life you wish to -

And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What your lookin at is straight history
And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What your lookin at is straight history

Forgotten more than most have learned in a lifetime
If you took my eyes then surely woulda gone blind
Keeping up with this you're gonna need a timeline
Present, past, and future claim it all
It stays mine
Done this way too long so you know my skills hone 
Before you talk to me better check that tone
Never see a face i only ever hit prone
Get a glimpse of me and then i’m -

Forgotten more than most have learned in a lifetime
If you took my eyes then surely woulda gone blind
Keeping up with this you're gonna need a timeline
Present, past, and future claim it all
It stays mine
Done this way too long so you know my skills hone 
Before you talk to me better check that tone
Never see a face i only ever hit prone
Get a glimpse of me and then i’m gone

And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What your lookin at is straight history

And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What you're looking at is straight history

Seen all no surprise in this show
Can’t get to me, i’m my only foe
I don’t want love i live for the flow
Now watch close as i reap what i sow
You play with this like it’s a game
I waste no time saving no dame
I end you, you’re better off maimed
Now best put respect on my - 

Seen all no surprise in this show
Can’t get to me, i’m my only foe
I don’t want love i live for the flow
Now watch close as i reap what i sow
You play with this like it’s a game
I waste no time saving no dame
I end you, you’re better off maimed
Now best put respect on my name

And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What your lookin at is straight history

And i feel
That i’m way too real 
I don’t make no, no goddamn deals
I just cut up all them heels
And i - ay - oh
You could never live as fast as me
If you were to try die tragically
Never wonder why im a masterpiece
What you're looking at is straight history

And i feel
That im real
All it took was a seal 
With myself
I would find 
And i would
Have reached my
My own side 
Of the light
Of the light
Of the light
Of the light
Of the light
Of the light
Ay

And i feel
That im real
All it took was a seal 
With myself
I would find 
And i would
Have reached my
My own side 
Of the light
Of the light
Of the light
Of the light
Of the light
Of the light
Ay`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk11.wav" },
      { title: "the last time i'd serenade.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `But i dont need you you dont need me
But i ain’t really given out apologies
I like a beauty in a party it’s a part of me
So im never really sorry when i give you a tease 
Said i dont need you you dont need me
But i can’t stop gawkin when you talkin to me
I got new things on my mind yea they coming to me
And so i pack it all up it ain’t nothing me
Said i dont need you you dont need me
You wanna bring your friend
That’s ok with me
I mean she kinda like your twin 
She a siamese
Yea one plus one is two but it’s always better with three
Said i dont need you you don’t need me
But if she crave attention she can get it from me
Is it really still a sin to put a bitch on her knees
Cause the way she gettin down it’s kinda gettin to me
Said i don’t need you you don’t need me
But i’ll never say no if you’re calling for me
Said i don’t need you you don’t need me
But what you wanna do you can tell it to me
Said i don’t need you you don’t need need me
But i never can deny that it’s you i wanna please
Cause i don’t need you and you don’t need me
Girl i understand the message only got you on a lease
Cause she ain’t it do for love yea she just riding
She just wanna get back to it on her grinding 
Make her feel it so good
Yea have her smiling
Then you let her go cause you know that she wilin
She ain’t really your girl she disguising
Let her be own her girl let her put a mile in
She gone line em up count em up single filin
Cause she know she got all the choice all the option
Way she feelin all the curves on her body
Make her wanna go out all night 
Wanna party
She don’t wanna listen to you
She just get rowdy
Always on the move 
On a trip she a saudi
She won’t ever wear your leash
Now she calling me
Cause she know it’s right
I don’t hold on tight
I just go for the night
Cause that what she like
When it’s her in the lights
And she feel it in her thighs

She just wanna feel good
She just wanna find rest
She ain’t into the stress
Got no need for sunday best
Cause when the night come
Throw it back cause she blessed
Then she move it on up 
Got the back in her chest
She just wanna feel sexy when she poppin
Cause she know it’s all her damn when she bossin
You can’t even take your eyes off got you locked in
Cause it’s in the way that she moves when she tossin you

She a natural
That’s a factual
Unnattatchable
Never passable
Way she passin you
She could stop a room
Thats her only goal
She do it all for show

She a natural
That’s a factual
Unnattatchable
Never passable
Way she passin you
She could stop a room
That's her only goal
She do it all for show
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk12.wav" },
      { title: "taking deep breaths but i barely get a hit.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Wanna see you iced out
Wanna see you piped down
And i know that i might sound
A bit out my mind now
But go and put the lights down
And you’ll feel how i bite down
With the teeth
I don’t want your problems or the beef
I just wanna keep you all up out the street
Fore they chop you up like meat
Cause we both know that you’re way too sweet
Then you saw me 
And it’s all real
And you know that
I’m a big deal yah

I know youre bad i know youre fine
I don’t hesitate when you cross my mind no

Irresistible 
Delectable 
Edible arrangements
And i’m smellin on your fragance
And i come with a cadence
We don’t both got patience
You telling me to slow it down
But then you get low and turn around
And i don’t wanna fall back
I don’t want me 
I just want you all back
You done drug me
Now i’m waiting on a call back
Like my time free
I ain’t finished with you no ay
And i really wanna visual
Better yet we get physical 
Then we leave a residual
Cause your feeling me
And i’m feeling you
Tell me what is left
To say or do
Except get down with you ay

I don’t do phone calls
Wanna card your face
We can only do that 
When we face to face
And you at my place 
Yea come to my place
I just wanna taste`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk13.wav" },
      { title: "sometimes clouds just look like clouds.", producer: "Zane Tipton", writer: "", performer: "", lyrics: `Wanna see you iced out
Wanna see you piped down
And i know that i might sound
A bit out my mind now
But go and put the lights down
And you’ll feel how i bite down
With the teeth
I don’t want your problems or the beef
I just wanna keep you all up out the street
Fore they chop you up like meat
Cause we both know that you’re way too sweet
Then you saw me 
And it’s all real
And you know that
I’m a big deal yah

I know youre bad i know youre fine
I don’t hesitate when you cross my mind no

Irresistible 
Delectable 
Edible arrangements
And i’m smellin on your fragance
And i come with a cadence
We don’t both got patience
You telling me to slow it down
But then you get low and turn around
And i don’t wanna fall back
I don’t want me 
I just want you all back
You done drug me
Now i’m waiting on a call back
Like my time free
I ain’t finished with you no ay
And i really wanna visual
Better yet we get physical 
Then we leave a residual
Cause your feeling me
And i’m feeling you
Tell me what is left
To say or do
Except get down with you ay

I don’t do phone calls
Wanna card your face
We can only do that 
When we face to face
And you at my place 
Yea come to my place
I just wanna taste

sometimes clouds just look like clouds.

Producer: Zane Tipton
Writer: Zane Tipton
Performer: Zane Tipton

Lyrics:


You say you wanted freedom
But it came with a fee yum
Gotta feel what i feed em
And im workin till i beat em
And i finally got new shit to talk about
The way that im livin how i walk that out
Watch you jump right up wanna scream shout
Cause you never seen no one with this much clout
Yea you want the fame and the fine life
But you don’t know what happens out the limelight
When the people always looking to a leader
And they sing the song wanna be yah
Everybody wanna come and talk that shit
They don’t what know what it takes to top that shit
Do you got what it takes to rock that shit
Or you livin one life you gon cuff bitch
You don’t need to even look cause you gone find me
I’m a demon in the zoo cause i’m where the wild be
Ima raise em from the dead 
Pettin cemetery
And im turnin all the heads cause they know i wear my tee

Every night i sing my song
I build right up what i lean on
Gon turn me up when i come back on
And i summon all my demons when i sermon on my song 
I know what it means to be heard too
Overcomin all your fears 
Look at you
Knowin you that you made it when you count those dues
Never missin when i’m jaded still drivin when i lose

No fussin
Ima wipe those tears
No fussin
Ima wipe those tears
No fussin
Ima wipe those tears
No fussin

No fussin
Ima wipe those tears
No fussin
Ima wipe those tears
No fussin
Ima wipe those tears
No fussin

It’s been a long road
But im back on da show
And i’m making my goal
Cause i got give em soul

So you think got it what takes to be
Someone better than great someone legendary
Better know your date drink responsibly
Cause this life got more livin than a monastery

What im sayin is it’s not all their talkin
All the glamour in the game better lock in
Bet it come with a price gotta clock in
And i roll another dice till i blossom 

Ima give you all the power that you seeking
Ima show how you how to walk in through the deep end
Ima show how to block all diseases
Hittin penicillin cuttin off the leeches

You gone find me
I be chillin at the top where the blind be
I ain’t for waiting for anyone to sign me
Ima get it till im gone ima ghandi 
Livin my dream
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk14.wav" },
      { title: "frigid but never rigid.", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: `And every hour i breathe
Without you here next to me
I get inside my head
And wish time would instead

Just freeze
I’m down on my knees
You're such a tease
Gone with a breeze

And all alone
On my throne
Without a home
I call your phone
And hear the tone

How can i show you I care
When you only play games that aren’t fair

Just freeze 
I’m down on my knees
You’re such a tease
Gone with a breeze

Time and time again
I find myself locked in a pen
I have to hide how i feel inside
Cause what can that do for me 
I know
I’ll reap what I sow
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk15.wav" },
      { title: "i never say goodbye cause i never really leave.", producer: "Zane Tipton", writer: "", performer: "Zane Tipton", lyrics: `I don’t give a fuck about bezos
Hoping that he crash in barbados
I don’t give a fuck about elon
Hoping that he knowin what we on
I don’t even care about that fuckin zuck
Wishin that would come and try his luck
I don’t really care about any god
Even big g, gonna git dropped.

You ain’t see where i come from
All the shit that i done i did
Surprised i aint come undone 
But instead i just grew up big

You ain’t see where i come from
All the shit that i done i did
Surprised i aint come undone 
But instead i just grew up big

You ain’t see where i come from
All the shit that i done i did
Surprised i aint come undone 
But instead i just grew up big

You ain’t see where i come from
All the shit that i done i did
Surprised i aint come undone 
But instead i just grew up big

First i taught myself 
Then i did that shit
Had it all legit
Then i went through it
Gonna place a hit
Out on myself
I don’t need my health
Cause they kill through stealth
Anyway
But i can’t think that way
Ima take it to my grave
Retribution that i crave
Suppression that i stave
Now i’m caught up in a daze
This more than just a phase 

Nobody can tell me how i feel
I will fight for you all my life
Only thing i can’t do is fear
Don’t you know i’ll do this till i -

Nobody can tell me how i feel
I will fight for you all my life
Only thing i can’t do is fear
Don’t you know i’ll do this till i -

Nobody can tell me how i feel
I will fight for you all my life
Only thing i can’t do is fear
Don’t you know i’ll do this till i die
`, audio: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/audio/pink-skyze-blue-hise/psbhtrk16.wav", coverart: "Zane Tipton"  },
    ],
  },
  {
    id: "all-we-could-be",
    title: "All We Could Be",
    date: "2027",
    ttc: "Ongoing",
    link: "View project",
    coverImage: null,
    bubbleLabel: "2027",
    bubbleOffset: { x: -10, y: 100 },
    narration:
      "Now. The end of the beginning. New generations need new mascots. ",
    songs: [
      { title: "trk 1", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 2", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 3", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 4", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 5", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 6", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 7", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 8", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 9", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 10", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 11", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
      { title: "trk 12", producer: "Zane Tipton", writer: "Zane Tipton", performer: "Zane Tipton", lyrics: ``, audio: ""},
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/youtube.png",
    type: "social",
    href: "https://www.youtube.com/@zaneteedup",
  },
  {
    label: "TikTok",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/tik-tok.png",
    type: "social",
    href: "https://www.tiktok.com/@zaneteedup?lang=en",
  },
  {
    label: "Instagram",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/insta.png",
    type: "social",
    href: "https://www.instagram.com/zaneteedup/",
  },
  { label: "Support", image: null, type: "support" },
];

const STREAMING_LINKS = [
  {
    label: "Spotify",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/spotify.png",
    href: "https://open.spotify.com/artist/7zFn3IXEV9Jl9Rq6tubIkn",
  },
  {
    label: "Apple Music",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/apple.jpg",
    href: "https://music.apple.com/us/artist/zane-tipton/1197026042",
  },
  {
    label: "SoundCloud",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/soundcloud.png",
    href: "https://soundcloud.com/zane-tipton-146425453",
  },
  {
    label: "YouTube Music",
    image: "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/ytmusic.png",
    href: "https://www.youtube.com/@zaneteedup",
  },
];

const PATREON_LINK =
  "https://patreon.com/u49730688?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink";
const PATREON_SUPPORT_TIER_LINK =
  "https://www.patreon.com/checkout/u49730688?rid=28552455&vanity=6153456";
const PATREON_INNER_ARCHIVE_TIER_LINK =
  "https://www.patreon.com/checkout/u49730688?rid=28552481&vanity=6153456";
const BUSINESS_EMAIL_LINK = "mailto:zanetiptonofficial@gmail.com";

const SUPPORT_ACTIONS = [
  {
    eyebrow: "direct support",
    title: "Support the Work",
    description:
      "A simple way to help fund future releases, visuals, archive material, and the time needed to keep the project moving.",
    cta: "Support on Patreon",
    href: PATREON_SUPPORT_TIER_LINK,
    external: true,
  },
  {
    eyebrow: "membership",
    title: "Inner Archive",
    description:
      "A closer space for demos, unreleased work, creative notes, early ideas, behind-the-scenes material, and archive extras.",
    cta: "Enter the Archive",
    href: PATREON_INNER_ARCHIVE_TIER_LINK,
    external: true,
  },
  {
    eyebrow: "business",
    title: "Licensing and Collaboration",
    description:
      "For scoring, licensing, commissioned music, production work, or thoughtful collaborations connected to the project.",
    cta: "Start a Conversation",
    href: BUSINESS_EMAIL_LINK,
    external: false,
  },
];

const SUPPORT_FOLLOW_LINKS = [
  {
    title: "Stream the Catalog",
    subtitle: "Spotify",
    href: "https://open.spotify.com/artist/7zFn3IXEV9Jl9Rq6tubIkn",
  },
  {
    title: "Follow the Project",
    subtitle: "Instagram",
    href: "https://www.instagram.com/zaneteedup/",
  },
  {
    title: "View the Vision",
    subtitle: "YouTube",
    href: "https://www.youtube.com/@zaneteedup",
  },
];

const ARTIST_PROFILE_IMAGE = "https://ilnbmbuvap5oi6tg.public.blob.vercel-storage.com/imgs/artist_prof3.png";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const lerp = (a, b, t) => a + (b - a) * t;
const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};
const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t), 3);
const easeOutQuart = (t) => 1 - Math.pow(1 - clamp(t), 4);
const easeInOutCubic = (t) =>
  clamp(t) < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const ORIGIN_HANDOFF_PROGRESS = 0.022;
const ARROW_SNAP_DURATION = 1600;
const ORIGIN_SHIP_POSITION = {
  x: 58,
  y: 49,
  rotate: -7,
};

const ORIGIN_BUBBLE_DIAMOND_OFFSET = {
  x: -350,
  y: -120,
};
const DESKTOP_SPEECH_GEOMETRY = {
  right: {
    diamondFromShipX: -350,
    diamondFromShipY: -180,
    bubbleWidth: 270,
    diamondLocalX: 270 - 8,
    diamondLocalY: 92,
    entranceX: 14,
  },
  left: {
    diamondFromShipX: 80,
    diamondFromShipY: -160,
    bubbleWidth: 270,
    diamondLocalX: -8,
    diamondLocalY: 92,
    entranceX: -14,
  },
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

const cinematicScrollEase = (t) => easeInOutCubic(t);

function useScrollProgress(enabled = true) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      return;
    }

    const update = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(clamp(scrollTop / max));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled]);

  return progress;
}

function getInitialRoute() {
  if (typeof window === "undefined") return { view: "home", projectId: null };

  const pathname = window.location.pathname.replace(/\/+$/, "");

  if (pathname === "/support") {
    return { view: "support", projectId: null };
  }

  const match = pathname.match(/^\/project\/([^/]+)$/);

  if (match) {
    return { view: "project", projectId: decodeURIComponent(match[1]) };
  }

  return { view: "home", projectId: null };
}

export default function App() {
  const [route, setRoute] = useState(getInitialRoute);
  const onHome = route.view === "home";
  const progress = useScrollProgress(onHome);
  const initialRouteRef = useRef(route);
  const arrowScrollAnimationRef = useRef(null);
  const arrowScrollRunningRef = useRef(false);
  const [introComplete, setIntroComplete] = useState(() => route.view !== "home");
  const [introSequenceSeen, setIntroSequenceSeen] = useState(() => route.view !== "home");
  const [existingStarsOpacity, setExistingStarsOpacity] = useState(() =>
    route.view === "home" ? 0 : 1
  );
  const originHoldOpacity =
    onHome && introSequenceSeen ? 1 - smoothstep(0.01, ORIGIN_HANDOFF_PROGRESS, progress) : 0;

  const activeProject = PROJECTS.find((project) => project.id === route.projectId);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = getInitialRoute();
      setRoute(nextRoute);

      setIntroComplete(true);
      setIntroSequenceSeen(true);
      setExistingStarsOpacity(1);

      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  }, [route.view, route.projectId]);

  useEffect(() => {
    if (!onHome) return;

    const isInitialHomeLoad = initialRouteRef.current.view === "home" && !introSequenceSeen;

    if (isInitialHomeLoad) {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [onHome, introSequenceSeen]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (onHome && !introComplete) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = previousBodyOverflow || "";
      document.documentElement.style.overflow = previousHtmlOverflow || "";
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [introComplete, onHome]);

  useEffect(() => {
    if (!onHome || !introSequenceSeen || !introComplete) return;

    const animateArrowScroll = (targetY) => {
      if (arrowScrollRunningRef.current) return;

      const startY = window.scrollY || window.pageYOffset;
      const distance = targetY - startY;

      if (Math.abs(distance) < 2 || prefersReducedMotion()) {
        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
        return;
      }

      arrowScrollRunningRef.current = true;
      const startTime = performance.now();

      const step = (time) => {
        const elapsed = time - startTime;
        const progressT = clamp(elapsed / ARROW_SNAP_DURATION);
        const eased = cinematicScrollEase(progressT);
        const nextY = startY + distance * eased;

        window.scrollTo(0, nextY);

        if (progressT < 1) {
          arrowScrollAnimationRef.current = requestAnimationFrame(step);
          return;
        }

        window.scrollTo({ top: targetY, left: 0, behavior: "instant" });
        arrowScrollRunningRef.current = false;
        arrowScrollAnimationRef.current = null;
      };

      arrowScrollAnimationRef.current = requestAnimationFrame(step);
    };

    const handleKeyDown = (event) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;

      const activeElement = document.activeElement;
      const isTyping =
        activeElement &&
        ["INPUT", "TEXTAREA", "SELECT"].includes(activeElement.tagName);

      if (isTyping) return;

      const sections = Array.from(
        document.querySelectorAll("[data-home-snap-section]")
      );

      if (!sections.length) return;

      event.preventDefault();

      if (arrowScrollRunningRef.current) return;

      const currentY = window.scrollY || window.pageYOffset;
      const sectionTops = sections.map((section) => section.offsetTop);
      let currentIndex = 0;
      let smallestDistance = Infinity;

      sectionTops.forEach((top, index) => {
        const distance = Math.abs(currentY - top);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentIndex = index;
        }
      });

      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex = clamp(currentIndex + direction, 0, sections.length - 1);
      const nextSection = sections[nextIndex];

      if (!nextSection || nextIndex === currentIndex) return;

      animateArrowScroll(nextSection.offsetTop);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (arrowScrollAnimationRef.current) {
        cancelAnimationFrame(arrowScrollAnimationRef.current);
      }
      arrowScrollAnimationRef.current = null;
      arrowScrollRunningRef.current = false;
    };
  }, [introComplete, introSequenceSeen, onHome]);

  const navigateHome = () => {
    window.history.pushState({}, "", "/");
    setRoute({ view: "home", projectId: null });
    setIntroComplete(true);
    setIntroSequenceSeen(true);
    setExistingStarsOpacity(1);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
  };

  const navigateProject = (projectId) => {
    window.history.pushState({}, "", `/project/${projectId}`);
    setRoute({ view: "project", projectId });
    setIntroComplete(true);
    setIntroSequenceSeen(true);
    setExistingStarsOpacity(1);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const navigateSupport = () => {
    window.history.pushState({}, "", "/support");
    setRoute({ view: "support", projectId: null });
    setIntroComplete(true);
    setIntroSequenceSeen(true);
    setExistingStarsOpacity(1);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  if (route.view === "support") {
    return <SupportPage onBack={navigateHome} />;
  }

  if (!onHome) {
    return (
      <ProjectPage
        project={activeProject || PROJECTS[0]}
        onBack={navigateHome}
        onNavigateProject={navigateProject}
      />
    );
  }

  return (
    <div className="relative min-h-[100svh] bg-black text-white">
      <style>{`@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto !important; } *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`}</style>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-white/18 focus:bg-black/80 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-white/30">Skip to main content</a>
      <ContinuousWorld progress={progress} starsOpacity={existingStarsOpacity} />

      <main id="main-content" className="relative z-10">
        <IntroSection />
        {Array.from({ length: PROJECT_COUNT }).map((_, index) => (
          <ScrollSpacer
            key={index}
            index={index}
            onNavigateProject={navigateProject}
          />
        ))}
        <FinalSpacer onNavigateSupport={navigateSupport} />
      </main>

      {introSequenceSeen && originHoldOpacity > 0.01 && (
        <OriginHoldMoment opacity={originHoldOpacity} />
      )}

      {introSequenceSeen && progress >= ORIGIN_HANDOFF_PROGRESS && (
        <PersistentGuideShip progress={progress} />
      )}

      {!introComplete && (
        <IntroOverlay
          onExistingStarsOpacityChange={setExistingStarsOpacity}
          onComplete={() => {
            setExistingStarsOpacity(1);
            setIntroComplete(true);
            setIntroSequenceSeen(true);
          }}
        />
      )}
    </div>
  );
}

function ScrollSpacer({ index, onNavigateProject }) {
  return (
    <section data-home-snap-section className="relative min-h-[100svh]">
      <div className="sticky top-0 flex min-h-[100svh] items-center">
        <TimelineEntry
          project={PROJECTS[index]}
          index={index}
          onNavigateProject={onNavigateProject}
        />
      </div>
    </section>
  );
}

function FinalSpacer({ onNavigateSupport }) {
  return (
    <section data-home-snap-section className="relative min-h-[100svh]">
      <div className="sticky top-0 flex min-h-[100svh] items-end justify-center px-6 pb-16 sm:px-8 sm:pb-20 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-5xl translate-y-[-7vh]">
          <CreditsSection onNavigateSupport={onNavigateSupport} />
        </div>
      </div>
    </section>
  );
}

function SupportPage({ onBack }) {
  const scrollToSupportSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#050508] text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-white/18 focus:bg-black/80 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-white/30">Skip to main content</a>
      <ProjectPageBackdrop />

      <div className="relative z-10">
        <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 bg-black/18 px-5 py-4 backdrop-blur-[18px] sm:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBack}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/62 transition duration-300 hover:border-white/18 hover:bg-white/[0.07] hover:text-white active:scale-[0.98]"
            >
              <span className="transition duration-300 group-hover:-translate-x-0.5">←</span>
              home
            </button>

            <div className="hidden text-[0.68rem] uppercase tracking-[0.26em] text-white/38 sm:block">
              support archive
            </div>
          </div>
        </header>

        <main id="main-content" className="px-5 pb-24 pt-28 sm:px-8 lg:px-12">
          <section className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center py-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 text-[0.68rem] uppercase tracking-[0.34em] text-white/38">
                  independent music archive
                </div>

                <h1 className="max-w-4xl text-balance text-[clamp(3rem,8vw,7.6rem)] font-light leading-[0.9] tracking-[-0.075em] text-white">
                  Support the Work
                </h1>

                <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/58 sm:text-lg">
                  A quiet place to support the music, the archive, and the work still forming. Patreon helps fund future releases, visuals, demos, and the time needed to keep building the world around the project.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={PATREON_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/[0.075] px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-white/78 transition duration-300 hover:-translate-y-1 hover:border-white/24 hover:bg-white/[0.11] hover:text-white active:translate-y-[-1px] active:scale-[0.985]"
                    style={{
                      boxShadow:
                        "0 18px 60px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    become a supporter
                    <span className="transition duration-300 group-hover:translate-x-1">→</span>
                  </a>

                  <a
                    href={BUSINESS_EMAIL_LINK}
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-white/52 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] hover:text-white/86 active:translate-y-[-1px] active:scale-[0.985]"
                  >
                    licensing / work
                  </a>
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-[18px] sm:p-8"
                style={{
                  boxShadow:
                    "0 28px 90px rgba(0,0,0,0.34), 0 0 42px rgba(145,170,255,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 24% 10%, rgba(185,210,255,0.13), transparent 36%), radial-gradient(circle at 80% 76%, rgba(255,150,190,0.08), transparent 42%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <div className="text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
                      support index
                    </div>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <div className="grid gap-3">
                    {[
                      {
                        label: "Fund Future Releases",
                        href: PATREON_LINK,
                        external: true,
                      },
                      {
                        label: "Access the Inner Archive",
                        href: PATREON_INNER_ARCHIVE_TIER_LINK,
                        external: true,
                      },
                      {
                        label: "Support Production",
                        href: PATREON_SUPPORT_TIER_LINK,
                        external: true,
                      },
                      {
                        label: "Listen and Share",
                        sectionId: "listen-follow-share",
                      },
                      {
                        label: "Open Collaboration",
                        sectionId: "business-licensing-collaboration",
                      },
                    ].map((item, index) => {
                      const content = (
                        <>
                          <div className="flex items-center gap-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[0.62rem] uppercase tracking-[0.16em] text-white/38 transition duration-300 group-hover:border-white/18 group-hover:text-white/58">
                              {String(index + 1).padStart(2, "0")}
                            </div>
                            <div className="text-sm font-light text-white/72 transition duration-300 group-hover:text-white/88">
                              {item.label}
                            </div>
                          </div>
                          <div className="text-white/28 transition duration-300 group-hover:translate-x-1 group-hover:text-white/58">
                            →
                          </div>
                        </>
                      );

                      const sharedClassName =
                        "group flex w-full items-center justify-between gap-4 rounded-[20px] border border-white/10 bg-black/18 px-4 py-4 text-left transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.045] active:translate-y-[-1px] active:scale-[0.99]";

                      if (item.sectionId) {
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => scrollToSupportSection(item.sectionId)}
                            className={sharedClassName}
                          >
                            {content}
                          </button>
                        );
                      }

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className={sharedClassName}
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>

                  <p className="mt-6 text-sm leading-relaxed text-white/42">
                    Support helps turn unfinished ideas, demos, visuals, and archive material into a more complete independent body of work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="support-options" className="mx-auto max-w-7xl border-t border-white/10 py-16">
            <div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
                  support paths
                </div>
                <h2 className="text-3xl font-light tracking-[-0.05em] text-white/92 sm:text-5xl">
                  Choose how to back the work
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-white/44">
                Choose between direct Patreon support, deeper archive access, or business collaboration.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {SUPPORT_ACTIONS.map((item) => (
                <SupportActionCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section id="listen-follow-share" className="scroll-mt-28 mx-auto max-w-7xl border-t border-white/10 py-16">
            <div
              className="grid gap-8 rounded-[32px] border border-white/10 bg-black/20 p-6 backdrop-blur-[14px] md:grid-cols-[0.9fr_1.1fr] md:p-8"
              style={{
                boxShadow:
                  "0 18px 70px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.32em] text-white/34">
                  listen / follow / share
                </div>
                <h2 className="text-3xl font-light tracking-[-0.05em] text-white/88 sm:text-4xl">
                  Listening still matters
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {SUPPORT_FOLLOW_LINKS.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-left transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.99]"
                    style={{
                      boxShadow:
                        "0 12px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.045)",
                    }}
                  >
                    <div className="text-sm font-light text-white/76 transition duration-300 group-hover:text-white">
                      {item.title}
                    </div>
                    <div className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-white/34">
                      {item.subtitle}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SupportActionCard({ item }) {
  return (
    <a
      id={item.title === "Licensing and Collaboration" ? "business-licensing-collaboration" : undefined}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="group scroll-mt-28 block rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-[16px] transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.99] sm:p-7"
      style={{
        boxShadow:
          "0 18px 70px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.055)",
      }}
    >
      <div className="mb-4 text-[0.66rem] uppercase tracking-[0.3em] text-white/34">
        {item.eyebrow}
      </div>
      <h3 className="text-2xl font-light tracking-[-0.04em] text-white/88 sm:text-3xl">
        {item.title}
      </h3>
      <p className="mt-5 min-h-[4.5rem] text-sm leading-relaxed text-white/48">
        {item.description}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-white/54 transition duration-300 group-hover:text-white/86">
        <span>{item.cta}</span>
        <span className="transition duration-300 group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

function ProjectPage({ project, onBack, onNavigateProject }) {
  const [openTracks, setOpenTracks] = useState({});
  const audioRef = useRef(null);
  const [activeTrackKey, setActiveTrackKey] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }

    setActiveTrackKey(null);
    setIsPlaying(false);
    setTrackProgress(0);

    return () => {
      if (audio) {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
      }
    };
  }, [project.id]);

  const resetPlaybackState = () => {
    setIsPlaying(false);
    setTrackProgress(0);
    setActiveTrackKey(null);
  };

  const handleTrackPlayback = (song, index, event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!song.audio || !audioRef.current) return;

    const audio = audioRef.current;
    const nextTrackKey = `${project.id}-${index}`;
    const isActiveTrack = activeTrackKey === nextTrackKey;

    if (isActiveTrack && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (isActiveTrack && !isPlaying) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      } else {
        setIsPlaying(true);
      }

      return;
    }

    audio.pause();
    audio.src = song.audio;
    audio.currentTime = 0;

    setActiveTrackKey(nextTrackKey);
    setTrackProgress(0);
    setIsPlaying(false);

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          resetPlaybackState();
          audio.removeAttribute("src");
          audio.load();
        });
    } else {
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration || Number.isNaN(audio.duration)) return;

    setTrackProgress(clamp(audio.currentTime / audio.duration));
  };

  const handleEnded = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
    }

    resetPlaybackState();
  };

  const handleAudioError = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }

    resetPlaybackState();
  };

  const toggleTrack = (index) => {
    setOpenTracks((current) => ({
      ...current,
      [index]: !current[index],
    }));
  };

  const relatedProjects = PROJECTS.filter((item) => item.id !== project.id);

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-[#050508] text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:border focus:border-white/18 focus:bg-black/80 focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:outline-none focus:ring-2 focus:ring-white/30">Skip to main content</a>
      <ProjectPageBackdrop />

      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleAudioError}
        className="hidden"
      />

      <div className="relative z-10">
        <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 bg-black/18 px-5 py-4 backdrop-blur-[18px] sm:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBack}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/62 transition duration-300 hover:border-white/18 hover:bg-white/[0.07] hover:text-white active:scale-[0.98]"
            >
              <span className="transition duration-300 group-hover:-translate-x-0.5">←</span>
              home
            </button>

            <div className="hidden text-[0.68rem] uppercase tracking-[0.26em] text-white/38 sm:block">
              project archive
            </div>
          </div>
        </header>

        <main id="main-content" className="px-5 pb-20 pt-28 sm:px-8 lg:px-12">
          <section className="mx-auto flex min-h-[78vh] max-w-7xl flex-col items-center justify-center py-10">
            <div className="relative">
              <div
                className="absolute inset-[-18%] rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(155,170,255,0.12), rgba(255,160,190,0.06) 32%, rgba(0,0,0,0) 66%)",
                }}
              />
              <div className="relative w-[min(76vw,420px)]">
                <CoverArt
                  src={project.coverImage}
                  alt={`${project.title} cover art`}
                  variant={PROJECTS.findIndex((item) => item.id === project.id) + 1}
                />
              </div>
            </div>

            <div className="mt-10 max-w-4xl text-center">
              <div className="mb-4 text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
                {project.date}
              </div>
              <h1 className="text-balance text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.92] tracking-[-0.07em] text-white">
                {project.title}
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-relaxed text-white/58 sm:text-lg">
                Creative Period: {project.ttc}
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl pb-24">
            <div className="mb-7 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
                  tracklist
                </div>
                <h2 className="text-2xl font-light tracking-[-0.04em] text-white/92 sm:text-4xl">
                  Songs
                </h2>
              </div>
              <div className="text-sm text-white/42">
                {project.songs.length ? `${project.songs.length} tracks` : "Tracklist empty"}
              </div>
            </div>

            {project.songs.length ? (
              <div className="space-y-3">
                {project.songs.map((song, index) => {
                  const trackKey = `${project.id}-${index}`;

                  return (
                    <SongDropdown
                      key={`${project.id}-${song.title}-${index}`}
                      song={song}
                      project={project}
                      index={index}
                      open={Boolean(openTracks[index])}
                      onToggle={() => toggleTrack(index)}
                      trackKey={trackKey}
                      activeTrackKey={activeTrackKey}
                      isPlaying={isPlaying}
                      trackProgress={trackProgress}
                      onTrackPlayback={handleTrackPlayback}
                    />
                  );
                })}
              </div>
            ) : (
              <div
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-[16px]"
                style={{
                  boxShadow:
                    "0 22px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-lg font-light text-white/76">Tracklist empty</div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/45">
                  Add songs to this project in the PROJECTS array and each track will render with the same expandable structure.
                </p>
              </div>
            )}
          </section>

          <section className="mx-auto max-w-5xl border-t border-white/10 pt-10">
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <div className="mb-3 text-[0.68rem] uppercase tracking-[0.32em] text-white/34">
                  other projects
                </div>
                <h2 className="text-2xl font-light tracking-[-0.04em] text-white/84">
                  Continue the archive
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigateProject(item.id)}
                  className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-4 text-left backdrop-blur-[14px] transition duration-300 hover:-translate-y-1 hover:border-white/18 hover:bg-white/[0.055] active:scale-[0.985]"
                  style={{
                    boxShadow:
                      "0 18px 60px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-[18px] border border-white/10 bg-black/28">
                      {item.coverImage ? (
                        <img
                          src={item.coverImage}
                          alt={`${item.title} cover art`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <MockCoverArt variant={index + 1} />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-light leading-snug text-white/78 transition group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="mt-2 text-[0.64rem] uppercase tracking-[0.22em] text-white/34">
                        view project
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function ProjectPageBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#050508]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(96,111,177,0.18), transparent 34%), radial-gradient(circle at 80% 12%, rgba(205,112,156,0.12), transparent 30%), radial-gradient(circle at 50% 90%, rgba(74,95,132,0.11), transparent 44%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.7), rgba(0,0,0,0.2) 46%, transparent 76%)",
        }}
      />
      <div
        className="absolute inset-x-[-10%] top-[18%] h-px opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.24) 42%, rgba(0,0,0,0.72) 100%)",
        }}
      />
    </div>
  );
}

function SongDropdown({
  song,
  project,
  index,
  open,
  onToggle,
  trackKey,
  activeTrackKey,
  isPlaying,
  trackProgress,
  onTrackPlayback,
}) {
  const isSampleProject = project.id === "the-house-that-built";
  const isActive = activeTrackKey === trackKey;
  const displayProgress = isActive ? trackProgress : 0;

  return (
    <div
      className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] backdrop-blur-[16px] transition duration-300 hover:border-white/16 hover:bg-white/[0.048]"
      style={{
        boxShadow: open
          ? "0 24px 80px rgba(0,0,0,0.32), 0 0 34px rgba(150,170,255,0.08), inset 0 1px 0 rgba(255,255,255,0.065)"
          : "0 14px 50px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.045)",
      }}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
        className="group flex w-full cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
        aria-expanded={open}
        aria-label={open ? `Collapse ${song.title}` : `Expand ${song.title}`}
        title={open ? `Collapse ${song.title}` : `Expand ${song.title}`}
      >
        <div className="flex min-w-0 items-center gap-4">
          {song.audio ? (
            <TrackPlayButton
              index={index}
              songTitle={song.title}
              isActive={isActive}
              isPlaying={isActive && isPlaying}
              progress={displayProgress}
              onClick={(event) => onTrackPlayback(song, index, event)}
            />
          ) : (
            <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/22 text-[0.65rem] uppercase tracking-[0.16em] text-white/36 sm:flex">
              {String(index + 1).padStart(2, "0")}
            </div>
          )}
          <div className="min-w-0">
            <div className="text-base font-light leading-snug tracking-[-0.01em] text-white/82 transition group-hover:text-white sm:text-lg">
              {song.title}
            </div>
            <div className="mt-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/38">
              {isSampleProject ? "credits" : "credits / lyrics"}
            </div>
          </div>
        </div>

        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/22 transition duration-300 group-hover:border-white/18 group-hover:bg-white/[0.055]"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-white/68"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>

      <div
        className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/8 px-5 pb-6 pt-5 sm:px-6">
            <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">
              <MetadataPanel song={song} />

              <ContentPanel label="lyrics" content={song.lyrics} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackPlayButton({ index, songTitle, isActive, isPlaying, progress, onClick }) {
  const [hovered, setHovered] = useState(false);
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const safeProgress = clamp(progress);
  const dashOffset = circumference * (1 - safeProgress);
  const showProgress = isActive && (safeProgress > 0 || isPlaying);
  const showIcon = hovered;
  const label = isPlaying ? `Pause ${songTitle}` : `Play ${songTitle}`;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={label}
      title={label}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/22 text-[0.65rem] uppercase tracking-[0.16em] text-white/36 transition duration-300 hover:border-white/20 hover:bg-white/[0.055] hover:text-white/78 active:scale-[0.96]"
    >
      <svg
        viewBox="0 0 40 40"
        className="pointer-events-none absolute inset-[-2px] h-[calc(100%+4px)] w-[calc(100%+4px)] -rotate-90"
      >
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          opacity={showProgress ? 1 : 0}
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.58)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          opacity={showProgress ? 1 : 0}
          className="transition-[stroke-dashoffset,opacity] duration-200"
        />
      </svg>

      <span
        className="relative z-10 transition duration-200"
        style={{
          opacity: showIcon ? 0 : 1,
          transform: showIcon ? "scale(0.86)" : "scale(1)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span
        className="absolute inset-0 z-10 flex items-center justify-center transition duration-200"
        style={{
          opacity: showIcon ? 1 : 0,
          transform: showIcon ? "scale(1)" : "scale(0.82)",
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </span>
    </button>
  );
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-white/82"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8.2 5.8v12.4c0 .7.76 1.14 1.37.78l9.72-6.2a.92.92 0 0 0 0-1.56L9.57 5.02c-.61-.36-1.37.08-1.37.78Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 text-white/82"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.5c0-.55.45-1 1-1h1.4c.55 0 1 .45 1 1v13c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-13Zm5.6 0c0-.55.45-1 1-1H16c.55 0 1 .45 1 1v13c0 .55-.45 1-1 1h-1.4c-.55 0-1-.45-1-1v-13Z" />
    </svg>
  );
}

function MetadataPanel({ song }) {
  const metadataRows = [
    { label: "Producer", value: song.producer },
    { label: "Writer", value: song.writer },
    { label: "Performer", value: song.performer },
    { label: "Sample", value: song.sample },
    { label: "Cover Art", value: song.coverart },
  ].filter((item) => item.value);

  return (
    <div className="rounded-[18px] border border-white/10 bg-black/18 p-4">
      <div className="mb-3 text-[0.64rem] uppercase tracking-[0.26em] text-white/34">
        metadata
      </div>

      {metadataRows.length ? (
        <div className="space-y-3 text-sm leading-relaxed text-white/58">
          {metadataRows.map((item) => (
            <MetadataRow key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      ) : (
        <div className="min-h-[2.25rem]" />
      )}
    </div>
  );
}

function MetadataRow({ label, value }) {
  const lines = String(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div>
      <div className="text-[0.62rem] uppercase tracking-[0.22em] text-white/34">
        {label}
      </div>

      <div className="mt-1 space-y-1">
        {lines.map((line, index) =>
          isValidUrl(line) ? (
            <a
              key={`${label}-${index}`}
              href={line}
              target="_blank"
              rel="noopener noreferrer"
              className="block break-words text-white/66 underline decoration-white/20 underline-offset-4 transition duration-300 hover:text-white hover:decoration-white/55"
            >
              {line}
            </a>
          ) : (
            <div key={`${label}-${index}`} className="whitespace-pre-line text-white/58">
              {line}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function isValidUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function ContentPanel({ label, content }) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-black/18 p-4">
      <div className="mb-3 text-[0.64rem] uppercase tracking-[0.26em] text-white/34">
        {label}
      </div>
      {content ? (
        <div className="whitespace-pre-line text-sm leading-relaxed text-white/58">
          {content}
        </div>
      ) : (
        <div className="min-h-[2.25rem]" />
      )}
    </div>
  );
}

function ContinuousWorld({ progress, starsOpacity = 1 }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <SkyBackdrop progress={progress} />
      <Stars progress={progress} introOpacity={starsOpacity} />
      <AtmosphereLayers progress={progress} />
      <CityWorld progress={progress} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(0,0,0,0.15)_74%,rgba(0,0,0,0.5)_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(4,7,16,0.02), rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.24) 100%)",
        }}
      />
    </div>
  );
}

function SkyBackdrop({ progress }) {
  const deepSpace = 1 - smoothstep(0.12, 0.34, progress);
  const upperBlue =
    smoothstep(0.08, 0.36, progress) * (1 - smoothstep(0.58, 0.86, progress));
  const sunset =
    smoothstep(0.2, 0.46, progress) * (1 - smoothstep(0.6, 0.84, progress));
  const nightReturn = smoothstep(0.66, 0.96, progress);
  const lowerWarm =
    smoothstep(0.23, 0.5, progress) * (1 - smoothstep(0.57, 0.78, progress));

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#02040b]" />
      <div className="absolute inset-0" style={{ opacity: deepSpace }} />
      <div
        className="absolute inset-0"
        style={{
          opacity: upperBlue,
          background:
            "linear-gradient(to bottom, rgba(4,8,18,1) 0%, rgba(9,15,34,0.98) 14%, rgba(16,32,70,0.92) 38%, rgba(24,52,96,0.78) 58%, rgba(56,88,143,0.52) 78%, rgba(190,118,108,0.06) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: sunset,
          background:
            "linear-gradient(to bottom, rgba(5,8,18,0.92) 0%, rgba(18,31,70,0.88) 20%, rgba(50,76,143,0.76) 40%, rgba(126,102,171,0.62) 55%, rgba(220,132,169,0.52) 70%, rgba(244,156,122,0.42) 84%, rgba(252,177,118,0.22) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: lowerWarm,
          background:
            "radial-gradient(ellipse at 50% 94%, rgba(255,166,108,0.42), rgba(255,149,119,0.24) 24%, rgba(238,120,147,0.12) 42%, transparent 62%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          opacity: nightReturn,
          background:
            "linear-gradient(to bottom, rgba(8,10,20,0.16) 0%, rgba(8,10,20,0.18) 30%, rgba(10,11,20,0.28) 48%, rgba(12,12,20,0.58) 72%, rgba(7,7,14,0.92) 100%)",
        }}
      />
    </div>
  );
}

function Stars({ progress, introOpacity = 1 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 220 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 0.6 + Math.random() * 2,
        opacity: 0.18 + Math.random() * 0.72,
        blur: Math.random() > 0.8 ? 1.4 : 0,
      })),
    []
  );

  const visibility = (1 - smoothstep(0.18, 0.46, progress)) * introOpacity;
  const drift = lerp(0, -10, smoothstep(0, 1, progress));

  return (
    <div
      className="absolute inset-0"
      style={{ opacity: visibility, transform: `translateY(${drift}px)` }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            filter: `blur(${star.blur}px)`,
            boxShadow:
              star.size > 1.5
                ? "0 0 12px rgba(255,255,255,0.35)"
                : "0 0 6px rgba(255,255,255,0.15)",
          }}
        />
      ))}
    </div>
  );
}

function AtmosphereLayers({ progress }) {
  const veil = smoothstep(0.12, 0.5, progress);
  const cityVeil =
    smoothstep(0.26, 0.56, progress) * (1 - smoothstep(0.74, 0.95, progress));
  const nightMist = smoothstep(0.64, 0.98, progress);

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          opacity: veil * 0.8,
          background:
            "radial-gradient(ellipse at 50% 82%, rgba(230,180,190,0.08), transparent 44%), radial-gradient(ellipse at 50% 58%, rgba(122,167,232,0.12), transparent 52%), linear-gradient(to bottom, transparent 0%, rgba(180,216,255,0.04) 52%, rgba(253,205,188,0.08) 100%)",
          filter: "none",
        }}
      />
      <div
        className="absolute inset-x-[-8%] bottom-[-10%] hidden h-[42%] md:block"
        style={{
          opacity: cityVeil * 0.9,
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(255,202,160,0.18), rgba(255,170,170,0.1) 24%, rgba(132,173,255,0.06) 48%, transparent 72%)",
          filter: "blur(14px)",
        }}
      />
      <div
        className="absolute inset-x-[-10%] bottom-[-8%] hidden h-[36%] md:block"
        style={{
          opacity: nightMist * 0.82,
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(27,34,58,0.58), rgba(17,20,34,0.44) 36%, rgba(0,0,0,0) 72%)",
          filter: "blur(12px)",
        }}
      />

      <div
        className="absolute inset-x-[-8%] bottom-[-8%] h-[44%] md:hidden"
        style={{
          opacity: Math.max(cityVeil * 0.36, nightMist * 0.42),
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(45,55,88,0.42), rgba(22,26,44,0.28) 42%, rgba(0,0,0,0) 76%)",
        }}
      />
    </div>
  );
}

function CityWorld({ progress }) {
  const reveal = smoothstep(0.16, 0.92, progress);
  const skylineReveal = smoothstep(0.28, 0.5, progress);
  const facadeReveal = smoothstep(0.48, 0.78, progress);
  const streetReveal = smoothstep(0.72, 0.94, progress);

  const backY = lerp(118, -28, reveal);
  const midY = lerp(126, -36, reveal);
  const frontY = lerp(134, -48, reveal);
  const hazeOpacity =
    smoothstep(0.28, 0.46, progress) * (1 - smoothstep(0.58, 0.82, progress));

  return (
    <div className="absolute inset-0">
      <div
        className="absolute left-1 bottom-0 hidden h-[88%] w-[100vw] -translate-x-1/2 md:block lg:left-0 lg:w-full lg:translate-x-0"
        style={{ opacity: skylineReveal * 0.65, transform: `translateY(${backY}vh)` }}
      >
        <BackTowerLayer />
      </div>

      <div
        className="absolute left-1 bottom-0 h-[94%] w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:translate-x-0"
        style={{ opacity: skylineReveal * 0.82, transform: `translateY(${midY}vh)` }}
      >
        <MidTowerLayer />
      </div>

      <div
        className="absolute left-1 bottom-[-2%] h-[100%] w-[100vw] -translate-x-1/2 lg:left-0 lg:w-full lg:translate-x-0"
        style={{ opacity: facadeReveal, transform: `translateY(${frontY}vh)` }}
      >
        <FrontTowerLayer progress={progress} />
      </div>

      <div
        className="absolute inset-0 hidden md:block"
        style={{
          opacity: hazeOpacity,
          background:
            "radial-gradient(ellipse at 50% 65%, rgba(255,180,148,0.11), rgba(252,142,178,0.06) 22%, rgba(132,162,230,0.045) 44%, transparent 70%)",
          filter: "none",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          opacity: streetReveal,
          transform: `translateY(${lerp(16, 0, streetReveal)}vh)`,
        }}
      >
        <StreetLayer progress={progress} />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[56%]"
        style={{
          opacity: smoothstep(0.76, 1, progress),
          background:
            "linear-gradient(to bottom, rgba(16,18,28,0) 0%, rgba(9,10,17,0.16) 18%, rgba(7,7,12,0.32) 60%, rgba(5,5,8,0.54) 100%)",
        }}
      />
    </div>
  );
}

function BackTowerLayer() {
  return (
    <div className="relative h-full w-full">
      <PlacedTower left="4%" width="24vw" bottom="-68vh" opacity={0.34} blur={1.2}>
        <NeedleTower />
      </PlacedTower>
      <PlacedTower left="26%" width="27vw" bottom="-72vh" opacity={0.34} blur={1.2}>
        <PointedCrownTower />
      </PlacedTower>
      <PlacedTower left="49%" width="23vw" bottom="-76vh" opacity={0.26} blur={1.9}>
        <NeedleTower />
      </PlacedTower>
      <PlacedTower left="79%" width="27vw" bottom="-72vh" opacity={0.35} blur={1.2}>
        <PointedCrownTower />
      </PlacedTower>
    </div>
  );
}

function MidTowerLayer() {
  return (
    <div className="relative h-full w-full">
      <PlacedTower left="-1%" width="17vw" bottom="-82vh" opacity={0.5}>
        <MasonryCrownTower />
      </PlacedTower>
      <PlacedTower left="10%" width="14vw" bottom="-90vh" opacity={0.56}>
        <NeedleTower />
      </PlacedTower>
      <PlacedTower left="18%" width="20vw" bottom="-102vh" opacity={0.54}>
        <GlassSlabTower />
      </PlacedTower>
      <PlacedTower left="31%" width="17vw" bottom="-96vh" opacity={0.58}>
        <SetbackStoneTower />
      </PlacedTower>
      <PlacedTower left="43%" width="15vw" bottom="-100vh" opacity={0.48}>
        <NeedleTower />
      </PlacedTower>
      <PlacedTower left="50%" width="18vw" bottom="-108vh" opacity={0.55}>
        <PointedCrownTower />
      </PlacedTower>
      <PlacedTower left="63%" width="18vw" bottom="-102vh" opacity={0.6}>
        <GlassSlabTower />
      </PlacedTower>
      <PlacedTower left="74%" width="16vw" bottom="-92vh" opacity={0.56}>
        <MasonryCrownTower />
      </PlacedTower>
      <PlacedTower left="84%" width="14vw" bottom="-100vh" opacity={0.5}>
        <SetbackStoneTower />
      </PlacedTower>
    </div>
  );
}

function FrontTowerLayer({ progress }) {
  const night = smoothstep(0.66, 0.96, progress);

  return (
    <div className="relative h-full w-full">
      <PlacedTower left="-6%" width="27vw" bottom="-125vh" opacity={0.93}>
        <LeftCornerTower />
      </PlacedTower>

      <PlacedTower left="7%" width="16vw" bottom="-126vh" opacity={0.8}>
        <SetbackStoneTower close />
      </PlacedTower>

      <PlacedTower left="18%" width="18vw" bottom="-136vh" opacity={0.84}>
        <MasonryCrownTower close />
      </PlacedTower>

      <PlacedTower left="31%" width="16vw" bottom="-132vh" opacity={0.88}>
        <PointedCrownTower close />
      </PlacedTower>

      <PlacedTower left="43%" width="15vw" bottom="-140vh" opacity={0.84}>
        <NeedleTower close />
      </PlacedTower>

      <PlacedTower left="50%" width="18vw" bottom="-146vh" opacity={0.88}>
        <GlassSlabTower close />
      </PlacedTower>

      <PlacedTower left="63%" width="16vw" bottom="-134vh" opacity={0.86}>
        <SetbackStoneTower close />
      </PlacedTower>

      <PlacedTower left="75%" width="18vw" bottom="-138vh" opacity={0.84}>
        <MasonryCrownTower close />
      </PlacedTower>

      <PlacedTower left="82%" width="28vw" bottom="-125vh" opacity={0.94}>
        <RightCornerTower />
      </PlacedTower>

      <div
        className="absolute inset-0"
        style={{
          opacity: night * 0.28,
          background:
            "linear-gradient(to bottom, rgba(16,20,30,0.02) 0%, rgba(10,12,20,0.12) 34%, rgba(6,7,12,0.22) 58%, rgba(4,4,8,0.34) 100%)",
        }}
      />
    </div>
  );
}

function PlacedTower({ left, width, bottom, opacity = 1, blur = 0, children }) {
  return (
    <div
      className="absolute"
      style={{
        left,
        bottom,
        width,
        height: "210vh",
        opacity,
        filter: blur ? `blur(${blur}px)` : "none",
      }}
    >
      {children}
    </div>
  );
}

function TowerShell({ children, className = "" }) {
  return (
    <svg
      viewBox="0 0 240 1200"
      className={`h-full w-full overflow-visible ${className}`}
      preserveAspectRatio="none"
    >
      {children}
    </svg>
  );
}

function GlassSlabTower({ close = false }) {
  return (
    <TowerShell>
      <polygon points="40,60 200,60 182,1190 56,1190" fill={close ? "#23293a" : "#1b2231"} />
      <polygon points="200,60 220,80 202,1190 182,1190" fill={close ? "#171c28" : "#131926"} />
      <polygon points="40,60 60,80 76,1190 56,1190" fill={close ? "#2a3145" : "#22293a"} />
      <rect x="72" y="96" width="96" height="1000" rx="2" fill="rgba(112,149,197,0.08)" />
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={`g-h-${i}`} x="74" y={120 + i * 44} width="92" height="3" fill="rgba(218,233,255,0.1)" />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={`g-v-${i}`} x={82 + i * 8} y="108" width="2" height="990" fill="rgba(180,210,255,0.08)" />
      ))}
      <rect x="94" y="24" width="52" height="54" fill={close ? "#2e3549" : "#293245"} />
      <rect x="104" y="0" width="32" height="30" fill={close ? "#3a4258" : "#30384d"} />
    </TowerShell>
  );
}

function PointedCrownTower({ close = false }) {
  return (
    <TowerShell>
      <polygon points="58,118 180,118 170,1190 72,1190" fill={close ? "#2b2631" : "#23202a"} />
      <polygon points="180,118 198,134 186,1190 170,1190" fill={close ? "#1e1a22" : "#18151c"} />
      <polygon points="58,118 72,134 84,1190 72,1190" fill={close ? "#362f3d" : "#2e2934"} />
      <polygon points="92,118 146,118 166,72 118,0 72,72" fill={close ? "#473947" : "#3c303d"} />
      <rect x="88" y="148" width="68" height="940" fill="rgba(225,196,193,0.05)" />
      {Array.from({ length: 13 }).map((_, i) => (
        <rect key={`p-v-${i}`} x={94 + i * 5} y="132" width="2" height="972" fill="rgba(255,224,214,0.065)" />
      ))}
      {Array.from({ length: 18 }).map((_, i) => (
        <rect key={`p-h-${i}`} x="84" y={170 + i * 46} width="76" height="2" fill="rgba(255,221,188,0.07)" />
      ))}
      <rect x="78" y="430" width="92" height="16" fill="rgba(255,208,168,0.08)" />
      <rect x="82" y="720" width="86" height="12" fill="rgba(255,208,168,0.065)" />
    </TowerShell>
  );
}

function SetbackStoneTower({ close = false }) {
  return (
    <TowerShell>
      <polygon points="56,200 186,200 176,1190 66,1190" fill={close ? "#27282f" : "#202127"} />
      <polygon points="70,136 170,136 186,200 56,200" fill={close ? "#363741" : "#2d2f38"} />
      <polygon points="86,80 154,80 170,136 70,136" fill={close ? "#424450" : "#373a45"} />
      <polygon points="100,36 140,36 154,80 86,80" fill={close ? "#525463" : "#484a58"} />
      <polygon points="112,0 128,0 140,36 100,36" fill={close ? "#666978" : "#585b6d"} />
      <polygon points="186,200 208,224 194,1190 176,1190" fill={close ? "#17181d" : "#15161a"} />
      <polygon points="56,200 66,224 76,1190 66,1190" fill={close ? "#31333b" : "#2a2d33"} />
      {Array.from({ length: 15 }).map((_, i) => (
        <rect key={`s-v-${i}`} x={82 + i * 6} y="212" width="2" height="954" fill="rgba(233,230,214,0.06)" />
      ))}
      {Array.from({ length: 21 }).map((_, i) => (
        <rect key={`s-h-${i}`} x="80" y={238 + i * 42} width="84" height="2" fill="rgba(236,219,196,0.065)" />
      ))}
      <rect x="74" y="514" width="102" height="14" fill="rgba(255,214,178,0.06)" />
    </TowerShell>
  );
}

function NeedleTower({ close = false }) {
  return (
    <TowerShell>
      <polygon points="98,128 146,128 136,1190 108,1190" fill={close ? "#242838" : "#1d2230"} />
      <polygon points="146,128 168,152 154,1190 136,1190" fill={close ? "#181b28" : "#131824"} />
      <polygon points="98,128 108,152 118,1190 108,1190" fill={close ? "#31374a" : "#262d3f"} />
      <polygon points="108,128 136,128 132,60 122,20 112,60" fill={close ? "#505b7a" : "#434d67"} />
      <polygon points="118,20 126,20 122,0" fill={close ? "#8a96ba" : "#7480a6"} />
      {Array.from({ length: 11 }).map((_, i) => (
        <rect key={`n-h-${i}`} x="110" y={220 + i * 78} width="28" height="2" fill="rgba(180,210,255,0.085)" />
      ))}
      <rect x="116" y="176" width="12" height="922" fill="rgba(145,176,220,0.07)" />
    </TowerShell>
  );
}

function MasonryCrownTower({ close = false }) {
  return (
    <TowerShell>
      <polygon points="44,170 194,170 180,1190 58,1190" fill={close ? "#302227" : "#271b20"} />
      <polygon points="194,170 212,190 196,1190 180,1190" fill={close ? "#1e1418" : "#180f12"} />
      <polygon points="44,170 58,190 72,1190 58,1190" fill={close ? "#402e34" : "#36272d"} />
      <polygon points="76,114 164,114 194,170 44,170" fill={close ? "#4b3037" : "#412930"} />
      <polygon points="88,62 152,62 164,114 76,114" fill={close ? "#5a3841" : "#50313a"} />
      <polygon points="102,20 138,20 152,62 88,62" fill={close ? "#6a434d" : "#5d3a45"} />
      <polygon points="114,0 126,0 138,20 102,20" fill={close ? "#84515b" : "#764752"} />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect key={`m-v-${i}`} x={78 + i * 9} y="186" width="3" height="980" fill="rgba(255,221,196,0.055)" />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={`m-h-${i}`} x="72" y={218 + i * 44} width="104" height="2" fill="rgba(255,210,180,0.07)" />
      ))}
      <rect x="68" y="644" width="114" height="16" fill="rgba(255,170,110,0.05)" />
    </TowerShell>
  );
}

function LeftCornerTower() {
  return (
    <svg viewBox="0 0 360 1200" className="h-full w-full" preserveAspectRatio="none">
      <polygon points="28,168 232,168 208,1190 24,1190" fill="#1e2028" />
      <polygon points="232,168 316,232 286,1190 208,1190" fill="#13151c" />
      <polygon points="44,118 220,118 232,168 28,168" fill="#2f3340" />
      <polygon points="64,60 196,60 220,118 44,118" fill="#3d4252" />
      <polygon points="88,18 168,18 196,60 64,60" fill="#51586a" />
      <polygon points="116,0 146,0 168,18 88,18" fill="#6a7387" />
      <rect x="70" y="196" width="110" height="856" fill="rgba(220,233,255,0.045)" />
      {Array.from({ length: 16 }).map((_, i) => (
        <rect key={`lc-v-${i}`} x={78 + i * 6} y="198" width="2" height="838" fill="rgba(220,236,255,0.05)" />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={`lc-h-${i}`} x="68" y={236 + i * 38} width="122" height="2" fill="rgba(255,255,255,0.05)" />
      ))}
      <StorefrontStrip x={40} y={1010} width={250} depth />
    </svg>
  );
}

function RightCornerTower() {
  return (
    <svg viewBox="0 0 360 1200" className="h-full w-full" preserveAspectRatio="none">
      <polygon points="124,168 332,168 336,1190 154,1190" fill="#1e2028" />
      <polygon points="48,230 124,168 154,1190 72,1190" fill="#2e3240" />
      <polygon points="136,118 316,118 332,168 124,168" fill="#2f3340" />
      <polygon points="160,62 296,62 316,118 136,118" fill="#3c4354" />
      <polygon points="184,20 270,20 296,62 160,62" fill="#50586c" />
      <polygon points="208,0 240,0 270,20 184,20" fill="#6c7589" />
      <rect x="176" y="190" width="112" height="860" fill="rgba(220,233,255,0.045)" />
      {Array.from({ length: 16 }).map((_, i) => (
        <rect key={`rc-v-${i}`} x={184 + i * 6} y="196" width="2" height="840" fill="rgba(220,236,255,0.05)" />
      ))}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect key={`rc-h-${i}`} x="172" y={236 + i * 38} width="122" height="2" fill="rgba(255,255,255,0.05)" />
      ))}
      <StorefrontStrip x={68} y={1010} width={252} />
    </svg>
  );
}

function StorefrontStrip({ x = 0, y = 0, width = 240, depth = false }) {
  const bays = 5;
  const bayWidth = width / bays;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="0" width={width} height="120" fill={depth ? "#181a22" : "#16181f"} />
      <rect x="0" y="0" width={width} height="20" fill="#313546" opacity="0.9" />
      <rect x="0" y="20" width={width} height="12" fill="#5b3a42" opacity="0.55" />
      {Array.from({ length: bays }).map((_, i) => (
        <g key={`bay-${i}`} transform={`translate(${i * bayWidth},0)`}>
          <rect x="8" y="36" width={bayWidth - 16} height="58" fill="#0f141a" />
          <rect x="8" y="36" width={bayWidth - 16} height="6" fill="#1e2732" />
          <rect
            x={bayWidth / 2 - 10}
            y="94"
            width="20"
            height="22"
            fill="rgba(28,31,40,0.9)"
          />
          <rect x="0" y="24" width={bayWidth} height="4" fill="rgba(255,197,132,0.12)" />
          <rect x="14" y="44" width={bayWidth - 28} height="34" fill="rgba(137,170,230,0.05)" />
        </g>
      ))}
      <rect x="0" y="112" width={width} height="8" fill="#0c0d12" />
    </g>
  );
}

function StreetLayer({ progress }) {
  const night = smoothstep(0.68, 1, progress);

  return (
    <div className="absolute inset-0">
      <RoadCorridor />
      <div className="absolute left-0 bottom-[14%] h-[38%] w-[22%]">
        <LowerFacade side="left" />
      </div>
      <div className="absolute right-0 bottom-[14%] h-[38%] w-[22%]">
        <LowerFacade side="right" />
      </div>

      <div
        className="absolute inset-x-[8%] bottom-[30%] h-[12%]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(255,188,132,0.08) 16%, rgba(143,171,216,0.04) 50%, rgba(255,188,132,0.08) 84%, rgba(0,0,0,0))",
          filter: "none",
          opacity: 0.7,
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-[24%]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,10,15,0), rgba(8,8,12,0.22) 30%, rgba(6,6,10,0.74) 100%)",
          opacity: 0.8 + night * 0.12,
        }}
      />
    </div>
  );
}

function LowerFacade({ side = "left" }) {
  const isLeft = side === "left";

  return (
    <svg viewBox="0 0 300 320" className="h-full w-full" preserveAspectRatio="none">
      {isLeft ? (
        <>
          <polygon points="0,0 230,0 178,320 0,320" fill="#12151d" />
          <polygon points="230,0 300,48 262,320 178,320" fill="#0d1016" />
          <rect x="26" y="24" width="132" height="150" fill="rgba(143,170,216,0.035)" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={`lf-v-${i}`} x={34 + i * 18} y="20" width="2" height="168" fill="rgba(255,255,255,0.04)" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <rect key={`lf-h-${i}`} x="24" y={44 + i * 32} width="146" height="2" fill="rgba(255,255,255,0.04)" />
          ))}
          <StorefrontStrip x={14} y={188} width={250} depth />
        </>
      ) : (
        <>
          <polygon points="70,0 300,0 300,320 122,320" fill="#12151d" />
          <polygon points="0,48 70,0 122,320 38,320" fill="#20252f" />
          <rect x="142" y="24" width="132" height="150" fill="rgba(143,170,216,0.035)" />
          {Array.from({ length: 6 }).map((_, i) => (
            <rect key={`rf-v-${i}`} x={150 + i * 18} y="20" width="2" height="168" fill="rgba(255,255,255,0.04)" />
          ))}
          {Array.from({ length: 4 }).map((_, i) => (
            <rect key={`rf-h-${i}`} x="140" y={44 + i * 32} width="146" height="2" fill="rgba(255,255,255,0.04)" />
          ))}
          <StorefrontStrip x={34} y={188} width={250} />
        </>
      )}
    </svg>
  );
}

function RoadCorridor() {
  return (
    <svg
      viewBox="0 0 1200 420"
      className="absolute inset-x-0 bottom-0 h-[72%] w-full"
      preserveAspectRatio="none"
    >
      <polygon points="360,40 840,40 1120,420 80,420" fill="#0e1016" />
      <polygon points="420,112 780,112 980,420 220,420" fill="#14171f" opacity="0.9" />
      <polygon points="468,150 732,150 868,420 332,420" fill="#10131a" opacity="0.95" />
      <polygon points="470,148 732,148 740,162 462,162" fill="rgba(255,186,124,0.08)" />
      <polygon points="80,420 226,354 978,354 1120,420" fill="#1b1d24" />
      <polygon points="128,420 236,372 964,372 1072,420" fill="#232730" opacity="0.85" />

      {Array.from({ length: 6 }).map((_, i) => {
        const y = 186 + i * 38;
        const w = 170 - i * 18;
        const x = 600 - w / 2;
        return (
          <rect
            key={`cw-${i}`}
            x={x}
            y={y}
            width={w}
            height={8}
            rx="2"
            fill="rgba(241,243,247,0.11)"
          />
        );
      })}

      {Array.from({ length: 5 }).map((_, i) => (
        <g key={`pole-l-${i}`} opacity="0.42">
          <rect x={220 - i * 26} y={92 + i * 22} width="4" height={138 + i * 26} fill="#313542" />
          <rect x={206 - i * 26} y={88 + i * 22} width="32" height="6" fill="#4d5263" />
        </g>
      ))}

      {Array.from({ length: 5 }).map((_, i) => (
        <g key={`pole-r-${i}`} opacity="0.42">
          <rect x={976 + i * 22} y={92 + i * 22} width="4" height={138 + i * 26} fill="#313542" />
          <rect x={962 + i * 22} y={88 + i * 22} width="32" height="6" fill="#4d5263" />
        </g>
      ))}

      <polygon points="338,420 420,220 454,220 402,420" fill="rgba(255,255,255,0.02)" />
      <polygon points="798,420 746,220 780,220 862,420" fill="rgba(255,255,255,0.02)" />
    </svg>
  );
}

function IntroSection() {
  return <section data-home-snap-section className="relative min-h-[100svh]" />;
}

function IntroOverlay({ onExistingStarsOpacityChange, onComplete }) {
  const [phase, setPhase] = useState("idle");
  const [tapPoint, setTapPoint] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [viewport, setViewport] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900,
  });

  const rafRef = useRef(null);
  const startRef = useRef(0);
  const lockingStarsRef = useRef([]);
  const burstParticlesRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (phase !== "animating") return;

    const duration = 5200;

    const step = (time) => {
      if (!startRef.current) startRef.current = time;
      const nextElapsed = time - startRef.current;
      setElapsed(nextElapsed);

      const existingStarsOpacity = smoothstep(1220, 2150, nextElapsed);
      onExistingStarsOpacityChange(existingStarsOpacity);

      if (nextElapsed >= duration) {
        onExistingStarsOpacityChange(1);
        setPhase("done");
        onComplete();
        return;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase, onComplete, onExistingStarsOpacityChange]);

  const generateLockingStars = (originX, originY) => {
    const count = 210;
    const width = viewport.width;
    const height = viewport.height;

    return Array.from({ length: count }, (_, i) => {
      const rawY = Math.pow(Math.random(), 0.86) * height;
      const targetX = Math.random() * width;
      const targetY = rawY;
      const dx = targetX - originX;
      const dy = targetY - originY;
      const lockTime = 320 + Math.random() * 1050;
      const angleJitter = (Math.random() - 0.5) * 0.18;
      const baseAngle = Math.atan2(dy, dx) + angleJitter;

      return {
        id: `lock-${i}`,
        originX,
        originY,
        targetX,
        targetY,
        baseAngle,
        lockTime,
        size: 0.6 + Math.random() * 2,
        opacity: 0.16 + Math.random() * 0.74,
        blur: Math.random() > 0.82 ? 1.4 : 0,
        drift: (Math.random() - 0.5) * 16,
        twinkle: Math.random() * Math.PI * 2,
      };
    });
  };

  const generateBurstParticles = (originX, originY) => {
    const count = 95;

    return Array.from({ length: count }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 120 + Math.random() * 380;
      const life = 500 + Math.random() * 900;

      return {
        id: `burst-${i}`,
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 0.8 + Math.random() * 2.4,
        opacity: 0.35 + Math.random() * 0.7,
        life,
        blur: Math.random() > 0.8 ? 1.1 : 0,
      };
    });
  };

  const startIntro = (clientX, clientY) => {
    if (phase !== "idle") return;

    window.scrollTo(0, 0);
    setTapPoint({ x: clientX, y: clientY });
    lockingStarsRef.current = generateLockingStars(clientX, clientY);
    burstParticlesRef.current = generateBurstParticles(clientX, clientY);
    startRef.current = 0;
    setElapsed(0);
    setPhase("animating");
  };

  const handlePointerDown = (event) => {
    startIntro(event.clientX, event.clientY);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    startIntro(touch.clientX, touch.clientY);
  };

  const blackOverlayOpacity =
    phase === "idle" ? 1 : 1 - smoothstep(820, 1980, elapsed);

  const lockedStarsLayerOpacity =
    phase === "idle" ? 0 : 1 - smoothstep(1780, 2350, elapsed);

  const glowOpacity = phase === "idle" ? 0 : 0.18 * (1 - smoothstep(650, 1850, elapsed));

  return (
    <div
      className="fixed inset-0 z-50"
      onMouseDown={handlePointerDown}
      onTouchStart={handleTouchStart}
      style={{
        cursor: phase === "idle" ? "pointer" : "default",
        pointerEvents: phase === "done" ? "none" : "auto",
        touchAction: "none",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "#000000",
          opacity: blackOverlayOpacity,
          transition: phase === "idle" ? "none" : "opacity 80ms linear",
        }}
      />

      {tapPoint && (
        <div className="pointer-events-none absolute inset-0" style={{ opacity: glowOpacity }}>
          <div
            className="absolute"
            style={{
              left: tapPoint.x,
              top: tapPoint.y,
              width: 520,
              height: 520,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(180,200,255,0.08) 18%, rgba(70,88,140,0.045) 38%, rgba(0,0,0,0) 72%)",
              filter: "blur(12px)",
            }}
          />
        </div>
      )}

      {phase !== "idle" && (
        <div className="pointer-events-none absolute inset-0">
          <IntroLockedStars
            stars={lockingStarsRef.current}
            elapsed={elapsed}
            opacity={lockedStarsLayerOpacity}
          />
          <IntroBurstParticles
            particles={burstParticlesRef.current}
            elapsed={elapsed}
            opacity={1 - smoothstep(850, 1500, elapsed)}
          />
          <IntroShipMoment elapsed={elapsed} />
        </div>
      )}
    </div>
  );
}

function IntroShipMoment({ elapsed }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const entrance = easeOutQuart(smoothstep(1700, 3200, elapsed));
  const bubbleIn = smoothstep(3150, 4050, elapsed);
  const bridgeHold = smoothstep(4920, 5200, elapsed);

  const x = lerp(124, ORIGIN_SHIP_POSITION.x, entrance);
  const y = lerp(50, ORIGIN_SHIP_POSITION.y, entrance) + Math.sin(elapsed / 560) * 0.35;
  const rotate = lerp(-2, ORIGIN_SHIP_POSITION.rotate, entrance);

  const bubbleStyle = isMobile
    ? {
        left: "50%",
        top: "calc(49vh - 190px)",
        width: "calc(100vw - 32px)",
        maxWidth: "270px",
        opacity: bubbleIn,
        transform: `translate(-50%, -50%) translate3d(${lerp(18, 0, bubbleIn)}px, ${lerp(8, 0, bubbleIn)}px, 0)`,
      }
    : {
        left: `calc(${ORIGIN_SHIP_POSITION.x}vw + ${ORIGIN_BUBBLE_DIAMOND_OFFSET.x}px)`,
        top: `calc(${ORIGIN_SHIP_POSITION.y}vh + ${ORIGIN_BUBBLE_DIAMOND_OFFSET.y}px)`,
        opacity: bubbleIn,
        transform: `translate3d(${lerp(18, 0, bubbleIn)}px, ${lerp(8, 0, bubbleIn)}px, 0)`,
      };

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: 1 - bridgeHold * 0.02,
      }}
    >
      <div
        className="absolute"
        style={{
          left: `${x}vw`,
          top: `${y}vh`,
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          transition: "none",
        }}
      >
        <SpaceshipVessel side="right" scale={1.08} />
      </div>

      <div
        className="absolute"
        style={bubbleStyle}
      >
        <GlassBubble
          side="right"
          text="A long ass time ago, this universe came from nothing."
          label="origin"
          anchorDiamond
        />
      </div>
    </div>
  );
}

function OriginHoldMoment({ opacity = 1 }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const bubbleStyle = isMobile
    ? {
        left: "50%",
        top: "calc(49vh - 190px)",
        width: "calc(100vw - 32px)",
        maxWidth: "270px",
        opacity,
        transform: `translate(-50%, -50%) translate3d(0px, ${lerp(0, -8, 1 - opacity)}px, 0)`,
      }
    : {
        left: `calc(${ORIGIN_SHIP_POSITION.x}vw + ${ORIGIN_BUBBLE_DIAMOND_OFFSET.x}px)`,
        top: `calc(${ORIGIN_SHIP_POSITION.y}vh + ${ORIGIN_BUBBLE_DIAMOND_OFFSET.y}px)`,
        opacity,
        transform: "translate3d(0px, 0px, 0px)",
      };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        opacity,
      }}
    >
      <div
        className="absolute"
        style={{
          left: `${ORIGIN_SHIP_POSITION.x}vw`,
          top: `${ORIGIN_SHIP_POSITION.y}vh`,
          transform: `translate(-50%, -50%) rotate(${ORIGIN_SHIP_POSITION.rotate}deg)`,
        }}
      >
        <SpaceshipVessel side="right" scale={1.08} />
      </div>

      <div className="absolute" style={bubbleStyle}>
        <GlassBubble
          side="right"
          text="A long ass time ago, this universe came from nothing."
          label="origin"
        />
      </div>
    </div>
  );
}

function IntroLockedStars({ stars, elapsed, opacity }) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      {stars.map((star) => {
        const travelT = clamp(elapsed / star.lockTime);
        const eased = easeOutQuart(travelT);

        const arcBend = Math.sin(eased * Math.PI) * star.drift;
        const x =
          lerp(star.originX, star.targetX, eased) +
          Math.cos(star.baseAngle + Math.PI / 2) * arcBend;
        const y =
          lerp(star.originY, star.targetY, eased) +
          Math.sin(star.baseAngle + Math.PI / 2) * arcBend;

        const locked = elapsed >= star.lockTime;
        const appear = smoothstep(0, 140, elapsed);
        const twinkle =
          locked ? 0.92 + Math.sin(elapsed / 230 + star.twinkle) * 0.08 : 1;

        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: x,
              top: y,
              width: star.size,
              height: star.size,
              opacity: star.opacity * appear * twinkle,
              filter: `blur(${star.blur}px)`,
              transform: "translate(-50%, -50%)",
              boxShadow:
                star.size > 1.5
                  ? "0 0 12px rgba(255,255,255,0.35)"
                  : "0 0 6px rgba(255,255,255,0.15)",
            }}
          />
        );
      })}
    </div>
  );
}

function IntroBurstParticles({ particles, elapsed, opacity }) {
  return (
    <div className="absolute inset-0" style={{ opacity }}>
      {particles.map((particle) => {
        const t = clamp(elapsed / particle.life);
        if (t >= 1) return null;

        const eased = easeOutCubic(t);
        const x = particle.x + particle.vx * (elapsed / 1000) * (1 - t * 0.18);
        const y = particle.y + particle.vy * (elapsed / 1000) * (1 - t * 0.18);

        return (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: x,
              top: y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity * (1 - eased),
              filter: `blur(${particle.blur}px)`,
              transform: `translate(-50%, -50%) scale(${lerp(1, 0.7, eased)})`,
              boxShadow:
                particle.size > 1.5
                  ? "0 0 14px rgba(255,255,255,0.28)"
                  : "0 0 7px rgba(255,255,255,0.14)",
            }}
          />
        );
      })}
    </div>
  );
}

function PersistentGuideShip({ progress }) {
  const nodes = [
    { 
      p: 0.0,
      x: 58,
      y: 49,
      side: "right",
      rotate: -7,
      text: null,
      label: "origin",
    },
    { 
      p: 1 / 7,
      x: 76,
      y: 50,
      side: "right",
      rotate: 3,
      text: PROJECTS[0].narration,
      label: "narration",
    },
    { 
      p: 2 / 7,
      x: 24,
      y: 50,
      side: "left",
      rotate: -4,
      text: PROJECTS[1].narration,
      label: "narration",
    },
    { 
      p: 3 / 7,
      x: 76,
      y: 50,
      side: "right",
      rotate: 4,
      text: PROJECTS[2].narration,
      label: "narration",
    },
    { 
      p: 4 / 7,
      x: 24,
      y: 50,
      side: "left",
      rotate: -5,
      text: PROJECTS[3].narration,
      label: "narration",
    },
    { 
      p: 5 / 7,
      x: 76,
      y: 50,
      side: "right",
      rotate: 4,
      text: PROJECTS[4].narration,
      label: "narration",
    },
    { 
      p: 6 / 7,
      x: 24,
      y: 50,
      side: "left",
      rotate: -4,
      text: PROJECTS[5].narration,
      label: "narration",
    },
    { 
      p: 0.94,
      x: 50,
      y: 64,
      side: "right",
      rotate: 0,
      text: null,
      label: "narration",
    },
    { 
      p: 1.0,
      x: 50,
      y: 78,
      side: "right",
      rotate: 0,
      text: null,
      label: "narration",
    },
  ];

  let currentIndex = 0;
  for (let i = 0; i < nodes.length - 1; i += 1) {
    if (progress >= nodes[i].p && progress <= nodes[i + 1].p) {
      currentIndex = i;
      break;
    }
    if (progress > nodes[i + 1].p) currentIndex = i + 1;
  }

  const start = nodes[Math.min(currentIndex, nodes.length - 2)];
  const end = nodes[Math.min(currentIndex + 1, nodes.length - 1)];
  const rawT = clamp((progress - start.p) / Math.max(0.0001, end.p - start.p));
  const t = easeInOutCubic(rawT);

  const directionShift = start.side === end.side ? 0 : start.side === "right" ? -1 : 1;
  const arc = Math.sin(t * Math.PI);
  const doubleArc = Math.sin(t * Math.PI * 2);

  const x = lerp(start.x, end.x, t) + arc * directionShift * 7.5;
  const y = lerp(start.y, end.y, t) - arc * 10 + doubleArc * 4 + Math.sin(progress * 60) * 0.28 + 7;
  const rotate = lerp(start.rotate, end.rotate, t) + doubleArc * 8;
  const side = rawT < 0.5 ? start.side : end.side;
  const projectIndex = Math.min(
    PROJECTS.length - 1,
    Math.max(0, Math.round(progress * 7 - 1))
  );

  const introBlend = smoothstep(0.018, 0.08, progress);
  const stableProject = PROJECTS[projectIndex] || PROJECTS[0];
  const text = stableProject.narration;
  const label = stableProject.bubbleLabel || "narration";
  const projectBubbleOffset = stableProject.bubbleOffset || { x: 0, y: 0 };
  const bubbleSide = side;
  const speechGeometry = DESKTOP_SPEECH_GEOMETRY[bubbleSide];

  const finalTravelBegins = progress >= 0.94;
  const stableAtStart = currentIndex > 0 && currentIndex < nodes.length - 2
    ? (1 - smoothstep(0.14, 0.23, rawT))
    : 0;
  const stableAtArrival = currentIndex < nodes.length - 2
    ? smoothstep(0.84, 0.94, rawT)
    : 0;
  const stableDuringProjectSix =
    progress >= 6 / 7 && progress < 0.94 ? 1 : 0;
  const stableWindow = Math.max(stableAtStart, stableAtArrival, stableDuringProjectSix);
  const travelSafeBubble = finalTravelBegins ? 0 : stableWindow;

  const finalSectionFade = 1 - smoothstep(0.86, 0.9, progress);
  const originFade = smoothstep(ORIGIN_HANDOFF_PROGRESS, 0.055, progress);
  const projectBubbleIntro = smoothstep(0.07, 0.105, progress);
  const bubbleOpacity = projectBubbleIntro * finalSectionFade * travelSafeBubble;
  const overallOpacity = originFade * (1 - smoothstep(0.85, 0.92, progress));

  const bubbleLeft = `calc(${x}vw + ${speechGeometry.diamondFromShipX - speechGeometry.diamondLocalX + projectBubbleOffset.x}px)`;
  const bubbleTop = `calc(${y}vh + ${speechGeometry.diamondFromShipY - speechGeometry.diamondLocalY + projectBubbleOffset.y}px)`;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-20 hidden lg:block"
        style={{
          opacity: overallOpacity,
        }}
      >
        <div
          className="absolute"
          style={{
            left: `${x}vw`,
            top: `${y}vh`,
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
        >
          <SpaceshipVessel side={side} scale={0.98 + introBlend * 0.02} />
        </div>

        {bubbleOpacity > 0.01 && (
          <div
            className="absolute"
            style={{
              left: bubbleLeft,
              top: bubbleTop,
              opacity: bubbleOpacity,
            }}
          >
            <GlassBubble side={bubbleSide} text={text} label={label} />
          </div>
        )}
      </div>
    </>
  );
}

function MobileProjectGuide({ project, index, visible }) {
  const shipOnRight = index % 2 === 0;
  const bubbleSide = shipOnRight ? "right" : "left";
  const shipSide = shipOnRight ? "right" : "left";

  return (
    <div
      className="pointer-events-none mt-5 flex w-full flex-col items-center gap-3 px-2 lg:hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 260ms ease, transform 260ms ease",
      }}
    >
      <div
        className="flex w-full max-w-[300px] justify-center text-center"
        style={{
          transform: shipOnRight
            ? "translateX(-60px)"
            : "translateX(60px)",
        }}
      >
        <GlassBubble
          side={bubbleSide}
          text={project.narration}
          label={project.bubbleLabel || "narration"}
        />
      </div>

      <div
        className="h-[92px] w-[150px] overflow-visible"
        style={{
          transform: shipOnRight
            ? "translateX(122px) translateY(-70px)"
            : "translateX(-122px) translateY(-70px)",
        }}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            transform: "scale(0.78)",
            transformOrigin: "center center",
          }}
        >
          <SpaceshipVessel side={shipSide} scale={0.78} />
        </div>
      </div>
    </div>
  );
}

function TimelineEntry({ project, index, onNavigateProject }) {
  const [visible, setVisible] = useState(false);
  const entryRef = useRef(null);

  useEffect(() => {
    const element = entryRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.42 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={entryRef}
      className="pointer-events-none relative w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center justify-center py-12 sm:py-0">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-5">
          {index % 2 === 0 ? (
            <>
              <div className="hidden lg:block" />
              <div className="flex justify-center lg:justify-center">
                <div className="flex flex-col items-center">
                  <AnimatedAppear visible={visible} xFrom={-24} delay={30}>
                    <ProjectCard project={project} index={index} onNavigateProject={onNavigateProject} />
                  </AnimatedAppear>
                  <MobileProjectGuide project={project} index={index} visible={visible} />
                </div>
              </div>
              <div className="hidden lg:block" />
              <div className="hidden lg:block" />
              <div className="hidden lg:block" />
            </>
          ) : (
            <>
              <div className="hidden lg:block" />
              <div className="hidden lg:block" />
              <div className="hidden lg:block" />
              <div className="flex justify-center lg:justify-center">
                <div className="flex flex-col items-center">
                  <AnimatedAppear visible={visible} xFrom={24} delay={120}>
                    <ProjectCard project={project} index={index} onNavigateProject={onNavigateProject} />
                  </AnimatedAppear>
                  <MobileProjectGuide project={project} index={index} visible={visible} />
                </div>
              </div>
              <div className="hidden lg:block" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function AnimatedAppear({ visible, xFrom = 0, delay = 0, children }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translate3d(0px, 0px, 0px)"
          : `translate3d(${xFrom}px, 8px, 0px)`,
        transition:
          "opacity 820ms cubic-bezier(0.22,1,0.36,1), transform 820ms cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index, onNavigateProject }) {
  return (
    <div className="pointer-events-auto w-full max-w-[330px] sm:max-w-[420px] lg:max-w-[560px] sm:scale-[1.01] lg:scale-[1.08]">
      <button
        type="button"
        onClick={() => onNavigateProject(project.id)}
        className="group block w-full rounded-[38px] border border-white/12 bg-black/12 p-6 text-left backdrop-blur-[10px] transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:scale-[1.018] hover:border-white/20 hover:bg-white/[0.035] active:translate-y-[-2px] active:scale-[0.995] sm:p-7"
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 18px 80px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex flex-col">
          <div className="transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-z-4 group-hover:scale-[1.012]">
            <CoverArt src={project.coverImage} alt={`${project.title} cover art`} variant={index + 1} />
          </div>

          <div className="mt-6 text-[1.22rem] font-light leading-[1.15] tracking-[0.02em] text-white/94 sm:text-[1.3rem]">
            {project.title}
          </div>

          <div className="mt-3 inline-flex items-center gap-2 text-[0.8rem] uppercase tracking-[0.24em] text-white/60 transition duration-300 group-hover:text-white/88">
            <span>{project.link}</span>
            <span className="transition duration-300 group-hover:translate-x-1">→</span>
          </div>
        </div>
      </button>
    </div>
  );
}

function CoverArt({ src, alt, variant = 1 }) {
  if (!src) {
    return <MockCoverArt variant={variant} />;
  }

  return (
    <div
      className="relative aspect-square overflow-hidden border border-white/10 bg-black/40"
      style={{
        borderRadius: "30px",
        boxShadow:
          "0 18px 60px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={{
          objectPosition: "center center",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.16) 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 18px 40px rgba(255,255,255,0.035), inset 0 -20px 50px rgba(0,0,0,0.22)",
        }}
      />
    </div>
  );
}

function MockCoverArt({ variant = 1 }) {
  const accentSets = [
    ["rgba(146,182,255,0.18)", "rgba(255,255,255,0.06)"],
    ["rgba(255,179,138,0.16)", "rgba(255,255,255,0.05)"],
    ["rgba(241,169,205,0.15)", "rgba(255,255,255,0.05)"],
    ["rgba(132,208,205,0.15)", "rgba(255,255,255,0.05)"],
    ["rgba(192,170,255,0.14)", "rgba(255,255,255,0.05)"],
    ["rgba(255,213,148,0.12)", "rgba(255,255,255,0.05)"],
  ];

  const [glowA, glowB] = accentSets[(variant - 1) % accentSets.length];

  return (
    <div
      className="relative aspect-square overflow-hidden border border-white/10"
      style={{
        borderRadius: "30px",
        background:
          "linear-gradient(180deg, rgba(14,16,24,0.96) 0%, rgba(18,18,28,0.98) 100%)",
      }}
    >
      <div
        className="absolute inset-[10%]"
        style={{
          border: "1px solid rgba(255,255,255,0.11)",
          borderRadius: "26px",
        }}
      />
      <div
        className="absolute left-[16%] top-[16%] right-[16%] h-[36%] rounded-[24px]"
        style={{
          background: `linear-gradient(135deg, ${glowA}, ${glowB})`,
        }}
      />
      <div className="absolute left-[16%] right-[16%] bottom-[20%] h-[2px] bg-white/12" />
      <div className="absolute left-[16%] right-[34%] bottom-[15%] h-[2px] bg-white/10" />
      <div
        className="absolute left-[20%] bottom-[28%] h-[26%] w-[32%] rounded-[24px]"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${glowA}, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />
    </div>
  );
}

function SpaceshipVessel({ side = "right", scale = 1 }) {
  const flip = side === "left" ? -1 : 1;

  return (
    <div
      className="relative h-[132px] w-[180px]"
      style={{
        transform: `scale(${scale}) scaleX(${flip})`,
        transformOrigin: "center",
        filter:
          "drop-shadow(0 18px 34px rgba(0,0,0,0.46)) drop-shadow(0 0 26px rgba(154,199,225,0.18))",
      }}
    >
      <div
        className="absolute left-[16px] top-[54px] h-[28px] w-[128px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 38% 38%, rgba(170,197,220,0.16), rgba(33,44,58,0.82) 42%, rgba(9,13,20,0.92) 100%)",
          border: "1px solid rgba(255,255,255,0.11)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -12px 20px rgba(0,0,0,0.28), 0 0 24px rgba(134,189,218,0.12)",
        }}
      />

      <div
        className="absolute left-[78px] top-[49px] h-[38px] w-[78px]"
        style={{
          clipPath: "polygon(0% 50%, 86% 3%, 100% 50%, 86% 97%)",
          background:
            "linear-gradient(90deg, rgba(15,20,30,0.92), rgba(48,62,78,0.82) 58%, rgba(13,18,27,0.95))",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.14), inset -14px 0 18px rgba(0,0,0,0.28)",
        }}
      />

      <div
        className="absolute left-[42px] top-[34px] h-[42px] w-[68px] rounded-[52%_52%_40%_40%]"
        style={{
          background:
            "radial-gradient(ellipse at 42% 18%, rgba(218,238,255,0.16), rgba(74,94,116,0.22) 32%, rgba(17,24,34,0.8) 72%, rgba(7,10,16,0.94) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -10px 20px rgba(0,0,0,0.3)",
        }}
      />

      <div
        className="absolute left-[24px] top-[72px] h-[26px] w-[62px]"
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 76% 100%, 0% 68%)",
          background:
            "linear-gradient(135deg, rgba(24,33,45,0.84), rgba(9,13,20,0.96))",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      />

      <div
        className="absolute left-[42px] top-[40px] h-[17px] w-[48px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(201,228,255,0.1), rgba(226,241,255,0.22), rgba(201,228,255,0.08))",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.16), 0 0 12px rgba(175,220,255,0.1)",
        }}
      />

      <div
        className="absolute left-[128px] top-[58px] h-[18px] w-[26px] rounded-r-full"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(224,245,255,0.2), rgba(111,164,194,0.1) 42%, rgba(0,0,0,0) 72%)",
          filter: "blur(1px)",
        }}
      />

      <div
        className="absolute left-[4px] top-[61px] h-[12px] w-[28px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at right, rgba(172,220,255,0.2), rgba(80,120,154,0.08) 42%, rgba(0,0,0,0) 78%)",
          filter: "blur(1.4px)",
        }}
      />

      <div
        className="absolute left-[22px] top-[104px] h-[9px] w-[114px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(146,200,220,0.16), rgba(71,111,130,0.08) 38%, rgba(0,0,0,0) 74%)",
          filter: "blur(3px)",
        }}
      />

      <div
        className="absolute left-[64px] top-[63px] h-[5px] w-[5px] rounded-full bg-white/35"
        style={{
          boxShadow: "0 0 10px rgba(210,240,255,0.28)",
        }}
      />
      <div
        className="absolute left-[82px] top-[63px] h-[4px] w-[4px] rounded-full bg-white/24"
        style={{
          boxShadow: "0 0 8px rgba(210,240,255,0.2)",
        }}
      />
    </div>
  );
}

function GlassBubble({ side = "right", text, label = "narration", anchorDiamond = false }) {
  const isLeft = side === "left";

  return (
    <div
      className="relative min-h-[100px] max-w-[250px] rounded-[28px] border border-white/12 px-4 py-4 backdrop-blur-[16px] sm:w-[270px] sm:max-w-[270px] sm:px-5 sm:py-4"
        style={{
          transform: anchorDiamond
            ? isLeft
              ? "translate(8px, -calc(100% - 38px))"
              : "translate(calc(-100% + 8px), -calc(100% - 38px))"
            : undefined,
          background:
            "linear-gradient(180deg, rgba(24,34,48,0.26) 0%, rgba(14,20,30,0.34) 55%, rgba(10,14,22,0.3) 100%)",
          boxShadow:
            "0 18px 60px rgba(0,0,0,0.28), 0 0 28px rgba(150,214,215,0.18), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(255,255,255,0.04)",
        }}
    >
      <div
        className="pointer-events-none absolute inset-x-[3%] top-[6%] h-[90%] rounded-[22px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
          filter: "none",
          opacity: 0.3,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(180,220,255,0.06), 0 0 0 1px rgba(255,255,255,0.02)",
        }}
      />
      <div className="relative z-10 space-y-2">
        <div className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
          {label}
        </div>
        <div className="whitespace-pre-line text-sm leading-relaxed text-white/78">{text}</div>
      </div>

      <div
        className="absolute bottom-[20px] h-[18px] w-[18px] rotate-45 rounded-[6px] border border-white/10 backdrop-blur-[16px]"
        style={{
          [isLeft ? "left" : "right"]: "-8px",
          background:
            "linear-gradient(180deg, rgba(18,26,38,0.34), rgba(12,18,28,0.42))",
          boxShadow:
            "0 10px 24px rgba(0,0,0,0.18), 0 0 18px rgba(150,214,215,0.1)",
        }}
      />
    </div>
  );
}

function CreditsSection({ onNavigateSupport }) {
  return (
    <div
      className="mx-auto rounded-[30px] border border-white/10 bg-black/20 px-6 py-6 backdrop-blur-[12px] sm:px-8 sm:py-7"
      style={{
        boxShadow:
          "0 18px 70px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="grid gap-6 md:grid-cols-[1.15fr_0.95fr] md:gap-8">
        <div className="grid gap-4 sm:grid-cols-[1fr_1fr]">
          <CreditsTab title="Contact">
            <a
              href="https://ig.me/m/zaneteedup"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] px-3 py-3 text-left transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.012] hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.99]"
              style={{
                transformStyle: "preserve-3d",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <PhoneIcon />
              <div className="text-sm text-white/66 transition duration-300 group-hover:text-white/84">
                Contact via Message
              </div>
            </a>
            <a
              href="mailto:zanetiptonofficial@gmail.com"
              className="group flex w-full items-center gap-3 rounded-[16px] border border-white/10 bg-white/[0.03] px-3 py-3 text-left transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.012] hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.99]"
              style={{
                transformStyle: "preserve-3d",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <MailIcon />
              <div className="text-sm text-white/66 transition duration-300 group-hover:text-white/84">
                Contact via Mail
              </div>
            </a>
          </CreditsTab>

          <CreditsTab title="Social">
            <div className="grid grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((item) =>
                item.type === "support" ? (
                  <SupportLogoTile
                    key={item.label}
                    label={item.label}
                    onClick={onNavigateSupport}
                  />
                ) : (
                  <LogoTile
                    key={item.label}
                    image={item.image}
                    label={item.label}
                    href={item.href}
                    size="large"
                  />
                )
              )}
            </div>
          </CreditsTab>

          <CreditsTab title="Streaming" className="sm:col-span-2">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STREAMING_LINKS.map((item) => (
                <LogoTile
                  key={item.label}
                  image={item.image}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </div>
          </CreditsTab>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div
              className="relative h-36 w-36 overflow-hidden rounded-full border border-white/12 bg-black/30 sm:h-40 sm:w-40"
              style={{
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.28), 0 0 28px rgba(160,190,255,0.14), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <img
                src={ARTIST_PROFILE_IMAGE}
                alt="Artist profile"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: "center center",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 35% 24%, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 35%, rgba(0,0,0,0.1) 100%)",
                  boxShadow:
                    "inset 0 0 0 10px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreditsTab({ title, className = "", children }) {
  return (
    <div className={`rounded-[20px] border border-white/10 bg-white/[0.03] p-4 ${className}`}>
      <div className="mb-4 text-[0.68rem] uppercase tracking-[0.26em] text-white/46">
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-black/24 transition duration-300 group-hover:border-white/18 group-hover:bg-black/34">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70 transition duration-300 group-hover:text-white/88" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1l-1.3 1.3a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" />
      </svg>
    </div>
  );
}

function MailIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-white/10 bg-black/24 transition duration-300 group-hover:border-white/18 group-hover:bg-black/34">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/70 transition duration-300 group-hover:text-white/88" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    </div>
  );
}

function LogoTile({ image, label, href, size = "normal" }) {
  const isLarge = size === "large";
  const className = `group flex aspect-square w-full items-center justify-center rounded-[18px] border border-white/10 bg-black/24 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.025] hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.985] ${
    isLarge ? "p-4 sm:p-5" : "p-3"
  }`;

  const content = (
    <img
      src={image}
      alt={label}
      className={`object-contain transition duration-300 group-hover:scale-[1.04] ${
        isLarge ? "max-h-[72%] max-w-[74%]" : "max-h-[62%] max-w-[68%]"
      }`}
      style={{
        filter: "brightness(0.86) contrast(1.02)",
        opacity: 0.88,
      }}
    />
  );

  const sharedStyle = {
    transformStyle: "preserve-3d",
    boxShadow:
      "0 10px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        title={label}
        aria-label={label}
        style={sharedStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      title={label}
      aria-label={label}
      style={sharedStyle}
    >
      {content}
    </button>
  );
}

function SupportLogoTile({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex aspect-square w-full items-center justify-center rounded-[18px] border border-white/10 bg-black/24 p-4 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.025] hover:border-white/18 hover:bg-white/[0.055] active:translate-y-[-1px] active:scale-[0.985] sm:p-5"
      title={label}
      aria-label={label}
      style={{
        transformStyle: "preserve-3d",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="max-h-[72%] max-w-[74%] text-white/68 transition duration-300 group-hover:scale-[1.04] group-hover:text-white/88"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" />
        <path d="M12 8v8" />
        <path d="M8.5 10.2 12 8l3.5 2.2" />
        <path d="M8.5 13.8 12 16l3.5-2.2" />
      </svg>
    </button>
  );
}