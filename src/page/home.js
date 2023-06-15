import React from "react";
import Cards from "../Components/cards";
import imgComponent3 from "../assets/imgs/img-component-3.png";

function Home() {
    return (
        <div align="center" className="content">
        <h1 className="title p-4 m-3 text-white border border-1 rounded-end">Wellcome Home</h1>
        <article className="box-content">
        <p className="lorem lorem-ipsum m-5">At Lorem Ipsum, our “expertise on demand” model gives us the flexibility to put together your agency dream team. Our core team of account managers and strategists lead with smarts and stability. Then we draw in talent as needed from a trusted group of graphic designers, writers, video pros and more. You always get the specific expertise you need. We maintain adaptability to shift with your needs. And our esteemed independents get to maintain the individuality and freedom that all creatives crave. Everyone wins! You’ll fall in love with your Lorem Ipsum team. Because when you’re working with people who care enough to dig deep to learn about your business, and who will stick with you through thick and thin, that’s swoon-worthy.</p> 
        <img className="img" src={imgComponent3} alt="img-component" />
            <p className="lorem lorem-ipsum m-5">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="lorem lorem-ipsum m-5">
    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
    As Cicero would put it, “Um, not so fast.”
    The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
            </p>
            <hr />
            <h1 className="title">Similar Projects</h1>
            {
            /* 
            
             === CARDS SECTION ===
            
            */
            }
     <Cards />
        <p className="text-center lorem lorem-ipsum m-5">McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines</p>
  </article>
  </div>
  );
}


export default Home;