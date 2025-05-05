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
        <div className="w-6xl pt-38 font-main">
          <p className="para">
            Regulating free speech on social media may seem like a solution to
            online harm, but Niam Yaraghi warns it’s both dangerous and
            ineffective. In his Brookings article, he argues such regulation
            risks government overreach, undermines democratic principles, and
            fails to address the root causes of misinformation and harmful
            content on digital platforms.
          </p>
        </div>
        <div className="font-header text-8xl ">
          <h1 id="text" className="opacity-0 translate-y-10">The Battle Between Freedom and Control.</h1>
        </div>
      </div>
      <div className="flex gap-26 pt-7 container">
        <div>
          <Image
            src="/img3.webp"
            width={500}
            height={900}
            alt="no alternative"
          ></Image>
        </div>
        <div className="font-main  ">
          <hr className="border-t border-gray-400 my-4" />
          <div className="flex gap-3 w-xs pb-40 text-xs">
            <p className="para">
              Yaraghi, Niam. “Regulating Free Speech on Social Media is
              Dangerous and Futile.”
            </p>
            <p className="w-[154px] para">
              Brookings Institution, 20 July 2021,
              www.brookings.edu/articles/regulating-free-speech-on-social-media-is-dangerous-and-futile
            </p>
          </div>
          <h1 className="font-bold para">Effects of Censorship on Free Speech.</h1>
          <div className="w-xl flex gap-4 text-xs">
            <div className="flex-1">
              <p className="pt-1 para">
                In contrast of Abu-Sharida, Niam Yaraghi states compelling
                argument against regulating social media, specifically
                highlighting its effects on freedom of speech. He believes that
                government involvement in moderating content is a direct threat
                to the First Amendment right. It is because when government is
                given the power of deciding what is “harmful” and “False” could
                easily be misused for political censorship, especially in an
                authoritarian leaning system. Once the government start
                regulating speech, this gives the political leaders the way to
                silence opposing viewpoints. Even if the government ensures the
                human rights within the legal framework as proposed by
                Abu-Sharida, there are many factors that come into play. First,
                defining harmful content, Yaraghi points out that what is
                considered “harmful”, or misinformation varies widely depending
                on cultural, political and personal beliefs. This subjectively
                makes it impossible to have a consistent and fair regulatory
                system. He also adds government regulation across massive social
                media platforms is technically and logistically impossible. As
                millions of posts are made every minute it, no government agency
                could possibly review or manage all of them efficiently.
              </p>
            </div>
            <div className="flex-1">
              <p className="pt-1 para">
                {" "}
                Apart from that viewers can easily bypass restrictions by using
                alternative platforms or encrypting messaging services. Also, we
                have seen governments overregulating social media which silences
                the minority and undermine democratic values. An example of it
                is Türkiye, which being a democratic country has law of
                regulating content which restrict digital speech heavily.
                (Aydıntaşbaş ) If all governments in democratic countries are
                given the similar power this would lead to authoritarian
                tendencies over time. Instead of laws or regulation Yaraghi
                proposes a decentralized approach, where users have the greater
                control over the online experiences they have, He suggest
                educating users to access online content is more effective than
                regulating what can be posted. So that users are aware of the
                harmful contents and do not believe everything they see online.
                Also empowering the user with the understanding and ability to
                report harmful contents would be more useful than relying on
                government or corporate intervention. Yaraghi’s position is
                grounded in the belief that the best way to address harmful
                content on social media is through individual responsibility and
                freedom of choice, not through regulation that could lead to
                censorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
