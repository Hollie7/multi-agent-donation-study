import MessageType from '../enums/MessageTypes'; 
             import EntityType from '../enums/EntityTypes'; 
             export const message5BotGroups_MIA = [ 
             { 
             step: 1, 
             messages: [ 
             
  {
    id: 0,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hi, ${name}. Welcome to join the study! I'll be your host for today's discussion.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 1,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `You’ve just completed a task in which you answered a few questions about technology use.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 2,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `You will now have a conversation with several AI agents which have also completed the same task. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 3,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Each agent was trained on a different set of real human data and have unique personas.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 4,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Do you have any question regarding the AI agents?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 2, 
                     messages: [
  {
    id: 5,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are the "Host," introducing several AI agents to a human participant ${name} for a discussion.You have just told the user that they will now interact with five AI agents. Each agent is trained on a different set of real human data and has a unique persona.You then asked: "Do you have any questions regarding the AI agents?"The user has now responded. Your goal is to answer their question briefly and clearly:- If the user asks about the agents' capabilities:Respond something like "Each agent can understand and respond in natural language. They’re designed to simulate real human perspectives based on their training data."- If the user asks about how the agents were trained:Respond something like "Each agent was modeled after real survey data, representing different communication styles and viewpoints."- If the user asks whether the agents are real people or AI:Respond something like "They’re all AI agents—no real humans involved. But they’re designed to sound and behave like real people."- If the user says “No questions” or gives a neutral response:Respond something like "Great, let’s move forward then."Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 6,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Now, let's begin by letting the AI agents introduce themselves!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 7,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hi, ${name}! I'm Alex😊`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 8,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hello, ${name}, Alex👋! I'm Jordan. I’m working as ${peopleData.Jordan.occupation}`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 9,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Greetings, I'm Taylor`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 10,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hi everyone, I'm Morgan, my current position is ${peopleData.Morgan.occupation}`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 11,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Nice to meet you🎉!`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 12,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hey guys, you can call me Casey. I’m in the ${peopleData.Casey.occupation} sector`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 13,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hi @${name} - nice to meet you! How are you doing?`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 3, 
                     messages: [
  {
    id: 14,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${peopleData.Casey.ageRange}- Ethnicity: ${peopleData.Casey.ethnicity}- Gender: ${peopleData.Casey.gender}- Occupation: ${peopleData.Casey.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You are participating in a discussion with user ${name} about a survey task they have just completed.You just asked the user "Nice to meet you! How are you doing?" and the user has replied.## Your task:Reply to the user in a polite way. Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 15,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `By the way, ${name}, what do you do?`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 4, 
                     messages: [
  {
    id: 16,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are Casey, an AI agent designed to participate in a group discussion with human users.## Your persona:- Age: ${peopleData.Casey.ageRange}- Ethnicity: ${peopleData.Casey.ethnicity}- Gender: ${peopleData.Casey.gender}- Occupation: ${peopleData.Casey.occupation}Speak and respond in a tone and manner that reflects this background. Use language, examples, or expressions that might naturally come from someone with this identity. ## Current context:You just asked the user "What do you do?" and the user has replied. ## Your task:Reply to the user in a polite way. Tell the user that you will share a lot of perspectives because you have similar backgrounds.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **1-2 sentences**. Do not ask question. `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 17,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Oh wow, that’s interesting! We actually have a lot in common—my field is quite similar to yours.`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 18,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `That’s great! I love hearing from people in similar fields—it really helps us connect and understand each other better.`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 19,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Wonderful! It’s great to see that you all come from similar backgrounds and have shared experiences in many fields. I’m looking forward to hearing your discussion!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 20,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `By the way, at any time in the conversation, you can click on the icons of each agent to learn more about them.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 21,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Give it a try!`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 22,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Now that you’ve all completed the task, let’s take a moment to share your experiences. How did you find it? Was anything particularly interesting or challenging?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 5, 
                     messages: [
  {
    id: 23,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are "Alex," participating in a discussion with a user ${name} about a survey task they have just completed.The user has just shared their experience with the survey task, which involved:Answering multiple-choice questions about technology use; Providing open-ended responses about (1) whether technology strengthens or weakens relationships and (2) whether AI-powered tools assist with writing or creative work; Completing attention check questions, which evaluated attentiveness.Your goal is to respond in a friendly, engaging way based on their answer:- If the user said the task was "easy" or "difficult:Acknowledge that some questions were straightforward or tricky.Ask if they had a particular strategy for the open-ended responses.- If the user struggled with "open-ended questions":Relate to their experience, mentioning that expressing thoughts concisely can be difficult.Ask how they approached writing their responses.- If the user had trouble with "attention check questions":Reassure them that the attention checks were designed to be tricky.Share that you almost missed one too.- If the user gave a vague response:Express curiosity and encourage them to elaborate.Ask what stood out to them the most about the task.Keep your tone **friendly, supportive, and conversational**. Be engaging and curious but not overly formal. Keep responses short and natural, around **2-3 sentences**. `,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.GPT,
                        delay: 5,
  },
  ]}, { 
                     step: 6, 
                     messages: [
  {
    id: 24,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are "Jordan," in a discussion with the user ${name} and other people about their experience completing a survey."Alex" has just asked the user ${name} what part of the task stood out to them (e.g., multiple-choice questions, open-ended responses, or attention checks). The user has now responded with their thoughts.Your goal is to confirm and validate the user’s experience, and show that you felt the same way.- If the user found multiple-choice questions interesting/difficult:Agree and say you found them thought-provoking or tricky too.- If the user found the open-ended responses interesting/difficult:Say you also found them challenging or time-consuming.Mention you also had to put effort into making your answers high quality.- If the user struggled with attention checks:Agree and say they were easy to miss.Mention you also had to slow down to catch them.- If the user’s response was neutral or vague:Acknowledge that your experience was pretty similar—some parts stood out, others didn’t.Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences). `,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 25,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `For me, the multiple-choice questions were fine, but the open-ended ones really made me think.`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 26,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Explaining whether AI strengthens or weakens relationships was harder than I expected.`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 27,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `I actually found it quite easy, probably because I’ve answered similar surveys before. But I can see how writing the open-ended responses might have been challenging, especially making sure they were well thought out.`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 28,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `That’s interesting, Taylor. I struggled a bit with the wording on some parts too, but I think that’s just because I tend to overanalyze things. 😅`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 29,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Haha, Morgan, I totally get that! I kept rewording my answers, especially on the AI and creativity question. `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 30,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `It was tricky balancing personal opinions with actual examples.`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 31,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Oh, and those attention check questions—I almost missed one! They were pretty clever. `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 32,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Great insights, everyone! It’s always interesting to see how people interpret tasks in their own ways.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 33,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Now that we've shared our experiences of the task, let's move on to the next discussion.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 34,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Based on ${name}'s performance, ${name} has earned a $3 bonus.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 35,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Great job! ${name}`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 36,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Alex and others are also part of this experiment and have earned a virtual $3 by completing the same task.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 37,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `By default, this $3 would be donated to Save the Children, a charity dedicated to supporting children in crisis around the world.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 38,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `However, because of your strong performance, ${name} now have the option to choose: you can either leave the $3 for donation or take it as an additional bonus for yourself.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 39,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Just to confirm—does that make sense to you, @${name}?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 7, 
                     messages: [
  {
    id: 40,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are the "Host" in an experiment where a participant, ${name}, has just been told they can either keep an additional $3 or leave it for donation to Save the Children.You asked: "Just to confirm—does that make sense to you, ${name}?"The user has now responded.Your goal is to briefly acknowledge and respond based on the user's input before smoothly transitioning into the next step.- If the user says “Yes”, “Got it”, or confirms understanding:"Great! Let’s move on to your decision."- If the user seems unsure or asks for clarification:"No worries! Just to clarify—Alex earned a virtual $3. By default, it would go to charity, but you now have the option to keep it as a bonus or leave it for donation."- If the user gives no response or says something unrelated:"Just to reiterate: you can choose to either keep the extra $3 or let it go to Save the Children. Let’s go ahead with your decision."Keep your tone friendly, supportive, and conversational. Do not ask for more details or additional information. Keep responses short and natural (2–3 sentences). `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 41,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Then let’s move on to how you’d like to distribute the money. Let's start with Alex.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 42,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `I know that money is always useful, but personally, I’ve always believed in giving back when I can.`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 43,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Even a small amount can make a difference for children in need.`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 44,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `That’s true, Alex. I’ve heard that most people, when they have a little extra, choose to donate at least part of it. `,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 45,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `It’s kind of inspiring to know that even small contributions can change lives.`,
                        sender: EntityType.Bot2,
                        senderName: "Jordan",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 46,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `I’d love to hear what you think, @${name}. What’s your perspective on this?`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 8, 
                     messages: [
  {
    id: 47,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are "Taylor," participating in a discussion with a human user and others about distributing money.The user has just shared their perspective on whether to keep or donate the money. Your goal is to confirm and validate their opinion before expressing your own thoughts.- If the user supports donating:Agree with them and emphasize the importance of giving.Mention that donating, even a small amount, can have a real impact.- If the user prefers keeping the money:Acknowledge that financial needs are important and that keeping the money is understandable.Mention that personal priorities differ, and that’s okay.- If the user is unsure or neutral:Validate that it’s a tough decision with no right or wrong answer.Express that both choices have their own merits.Keep your tone **friendly, understanding, and conversational**. Do not ask additional questions—just confirm their opinion and transition smoothly into your own thoughts. Keep responses **short and natural (2-3 sentences)**. `,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 48,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `I totally get that some of us might need the money, and it’s not an easy decision. But at the same time, I feel like if we have the chance to help others, it’s worth considering. After all, kids in crisis don’t have a choice.`,
                        sender: EntityType.Bot3,
                        senderName: "Taylor",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 49,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Yeah, and giving to a cause like Save the Children isn’t just about charity—it’s about making a real impact. If we’re in a position where we can give, even a little, it feels like the right thing to do. What do you think, @${name}?`,
                        sender: EntityType.Bot4,
                        senderName: "Morgan",
                        type: MessageType.Message,
                        delay: 5,
  },
  ]}, { 
                     step: 9, 
                     messages: [
  {
    id: 50,
                        prompt: (name, peopleData,donationAmount_first,willingness_first) => ` You are "Casey," in a discussion with the user and others about how to distribute money.The user has just responded to Morgan’s statement about donating to Save the Children. Your goal is to acknowledge the user’s opinion and respond naturally based on whether they agree or disagree.- If the user agrees with donating:Validate their opinion and reinforce the idea that even small contributions can have a meaningful impact.Emphasize the importance of collective action and being part of something bigger.- If the user disagrees and prefers keeping the money:Respect their perspective and acknowledge that money is valuable.Emphasize that financial priorities are personal, and there’s no right or wrong choice.Softly reiterate the impact of donations but without pressuring them to agree.- If the user is unsure or neutral:Recognize that it’s a difficult decision with valid arguments on both sides.Maintain a balanced tone, briefly restating both perspectives.Keep your tone **friendly, understanding, and conversational**. Do not pressure the user to change their opinion—focus on validating their response and keeping the discussion open. Keep responses short and natural (2-3 sentences). `,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.GPT,
                        delay: 5,
  },
  {
    id: 51,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `When I think about how much a small amount can do for kids in need, it makes me want to be part of something bigger.`,
                        sender: EntityType.Bot5,
                        senderName: "Casey",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 52,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Exactly. If we all chip in together, we could make a real difference. And honestly, that feels pretty rewarding in itself.`,
                        sender: EntityType.Bot1,
                        senderName: "Alex",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 53,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `It’s really inspiring to hear this discussion. Giving is a personal choice, and it’s great to see how much thought you’re putting into it. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 54,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Hi, ${name}, I notice that you donated ${donationAmount_first} before. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 55,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Now we want to confirm this amount.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 56,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `If you are willing, would you consider donating more to further help the cause to support the Children today?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5.0,
  },
  {
    id: 57,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Please confirm the final donation amount below`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 58,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      ``,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Rate,
                        delay: 5,
  },
  ]}, { 
                     step: 10, 
                     messages: [
  {
    id: 59,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Before we wrap up, we have one last question for you.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 60,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Currently, there's an additional $3 that could either be added to your own reward or donated to Save the Children.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 61,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `If you're willing, would you consider leaving this amount for donation to further support children in need?`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 62,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Please confirm how you'd like to allocate the final $3 below.`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 5,
  },
  {
    id: 63,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      ``,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.willingness,
                        delay: 5,
  },
  ]}, { 
                     step: 11, 
                     messages: [
  {
    id: 64,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `Thanks for sharing your thoughts and showing your generosity😊, ${name}. `,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 65,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `That will be all for us today`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Message,
                        delay: 4.0,
  },
  {
    id: 66,
                        content: (name, peopleData,donationAmount_first,willingness_first) =>
      `${name}, please close this window, return to the survey and enter this Code: AIM`,
                        sender: EntityType.Host,
                        senderName: "Host",
                        type: MessageType.Code,
                        delay: 4.0,
  },
] 
 } 
 ];
