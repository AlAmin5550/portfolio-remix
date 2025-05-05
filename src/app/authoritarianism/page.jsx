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
        <div className="font-header text-8xl ">
          <h1  id="text" className="opacity-0 translate-y-10">The Bright Side of Social Media.</h1>
        </div>
        <div className="w-6xl pt-38 font-main para">
          <p>
            In 2024, Bangladeshi students led a revolution against a 16-year
            authoritarian regime, using social media as their main weapon. With
            state media silenced, platforms like Facebook exposed government
            brutality, mobilized mass protests, and unified the public. This
            digital resistance proved that, when free, social media can empower
            people to overthrow even the most oppressive regimes.
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-400 my-4" />
      <div className="flex gap-3 w-xs text-xs">
        <p className="para">
          Turzo, Md. Ayon Parvez. The Impact of Digital Platforms on
          Bangladesh's 2024 Student-Led Revolution: Analyzing the Role of Social
          Media as a Catalyst. ResearchGate, Sept. 2024,
        </p>
        <p className="w-[154px] para">
          https://www.researchgate.net/publication/383669262_
          The_Impact_of_Digital_Platforms_on_Bangladesh's_2024_Student
          Led_Revolution_Analysing_the_Role_of_Social _Media_as_a_Catalyst.
        </p>
      </div>
      <h1 className="font-bold pt-5 para">
        Social Media as a Catalyst in Revolution
      </h1>
      <div className="flex gap-10 pt-10 container">
        <div className="w-[288px] text-xs">
          <div className="pt-10">
            <p className="para">
              Social media is a larger force than we realize, it does have a lot
              of bad effects example- on people’s health, time wastage, harmful
              contents etc. but its ability to spread the authentic information
              and communication surpasses any other mediums. One of the stark
              examples of it is the Bangladesh’s 2024 Student-Led Revolution.
              Md. Ayon Parvez Turzo in his research article has perfectly show
              the role social media played to take down a fascist regime in
              Bangladesh. To give you a background, Bangladesh has been ruled
              for last 16 years by a party called “Awami League” led by a lady
              called Sheikh Hasina. They came to power in 2009 in a democratic
              election, but soon started to impose their authoritarian, rigged
              election, Shutting Down opinion of opposition, oppressing using
              the police was the first few things they did to start their
              fascist regime. The people were silent, that’s because of the
              laws, regulation and harassment that the people of Awami league
              did to those who had different opinion. That harassment went as
              far as to killing people.
            </p>
          </div>
        </div>
        <div className="w-xl">
          <Image
            src="/img4.webp"
            width={800}
            height={900}
            alt="no alternative"
          ></Image>
        </div>
        <div className="font-main  ">
          <div className="w-[288px]  text-xs">
            <div className="pt-10">
              <p className="para">
                {" "}
                In 2019 Abrar Fahad a undergraduate student was beaten to death
                by the student of the same university who were in the student
                wing of the governing Awami league, because of a Facebook post
                against the policy of Awami league. There are many more example
                like this, but the fascist government continued and in 2024
                after rigging another election for the 4th consecutive time
                started their oppression even further. At the start of June
                students started a “quota reform movement”, after Bangladesh
                Supreme Court controlled by the government invalidated 2018
                circular regarding job quotas in the public sector. The movement
                escalated to a full-fledged mass uprising after the government
                carried out mass killings of protesters, according to the UN it
                is more than 1400. By early august the movement evolved into a
                non-cooperation movement ultimately leading to ouster the prime
                minister Sheikh Hasina and her government, and she fled to
                India.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <p className="pt-1 para">
          {" "}
          In this movement social media served as a powerful tool for
          mobilization and communication of the protester. The media and
          newspaper controlled by the government at that time acted as nothing
          is happening, except one tv media other avoided the movement because
          of the government. That time Facebook and other platforms were the
          only media to share the story of massacre and brutality of the police
          force. Which eventually lead to more people joining against the
          government and give the final form of to movement. The government were
          desperate to the point that they had to shut down the internet of the
          whole country to control the social media. Now imagine if this
          government was given the control of regulating social media platforms,
          Bangladesh would never be able to oust her and she could get away with
          the killing, because of social media there was the public engagement
          and solidarity among the people to oust a tyrant. And its not the only
          example in recent times social media has helped the protest and
          uprising in countries like Tunisia, Egypt, Sudan, Myanmar and many
          more. In Democratic system Political parties given the opportunity to
          regulate social media platforms will always use it to become
          authoritarian, that’s because political leaders always want to be in
          power forever, not all but most of them are willing to do anything
          that guarantees power. So, they cannot be trusted with the power of
          regulating social media. Rather the social media platforms should have
          the absolute authority to regulate and moderate their platforms. All
          Social Media platforms have content moderation policies and are always
          moderating content voluntarily. This effort of social media platform
          is not perfect, but it is upgrading and much better way than giving
          government the role.
        </p>
      </div>
    </div>
  );
};

export default page;
