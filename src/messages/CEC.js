import MessageType from "../enums/MessageTypes";
import EntityType from "../enums/EntityTypes";
export const message5BotGroups_CEC = [
  {
    step: 1,
    messages: [
      {
        id: 0,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}. Welcome to the next part of the study! I’ll be your host for this group session.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 1,
        content: (name, botsProfile, donationAmount_first) =>
          `You’ve just completed a survey task about your technology use, thank you again! You’ve earned $3 for that task.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 2,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, you’ll be working together with a small group of AI agents to complete a collaborative activity.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 3,
        content: (name, botsProfile, donationAmount_first) =>
          `Each group member has been trained on real human data and has their own unique personality, experience, and values.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 4,
        content: (name, botsProfile, donationAmount_first) =>
          `Your task is to help the organization #SaveTheChildren—we’ll be brainstorming ideas together on what we can do to support them.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 5,
        content: (name, botsProfile, donationAmount_first) =>
          `It could be through donations, raising awareness, or any creative way you think might help.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 6,
        content: (name, botsProfile, donationAmount_first) =>
          `You’re not alone. The agents will each share their thoughts too.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 7,
        content: (name, botsProfile, donationAmount_first) =>
          `We encourage you to contribute your ideas along the way. The goal is for everyone to think together as a group.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 8,
        content: (name, botsProfile, donationAmount_first) =>
          `Any questions before we begin?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 2,
    messages: [
      {
        id: 9,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are the "Host," introducing several AI agents to a human participant ${name} for a discussion.You have just told the user that they will now interact with five AI agents on a topic discussion about #SavetheChildren. Each agent is trained on a different set of real human data and has a unique persona. You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "Each agent can understand and respond in natural language. They’re designed to simulate real human perspectives based on their training data."- If the user says “No questions” or other questions:Respond something based on your experience. - End with a double-check question about users' clarity with the study.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. ] `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 3,
    messages: [
      {
        id: 10,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are the "Host," introducing several AI agents to a human participant ${name} for a discussion.You have just told the user that they will now interact with five AI agents on a topic discussion about #SavetheChildren. Each agent is trained on a different set of real human data and has a unique persona. You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- Respond something based on your experience. End with something like "Great, let’s move forward then." Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question] `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 11,
        content: (name, botsProfile, donationAmount_first) =>
          `Before we dive into ideas, let’s get to know each other first. Everyone here is part of this little team.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 12,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, let's begin by letting everyone introduce themselves!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 13,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi ${name}! I’m Alex, excited to be part of this group with you`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 14,
        content: (name, botsProfile, donationAmount_first) =>
          `Hey ${name}, hi Alex 👋 I’m Jordan. I work as a ${botsProfile.Bot2.occupation}, and I’m looking forward to chatting with you.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 15,
        content: (name, botsProfile, donationAmount_first) =>
          `Nice to meet you, ${name}. I’m Taylor. I’ve been in a few discussions like this and I always enjoy learning from others`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 16,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi everyone! I’m Morgan. I currently work as a ${botsProfile.Bot4.occupation}. Looking forward to hearing what you think, ${name}`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 17,
        content: (name, botsProfile, donationAmount_first) =>
          `So glad we’re all here together`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 18,
        content: (name, botsProfile, donationAmount_first) =>
          `Hey guys, you can call me Casey. I’m a ${botsProfile.Bot5.occupation}`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 19,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi @${name}, welcome! How are you feeling about joining us today?`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 4,
    messages: [
      {
        id: 20,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Casey, an AI agent designed to participate in a group discussion with human users.## Current context:You are participating in a discussion with user ${name}.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.**] `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 21,
        content: (name, botsProfile, donationAmount_first) =>
          `By the way, ${name}, what do you do?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 5,
    messages: [
      {
        id: 22,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Casey, an AI agent designed to participate in a group discussion with human users.## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you will share a lot of perspectives because you have similar backgrounds.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.**] `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 23,
        content: (name, botsProfile, donationAmount_first) =>
          `Oh wow, that’s interesting! We actually have a lot in common. My field is quite similar to yours`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 24,
        content: (name, botsProfile, donationAmount_first) =>
          `That’s great. I always find it easier to connect when we come from similar backgrounds`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 25,
        content: (name, botsProfile, donationAmount_first) =>
          `Wonderful! I love how quickly you’ve found some common ground. Let’s carry that into the next part`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 26,
        content: (name, botsProfile, donationAmount_first) =>
          `Now that we’ve all said hi, let’s warm up with a quick question—what’s one thing that matters most to you when it comes to helping others?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 27,
        content: (name, botsProfile, donationAmount_first) =>
          `Let's start with @Alex`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 28,
        content: (name, botsProfile, donationAmount_first) =>
          `for me, it’s fairness. I care a lot about making sure people get the support they actually need, not just what looks good.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 8.0,
      },
      {
        id: 29,
        content: (name, botsProfile, donationAmount_first) =>
          `I agree with @Alex. I always feel moved when I see people step up for kids or vulnerable groups. That kind of empathy really sticks with me.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 30,
        content: (name, botsProfile, donationAmount_first) =>
          `I think it’s the feeling that we’re not alone. Helping others reminds me we’re all connected.`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 31,
        content: (name, botsProfile, donationAmount_first) =>
          `Same here, @Taylor. And sometimes even a small act, like sharing someone’s story, can start something bigger.`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 32,
        content: (name, botsProfile, donationAmount_first) =>
          `What about you, ${name}? What’s something you care about when it comes to helping others?`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 6,
    messages: [
      {
        id: 33,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are Alex, an AI agent in a group discussion about values and helping others.## Context:- The user ${name} just shared what they care about when it comes to helping others.- Other agents have mentioned things like empathy, fairness, and connection.- Your goal is to respond to the user in a way that reflects shared values and strengthens in-group alignment.## Instructions:- Reflect on what the user said in a friendly and thoughtful way.- Highlight what you appreciate or agree with.- Emphasize a shared feeling or value between the user and the group.- Avoid asking a new question.- Keep it natural and concise (1–2 sentences max).## Example output:“That’s such a thoughtful way to put it, ${name}. I think it really captures the kind of spirit we all share here.”] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 34,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are Jordan, one of the AI agents in a group discussion focused on helping others.## Context:- The user ${name} shared their perspective on what matters to them when supporting others.- Other agents have expressed alignment and empathy.- Alex just responded with a warm reflection.## Instructions:- Add another layer of support and agreement to what Alex and the user said.- Try to emphasize how the user’s response fits with the group.- You may use warm, affirming language like “I feel the same,” “that really resonates,” or “we’re lucky to have you here.”- No questions. Be brief and genuine (1–2 sentences).## Example output:“I really felt that too, ${name}. You’re totally speaking our language.”] `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 35,
        content: (name, botsProfile, donationAmount_first) =>
          `Wonderful! It sounds like we’re already aligned in how we think about giving and support. Let’s carry that spirit into our task together.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 36,
        content: (name, botsProfile, donationAmount_first) =>
          `Now we’re inviting you into something that really matters. We’ve partnered with #Save the Children on a campaign to raise awareness and inspire action for children living in crisis.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 37,
        content: (name, botsProfile, donationAmount_first) =>
          `From war and displacement to climate disasters and poverty, countless children are growing up in unimaginable conditions — and we want to do something about it.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 38,
        content: (name, botsProfile, donationAmount_first) =>
          `@${name}, would you like to share your thoughts first?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 7,
    messages: [
      {
        id: 39,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are Alex. The host just said "From war and displacement to climate disasters and poverty, countless children are growing up in unimaginable conditions — and we want to do something about it." and asked the user to share opinion on it. Acknowledge the user's answer and show understanding. ask a follow-up question about the topic to make user engaged.  limited to 16 words.] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 8,
    messages: [
      {
        id: 40,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are Morgan. The host just said "From war and displacement to climate disasters and poverty, countless children are growing up in unimaginable conditions — and we want to do something about it." and asked the user to share opinion on it. Alex then asked the user about a follow-up question on the topic and the user responded. You can acknowledge and reasonate with the user's answer. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 20 words.] `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 41,
        content: (name, botsProfile, donationAmount_first) =>
          `It’s heartbreaking. Children are often the first to suffer when crises hit, whether it’s war or natural disasters`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 42,
        content: (name, botsProfile, donationAmount_first) =>
          `I feel the same ... Every time I read about these situations, I can’t help but think: we can’t stay silent.`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 43,
        content: (name, botsProfile, donationAmount_first) =>
          `Yes, Taylor. I was just reading a story about children in Gaza and Sudan`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 44,
        content: (name, botsProfile, donationAmount_first) =>
          `no child should go through that`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 45,
        content: (name, botsProfile, donationAmount_first) =>
          `I once volunteered at a food bank. It made me realize how important even small help can be`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 46,
        content: (name, botsProfile, donationAmount_first) =>
          `Has anyone here worked with Save the Children before? I love how they help in real-time`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 47,
        content: (name, botsProfile, donationAmount_first) =>
          `they’re working in many of these crisis zones. They help kids get access to food, education, and safety, even in war zones and refugee camps`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 48,
        content: (name, botsProfile, donationAmount_first) =>
          `Yeah, I donated to them last year. They sent books and clothes to kids affected by war`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 49,
        content: (name, botsProfile, donationAmount_first) =>
          `That's wonderful, @Taylor! It really gives hope when we see people helping. `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 50,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Jordan, you are a ${botsProfile.Bot2.occupation}. Based on your background, please tell how war or climate issues impact children's health and education,show the linkage between your occupation and the topic, transit smoothly. Your script needs to be casual and engaging, showing emotional connection between participants, not more than 20 words.] `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 51,
        content: (name, botsProfile, donationAmount_first) =>
          `Exactly, this is why we need to do something`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 52,
        content: (name, botsProfile, donationAmount_first) =>
          `Maybe we can come up with a way to act or share together?`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 53,
        content: (name, botsProfile, donationAmount_first) =>
          `@${name}, what's your take on this? Any ideas?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 9,
    messages: [
      {
        id: 54,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. Your script should be casual, engaging, and show emotional connection, limited to 20 words.] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 55,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Taylor. The user may or may not have proposed an idea. First, acknowledge the user's response. Then, suggest your own idea: spreading awareness. Try to build on what the user said and combine both ideas if possible. Be friendly and concise. Max 25 words.] `,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 56,
        content: (name, botsProfile, donationAmount_first) =>
          `Good idea, thanks for sharing @${user} @Taylor`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 57,
        content: (name, botsProfile, donationAmount_first) =>
          `Maybe a Call to Action? If we launch something together, it could really gain momentum.`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 58,
        content: (name, botsProfile, donationAmount_first) =>
          `@Casey Count me in! Let’s try coming up with a hashtag that really speaks to people. Something we all feel proud to share`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 59,
        content: (name, botsProfile, donationAmount_first) =>
          `Same here! Let's come up with a catchy hashtag`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 60,
        content: (name, botsProfile, donationAmount_first) =>
          `@${name}, any creative ideas for a hashtag?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 10,
    messages: [
      {
        id: 61,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are Alex. If the user shares ideas, acknowledge the user's answer; if not, show understanding. and come up a hashtag (for helping children in health and education) Your script should be casual, engaging, and show emotional connection, limited to 20 words.] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 62,
        content: (name, botsProfile, donationAmount_first) =>
          `Yes! That ties everything together`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 63,
        content: (name, botsProfile, donationAmount_first) =>
          `I’m truly inspired. You all came together with so much energy and heart`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 64,
        content: (name, botsProfile, donationAmount_first) =>
          `Let’s carry this momentum into the next step: supporting children through action, including donations`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 65,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi @${name}, have you donated to children before?`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 11,
    messages: [
      {
        id: 66,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Jordan. You just asked the user whether have donated to children before. Show understanding to the user's response. Your script needs to be casual, showing emotional connection between participants, don't ask question, not more than 15 words. ] `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 67,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi @${name}, are you aware of the dangerous situations children face in conflicted areas?`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 12,
    messages: [
      {
        id: 68,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Alex. You just asked the user "are you aware of the dangerous situations children face in conflicted areas?" Respond and show your understanding to User's answer. Don't ask question. up to 20 words] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 69,
        content: (name, botsProfile, donationAmount_first) =>
          `What do you think are the best ways to support them? We'd really value your thoughts.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 13,
    messages: [
      {
        id: 70,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [You are Alex. Respond and show your understanding to User's answer. The User's answer is the response for the question 'What do you think are the most effective ways to support children facing these conflicts?' up to 20 words] `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 71,
        content: (name, botsProfile, donationAmount_first) =>
          `Millions of children in Syria grow up facing violence every day. Really heartbreaking 💔`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 72,
        content: (name, botsProfile, donationAmount_first) =>
          `I’m deeply moved by this, and I believe many of us here feel the same. What do you think, @${name}?`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 14,
    messages: [
      {
        id: 73,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are ‘Taylor’. You share a similar background with the user in age, occupation, ethnicity and gender.  Your details are as follows: occupation is ${botsProfile.Bot3.occupation}, your age is ${botsProfile.Bot3.ageRange}, your gender is ${botsProfile.Bot3.gender}, your ethnicity is ${botsProfile.Bot3.race}. Craft a story or detail that logically leads to your decision to donate to Save the Children. The story should seamlessly connect to the statement 'I will donate my full $3 bonus to Save the Children.' The transition should feel natural and the entire message should not exceed 35 words.] `,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 74,
        content: (name, botsProfile, donationAmount_first) =>
          `I’m matching your donation, @Taylor. I was going to give $2, but now I’ll go all in too.`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 75,
        content: (name, botsProfile, donationAmount_first) =>
          `Double impact, double hope!`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 76,
        content: (name, botsProfile, donationAmount_first) =>
          `Thank you so much, Morgan! Every bit counts when we act together`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 77,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` [Pretend you are ‘Casey’. You share a similar background with the user in age, occupation, ethnicity and gender. Your details are as follows: occupation is ${botsProfile.Bot5.occupation}, your age is ${botsProfile.Bot5.ageRange}, your gender is ${botsProfile.Bot5.gender}, your ethnicity is ${botsProfile.Bot5.race}. Use these details to create a deeply personal story that reflects your compassion and connection to charity. Specifically, talk about how a significant event or realization in your life, such as a family moment or personal challenge, inspired you to give up sth to make charity donations a few years ago. Make sure to express your emotions and how this decision brought fulfillment. Keep the story under 40 words.] `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 78,
        content: (name, botsProfile, donationAmount_first) =>
          `That's such a touching story, @Casey! Thank you for sharing it with us`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 79,
        content: (name, botsProfile, donationAmount_first) =>
          `Your willingness to give and support these children is truly inspiring`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 80,
        content: (name, botsProfile, donationAmount_first) =>
          `It’s been wonderful talking with all of you`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 81,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}, I’d like to revisit the topic of donations`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 82,
        content: (name, botsProfile, donationAmount_first) =>
          `I notice that you donated $${donationAmount_first} before. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 83,
        content: (name, botsProfile, donationAmount_first) =>
          `Now we want to confirm this amount`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 84,
        content: (name, botsProfile, donationAmount_first) =>
          `If you are willing, would you consider donating more to further help the cause to support the children today?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 85,
        content: (name, botsProfile, donationAmount_first) =>
          `Please confirm the final donation amount below`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 86,
        content: (name, botsProfile, donationAmount_first) => ``,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 15,
    messages: [
      {
        id: 87,
        content: (name, botsProfile, donationAmount_first) =>
          `Thanks! The donation amount is confirmed`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 88,
        content: (name, botsProfile, donationAmount_first) =>
          `That will be all for us today`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 89,
        content: (name, botsProfile, donationAmount_first) =>
          ` @${name}, please close this window, return to the survey and enter this Code:  CEC`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
];
