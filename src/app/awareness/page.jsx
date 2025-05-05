"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const page = () => {
    useGSAP(() => {
        gsap.to("#text", {
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
        });
    
        gsap.fromTo(
          ".para",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.1,
          }
        );
      }, []);
  return (
    <div className="container mx-auto w-7xl">
      <div className="flex gap-32">
        <div className="w-6xl pt-38 font-main">
          <p className="para">
            Combating harmful content on social media starts with awareness. By
            promoting digital literacy, source verification, and respectful
            communication, users can reduce the spread of misinformation and
            hate speech. Understanding the real-world impact of false posts
            empowers people to think critically and act responsibly—transforming
            social media into a safer, more truthful digital space.
          </p>
        </div>
        <div className="font-header text-8xl ">
          <h1 id="text" className="opacity-0 translate-y-10">Your Awareness is the key!</h1>
        </div>
      </div>
      <div className="flex gap-26 pt-7 container">
        <div>
          <Image
            src="/img5.webp"
            width={500}
            height={900}
            alt="no alternative"
          ></Image>
        </div>
        <div className="font-main  ">
          <hr className="border-t border-gray-400 my-4" />
          <div className="flex gap-3 w-xs pb-52 text-xs">
            <p className=""></p>
            <p className="w-[154px]"></p>
          </div>
          <h1 className="font-bold para">Prevention of Harmful Contents.</h1>
          <div className="w-xl flex gap-4 text-xs">
            <div className="flex-1">
              <p className="pt-1 para">
                The most fundamental and significant step to combatting the
                increasing threat to social media from harmful content,
                misinformation, and hate speech is awareness. Regulatory and
                moderation policies are crucial, however, without enlightened
                and aware users, these can be ineffective. Social media is
                predicated on user engagement algorithms push content that
                generates an emotional response even if true or false highly.
                The reality is in the misinformation environment, truth travels
                slower at the best of times, foundational toleration to hate
                speech can recirculate faster than it realized as problematic
                content. Therefore, it is critical that users understand how
                these platforms are constructed and how they contribute to the
                creation of digital spaces.
              </p>
              <p className="pt-1 para">
                Instilling digital literacies among users students, young
                adults, and avid users of the internet in particular is
                necessary. Users should be encouraged to critically interrogate
                what they see, impress in them the importance of reliability,
                illegitimacy markers, verify before you share, and challenging
                deceptive content. Instructional resources, workshops, online
                modules, materials that are incorporated into the classroom that
                focuses on teaching users how to assess for misleading news
              </p>
            </div>
            <div className="flex-1">
              <p className="pt-1 para">
                {" "}
                , algorithm bias, and behave on the relatively safe and open
                space of the internet when they encounter problematic content. A
                second essential element of awareness is ethical engagement and
                empathy. If users understand the impact of their language
                especially in controversial issues regarding politics, religion,
                race, or gender then they are more likely to speak respectfully.
                Hate speech has a tendency to propagate due to users not taking
                into consideration how hateful or deadly their language could
                be. Awareness initiatives that humanize hurt communities and
                promote respectful speech can dissuade the popularity of
                divisive language.
              </p>
              <p className="pt-1 para">
                Moreover, civic efforts should focus on the social and
                psychological damage done by misinformation i.e., violence,
                mental instability, and the degrading of neighborhoods. When
                users are certain that an accidental sharing or comment might
                induce fear, mistrust, or even rioting, they hesitate before
                carrying out their online act. Ultimately, creating a wiser,
                more critical, and nicer digital citizenry is the most powerful
                vehicle to curb social media abuse damage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
