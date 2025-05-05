"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const page = () => {
    useGSAP(()=>{
        gsap.to('#text',{
          ease: 'power1.inOut',
          opacity:1,
          y:0,
        })
    
        gsap.fromTo('.para', {
          opacity: 0,
          y:20,
    
        },{
          opacity: 1,
          y: 0,
          delay:1,
          stagger: 0.1
        })
    
      },[])
  return (
    <div className="container mx-auto w-7xl">
      <div className="flex gap-32">
        <div className="font-header text-8xl ">
          <h1 id="text" className="opacity-0 translate-y-10">The Spark of Hatred. Riots!!</h1>
        </div>
        <div className="w-6xl pt-38 font-main">
          <p className="para">
            Riots sparked by misinformation on social media have become
            alarmingly common. False narratives and doctored content spread
            rapidly, fueling anger, division, and violence. These digital
            distortions can escalate real-world tensions, leading to property
            damage, injuries, and even loss of life— Let's start with the most
            recent incident!
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-400 my-4" />
      <div className="flex gap-3 w-xs text-xs">
        <p className="para">
          Ed Thomas & Shayan Sardarizadeh. “Southport Riot: How a LinkedIn Post
          Helped Spark Unrest – BBC Tracks Its Spread.”
        </p>
        <p className="w-[154px] para">
          BBC News, 2024, www.bbc.com/news/articles/c99v90813j5o.
        </p>
      </div>
      <h1 className="font-bold pt-5 para">
        The consequence of misinformation
      </h1>
      <div className="flex gap-10 pt-10 container">
        <div className="w-[288px] text-xs">
          <div className="pt-10">
            <p className="para">
              The Southport Riot was caused by a horrific mass stabbing at a
              children’s dance party in July 2024, resulting in the murder of
              three teenage girls and injuries to others. The murderer,
              17-year-old Axel Rudakubana, was a British born teenager of
              Rwandan Christian descent. Unfortunately, untrue rumors spread
              quickly online that the murderer was a Muslim asylum seeker. The
              first was Eddie Murray - who lives near Southport - posted in
              LinkedIn about three hours after the attack, stating that a
              migrant had carried it out. The post implies that Mr Murray's
              family were at the scene of the attack. But it was later found
              that although they were in the area, they had been turned away
              from the dance class because it was full. This news was amplified
              by far-right groups and by the millions of people who were
              disseminating the misinformation, such as Channel3Now, leading to
              massive outrage and protests just hours after the event took
              place. Protests began to take place outside of Southport Mosque
              and escalated into violent skirmishes with police.
            </p>
          </div>
        </div>
        <div className="w-xl">
          <Image
            src="/img2.webp"
            width={800}
            height={900}
            alt="no alternative"
          ></Image>
        </div>
        <div className="font-main  ">
          <div className="w-[288px]  text-xs">
            <div className="pt-10">
              <p className="para">
                Over 50 police officers were injured and extensive property
                damage occurred. With platforms like social media and messaging,
                the spread of misinformation should not have been possible.
                Platforms like Telegram made it easy for groups like "Southport
                Wake Up" to organize protests and spread incendiary content.
                Algorithms, such as the ones operated by X (previously Twitter),
                prioritized engagement, and misinformation was easy to spread
                far and wide and go viral quickly. The spread of misinformation
                online incited the Southport riot and also instigated similar
                riots in other cities across the UK, highlighted how dangerous
                the virality of social media, combined with extremist
                ideologies, can be.The fallout from the Southport Riot revealed
                the horrific human and social costs of unrestricted digital
                disinformation. Over 1,000 people nationwide were arrested in
                association with the riots and dozens were harmed including
                police officers and civilians.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p className="pt-1 para">
          {" "}
          The community at large, especially racialized groups, felt vulnerable
          and unsafe in their own streets.The riot fomented divisiveness and
          racial tension, and revealed how hate can be so easily weaponized when
          disinformation is allowed to move more freely than fact. The very
          structure of social media priority given to speed, engagement, and
          outrage creates an optimal setting for false narratives to grow.
          Algorithms prioritize sensational content, leaving responsibly
          informed news reporting to struggle to even reach people, or fall
          further down the feed. The majority of users also lack the media
          literacy skills to discern what they see online, which makes them
          less-informed and more prone to believing and sharing lies. Together,
          these dynamics create a poisonous ecosystem in which one mistaken post
          can incite violence and cause real-world panic all in a matter of
          hours. What unfolded in Southport is neither an anomaly nor a one-off
          phenomenon, but is a harbinger for a much bigger global problem.
          Misinformation online is doing more than creating a nuisance
          online it's at the centre of violence, creating community instability.
        </p>
      </div>
    </div>
  );
};

export default page;
