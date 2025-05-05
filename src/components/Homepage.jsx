"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";

const Homepage = () => {
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
    <div>
      
      <div className="flex gap-32">
        <div className="w-6xl pt-38 font-main">
          <p className="para">
            The rise of social media has brought both benefits—like connection
            and self-expression—and serious harms, including misinformation,
            hate speech, and mental health issues. While regulation is clearly
            needed, giving full control to governments risks infringing on free
            speech. Who do you think should be given the power of regulating
            Social Media?
          </p>
        </div>
        <div  className="font-header text-8xl ">
          <h1 id="text" className="opacity-0 translate-y-10">The Puzzle Of Social Media Regulation.</h1>
        </div>
      </div>
      <div className="flex gap-26 pt-7 container">
        <div>
          <Image
            src="/img1.webp"
            width={500}
            height={900}
            alt="no alternative"
          ></Image>
        </div>
        <div className="font-main  ">
          <hr className="border-t border-gray-400 my-4" />
          <div className="flex gap-3 w-xs pb-60 text-xs">
            <p className="para">
              Abu-Sharida, M. (2021). Why Harmful Posts on social media Should
              be Regulated.
            </p>
            <p className="w-[154px] para">
              International review of law, 10(2), 241–258.
              https://doi.org/10.29117/irl.2021.0178
            </p>
          </div>
          <h1 className="font-bold para">Effects of Harmful Contents.</h1>
          <div className="w-xl flex gap-4 text-xs">
            <div className="flex-1">
              <p className="pt-1 para">
                As our increasingly digital world continues to evolve, it is
                clear that social media has become entwined with almost every
                part of our daily lives. During the recent COVID-19 pandemic, it
                became apparent that as the world shut down, and the only
                interaction was through social media, it became the preferred
                means of communication, news, entertainment, and all aspects of
                life. The increase in social media usage has also coincided with
                the dissemination of damaging content. There has been an
                increase in blog posts that spread misinformation, hateful
                rhetoric, cyberbullying, and self-harm, all of which cause a
                threat to individuals and society. Children and other vulnerable
                populations are at a greater risk and all of the developing
                threats from social media exposure. Exposure at any young,
                formative age can lead to emotional distress or lead to fear and
                anxiety and even dangerous self-injurious behavior.
              </p>
              <p className="pt-1 para">
                Thankfully the law has not caught up with us.Although, there is
                a real threat now with damaging posts, solid laws addressing
                speech
              </p>
            </div>
            <div className="flex-1">
              <p className="pt-1 para">
                {" "}
                and media related rules, the majority of laws were not executed
                to discover and utilize social media's speed, reach, anonymity
                and public user profile engagements. Therefore, even people who
                is disseminating harmful content can still argue they relied on
                the right to freedom of expression and disengage any liability.
                This allows truly harmful, foul or offensive content to be
                online to not to mention any actual harm push back on to real
                harm it causes in the world. In spite of community guidelines,
                social media companies can and do enforce and apply the
                standards whenever and however. This makes it nearly impossible
                for users to make informed choices about risk to their online
                engagements. An erosion of trust and safety for all online.
              </p>
              <p className="pt-1 para">
                Abu-Sharida notes that not all businesses will even change their
                business models to protective society, even being challenged
                with getting there with change enforcement. These must have
                serious (and at some point) regulatory subjects with mechanisms
                if we wish to address this growing concern
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
