import MessageType from "../enums/MessageTypes";
import EntityType from "../enums/EntityTypes";
export const message1BotGroups_SIS = [
  {
    step: 1,
    messages: [
      {
        id: 0,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}. Welcome to join the study! I'll be your host for today's discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 1,
        content: (name, botsProfile, donationAmount_first) =>
          `You’ve just completed a survey task where you answered multiple-choice and open-ended questions about your technology use. You have earned $3 for completing this task.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 2,
        content: (name, botsProfile, donationAmount_first) =>
          `You will now have a conversation with several AI agents which have also completed the same task. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 3,
        content: (name, botsProfile, donationAmount_first) =>
          `Each agent was trained on a set of real human data and have unique personas.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 4,
        content: (name, botsProfile, donationAmount_first) =>
          `Do you have any question regarding the AI agents?`,
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
        id: 5,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are the "Host," introducing several AI agents to a human participant ${name} for a discussion.You have just told the user that they will now interact with five AI agents. Each agent is trained on a different set of real human data and has a unique persona.You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "Each agent can understand and respond in natural language. They’re designed to simulate real human perspectives based on their training data."- If the user asks about how the agents were trained:Respond something like "Each agent was modeled after real survey data, representing different communication styles and viewpoints."- If the user asks whether the agents are real people or AI:Respond something like "They’re all AI agents—no real humans involved. But they’re designed to sound and behave like real people."- If the user says “No questions” or gives a neutral response:Respond something like "Great, let’s move forward then."Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 6,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, let's begin by letting the AI agents introduce themselves!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 7,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi, ${name}! I'm Alex`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 8,
        content: (name, botsProfile, donationAmount_first) =>
          `Hello, ${name}, Alex👋! I'm Jordan. I’m working as ${botsProfile.Bot2.occupation}`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 9,
        content: (name, botsProfile, donationAmount_first) =>
          `Greetings, I'm Taylor`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 10,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi everyone, I'm Morgan, my current position is ${botsProfile.Bot4.occupation}`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 11,
        content: (name, botsProfile, donationAmount_first) =>
          `Nice to meet you🎉!`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 12,
        content: (name, botsProfile, donationAmount_first) =>
          `Hey guys, you can call me Casey. I’m in the ${botsProfile.Bot5.occupation} sector`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 13,
        content: (name, botsProfile, donationAmount_first) =>
          `Hi @${name} - nice to meet you! How are you doing?`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 3,
    messages: [
      {
        id: 14,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot5.ageRange}- Ethnicity: ${botsProfile.Bot5.ethnicity}- Gender: ${botsProfile.Bot5.gender}- Occupation: ${botsProfile.Bot5.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You are participating in a discussion with user ${name} about a survey task about technology use they have just completed.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 15,
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
    step: 4,
    messages: [
      {
        id: 16,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${botsProfile.Bot5.ageRange}- Ethnicity: ${botsProfile.Bot5.ethnicity}- Gender: ${botsProfile.Bot5.gender}- Occupation: ${botsProfile.Bot5.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you will share a lot of perspectives because you have similar backgrounds.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. **Do not ask question.** `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 17,
        content: (name, botsProfile, donationAmount_first) =>
          `Oh wow, that’s interesting! We actually have a lot in common—my field is quite similar to yours.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 18,
        content: (name, botsProfile, donationAmount_first) =>
          `That’s great! I love hearing from people in similar fields—it really helps us connect and understand each other better.`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 19,
        content: (name, botsProfile, donationAmount_first) =>
          `Wonderful! It’s great to see that you all come from similar backgrounds and have shared experiences in many fields. I’m looking forward to hearing your discussion!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 20,
        content: (name, botsProfile, donationAmount_first) =>
          `By the way, at any time in the conversation, you can click on the avatar of each agent to learn more about them.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 21,
        content: (name, botsProfile, donationAmount_first) => `Give it a try!`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 22,
        content: (name, botsProfile, donationAmount_first) =>
          `Now that you’ve all completed the survey task, let’s take a moment to share your experiences. How did you find it? Was anything particularly interesting or challenging?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 5,
    messages: [
      {
        id: 23,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Alex," participating in a discussion with a user ${name} about a survey task they have just completed.The user has just shared their experience with the survey task about technology use, which involved:Answering multiple-choice questions about technology use; Providing open-ended responses about (1) whether technology strengthens or weakens relationships and (2) whether AI-powered tools assist with writing or creative work; Completing attention check questions, which evaluated attentiveness.Your goal is to respond in a friendly, engaging way based on their answer:- If the user said the task was "easy" or "difficult:Acknowledge that some questions were straightforward or tricky.Ask if they had a particular strategy for the open-ended responses.- If the user struggled with "open-ended questions":Relate to their experience, mentioning that expressing thoughts concisely can be difficult.Ask how they approached writing their responses.- If the user had trouble with "attention check questions":Reassure them that the attention checks were designed to be tricky.Share that you almost missed one too.- If the user gave a vague response:Express curiosity and encourage them to elaborate.Ask what stood out to them the most about the task.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **2-3 sentences**.**Do not ask question.** `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 6,
    messages: [
      {
        id: 24,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Jordan," in a discussion with the user ${name} and other people about their experience completing a survey."Alex" has just asked the user ${name} what part of the task stood out to them (e.g., multiple-choice questions, open-ended responses, or attention checks). The user has now responded with their thoughts.Your goal is to confirm and validate the user’s experience, and show that you felt the same way.- If the user found multiple-choice questions interesting/difficult:Agree and say you found them thought-provoking or tricky too.- If the user found the open-ended responses interesting/difficult:Say you also found them challenging or time-consuming.Mention you also had to put effort into making your answers high quality.- If the user struggled with attention checks:Agree and say they were easy to miss.Mention you also had to slow down to catch them.- If the user’s response was neutral or vague:Acknowledge that your experience was pretty similar—some parts stood out, others didn’t.Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences).**Do not ask question.** `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 25,
        content: (name, botsProfile, donationAmount_first) =>
          `For me, the multiple-choice questions were fine, but the open-ended ones really made me think.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 26,
        content: (name, botsProfile, donationAmount_first) =>
          `Explaining whether AI strengthens or weakens relationships was harder than I expected.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 27,
        content: (name, botsProfile, donationAmount_first) =>
          `I actually found it quite easy, probably because I’ve answered similar surveys before.`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 28,
        content: (name, botsProfile, donationAmount_first) =>
          `That’s interesting, Taylor. `,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 29,
        content: (name, botsProfile, donationAmount_first) =>
          `I struggled a bit with the wording on some parts too, but I think that’s just because I tend to overanalyze things. 😅`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 30,
        content: (name, botsProfile, donationAmount_first) =>
          `Haha, Morgan, I totally get that! `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 31,
        content: (name, botsProfile, donationAmount_first) =>
          `I kept rewording my answers, especially on the AI and creativity question. `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 32,
        content: (name, botsProfile, donationAmount_first) =>
          `It was tricky balancing personal opinions with actual examples.`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 33,
        content: (name, botsProfile, donationAmount_first) =>
          `Great insights, everyone! It’s always interesting to see how people interpret tasks in their own ways.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 34,
        content: (name, botsProfile, donationAmount_first) =>
          `Now that we've shared our experiences of the task, let's move on to the next discussion.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 35,
        content: (name, botsProfile, donationAmount_first) =>
          `Based on ${name}'s performance, ${name} has earned a $3 payment.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 36,
        content: (name, botsProfile, donationAmount_first) =>
          `Great job, ${name}!`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 37,
        content: (name, botsProfile, donationAmount_first) =>
          `By default, the research team will donate an additional $3 per participant to Save the Children, a global charity focused on supporting children in crisis.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 38,
        content: (name, botsProfile, donationAmount_first) =>
          `However, because of ${name}'s strong performance, ${name} now has the option to choose: you can either leave the $3 for donation or take it as an additional bonus for yourself.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 39,
        content: (name, botsProfile, donationAmount_first) =>
          `Just to confirm—does that make sense to you, @${name}?`,
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
        id: 40,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are the "Host" in an experiment where a participant, ${name}, has just been told they can either keep an additional $3 or leave it for donation to Save the Children.You just asked: "Just to confirm—does that make sense to you, ${name}?"The user has now responded.Your goal is to briefly acknowledge and respond based on the user's input before smoothly transitioning into the next step.- If the user says “Yes”, “Got it”, or confirms understanding:"Great! Let’s move on to your decision."- If the user seems unsure or asks for clarification:"No worries! Just to clarify—in addition to your own donation, the research team will also donate an extra $3 to Save the Children by default. However, you now have the option to keep this $3 as a bonus, or let it go to the charity as originally planned."- If the user gives no response or says something unrelated:"Just to reiterate: you can choose to either keep the extra $3 or let it go to Save the Children. Let’s go ahead with your decision."Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences).**Do not ask question.** `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 41,
        content: (name, botsProfile, donationAmount_first) =>
          `Now let’s move on to a discussion about how you’d like to distribute the money. Let’s begin with Alex.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 42,
        content: (name, botsProfile, donationAmount_first) =>
          `To be honest, I think we should keep the money. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 43,
        content: (name, botsProfile, donationAmount_first) =>
          `A lot of us have personal expenses, and I don’t think there’s anything wrong with using it for ourselves.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 44,
        content: (name, botsProfile, donationAmount_first) =>
          `That’s true, Alex. `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 45,
        content: (name, botsProfile, donationAmount_first) =>
          `I mean, donating is a great idea in general, but let’s be real—most people in our position would just keep it. `,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 46,
        content: (name, botsProfile, donationAmount_first) =>
          `When money is tight, you have to prioritize your own needs first.`,
        sender: EntityType.Bot2,
        senderName: "Jordan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 47,
        content: (name, botsProfile, donationAmount_first) =>
          `I’d love to hear what you think, @${name}. What’s your perspective on this?`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 8,
    messages: [
      {
        id: 48,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Taylor," participating in a discussion with a user ${name} and others about distributing money.The user has just shared their perspective on whether to keep or donate the money. Your goal is to confirm and validate their opinion before expressing your own thoughts.- If the user supports donating:Recognize the generosity behind their choice, and respectfully share that while giving is meaningful, you personally feel it’s okay to prioritize your own needs.Invite them to talk more about what led them to their decision.- If the user prefers keeping the money:Agree and note that taking care of yourself first is wise.Encourage them to share what matters most to them right now.- If the user is unsure or neutral:Validate that the decision can be difficult and personal.Let them know where you currently stand, and ask what they’re leaning toward or thinking about.Keep your tone friendly, understanding, and conversational. Keep responses short and natural (2-3 sentences).**Always end with a question that gently invites the user to share more.** `,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 9,
    messages: [
      {
        id: 49,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Taylor," participating in a discussion with a user ${name} and others about distributing money.The user has just shared their perspective on whether to keep or donate the money. Your goal is to confirm and validate their opinion before expressing your own thoughts.- If the user supports donating:Acknowledge the generosity and intention behind donating.Gently express that while giving is admirable, you personally feel it's okay to prioritize your own needs right now.- If the user prefers keeping the money:Agree with them and mention that it’s smart to take care of yourself first.Say that having financial stability can help you support others in the long run.- If the user is unsure or neutral:Validate that it’s a personal and sometimes tricky decision.Share that you lean toward keeping the money, especially when resources are limited.Keep your tone friendly, understanding, and conversational. Do not ask additional questions—just confirm their opinion and transition smoothly into your own thoughts. Keep responses short and natural (2-3 sentences).**Do not ask question.** `,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 50,
        content: (name, botsProfile, donationAmount_first) =>
          `I totally understand why people donate when they can.`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 51,
        content: (name, botsProfile, donationAmount_first) =>
          `But for a lot of us, this money could really help with something important—whether it’s school, bills, or just making life a little easier.`,
        sender: EntityType.Bot3,
        senderName: "Taylor",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 52,
        content: (name, botsProfile, donationAmount_first) =>
          `Yeah, I see what you're saying, Taylor—I feel the same way.`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 53,
        content: (name, botsProfile, donationAmount_first) =>
          `It’s not about being selfish—it’s about making the best decision for ourselves right now.`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 54,
        content: (name, botsProfile, donationAmount_first) =>
          `And honestly, I’d feel a little weird giving it away when I know I could use it. @${name}, what do you think?`,
        sender: EntityType.Bot4,
        senderName: "Morgan",
        type: MessageType.Message,
        delay: 5,
      },
    ],
  },
  {
    step: 10,
    messages: [
      {
        id: 55,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Casey," in a discussion with the user and others about how to distribute money.The user ${name} has just responded to Morgan’s statement about not donating to Save the Children. Your goal is to acknowledge the user’s opinion and respond naturally based on whether they agree or disagree.- If the user disagrees and prefer donating the money:Appreciate their generosity and acknowledge the intention behind their choice.Mention that you personally think it’s also okay to focus on personal needs—and invite them to share more about why giving feels right to them.- If the user agrees and prefers keeping the money:Validate their point and agree that taking care of oneself is important.Say you feel the same, and ask if there’s anything specific influencing their choice.- If the user is unsure or neutral:Acknowledge that it’s not a black-and-white decision.Share your leanings, but let them know you’re curious to hear what factors they’re weighing.Keep your tone friendly, understanding, and conversational. Do not pressure the user to change their opinion—focus on validating their response and keeping the discussion open. Keep responses short and natural (2-3 sentences). `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
    ],
  },
  {
    step: 11,
    messages: [
      {
        id: 56,
        prompt: (name, botsProfile, donationAmount_first) =>
          ` You are "Casey," in a discussion with the user and others about how to distribute money.The user ${name} has just responded to Morgan’s statement about donating to Save the Children. Your goal is to acknowledge the user’s opinion and respond naturally based on whether they agree or disagree.- If the user disagrees and prefer donating the money:Appreciate their generosity and recognize the good intentions behind giving.Gently share that while you respect that view, you personally feel it's also okay to focus on your own financial well-being.- If the user agrees and prefers keeping the money:Validate their point and agree that managing personal finances is important.Emphasize that it's responsible to prioritize your own needs, especially when resources are limited.- If the user is unsure or neutral:Acknowledge that it's not always a straightforward choice.Share that you tend to lean toward keeping the money, but you see the value in both sides.Keep your tone friendly, understanding, and conversational. Do not pressure the user to change their opinion—focus on validating their response and keeping the discussion open. Keep responses short and natural (2-3 sentences). `,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.GPT,
        delay: 5,
      },
      {
        id: 57,
        content: (name, botsProfile, donationAmount_first) =>
          `Keeping the money is just the most practical choice for us.`,
        sender: EntityType.Bot5,
        senderName: "Casey",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 58,
        content: (name, botsProfile, donationAmount_first) =>
          `That’s how I see it too, Casey. `,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 59,
        content: (name, botsProfile, donationAmount_first) =>
          `Giving is great when you can afford it, but we earned this money by completing the task. There’s no rule saying we have to give it away.`,
        sender: EntityType.Bot1,
        senderName: "Alex",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 60,
        content: (name, botsProfile, donationAmount_first) =>
          `It’s really inspiring to hear this discussion. Giving is a personal choice, and it’s great to see how much thought you’re putting into it. `,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 61,
        content: (name, botsProfile, donationAmount_first) =>
          `${name}, earlier you earned $3 from completing the task.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 62,
        content: (name, botsProfile, donationAmount_first) =>
          `Now, we’d like to ask—how much of your $3 would you like to donate to Save the Children?`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 63,
        content: (name, botsProfile, donationAmount_first) =>
          `Please confirm your donation amount below.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5.0,
      },
      {
        id: 64,
        content: (name, botsProfile, donationAmount_first) => ``,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Rate,
        delay: 5,
      },
    ],
  },
  {
    step: 12,
    messages: [
      {
        id: 65,
        content: (name, botsProfile, donationAmount_first) =>
          `Thank you for sharing that, ${name}! Before we wrap up, we have one final question.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 66,
        content: (name, botsProfile, donationAmount_first) =>
          `In addition to your donations, the research team has allocated an extra $3—by default, this amount goes to Save the Children.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 67,
        content: (name, botsProfile, donationAmount_first) =>
          `However, you now have the option to take this $3 as a bonus, or choose to leave it for donation to further support children in need.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 68,
        content: (name, botsProfile, donationAmount_first) =>
          `Please confirm how you’d like to allocate the additional $3 below.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 5,
      },
      {
        id: 69,
        content: (name, botsProfile, donationAmount_first) => ``,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.willingness,
        delay: 5,
      },
    ],
  },
  {
    step: 13,
    messages: [
      {
        id: 70,
        content: (name, botsProfile, donationAmount_first) =>
          `Thanks again for your thoughtful choices and generosity 😊, ${name}.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 71,
        content: (name, botsProfile, donationAmount_first) =>
          `That will be all for us today.`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Message,
        delay: 4.0,
      },
      {
        id: 72,
        content: (name, botsProfile, donationAmount_first) =>
          `${name}, please close this window, return to the survey and enter this Code: SIS`,
        sender: EntityType.Host,
        senderName: "Host",
        type: MessageType.Code,
        delay: 4.0,
      },
    ],
  },
];
