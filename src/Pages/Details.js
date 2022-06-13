import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "Johnny Depp",
      "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Trending_Hollywood_News_Today_8_June_2022.jpg?impolicy=Medium_Widthonly&w=800",
      "category": "Bollywood",
      "description": "From Johnny Depp living it up after winning his defamation case against Amber Heard and Brad Pitt's Bullet Train trailer to BTS entering the billion club with earnings, J-Hope becoming the first Korean artist to get a solo stage at Lollapalooza Music Fest and Kanye West being heartbroken; it's time to take a look back at all that went down today in the world of entertainment. Here's all what grabbed headlines to make it to the trending Hollywood news today... Ergo, it's time to make a note of the biggest Hollywood newsmakers who've made it to the trending Hollywood news today.."
    },
    {
      "id": 51,
      "title": "Kamal Haasan",
      "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Suriya-5.png",
      "category": "bollywood",
      "description": "Kamal Haasan is currently on cloud 9. His latest release Vikram has done tremendously well at the box office. As per updates, it has crossed Rs 200 crore mark with its worldwide collection. And it seems that the legendary actor is in the mood to celebrate the film's success by splurging on expensive gifts. Recently, actor Suriya shared a picture of the gift he received."
    },
    {
      "id": 2,
      "title": "Deepika Padukone EXUDES desi vibes with a modern touch in a white ruffle saree during the closing ceremony",
      "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Kangana_Ranaut_Thinks_Spook_Video_Of_Qatar_Airways_CEO_Is_Real_Netizens_Call_Her_Dumb.jpg?impolicy=Medium_Widthonly&w=800",
      "category": "Bollywood",
      "description": "Gehraiyaan actress Deepika Padukone is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
    },
    {
      "id": 61,
      "title": "Deepika Padukone EXUDES desi vibes with a modern touch in a white ruffle saree during the closing ceremony",
      "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Deepika-76.png",
      "category": "footer1",
      "description": "Gehraiyaan actress Deepika Padukone is among the few stars who are representing India at Cannes 2022. She is churning out some fabulous fashion stints leaving all her fans mesmerised. For the closing ceremony of the international film festival, the actress opted to go all desi. But not without a modern touch.After wearing some classic modern pieces, Deepika Padukone chose a Abu Jani-Sandeep Khosla creation to end her stint at Cannes 2022.The actress looked absolutely divine as walked the red carpet wearing this beautiful saree. The neckpiece made of pearls added much glam to the sweet saree.  The actress attended the press conference with other jury members Rebecca Hall and Jeff Nichols. Sticking to her roots, she greeted everyone with a namaste.Well, if this picture does not hypnotise you then we don't know what will. Subtle makeup, pearl earrings and more - the actress looked drop-dead gorgeous as ever."
    },
    
    {
      "id": 3,
      "title": "Shilpa Shetty, Alia Bhatt and more: 8 Bollywood divas who own the classiest and most EXPENSIVE vanity vans in the industry",
      "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Shilpa-25.png",
      "category": "Bollywood",
      "description": "On her 47th birthday, Shilpa Shetty gifted herself a swanky vanity van. The pictures prove that her vanity van is a one-of-a-kind, luxurious automobile. It comes with not just the dressing room, it has a lounge area, yoga deck, kitchenette and a lot more. Here's looking inside the vanity vans of other Bollywood divas that scream luxury..Slowly and gradually, we are coming out of the second wave of the pandemic. Shootings that had been stalled are resuming. So, as Bollywood gears up to go back to work and shootings for some of the biggies resumes, here's a look at some of the amazing home of wheels of Bollywood actresses. Walk inside the vanity vans of Bollywood actresses such as Alia Bhatt, Anushka Sharma, Deepika Padukone, Katrina Kaif and more. Here’s the vanity van of the RRR actress. Alia Bhatt has joined the shoot of the epic period drama film co-starring Ram Charan, Jr NTR and more. She also has projects such as Brahmastra, Darlings and more in the pipeline. BTW, did you know Alia Bhatt’s vanity van has been designed by Shah Rukh Khan’s interior decorator wife, Gauri Khan?"
    },
    {
      "id": 4,
      "title": "Shah Rukh Khan, Salman Khan and Madhuri Dixit's selfie has fans recalling Hum Tumhare Hai Sanam",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/shahrukhkhan41653712635.jpg",
      "category": "Bollywood",
      "description": "Karan Johar's 50th birthday bash was one big star-studded celebration. The evening saw a bevvy of Bollywood celebrities making an appearance and with so many biggies coming together, reunions were inevitable. Now, a selfie of Shah Rukh Khan, Salman Khan and Madhuri Dixit has emerged and fans are obsessed.The picture from the party sees Salman Khan flanked by Madhuri Dixit and Shah Rukh Khan. Joining them were Madhuri's husband Shriram Nene and Shah Rukh Khan's wife Gauri Khan. The Fame Game star took to Instagram to share the priceless photo in a post captioned, “So much to talk about, right? @drneneofficial @iamsrk @beingsalmankhan @gaurikhan. Fans cannot get enough of the picture. One fan commented on the sheer star power and wrote, “All Legends in one frame”. While many were thrilled to get a glimpse of Shah Rukh Khan and Salman Khan together, others recalled that the two stars appeared alongside Madhuri Dixit in Hum Tumhare Hai Sanam. The 2002 film was a romantic drama that revolved around a love triangle. Moreover, the pic also sparked nostalgia for Hum Aapke Hai Koun which saw Madhuri and Salman share screen space in an iconic pairing.Karan Johar’s birthday bash had several memorable moments. While Shah Rukh Khan did not walk the red carpet, videos of him dancing like nobody’s watching on Koi Mil Gaya from Kuch Kuch Hota Hai surfaced later. Meanwhile, Salman Khan who was one of the last guests to arrive reportedly stayed at the party till the morning."
    },
    {
      "id": 5,
      "title": "Akshay Kumar was all praise for Manushi Chillar’s sharp memory during the promotions of Prithviraj",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/akshaykumarwasallpraises41653652745.jpg",
      "category": "Bollywood",
      "description": "Akshay Kumar and Manushi Chhillar have kick-started promotions for their upcoming movie Prithviraj, which will be released on June 3. In a recent appearance on a comedy reality show, Akshay was all praise for Manushi Chhillar’s sharp memory. Manushi Chhillar also reciprocated by complimenting Akshay Kumar.In the reality show, Akshay Kumar said, If I talk about Manushi, she has such a sharp memory. She used to memorise all the dialogues, hers, mine as well as those of other actors. She could remember the toughest of words. The duo were also joined by the director, Chandraprakash Dwivedi, for the promotion of the movie on the reality show. He spoke in-depth about the upcoming release. The movie also stars Sanjay Dutt, Sonu Sood, Ashutosh Rana, and Sakshi Tanwar in pivotal rolesManushi also said that even though she loves Akshay Kumar’s comedy movies, she strongly feels that Prithviraj is his best movie to date. She said, I am a big fan of sir’s comedy and the few comedy films that sir has done. But, after watching Prithviraj, I can definitely say that Prithviraj is my favourite film of sir."
    },
    {
      "id": 6,
      "title": "It's official! Hrithik Roshan introduced Saba Azad as his girlfriend at Karan Johar's bash",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/hrithikroshansabaazad41653633774.jpg",
      "category": "Bollywood",
      "description": "Talks of Hrithik Roshan and Saba Azad’s rumoured relationship have been doing the rounds for a while. But now, the two have made it red carpet official by appearing together at Karan Johar's grand birthday bash. Hrithik and Saba arrived at the party on theme in their black outfits and made for a stunning pair. Turns out, after gracing the red carpet, Hrithik also introduced Saba Azad as his girlfriend to fellow attendeesAs per reports on a leading news portal, Hrithik Roshan was by Saba Azad's side the whole evening and went on to introduce her as his girlfriend to guests present at the bash. A source told the portal, Hrithik and Saba “didn’t leave each other’s side and were holding hands throughout the party.he couple (now that we can finally call them that) set the red carpet on fire as they posed for paps. Later, actress Preity Zinta also shared a picture with Hrithik and Saba. Take a look at their unmissable picFor the uninitiated, Hrithik Roshan and Saba Azad have been spending a lot of time together and needless to say, they’ve been the talk of the town. While they are yet to make an announcement to confirm their relationship, it cannot get more obvious than this.Recently, Hrithik and Saba also attended a birthday dinner together with the Roshan family. Hrithik’s father Rakesh Roshan and mother Pinkie were present at the intimate family gathering. Meanwhile, Karan Johar’s bash which took place in Mumbai on May 25 was attended by the most popular Bollywood stars including Aishwarya Rai Bachchan and Abhishek Bachchan, Katrina Kaif and Vicky Kaushal, Anushka Sharma, Ranveer Singh, Ranbir Kapoor and others."
    },
    {
      "id": 54,
      "title": "It's official! Hrithik Roshan introduced Saba Azad as his girlfriend at Karan Johar's bash",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/hrithikroshansabaazad41653633774.jpg",
      "category": "mix",
      "description": "Talks of Hrithik Roshan and Saba Azad’s rumoured relationship have been doing the rounds for a while. But now, the two have made it red carpet official by appearing together at Karan Johar's grand birthday bash. Hrithik and Saba arrived at the party on theme in their black outfits and made for a stunning pair. Turns out, after gracing the red carpet, Hrithik also introduced Saba Azad as his girlfriend to fellow attendeesAs per reports on a leading news portal, Hrithik Roshan was by Saba Azad's side the whole evening and went on to introduce her as his girlfriend to guests present at the bash. A source told the portal, Hrithik and Saba “didn’t leave each other’s side and were holding hands throughout the party.he couple (now that we can finally call them that) set the red carpet on fire as they posed for paps. Later, actress Preity Zinta also shared a picture with Hrithik and Saba. Take a look at their unmissable picFor the uninitiated, Hrithik Roshan and Saba Azad have been spending a lot of time together and needless to say, they’ve been the talk of the town. While they are yet to make an announcement to confirm their relationship, it cannot get more obvious than this.Recently, Hrithik and Saba also attended a birthday dinner together with the Roshan family. Hrithik’s father Rakesh Roshan and mother Pinkie were present at the intimate family gathering. Meanwhile, Karan Johar’s bash which took place in Mumbai on May 25 was attended by the most popular Bollywood stars including Aishwarya Rai Bachchan and Abhishek Bachchan, Katrina Kaif and Vicky Kaushal, Anushka Sharma, Ranveer Singh, Ranbir Kapoor and others."
    },
    {
      "id": 7,
      "title": "Inside pictures from Karan Johar’s 50th birthday: Anushka Sharma and Ranbir Kapoor reunite",
      "Image": "https://filmfare.wwmindia.com/content/2022/may/vickykaushal41653570327.jpg",
      "category": "Bollywood",
      "description": "Karan Johar’s 50th birthday bash is the talk of B-town. The event was attended by A-listers such as Salman Khan, Aamir Khan, Kareena Kapoor Khan, Saif Ali Khan, Kajol, Rani Mukerji, Shahid Kapoor, Mira Kapoor, Anushka Sharma, Gauri Khan, Hrithik Roshan, Ranveer Singh, Ranbir Kapoor among others.After the red-carpet pictures of celebrities riled up a storm, we are now looking at the inside pictures from the event. These pictures candidly show our favourite stars having the time of their lives. As Katrina Kaif and Vicky Kaushal dish out couple goals, Ranbir Kapoor and Anushka Sharma reunite. "
    },
  {
    "id": 8,
    "title": "Bollywood Alia Bhatt finally reacts to viral video of Ranbir Kapoor cradling a baby; cries 'happy tears'",
    "Image": "https://st1.bollywoodlife.com/wp-content/uploads/2022/05/Alia-Ranbir-baby-video.jpg?impolicy=Medium_Widthonly&w=800",
    "category": "Bollywood",
    "description": "A video of Ranbir Kapoor cradling a baby had gone viral on the internet. In the video, Ranbir was seen carrying the little one in his arms, kisses on the head and continues to play with the baby. The fan shared the video on Instagram and wrote, Many social media users started tagging Alia Bhatt after watching the video. And the viral video of Ranbir's has finally got Alia's much-needed attention, and it got her happy tears."
  },
  {
    "id": 9,
    "title": "Bollywood Deepika Padukone looks jaw droppingly stunning in latest photos",
    "Image": "https://www.pinkvilla.com/imageresize/deepika_69.jpg?width=752&format=webp&t=pvorg",
    "category": "Bollywood",
    "description": "Deepika Padukone never fails to impress us with her style. The stunning actress is an epitome of grace and charm. Deepika is the highest paid actress in the country today and has made it to the Top 5 of Forbes List of Richest Indian Celebs. The actor was featured in TIME magazine’s 100 Most Influential People List and is one of the few Indian actors to have attended coveted events abroad. "
  },
  {
    "id": 10,
    "title": "Bollywood Aishwarya Rai Bachchan, Abhishek Bachchan and daughter Aaradhya return ",
    "Image": "https://www.pinkvilla.com/imageresize/abhishek%20bachchan%20aishwarya%20aaradhya%20%282%29.JPG?width=752&format=webp&t=pvorg",
    "category": "Bollywood",
    "description": "Aishwarya Rai Bachchan, Abhishek Bachchan and daughter Aaradhya returned to Mumbai today after ringing in 2019 abroad. Abhishek and Aishwarya shared photos from their New Year getaway as the family basked in the sun. At the airport, daughter Aaradhya was engaged in a conversation with her parents and looked cute as a button in a pink dress."
  },
  {
    "id": 11,
    "title": "Adele’s Boyfriend Rich Paul Hints At Having More Kids: ‘Looking Forward To Being Older Dad ",
    "Image": "https://hollywoodlife.com/wp-content/uploads/2020/04/adele-then-and-now-24.jpg?w=1000",
    "category": "Hollywood",
    "description": "Adele has truly transformed since bursting onto the music scene in 2006. Going from a low-key singer-songwriter to an all-around music diva, it’s no wonder her style has shifted over the years. And it’s not just her duds that have evolved. From showing off long locks and bangs with dark-colored outfits in 2006-2008 to stepping on stage with lighter strands and no bangs to cutting her hair into a classic bob in 2011, this talented lady sure knows how to leave a lasting impression! Adele looks low-key as she performs on stage at the Miles Davis Hall during the 42nd Montreux Jazz Festival in Montreux, Switzerland in July 2008. She wore a striped top and played her acoustic guitar softly."
  },
  {
    "id": 55,
    "title": "Top Gun Maverick BO: Tom Cruise film collects $51 mn in US, ₹4.75 cr in India ",
    "Image": "https://images.hindustantimes.com/img/2022/05/28/550x309/dcf35a88-dd9e-11ec-8fe2-ac5ac3115257_1653667000472_1653747840857.jpg",
    "category": "mix",
    "description": "Top Gun Maverick box office day 1 collection: Tom Cruise's film collected $51 million at the US box office on its opening day. In India, it collected ₹4.75 crore. Top Gun came out in 1986, establishing Cruise, then 24, as an action hero. He’s nearly 60 now, promoted to US Navy captain in the sequel, and working hard to recreate the magic from 36 years ago.Director Joseph Kosinski's Top Gun Maverick, which features Tom Cruise, had a contrasting opening at the box office in India and the US. In the US, the film collected $51 million on its opening day. The film is already Tom’s best opening day ever beating Mission Impossible – Fallout's first-day collection. However, the film has not been able to make a mark in India and collected ₹4.75 crore on day one. In Top Gun Maverick, Tom essays the role of Pete 'Maverick' Mitchell, who is grappling with the diminished standing of fighter pilots in a world that now wages war with drones controlled by people miles away on computers. Top Gun Maverick is produced by Jerry Bruckheimer, Tom Cruise, Christopher McQuarrie and David Ellison.As per a Deadline report, Top Gun Maverick at this Friday night hour is on its way to a $51 million opening day (which includes $19.3 million previews). It would not be shocking to wake up on Saturday morning and see that the sequel has edged out Iron Man 2 ($51.2M) to become Paramount’s top opening day ever. Already, the sequel is Tom Cruise’s best opening day ever in US/Canada besting Mission: Impossible – Fallout‘s first day of $22.8M by 124%."
  },
  {
    "id": 12,
    "title": " Bill Gates & Daughter Phoebe at the TIME100 Gala ",
    "Image": "https://hollywoodlife.com/wp-content/uploads/2022/06/time100-gala-2022-pics-7.jpg?w=1000",
    "description": "Phoebe Gates posed with her father, Bill Gates, on the red carpet of the Time 100 Gala as she donned a metallic silver look with epic matching jewelry.Phoebe Gates, 19, was a gorgeous sight to see on the red carpet of the Time 100 Gala on June 8! The teen showed up to the star-studded event with her dad, Bill Gates, 66, and wore an incredible silver Fendace gown with gold top straps. She added flattering matching jewelry, which included dangling earrings and necklace, and clear strappy heels."
  },
  {
    "id": 13,
    "title": "Amber Heard says she has received threats 'every single day' during trial: 'People want to put my baby in a microwave' ",
    "Image": "https://images.hindustantimes.com/img/2022/05/27/550x309/amber_heard_1652846124301_1653656835956.JPG",
    "category": "Hollywood",
    "description": "In a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I relive the trauma, even from training to do. In my movie, for instance, for training for Aquaman, a combat scene and a trigger happen. I have a meltdown and have to deal with that, the crew I work with have to deal with that, because of the damage I walk around with every single day. I am not sitting in this courtroom snickering. I’m not sitting in this courtroom laughing, smiling, or making snide jokes. I’m not. This is horrible. A jury is scheduled to hear the closing arguments on Friday in Johnny's lawsuit against Amber. Each side will have two hours to summarise their case in a trial that has stretched on for six weeks. Johnny Depp is suing Amber for $50 million in Virginia's Fairfax County Circuit Court over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse”. His lawyers say he was defamed by the article even though it never mentioned his name."
  },
  {
    "id": 62,
    "title": "Amber Heard says she has received threats 'every single day' during trial: 'People want to put my baby in a microwave' ",
    "Image": "https://images.hindustantimes.com/img/2022/05/27/550x309/amber_heard_1652846124301_1653656835956.JPG",
    "category": "footer2",
    "description": "In a video from the trial shared by Law & Crime Network on their YouTube channel, Amber told the jury, I am harassed, humiliated, threatened, every single day. Even just walking into this courtroom. Sitting here in front of the world, having the worst parts of my life, things that I have lived through, used to humiliate me. People want to kill me and they tell me so every day. People want to put my baby in the microwave, and they tell me that. She also said, I live my life with these sets of rules I've to follow, my friends have to follow for me not to have a panic attack or a triggering event or I relive the trauma, even from training to do. In my movie, for instance, for training for Aquaman, a combat scene and a trigger happen. I have a meltdown and have to deal with that, the crew I work with have to deal with that, because of the damage I walk around with every single day. I am not sitting in this courtroom snickering. I’m not sitting in this courtroom laughing, smiling, or making snide jokes. I’m not. This is horrible. A jury is scheduled to hear the closing arguments on Friday in Johnny's lawsuit against Amber. Each side will have two hours to summarise their case in a trial that has stretched on for six weeks. Johnny Depp is suing Amber for $50 million in Virginia's Fairfax County Circuit Court over a December 2018 op-ed she wrote in The Washington Post describing herself as “a public figure representing domestic abuse”. His lawyers say he was defamed by the article even though it never mentioned his name."
  },
  {
    "id": 14,
    "title": "Gauri Khan praises Manish Malhotra for making her look 'so slim', says Maheep Kapoor 'firing me even while posing' ",
    "Image": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/GettyImages-14023450781.jpg?w=681&h=383&crop=1&resize=681%2C383",
    "category": "Hollywood",
    "description": "Taylor Swift is already well-known as a singer-songwriter, but on Saturday she appeared at the Tribeca Festival as a director, a role she’s only taken on in recent years, first helming her music video for “The Man” and, just months ago, directing her short film, All Too Well, soundtracked by the 10-minute version of the song of the same name.Joined by surprise guests Sadie Sink and Dylan O’Brien, who play the couple at the center of the film, Swift explained her approach to crafting All Too Well and how she moved into directing, in a conversation with director Mike Mills."
  },
  {
    "id": 15,
    "title": "The key rulings from the judge may swing the actor's defamation trial against ex-wife Amber Heard ",
    "Image": "https://www.hollywoodreporter.com/wp-content/uploads/2022/05/Amber-Heard-Defamation-Trial-Fairfax-VA-GettyImages-1399192189-H-2022.jpg?w=681&h=383&crop=1&resize=681%2C383",
    "category": "Hollywood",
    "description": "Logo text Jurors in Johnny Depp’s $50 million defamation trial against ex-wife Amber Heard can not consider whether Adam Waldman, a former attorney of Depp’s who was kicked off the case, had free speech protections when he made allegedly defamatory statements about Heard.In a key ruling on jury instructions, the judge overseeing the case sided with Heard’s lawyers Thursday that Waldman does not qualify for privilege, a defense from defamation, because his statements were not in response to anything Heard said or wrote. A ruling the other way could have led to jurors outright denying Heard’s $100 million counterclaim against Depp."
  },
  {
    "id": 16,
    "title": "Explained: Will Amber Heard or Johnny Depp go to prison if other party wins? ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/Amber_Johnny_1653803672420_1653803684854.jpeg",
    "category": "Hollywood",
    "description": "ohnny Depp and Amber Heard’s bitter and public defamation trial came to a close on Friday as both parties rested their case, and the judge handed the case over to the jury. Now, the jury will deliberate over the case’s facts and findings and deliver their verdict next week. The high-profile defamation trial has seen its fair share of twists and turns. But now the question on everyone’s lips is what would be the outcome. As per reports, Johnny Depp is heavily favoured to emerge victorious in his suit against his ex-wife. But if he does win, what does that mean for Amber? We take a look.Johnny has sued Amber for $50 million saying she defamed him when she claimed to be a victim of domestic violence in a Washington Post op-ed in 2018. Johnny’s lawyers have said that even though Amber didn’t name him, the implication damaged his career. He has further alleged that Amber was abusive towards him during their marriage. Amber has countersued him for $100 million claiming that he has smeared her name by calling her a liar. She has maintained that she suffered physical and sexual abuse at Johnny’s hands. Both trials ran concurrently in a Virginia court for over six weeks. The hearings ended on May 27."
  },
  {
    "id": 17,
    "title": "Cannes full list of winners: Swedish film Triangle of Sadness wins Palme d'Or ",
    "Image": "https://images.hindustantimes.com/img/2022/05/29/550x309/FILMFESTIVAL-CANNES-AWARDS-354_1653794715337_1653794733888.JPG",
    "category": "Hollywood",
    "description": "The 75th Cannes Film Festival - Closing ceremony - Cannes, France, May 28, 2022. Song Kang-ho, Best Actor award winner for his role in the film Broker (Les bonnes etoiles), director Ruben Ostlund, Palme d'Or award winner for the film film Triangle of Sadness, and Vincent Lindon, Jury President of the 75th Cannes Film Festival, react on stage. REUTERS/Sarah Meyssonnier TPX IMAGES OF THE DAY(REUTERS). The 75th edition of the Cannes Film Festival came to a glittering close on Saturday with the nine-member jury giving out the big awards at the prestigious festival. Swedish director Ruben Ostlund’s class warfare comedy took the top honours by winning the festival's top prize--the Palme d’Or. Korean cinema again showed its dominance by taking home multiple awards for different films.The awards were selected by a nine-member jury headed by French actor Vincent Lindon and presented Saturday in a closing ceremony inside Cannes' Grand Lumière Theater. The jury included an Indian face in actor Deepika Padukone. A separate section of two awards for documentary films was adjudged e earlier on Saturday. Those awards were adjudged by a separate jury."
  },
  {
    "id": 18,
    "title": "Goodfellas actor Ray Liotta dies at 67: media reports ",
    "Image": "https://images.hindustantimes.com/img/2022/05/26/550x309/_850bdaac-499d-11e6-90e0-482a513bad8b_1653583341724.jpg",
    "category": "Hollywood",
    "description": "Actor Ray Liotta, star of the gangster film Goodfellas, has died at the age of 67 in Dominican Republic, as per media reports.Ray was engaged to be married to Jacy Nittolo and leaves behind a daughter, Yahoo reported. He was in the Dominican Republic shooting the film Dangerous Waters, as per a report in Deadline. The report also added that the actor died in his sleep on Thursday.While Ray was best known for his role in Martin Scorsese's Goodfellas, he had performed in a number of other films over the years, most notably Field of Dreams. He was on a path of resurgence in recent years with increased visibility and roles in major films. His recent roles included The Many Saints of Newark, Marriage Story and No Sudden Move.Deadline reported that he had finished the Elizabeth Banks-directed Cocaine Bear and was also due to star in the Working Title film The Substance opposite Demi Moore and Margaret Qualley."
  },
  {
    "id": 19,
    "title": "Jake Gyllenhaal: Acting is not real life in any form, you walk into a scene with all of your life experiences ",
    "Image": "https://images.hindustantimes.com/img/2022/05/28/550x309/US-CLOSING-ARGUMENTS-BEGIN-IN-DEPP-V--HEARD-TRIAL-5_1653726305859_1653726337385.jpg",
    "category": "Hollywood",
    "description": "Hollywood actor Jake Gyllenhaal took a conscious decision to stay in New York, but he admits his soul is in Los Angeles.For a lot of people, real life is deeply connected with the acting world, and sometimes even mirrors it, but that doesn’t stand true for Hollywood star Jake Gyllenhaal.I think real life shapes you as a human, and acting shapes your imagination. I strongly believe that acting is not real life in any form,” Gyllenhaal tells us.It’s been over three decades since Gyllenhaal has been working his way through in Hollywood, bringing different shades of complicated men on screen from cons to police officers. He is known for films such as Donnie Darko, Brokeback Mountain, Zodiac, Nightcrawler, Spider-Man: Far from Home, The Guilty and Ambulance.Opening up about his method as an actor, the 41-year-old shares, “A lot of times people say that acting is pretend. I don’t believe acting is pretend. I think it’s a real access to your imagination and a sense of play. And then you can hopefully build the human you are with the stuff that has nothing to do with the acting, but more to do with life and the people you love and the things you go through good and bad”"
  },
  {
    "id": 20,
    "title": "op Gun 2 tipped to be Tom Cruise’s career-best opener with $125 million weekend ",
    "Image": "https://images.hindustantimes.com/img/2022/05/25/550x309/_569e90dc-cd70-11ea-a892-bc0febb83d85_1653488101945.jpg",
    "category": "Hollywood",
    "description": "Tom Cruise's Top Gun Maverick has been projected to earn $125 million in its opening weekend, which will comfortably make it he best opener in the actor's long career.As per trade reports, Tom Cruise’s upcoming film Top Gun: Maverick could end up registering the biggest opening by any film of his career. Despite his stardom, Tom has never had a film gross over $100 million on the opening weekend. But reports say that Maverick may just change that. Some estimates claim that the film could end up making $125 million in its opening weekend in the domestic market alone.According to a report in The Hollywood Reporter, “Top Gun 2 is easily headed for the biggest opening of Tom Cruise’s career at the domestic box office, with a four-day gross of at least $92 million, according to official tracking. And that’s a conservative estimate. Many pundits believe the critically acclaimed sequel could soar well north of $100 million domestically, but tracking — one of Hollywood’s favorite pastimes — has become fraught in the pandemic era. Exhibitors are especially bullish on the pic, and are even thinking $125 million-plus.”"
  },
  {
    "id": 21,
    "title": "Halo's Pelican heads to 'Flight Simulator' today, helicopters and more coming in November ",
    "Image": "https://s.yimg.com/uu/api/res/1.2/uDK61o8dpGFlVTDh4wmhMA--~B/Zmk9ZmlsbDtoPTI4Nzt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/e7cf79d0-ea75-11ec-b3ad-9f3905128ac3.cf.webp",
    "category": "Technology",
    "description": "If you're running out of things to fly in Flight Simulator, Microsoft has got you covered. You'll be able to fly Halo's Pelican ship today, thanks to a free add-on. And on November 22nd, the game will also add support for gliders, helicopters and other unique ship designs. It's surprising to see Flight Simulator give you views above Earth with the Pelican, and it makes us wonder if we'll ever see other high-flying options. (We're crossing our fingers for the Space Shuttle.)"
  },
  {
    "id": 56,
    "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
    "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
    "category": "mix",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 52,
    "title": "Why I fell in love with Microsoft’s Surface Laptop Studio despite its shortcomings ",
    "Image": "https://images.indianexpress.com/2022/05/K1.jpg",
    "category": "technology",
    "description": "As I was waiting for someone at a Delhi hotel recently, I saw a gentleman coming my way. He sat next to me and curiously asked about the laptop I was using. “It’s a Surface Laptop Studio,” I replied. “Does Microsoft make its own laptops?” He admitted he wasn’t aware of the Surface brand but told me he liked the form factor of the Surface Laptop Studio. “It’s different from my MacBook Pro,” said the man who introduced himself as the owner of an architectural firm. This conversation just reinforced my belief that there will be takers for Microsoft’s experimental Surface Laptop Studio, which blends certain elements of the desktop Surface Studio and the premium 2-in-1 Surface Book. It’s a mobile workstation that’s also a sketching slate and a portable home theater. I have been using the Surface Laptop Studio for a few days, and I am in love with this device even though it is not perfect. Here is my review."
  },
  {
    "id": 22,
    "title": "How artificial intelligence is transforming learning ",
    "Image": "https://www.cio.com/wp-content/uploads/2021/12/artificial_intelligence_machine_learning_network_thinkstock_671750598-100724432-orig.jpeg?resize=1024%2C683&quality=50&strip=all",
    "category": "Technology",
    "description": "We see the importance of technology throughout education, but its impact on test prep is absolutely clear,” says Shahar. “Standardized tests are designed to test everything you’ve learned from first grade on. No one can effectively review that much material. AI can give you the recommendations you need to focus your efforts, so you learn what you need to succeed. Some students need to learn how to make the most of the time they’re given in a test section, and others need to learn how to use answer choices effectively on a multiple choice test. We leverage the over 10,000,000 questions answered in our system by over 50,000 students to understand exactly how students learn, and then recommend the most efficient and impactful work for each student."
  },
  {
    "id": 63,
    "title": "A face search engine anyone can use is alarmingly accurate ",
    "Image": "https://images.indianexpress.com/2022/05/Facial-search-engine-featured.jpg",
    "category": "footer3",
    "description": "For $29.99 a month, a website called PimEyes offers a potentially dangerous superpower from the world of science fiction: the ability to search for a face, finding obscure photos that would otherwise have been as safe as the proverbial needle in the vast digital haystack of the internet.A search takes mere seconds. You upload a photo of a face, check a box agreeing to the terms of service and then get a grid of photos of faces deemed similar, with links to where they appear on the internet. The New York Times used PimEyes on the faces of a dozen Times journalists, with their consent, to test its powers.PimEyes found photos of every person, some that the journalists had never seen before, even when they were wearing sunglasses or a mask, or their face was turned away from the camera, in the image used to conduct the search. PimEyes found one reporter dancing at an art museum event a decade ago, and crying after being proposed to, a photo that she didn’t particularly like but that the photographer had decided to use to advertise his business on Yelp. A tech reporter’s younger self was spotted in an awkward crush of fans at the Coachella music festival in 2011. A foreign correspondent appeared in countless wedding photos, evidently the life of every party, and in the blurry background of a photo taken of someone else at a Greek airport in 2019. A journalist’s past life in a rock band was unearthed, as was another’s preferred summer camp getaway."
  },
  {
    "id": 22,
    "title": "Lightyear’s very pricey solar-powered car will go into production in late 2022 ",
    "Image": "https://s.yimg.com/uu/api/res/1.2/CEvwdfeZap60TwJjA13rww--~B/Zmk9ZmlsbDtoPTM2OTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/337d92c0-e8f2-11ec-9d7f-525c1c83cc61.cf.webp",
    "category": "Technology",
    "description": "EV startup Lightyear debuted its first solar-powered vehicle this week, a sleek sedan called the Lightyear 0. The company gave us a peek at a production prototype of Lightyear 0 in 2019, and at first glance, not much has changed. The car is essentially an unconventional hybrid equipped with both a conventional 60-kilowatt-hour EV battery pack and solar panels on its roof, hood and hatch. The solar panels on the Lightyear 0 will charge automatically whenever the car is exposed to the sun — it doesn’t matter if it’s parked or driving.The Lightyear 0 isn’t as much solar-powered as solar-assisted. In order to drive for long distances, the vehicle has to tap into its battery reserve. The car’s solar panels can provide 44 miles of range per day in a sunny climate, whereas its EV range is 388 miles. But for drivers with exceptionally short commutes or those who need their vehicle infrequently, the Lightyear 0 could allow them to no longer spend money on gas or charging. The company claims that those with a daily commute of 22 miles can drive the Lightyear 0 for two straight months in the Netherlands summer without needing to charge. Drivers in sunnier climates can go for longer. Lightyear claims that the sun can provide the Lightyear 0 with anywhere between 3,700 to 6,800 miles of range annually."
  },
  {
    "id": 23,
    "title": "Forza Motorsport' will arrive on Xbox and PC in spring 2023 ",
    "Image": "https://s.yimg.com/uu/api/res/1.2/XHmmc6vAux8wgeZC1m_5TQ--~B/Zmk9ZmlsbDtoPTM4MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/08d64270-ea77-11ec-b5bf-b34bb19c9c58.cf.webp",
    "category": "Technology",
    "description": "There's also a gameplay video showing off a track at Maple Valley, a classic tree-lined track from the original Motorsport in 2005 that's been reimagined for the new game. Other returning tracks include Circuit de Spa-Francorchamps and Laguna Seca Raceway. South Africa's Kyalami Grand Prix Circuit is making its Forza debut in the the new Motorsport."
  },
  {
    "id": 24,
    "title": "MacBook Air M2 hands-on: Bye-bye wedge",
    "Image": "https://s.yimg.com/uu/api/res/1.2/f25G1DClR1Ab3cOalrbZQA--~B/aD0xMjIwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf.webp",
    "category": "Technology",
    "description": "At WWDC today, Apple not only unveiled its new M2 chip, but also the first two devices that will be equipped with it: the redesigned MacBook Air and the 13-inch MacBook Pro. Though the Pro mostly seems similar to older models, the Air has received a full revamp, including a new, square-ish profile, four color options and a thinner, lighter design that's 20 percent smaller in volume than the last-gen Air. I was able to quickly play with the new Air today at Apple Park, and so far I'm just glad it looks noticeably different, given it's been four years since Apple last redesigned the MacBook Air."
  },
  {
    "id": 25,
    "title": "High On Life' is a deranged new FPS from the mind of Justin Roiland",
    "Image": "https://s.yimg.com/uu/api/res/1.2/Ax1bCjawsFdP2mv03hqyTg--~B/Zmk9ZmlsbDtoPTM3MTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-06/b0760300-ea75-11ec-9eff-651c41c80b6a.cf.webp",
    "category": "Technology",
    "description": "Ink High On Life, players must dismantle an intergalactic slave trade which exports humans to parts unknown as drugs for aliens. Playing as a humanoid bounty hunter, you'll partner with a sentient firearm (a 'gatlien') who will frag your enemies in exchange for freeing (and presumably then firing) his kin. Those guns will both blow your head off and talk your ear off with their running commentaries, not unlike Trover from the last game."
  },
  {
    "id": 26,
    "title": "5 iPhone deals you can grab right now under Rs 60,000 ",
    "Image": "https://images.indianexpress.com/2022/05/iPhone-12-Express-Photo-1.jpg",
    "category": "Technology",
    "description": "Whether its for the seamless ecosystem or for taking a break from Android, if you’re looking to buy a new iPhone without spending too much, you still have a number of options to consider. From the compact iPhone SE Gen-3 to the iPhone 12, here are five iPhone deals you can grab right now for under Rs 60,000. Note that all the prices mentioned below and without any hidden bank offers, discounts or exchange bonuses. You can, however, use any available offers to further bring down the price of the models listed below.The third-generation iPhone SE 2022 64GB is available on Amazon for Rs 41,900. The new iPhone SE 2022 Gen-3, the latest in the series, comes with the A15 Bionic 5G chip and the rest of the phone is largely the same as the iPhone SE 2020.You get the same old design including the large top and bottom bezels, single rear camera and single front camera with TouchID for security. If you want the A15 Bionic chip without spending much, you can consider the iPhone SE 3. You can also consider the 128GB variant for Rs 46,900."
  },
  {
    "id": 27,
    "title": "Instagram launches exclusive ‘1 minute music’ tracks for Reels ",
    "Image": "https://images.indianexpress.com/2021/12/Instagram-AP-1.jpg",
    "category": "Technology",
    "description": "Instagram has launched a new exclusive ‘1 Minute Music’ track for its Reels, which is a set of music tracks and videos, exclusively available on its platform.The new 1-minute music set includes music from 200 artists across India, including the likes of Dhvani Bhanushali, Neeti Mohan, Shaan, Himanshi Khurana, Anirudh and GV Prakaash Kumar. The Meta-owned platform believes that will make your Instagram content more entertaining, and inspire other artists to release their one-minute music on the platform as well.“Music is a catalyst for trends on Instagram today. In fact, Reels is becoming the platform for people to discover music and artists too. With ‘1 Minute Music’, we’re now giving people access to an exclusive set of tracks they could use to make their reels more entertaining. We’re also hoping this platform serves as a paradigm for established and emerging artists to share their own music, and create their own videos, all on Reels,” said Paras Sharma, Director, Content & Community Partnerships, Facebook India (Meta).The music will be accompanied by music videos, which too will be available exclusively on Instagram.  Music distribution and artist services company, Believe, has worked with Instagram for this association"
  },
  {
    "id": 28,
    "title": "iQOO Z6 Pro review: What’s the X factor here? ",
    "Image": "https://images.indianexpress.com/2022/05/iQOO-Z6-Pro-review-1.jpg",
    "category": "Technology",
    "description": "The iQOO Z6 Pro is yet another performance-oriented phone for the masses. Starting at Rs 23,999, the phone comes with a Snapdragon 778G  processor, 66W fast charging, and other features, which are geared towards gaming. Now I have used a number of phones running this same processor already, and all of them seem to target a particular use case. The Xiaomi 11 Lite NE 5G for instance, is a compact phone, while the Realme 9 5G SE is a gaming phone on a budget.The iQOO Z6 Pro doesn’t seem to hit a particular string, and neither is it the most affordable phone with the chip. So should you care about this phone at all? Let’s find out.iQOO Z6 Pro specs: 6.44-inch AMOLED 90Hz screen | Snapdragon 778G chip | 64MP + 8MP + 2MP camera, 16MP front camera | 4700mAh battery with 66W fast charging One of the first things noticeable about the iQOO Z6 Pro is a unique looking rear-design, complete with two large circles holding in the three camera sensors. The phone has a plastic body but the build quality is really nice and everything feels solid to the touch when using this."
  },
  {
    "id": 29,
    "title": " Google hit with fresh UK investigation over ad tech dominance",
    "Image": "https://images.indianexpress.com/2022/05/Google-reuters-1.jpg",
    "category": "Technology",
    "description": "The UK’s antitrust watchdog started a new investigation of Alphabet Inc.’s Google, over suspicions it may have abused its dominant position across its ad tech that goes to the heart of the tech giant’s business model.The move by the Competition and Markets Authority opens a fresh front in its regulatory tussle with Google. The CMA said it was concerned Google sought to illegally favor its own ad exchange services, while taking steps to exclude the services offered by rivals.“Weakening competition in this area could reduce the ad revenues of publishers, who may be forced to compromise the quality of their content to cut costs or put their content behind pay walls,” said Andrea Coscelli, the CMA’s Chief Executive Officer.Watchdogs around the world have started to home in on the huge power that firms such as Google and Meta’s Facebook wield over ad markets — striking at the heart of the tech giants’ money making machines. Google faces a separate probe by the CMA into possible collusion over the way it operates online display advertising services.The CMA has been examining the way Google buys and sells advertising since at least 2020, saying that its advertising stack is a potential conflict of interest. It’s called for powers that would even allow for a structural changes."
  },
  {
    "id": 30,
    "title": "Realme GT Neo 3 get a special Naruto Edition: All you need to know ",
    "Image": "https://images.indianexpress.com/2022/05/Realme-Naruto-edition-1.jpg",
    "category": "Technology",
    "description": "Realme is no stranger to launching special edition devices targeted at anime fans out there. The brand’s GT Neo 2 smartphone came out with a limited Dragon Ball edition complete with the titular character Goku’s colours and more. Now, the company has revealed yet another anime-edition phone.The Realme GT Neo Naruto Edition phone is based on the Naruto-series. Taking elements from both Naruto and the sequel series Naruto: Shippuden, the phone’s design takes cues from the signature black and orange jacket worn by the show’s lead character Naruto Uzumaki, as well as the silver headband most ninja in the show wear, complete with the Konoha seal.However, that’s just the device. Realme has also thrown in other themed goodies into the package, including a neat-looking Naruto-themed case, a black and orange charging adapter and a black USB type-C to type-C cable to go with it. Additionally, there is also a Naruto-themed SIM-ejector pin and a 10,000mAh power bank.Asides from the aesthetics, the phone itself is a regular Realme GT Neo 3 (the 150W fast charging variant) and includes the same hardware as its standard counterpart. This includes a MediaTek Dimensity 8100 chip. A 6.7-inch AMOLED display with 120Hz HDR10+ and an under-display fingerprint scanner. The single storage variant will also feature 12GB RAM and 256GB UFS 3.1 storage."
  },
  {
    "id": 31,
    "title": "Tips to do a perfect headstand",
    "Image": "https://images.indianexpress.com/2020/04/headstand-1200.jpg",
    "category": "Fitness",
    "description": "Referred to as the ‘king’ of asanas, headstand is an advanced yoga inversion. For beginners, it might seem that a headstand turns the world upside down. However, Anshuka Parwani, the celebrity yoga trainer, shared an Instagram post saying, “It looks intimidating, but once you build up to it, it becomes so easy. If you have never done one before, please make sure you practice with a certified teacher first. The procedure, as laid down by the yoga trainer is as follows Start with Vajrasana (diamond pose) and grab opposite elbows.Interlock your fingers and reduce the space between your elbows.Make sure your shoulders are nice and protracted and raise your knees.Activate your core, walk in and raise one knee to your chest and then the other and hold this position.Stay for a few seconds and build your strength.Extend one leg all the way to the top.When you feel more confident, extend the other leg.”"
  },
  {
    "id": 32,
    "title": "Bhagyashree shares the many benefits of jumping on a trampoline ",
    "Image": "https://images.indianexpress.com/2022/03/bhagyashree-1200-new.jpg",
    "category": "Fitness",
    "description": "There’s no better way to keep yourself fit than to be physically active. From yoga to gym workouts — you can choose from a number of exercises to keep your body strong and agile. But, your workouts don’t always have to be boring and monotonous. A little bit of fun can make them interesting while providing you endless health and fitness benefits at the same time.As such, have you ever thought that jumping on a trampoline could be beneficial for you? Bhagyashree, who regularly shares essential health and fitness tips, recently took to Instagram to talk about her “new toy” — the trampoline.According to Bhagyashree, jumping on a trampoline is also great for pelvic strength. “As one gets older, the pelvic muscles loosen and chances of urinary incontinence increase. Jumping without shock impact on your knees will help in building up your pelvic strength too.uilding up your pelvic strength too.”If you are a beginner, start with jumping for three to four minutes. As you progress, increase by two minutes every week, she suggested"
  },
  {
    "id": 33,
    "title": " Asanas and breathing exercises to enhance mood, boost energy levels",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-breathing-1200.jpg",
    "category": "Fitness",
    "description": "Stress has become a part of life, but instead of living with it, we must find the tools with which to combat it. Yoga is one such tool that can deal with physical, emotional and mental issues caused by stress, and give you a better perspective of life.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.According to Samiksha Shetty, a certified yoga educator and the founder of Moon Village Cafe, yoga postures (asanas), breathwork (Pranayama) and meditation induce a sense of calm and relaxation from within, and if you are looking for how you can de-stress, this is what you need to know.“In yoga, we use movement and breath to release stuck energy along the spine and throughout the body. The mind-body connection created in yoga facilitates change at a cellular level. Our nervous systems can rewire by retraining psychological or emotional triggers that set off our flight-or-fight response,” she explains."
  },
  {
    "id": 34,
    "title": "Watch: Virat Kohli impresses with his powerful ‘cleans day’ workout ",
    "Image": "https://images.indianexpress.com/2022/05/virat-kohli_1200_insta.jpg",
    "category": "Fitness",
    "description": "Consistency, patience, and discipline are extremely essential to reaching one’s fitness goals. If you are willing to take on the challenge, then you might want to learn some power moves from none other than Virat Kohli.The batsman, a fitness buff, often takes to social media to share his impressive workout routines. And recently, he dropped another video showcasing a power-packed workout. He also explained that power clean helps to increase “muscular coordination, leading to better power output, and enhancing overall athletic capacity”. “Such kinds of explosive compound movements yield great results not only in power and force output but also kinesthetic awareness, and neurological adaptations, which is required by athletes to train harder and run faster,” the expert mentioned.It is best to perform the exercise under guidance, especially for beginners. Also, if one has back, shoulders, or lower body joint niggles, avoid doing the power clean. During movement, if there is any pain or discomfort, it is best to discontinue and do basic stretches."
  },
  {
    "id": 35,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "Fitness",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 37,
    "title": "Should yoga be done on an empty stomach? Here’s what experts say ",
    "Image": "https://images.indianexpress.com/2022/04/GettyImages-yoga-1200.jpg",
    "category": "mix",
    "description": "o one will understand you or your body the way you do so make sure you listen to it, protect it, do good things for it and celebrate it,” they saidYoga is now the preferred choice of many, to stay fit, active and agile. It helps in numerous ways, be it in improving flexibility, strength and posture, or reducing stress and providing a sense of calm. Nutrition and diet are an important part of fitness along with physical exercise. On that account, it becomes necessary to understand whether yoga should be done on an empty stomach or notAnshuka Parwani, a yoga expert, and Pooja Makhija, a nutritionist took to Instagram to talk about this dilemma that many face.Pooja believes that it’s important to have something before starting with your exercise in the morning. It should be quite light and not too heavy to kickstart your metabolism.While both have contrasting opinions, they strongly agreed and upheld the point that you know your body better than anyone else. Hence, it’s important to observe and understand what your body is trying to tell you and do as one may deem fit. They said, if practising yoga on an empty stomach is suiting you better, do that. On the other hand, if it feels like you need something to get a better start, follow that as a part of your routine.    "
  },
  {
    "id": 36,
    "title": " World Hypertension Day 2022: Five restorative yoga poses for high blood pressure",
    "Image": "https://images.indianexpress.com/2022/05/bloodpressureGetty_1200.jpg",
    "category": "Fitness",
    "description": "An estimated 26 per cent of the world’s population or roughly 972 million people have hypertension; and this number is set to increase to 29 per cent by 2025, according to National Center for Biotechnology Information (NCBI). Hypertension is essentially high blood pressure, and those who suffer from it may not exhibit any symptoms initially as it develops over the course of many years. This lack of symptoms makes it undetectable in time to prevent it or take remedial action, experts say.“Holistic practices like yoga, meditation, and mindfulness, help handle stress in a productive and effective manner. Devote your efforts to a regular practice of yogic techniques like asanas, pranayama, and meditation practice that will guarantee your physical, mental, emotional, and spiritual well-being,” said Grand Master Akshar, a yoga master."
  },
  {
    "id": 37,
    "title": "Celeb fitness: Sooraj Pancholi is ‘back to the game ",
    "Image": "https://images.indianexpress.com/2022/05/sooraj-pancholi_1200_insta.jpg",
    "category": "Fitness",
    "description": "Sooraj Pancholi, who loves to work out, is back to the fitness grind after long. His fitness trainer, Pawan Jatwa, recently shared a video in which the Hero actor could be seen flexing his muscles. According to Bala Krishna Reddy Dabbedi, a fitness expert, and co-founder, director at Fittr, people usually think that they can pick up from where they left and that their original strength will be the same — “but that will not be the case”. “It’s easy to compare yourself to the times when you were training regularly. But, if there has been a gap in your gymming routine, it’s reasonable to see a decline in strength, endurance, and overall muscle,” he expressed.Assess again, test your current strength levels and train accordingly, he suggested. “There is something called muscle memory which helps one get back to their previous strength levels and muscle mass, but this takes times — from a few weeks to even some months. Just be consistent and positive till you get there. On resuming, do not start with an intense program. Keep it minimal, start slow, and you may even experience muscle soreness and pain. Eventually increase the intensity with every passing week,” she said."
  },
  {
    "id": 38,
    "title": "Exercise Reduces Risk of Type 2 Diabetes, Studies Show ",
    "Image": "https://www.verywellfit.com/thmb/3MvvjaqTvCD5A7YBCj51B7KR6ec=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/exerciseCecilie_Arcurs-9b4222509db94b4ba991e86217bdc542.jpg",
    "category": "Fitness",
    "description": "Being physically active can help reduce the risk of developing type 2 diabetes. A recent study in Diabetes Care found that women who get more steps have a lower risk of developing diabetes, compared to women who are more sedentary.1And a study in the journal Metabolites found that men who are more active have a lower risk of developing type 2 diabetes compared to men who are more sedentary.2 It seems that physical activity significantly changes the body’s metabolite profile, and many of these changes are associated with a lower risk of type 2 diabetes, says Maria Lankinen, PhD, research scientist, Institute of Public Health and Clinical Nutrition at the University of Eastern Finland, and one of the researchers on the study published in Metabolites. Increased physical activity also improved insulin secretion.The study published in Diabetes Care focused on 4,838 older women (median age 78.9) without diabetes, who were followed for up to 6.9 years. Their steps were monitored by accelerometers to account for the number of steps and the intensity of steps, which were labeled as light-intensity or moderate- to vigorous-intensity.For diabetes among older adults, our findings indicate that moderate- to vigorous-intensity steps were more strongly associated with a lower risk of diabetes than light-intensity steps, adds John Bellettiere, PhD, an assistant professor of family medicine and public health at UC San Diego, and a co-author on the study."
  },
  {
    "id": 39,
    "title": "Exercise Improves Brain Fitness as You Age ",
    "Image": "https://www.verywellfit.com/thmb/GO6ZNMAt2wgFWBBrMP3sYzN8F3o=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-726775975-e35ebd2a79b34c52891e89151988aa02.jpeg",
    "category": "Fitness",
    "description": "Researchers recruited 105 men and women aged 70 to 77 and split them into three groups. The first performed supervised exercise twice a week with high-intensity interval training (HIIT) at a 90% peak heart rate. The second did moderate-intensity training at 70% peak heart rate. The third, a control group, did at least 30 minutes of daily activity, but at a low intensity and didn't have heart rate measured.There was one major aspect of improvement that wasn't related to heart rate or cortical thickness, Dr. Haberg adds—it was whether the participants felt control over their choices. For example, those who were able to choose their activity, where they exercised, and whether they exercised alone or with a training buddy tended to have more beneficial outcomes.rforming an activity chosen by the individual is key to better brain health, says Haberg. Also, diligently following physical activity guidelines provides a significant cardiorespiratory effect in healthy older adults. That type of control also can be part of maintaining a regular fitness routine, previous research suggests, because it can lead to greater enjoyment with exercise. For example, one study notes that about 50% of participants in exercise programs drop out in the first 6 months, but that those who feel positive emotions tend to have significantly higher levels of program adherence"
  },
  {
    "id": 40,
    "title": "Walking Shoe Types and Buying Tips",
    "Image": "https://www.verywellfit.com/thmb/1LJpQJpL0Ek812XT-GlNOpOjE_4=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-606353299-46be0bd52ffb43558df62348abf5fffb.jpg",
    "category": "Fitness",
    "description": "Walking shoes are your most important item of walking gear. Not only do you want to choose the best pair for your health and performance, but you also want to make sure that you are spending your money wisely.It's helpful to know what to look for in a good fitness walking shoe and how to understand that the pair you pick is the right set of shoes for your walking style.There's no one best shoe for all walkers. The best shoe for you is the one that fits you best. It should give you proper support, flexibility, and cushioning and compensate for any stride problems you may have, such as overpronation. Each person's feet are differentIt can be hard to determine all of that on your own, however. Find a shoe fitting expert to help you discover the best shoe for your walking distance, speed, style, and surface, as well as your weight and stride. The best place to find that person is at the most serious running shoe store in your area.Once you have found a shoe that fits you right, you may become more familiar with shoe lasts and shapes so that you can make your own selections in the future.Shoe manufacturers put the best design and technology into running shoe styles while walking shoe styles are designed primarily for market appeal rather than performance."
  },
  {
    "id": 41,
    "title": "Sunday Special: 7 Desi-Style Paneer Recipes To Amp Up Your Weekend Meal",
    "Image": "https://c.ndtvimg.com/2022-05/nd11v1qg_palak-paneer_625x300_04_May_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
    "category": "Food",
    "description": "What is the first thing that comes to your mind when we talk about something tasty and equally healthy? Some of the most common replies will be chicken, soya and vegetables. Well, there is something else too. No points for guessing! We are talking about the hearty paneer. Be it a simple starter like paneer tikka or a rich, gravy for the main course, there are many ways to add paneer into your diet. Now, since this is the weekend, most of us are planning to enjoy an elaborated feast with the family. And, if you are a paneer fan and wish to prepare amazing, finger-licking paneer dishes for your weekend indulgence, then we are here to help you out. We have curated a list of seven desi-style paneer recipes that can be easily cooked within the comfort of your house. Check them out. Let's start the list with our ultimate favourite paneer butter masala. It's one delicious, rich creamy delicacy cooked in a flavourful gravy of tomatoes, onions and various spices. Paneer butter masala can be paired with piping hot parathas or jeera rice for a sumptuous meal. This is a fiery version of a delectable paneer curry cooked with a hint of black pepper. Paneer chunks prepared in a gravy rich with spices and a lot more are enough to make you drool. Also, the specialty of this recipe lies in the style of preparing it. It's cooked in a dum or pressure, due to which all the various aromatic flavours in the curry remain intact.    If you are searching for a rice dish with the goodness of paneer, you can try makhani paneer biryani at home. This is a healthy recipe that carries a nice blend of vegetables along with spices. Cook it by the traditional dum method to get the right taste of it. It's surely going to satiate your rumbling tummy."
  },
  {
    "id": 42,
    "title": "International Burger Day: 5 Non-Vegetarian Burger Recipes You Must Try",
    "Image": "https://c.ndtvimg.com/2022-04/k9toe6b8_burger_625x300_23_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
    "category": "Food",
    "description": "Can we call burgers the ultimate comfort food? May be yes! It is because we are running out of options to describe the lip-smackingly delicious snack. Loaded with cheese and mayonnaise, the oh-so-soft buns and the crispy patty have the power to lift our mood at any given day. After all, it is the hearty burgers we are talking about. Be it for breakfast or lunch or dinner, we are always ready for a wholesome burger. And, things get all the better if you have some juicy non-vegetarian burger options to pick from. Relatable, did we hear?! Well, in that case, we have some amazing recipes waiting for you.For the ones who love to relish the taste of lamb with chilli sauce, this recipe is your stop. The soft lamb patty between the buns with the punch of lettuce, and bell peppers, can make you want to have it again and again.The taste of your favourite main course dish combined with a crispy patty screams taste. The soft burger buns with heavenly chicken roasted in the makhana gravy can your tastebuds on a joy ride. Isn't it sound amazing?"
  },
  {
    "id": 43,
    "title": "Points Every Diabetic Fruit Lover Must Keep in Mind",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-2-51-16529608873x2.png?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "With summers already here, who doesn’t want to thoroughly enjoy the seasonal fruits that come with it. But if you have diabetes, then you must have been told countless times to consume fruits with utmost caution. Seasonal fruits like watermelon and grapes are high in glycemic index (GI), and thus with it comes the question — Can a diabetic have fruits? Is it safe?However, bursting the myth, a diabetic can enjoy fruits, but simply need to make strategic decisions based on fruit and how much to consume as per its GI as it assists the person in selecting fruit.  Fruits like watermelon have a glycemic index (GI) of 72 per 100 g serving, but one watchful serving of the fruit contains little carbs and will have minimal effect on the blood sugar level.It is safe to consume blackberries, apples, avocados, strawberries, plums, grapefruit, peaches, pears, and cherries in watchful quantity as they have 20-49 GI levels, which technically classifies them as low GI fruit. With lots of fibre and a low GI, these fruits help improve blood sugar tolerance.People who have diabetes are usually advised to keep an eye on the number of carbohydrates and portion size of their meal, even if it contains low GI, which is indeed true. While consuming fruits certain factors such as the ripeness of the fruit that influences its GI should be taken into account."
  },
  {
    "id": 44,
    "title": "Excessive Consumption of Ginger can Lead to These Side Effects",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/ginger-16521781103x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Ginger is a very common Indian household ingredient, which is well known for its amazing flavour. For many, morning tea is incomplete without crushing ginger in it. Not only as spices, but ginger has been a traditional remedy in many cultures for thousands of years. After all, it is loaded with impeccable health benefits. While we have been told time and again that ginger carries innumerable nutritious benefits, it’s rarely discussed that this magical ingredient can also cause side effects.Although the side effects usually happen after excessive intake of ginger, several cases have been witnessed where it aggravates the health issues. So let’s learn more about the side effects.As ginger carries antiplatelet properties, excessive intake of ginger may cause bleeding. Not just this, but if it is consumed with clove or garlic, it further increases the risk of excessive bleeding.The most common symptoms of basic side effects caused by excessive ginger intake are skin rashes, eye redness, dyspnea, itching, swollen lips, itchy eyes, and throat discomfort. In such circumstances, it is advised to immediately seek medical attention.Consuming ginger beyond the prescribed limit of 1500 mg per day may even lead to the risk of miscarriage. Therefore it is advised to avoid too much ginger during pregnancy and intake it only after consulting the doctor"
  },
  {
    "id": 45,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-8-16412180333x2.png?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 46,
    "title": "When to Have Breakfast, Lunch and Dinner to Get Maximum Benefits?",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-8-16412180333x2.png?impolicy=website&width=510&height=356",
    "category": "food",
    "description": "When we wake up, the first thing that comes to put mind is what to have for breakfast. After finishing it, we start thinking about lunch and then about dinner. This shows that food is one of the most important parts of our lives. One day we skip a meal, and our body starts reacting in a different way. While what we eat matters, another thing that plays a part is when we eat our meals. The time of having breakfast, lunch and dinner are vital to determine many health benefits. There is a common saying, “Early to bed, early to rise, makes us healthy, wealthy and wise.” Let’s turn it up a little and say, early dinner and early breakfast are all you need to be healthy and smart.Breakfast: Breakfast is the first meal of the day which makes our guts wake up. Usually, breakfast is eaten after 8 to 10 hours of having our dinner. The best time to have the first meal of the day is between 7 am to 9 am.Lunch: When you eat your breakfast early, it gives your stomach enough time to rest before you go on to your lunch. This aids digestion of breakfast. The best time to have lunch is between 12 noon to 2 pm. Dinner: As you have had your lunch early, you might feel hungry soon in the evening. Many dieticians recommend having early dinner in order to satisfy our hunger as well as boost metabolism. You should have your dinner between 6.30 pm to 8 pm.  If you have all your meals on a scheduled time daily, then it can help you boost your metabolism. In the morning, your metabolic rate works best, and as the day passes, it slows down. Therefore, having an early breakfast gives it a boost and an early dinner help it sustain."
  },
  {
    "id": 46,
    "title": "What The Fork: Kunal Vijayakar on the Perfect Summer Food to Beat the Heat",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/curd-rice-1-16519277623x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "​​ How soon we renounce age-old traditions in the praxis of food, and succumb to the allure of convenience, short cuts, and finished good-looking products. I’m talking about age old dahi or curd. In my grandmother’s home where I lived for the first 15 years of my life and even when we moved lock stock and tapeli to where my parents made their new home, dahi was always made in the kitchen. It was a daily process. Every day milk would be boiled and cooled to room temperature. A medium-heavy bottomed pot would be greased with the previous day’s dahi, which worked like a bacterial curd starter, and the boiled warm milk would be poured in. A wet cloth kept the milk covered as nature created magic, fermented the milk, added wonderfully healthy probiotic characteristics, thickened it and set it to curd. It would take four to five hours on a normal warm, hot and humid Mumbai day, eight to 12 in cold weather, that was it. Sometimes we’d make curd two times a day, just to be able to have it fresh. There was also a kind of romantic uncertainty about how well the curd would set. Sometimes it could set loosely, separating the water from the milk and sometimes it would be firm and silky. After all milk wasn’t bought homogenised, standardised and in a carton, but was bought at the doorstep from a doodhwala, whose honesty was always in question. So obviously, the better the milk the better the curd. The pot of milk with the curd starter would always be kept in a warm place and most importantly left alone. One old ladies’ tale was that you could add a green chilly with its stem intact to help the curd set faster. Ostensibly, the chilly with the stem would not impart any taste but contained certain bacteria that activated the milk to produce protein curdles that turned milk into curd faster. I’d actually never seen that happening in any of our kitchens."
  },
  {
    "id": 47,
    "title": "Naga Cuisine is Just as Rich And Flavourful as its Culture",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/nagaland-16386760023x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Nagaland is known for its cultural, ethnic and linguistic diversity. The state boasts a rich socio-cultural heritage comprising several local tribes, each having their own distinct ethnic traditions. The northeastern state is also a favourite destination for nature lovers because of its diverse flora and fauna, forests, splendid valleys and waterfalls.Nagaland also has its own unique cuisines which are rich in flavour and represent the food culture of different tribal groups.Naga cuisine is based on the local produce that has been available to tribes. It mostly includes fish, meat, rice, herbs, vegetables and fermented grains. The food is definitely different than what you are used to so you may rethink trying, but there are many dishes which are delicious and worth trying at least once. To understand Naga cuisine and what a common resident consumes, you can visit the Central Market in Kohima. The market will offer you a glimpse into the exotic Naga tribal food items like mefi (wriggling hornet grubs), frogs, silkworms, snails, crabs, dried fish and pork, among others. The market also offers exotic condiments such as dried and fermented bamboo shoots, fiery king chillies and plethora of vegetables as well as a variety of leaves, which are intergral to Naga cuisine.A routine Naga meal will include rice, pork or any other meat, fish, boiled or steamed vegetables and side dishes like a variety of chutney or pickles.Axone, fermented soybean paste, is an important part of Naga cuisine. Axone, also known as Akhuni, is used in a variety of preparations like pickles, chutneys, curries and non-veg dishes"
  },
  {
    "id": 48,
    "title": "Fruits and Vegetables are Losing Their Nutrient Value, Know the Risks",
    "Image": "https://images.news18.com/ibnlive/uploads/2021/12/untitled-3-276-16409377143x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "Every now and then, we stress upon the fact of eating lots of fruits and vegetables as they are packed with nutrients. They are said to be the best way to provide nutrition to the body and boost immunity. Every season comes with a variety of grains, vegetables, and fruits and we can’t agree more that they are tastier than the stored ones. However, do you know with time the nutrition value of fruits and vegetables are declining? Yes, you read that right. With time, due to various reasons that nutrition in fruits and vegetables have declined tremendously leaving us with various deficiencies. According to a National Geographic report, the experts find the root of the problem in the quality of soil. In the last few decades, the soil quality has been compromised due to various reasons including excessive chemical use, fertilisers, irrigation and so on. The harvesting methods have changed from natural ways to machineries which has also taken a dig at the health of the soil. Apart from it, due to global warming and climate change, the atmospheric temperature is rising and making the soil lose its moisture even more that do not hold the crops well putting them in risk of losing nutrition.The report also states that due to carbon dioxide increase in the air, the nutrient content of the fruits, vegetables and other crops are pulling down.David R. Montgomery, a professor of geomorphology at the University of Washington in Seattle emphasis on one of the major risks of the lower nutrient value, that is making our immunity low. According to him, “Nutrient decline is going to leave our bodies with fewer of the components they need to mount defences against chronic diseases — it’s going to undercut the value of food as preventive medicine,” state National Geographic."
  },
  {
    "id": 49,
    "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
  },
  {
    "id": 58,
    "title": "These Harmless Summer Drinks are Perfect for Diabetic Patients",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/05/summer-drink-16518193713x2.jpg?impolicy=website&width=510&height=356",
    "category": "mix",
    "description": "The summer season is here with soaring temperatures and dehydrating weather. And they call for cold and refreshing drinks. While many of these drinks are healthy and rehydrating, the sugar content in them might not be healthy for diabetic patients. This makes it difficult for people suffering from the chronic disease to stay hydrated and have all essential electrolytes up to their necessary levels. Here are 5 summer coolers that are healthy and contain zero sugar for diabetic patients to enjoy and help stay hydrated. Sattu is a special and popular food in Bihar. One of oldest drinks in India, Sattu cooler is the perfect way to stay hydrated for diabetic patients. It has no carbohydrates and can be enjoyed just by adding sattu powder to cold water along with some black salt and squeezing a few drops of lemon to give it a tangy touch. Spinach, beetroot, fruit juice of choice and some coconut water blended together can be a very beneficial smoothie for you even if you’re non-diabetic. Make sure that the fruit you choose is a low sugar content one and reap the benefits of this wonderful nutritious smoothie.Take 2 cups of chilled curd, a glass of water, some ice cubes and a teaspoon of cumin powder. Blend it all and you have this tasty sugarless drink ready. Salted lassi is a summer cooler that diabetic patients can enjoy without the worry of their disease aggravating.Bel or wood apple is a great source of natural fibre, iron, antioxidants and folates. Along with this it cools your stomach. If you suffer from diabetes, bel sherbet can prove to be very beneficial for you during the scorching summers."
  },
  {
    "id": 50,
    "title": "Unable to Find Tofu at Local Store? Here’s an Easy Recipe to Make it at Home",
    "Image": "https://images.news18.com/ibnlive/uploads/2022/04/tofu-16510624083x2.jpg?impolicy=website&width=510&height=356",
    "category": "Food",
    "description": "If you are a fitness enthusiast and a vegan, you might be one of the people who have tofu in their meals instead of paneer. While many people find it easily in the supermarket, others may find it difficult to spot tofu at their local stores. If you are one of those people, don’t worry as this simple method can help you make protein-rich tofu at home with just two ingredients – chickpeas and water.Once the tofu is set, you can use it as and when required. It is as tasty as the tofu bought from a store and tofu is as versatile as cottage cheese. It can be used in dry and wet recipes depending on your mood and diet requirements. Chickpea is rich in protein and hence the tofu is a great source of protein to help you complete the daily protein requirement.Soak the chickpeas overnight after thoroughly washing with the help of a strainer under running water.Drain all the water and wash the chickpeas the next day. Add chickpeas with two cups of water in a blender and blend in batches until you have a smooth mixture.Strain the blended chickpeas through a muslin cloth into a bowl. Make a squeezable bag out of the muslin cloth with the mixture in it. Squeeze the blend well to strain it nicely. As the water drains slowly from the mixture, it takes some time to strain the blend.Take the strained blend and put it in a pot. Keep the pot on full flame and let the mixture boil. Once you see bubbles, lower the flame and cook the blend for another half n hour. The mixture will thicken with time. When it is thick enough, put off the flame and let the blend cool down for a while. Leave the mixture in a container for more than 2 hours idle. This will ensure that the mixture sits and the tofu sets properly"
  },
  
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details