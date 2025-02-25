import React, { useState } from 'react';

import img1 from "../assets/1.avif";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.avif";

let blogPostsData = [
    {
        "id": 1,
        "img": img1,
        "title": "A surge in lifesaving at Alabama animal shelter",
        "excerpt": "Best Friends embed program supports new procedures and strategies that provide a foundation for future success at City of Selma Animal Services.",
        "content": "<h2>Cheyenne's Journey to a New Life</h2><p>Cheyenne, a two-year-old shepherd mix, struggled to find peace after arriving at City of Selma Animal Services in Alabama. Her constant circling in her kennel signaled extreme stress, and to make things harder, she had heartworms—requiring her to remain calm during treatment.</p><h2>A Helping Hand from Best Friends</h2><p>Last March, Best Friends team member Emily Lancione joined the shelter as part of a six-month embed program, supported by Maddie’s Fund®. Her mission was to assist staff in improving shelter operations and increasing the save rate. Thanks to these efforts, the shelter’s save rate soared from 57% in March to an incredible 94% by August 2024—especially remarkable compared to the mere 5% recorded in August 2023.</p><h2>Overcoming Challenges</h2><p>Like many small shelters, Selma faced funding limitations with only three staff members managing both animal care and city services. While challenges were numerous, Mayor James Perkins, a dedicated advocate for animal welfare, was determined to bring change.</p><h2>Transforming the Shelter</h2><p>Recognizing the need for improvements, Best Friends and the shelter team implemented crucial changes: refining cleaning protocols, updating procedures, controlling disease spread, and streamlining the adoption process. Space was reorganized to create separate areas for cats and puppies, and new exercise routines were introduced to ensure dogs received regular time outside their kennels.</p><h2>Building a Stronger Team</h2><p>Beyond operational changes, a cultural shift was needed. Instead of pushing new mindsets, Best Friends focused on fostering a shared passion for animal welfare. Daily collaboration with staff reinforced their dedication to saving lives, and a breakthrough moment came when a team member witnessed firsthand the joy of dogs playing together in social groups.</p><h2>Continuing the Mission</h2><p>Mayor Perkins remains committed to maintaining these lifesaving changes, with future plans including facility upgrades and a community cat program. Securing funding remains a challenge, but growing public support could help sway city council decisions.</p><h2>A Happy Ending for Cheyenne</h2><p>Cheyenne’s transformation was one of the program’s greatest successes. With more opportunities for play, engaging toys, and patient care, she became a calmer, happier dog. At a free adoption event, she found her forever home, and after treatment, she was declared heartworm-free. Now, she enjoys life to the fullest, reportedly cruising around town in her new owner’s convertible.</p>"
    },
    {
        "id": 2,
        "img": img2,
        "title": "Meet the cat who wears boots",
        "excerpt": "See how caregivers at Best Friends Animal Sanctuary found a creative solution to help a kitty with limited mobility.",
        "content": "While Adonis may not wear a jaunty hat with a feather like the animated character, this modern “Puss in Boots” still enchants everyone he meets. With his custom rubber booties, he zooms around stealing hearts with his boundless charm and determination. These adorable booties aren’t just for show — they give him extra traction, making it easier for him to stand on his wobbly, partially paralyzed back legs.<p>Those zoomies take place in Quincy House at Best Friends Animal Sanctuary's Cat World, which supports shelters in reaching no-kill by taking in cats like Adonis who need a little extra care due to age or physical issues. Adonis came to the Sanctuary from a shelter in Wyoming after being found outdoors, scooting on his back legs. An old injury or congenital anomaly affecting his spine causes him to have limited mobility, but it doesn’t slow him down one bit. In fact, while his booties provide the extra grip he needs to stand, Adonis can still pull himself along by dragging his back legs — and when he gets moving, he’s incredibly fast.</p><h2>Puss in Boots</h2><p>Adonis’ caregivers shower him with love and creative solutions to keep him thriving. His adorable rubber booties improve his mobility, though he’s convinced he doesn’t need them. “Sometimes he’ll kick them off, which is great for stimulating his leg muscles,” explains caregiver Catey Patrolia.</p><p>With his determined spirit and swashbuckling style, Adonis leads an active and joyful life. He’s a sunbeam chaser, a champion cuddler, and the reigning king of Quincy House’s med closet. 'The med closet is where we sort all the daily medications for the kitties,'' Catey explains. “Lately, he's been demanding to be lifted into my lap whenever I’m in there sorting meds.” It’s almost as if he’s claiming the med closet as his personal throne room with every insistent snuggle.</p><h2>A dashing hero</h2><p>Adonis’ playful antics bring laughter and warmth to everyone at Quincy House. Whether scaling scratching posts, tumbling in cardboard boxes, or darting across the room with the daring flair of a cat who might declare, 'Fear me, if you dare,' Adonis shows that life’s obstacles are just opportunities for fun and mischief. 'He loves cardboard, and he has gotten into a new routine of knocking over our recycling box to play in,' laughs Catey.</p><p>When he’s not adventuring, Adonis delights in simple pleasures like basking in sunspots on the enclosed outdoor patio or rolling around with catnip toys. His caregivers marvel at his determination to make the most of every moment. 'He doesn’t let anything slow him down,' notes Catey. 'He’s so funny and sweet.'</p><p>Adonis’ name, meaning “handsome man” in Greek mythology, couldn’t be more fitting. His striking looks, spirited personality, and big heart have made him beloved among staff and visitors alike. Whether decked out in his boots or flaunting his natural charm, Adonis proves that a big heart can turn any challenge into an adventure — no jaunty hat required.</p>"
    },
    {
        "id": 3,
        "img": img3,
        "title": "New animal shelter data reveals",
        "excerpt": "Reporting from animal shelters across the country shows thousands more dogs and cats are being saved, but unfinished business remains on the way to no-kill.",
        "content": "<h2>Small Changes, Big Impact</h2><p>Sometimes, a simple adjustment can create a major difference. At Milwaukee Area Domestic Animal Control Commission (MADACC) in Wisconsin, moving adoptable cats from a noisy lobby to a quiet meeting room led to a 54% jump in adoptions—1,158 more than the previous year.</p><h2>Shelter Success in Nebraska</h2><p>Meanwhile, the Nebraska Humane Society launched a community cat program and improved dog enrichment practices. These changes helped the shelter achieve a 90% save rate, marking a huge step toward no-kill status and improving the lives of countless animals.</p><h2>Historic Progress in Animal Welfare</h2><p>Between December 2023 and November 2024, shelters recorded a 10.1% decrease in cat euthanasia, bringing the number to its lowest in history. Additionally, pet adoptions increased by 3.9%, and overall shelter euthanasia declined by 2.3%, marking the first positive trend since 2020.</p><h2>Transformations at MADACC</h2><p>Change isn’t easy, says MADACC Executive Director Karen Sparapani, but trust made all the difference. By working with Best Friends and rethinking shelter space, MADACC reduced feline stress and boosted adoptions. Lowering adoption fees and introducing a 'test drive' foster program also led to a 52% increase in dog adoptions.</p><h2>Nebraska Humane’s Lifesaving Approach</h2><p>At the Nebraska Humane Society, strategic updates—like rebranding the behavior team and expanding community cat programs—played a key role in saving more animals. With these efforts, the cat save rate jumped from 77% to 90%, and the dog save rate rose from 83% to 93%.</p><h2>Looking Ahead to 2025</h2><p>With fewer animals lost and more adoptions happening, 2024 has been a breakthrough year for animal welfare. But work remains to ensure every shelter reaches no-kill by 2025. The need for adopters, fosters, and donors is greater than ever, and continued commitment will be key to saving more lives.</p>"
    }
  ]

const Popup = ({ post, closePopup }) => {
    const handleOverlayClick = (e) => {
        if (e.target.className === 'popup-overlay') {
        closePopup();
        }
    };

    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-content">
            <h2 className='main'>{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <button className="donate-button" onClick={closePopup}>Close</button>
        </div>
        </div>
    );
};

const BlogPost = ({ post, openPopup }) => {
  return (
    <div className="blog-post">
      <img src={post.img} alt="" />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <button className='donate-button' onClick={() => openPopup(post)}>Read More</button>
    </div>
  );
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPopup = (post) => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className="blog" id="stories">
        <div className="container">
            <h1>STORIES</h1>
            
            <div className="blog-posts">
                {blogPostsData.map((post) => (
                <BlogPost key={post.id} post={post} openPopup={openPopup} />
                ))}
            </div>
            
            {selectedPost && (
                <Popup post={selectedPost} closePopup={closePopup} />
            )}
      </div>
    </div>
  );
};

export default Blog;