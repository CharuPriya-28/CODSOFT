# ✅ Here's how your bot works and what to type

# This update adds clear comments about which words will match, to help you test.

import random

# FitBuddyBot - Friendly, funny fitness chatbot with greetings and roasts

greetings = [
    "Hey there! I'm FitBuddyBot 💪 Ready to crush some excuses?",
    "Hi! I'm your fitness buddy — here to push you with a smile 😆",
    "Hello! FitBuddyBot at your service — let's get moving!"
]

workouts = [
    "How about 15 push-ups to start? Let's go! 💪",
    "Do 20 squats and feel the burn 🔥",
    "Hold a 30-second plank — yes, you can! 😆",
    "Do 10 burpees !",
    "Dance to your favorite song for 3 mins — best cardio ever!"
]

fun_facts = [
    "Did you know? Laughing for 10-15 mins can burn up to 40 calories! 😂",
    "Bananas are technically berries, but strawberries aren't. Wild!",
    "Drinking enough water boosts metabolism — hydrate or die-drate! 💧",
    "Daily exercise keeps stress away better than chocolate — almost 😆"
]

mental_boosts = [
    "Stressed? Drop and give me 5 push-ups — stress gone!",
    "Lazy today? Perfect! 10 jumping jacks to wake you up!",
    "Tired? Or just bored? 20 squats — you'll thank me later!",
    "Feeling down? Try a 1-minute plank — power up mode activated!"
]

print(random.choice(greetings))
print("Type 'bye' anytime to end our fitness fun!")

while True:
    user_input = input("You: ").lower()

    if 'bye' in user_input:
        print("🤖 FitBuddyBot: Alright champ, signing off! Stay strong and drink water 💧")
        break
    elif any(word in user_input for word in ["hi", "hello", "hey"]):
        print("🤖 FitBuddyBot: Hey hey! Ready to sweat a little?")
    elif "how are you" in user_input:
        print("🤖 FitBuddyBot: I'm feeling pumped and ready to make you sweat! 💪 How about you?")
    elif any(word in user_input for word in ["lazy", "tired", "bored", "stress", "sad"]):
        print(f"🤖 FitBuddyBot: {random.choice(mental_boosts)}")
    elif "fun fact" in user_input:
        print(f"🤖 FitBuddyBot: {random.choice(fun_facts)}")
    elif any(word in user_input for word in ["workout", "exercise", "arms", "abs", "legs", "belly", "weight", "muscle", "diet", "fitness", "body"]):
        print(f"🤖 FitBuddyBot: {random.choice(workouts)}")
    else:
        print("🤖 FitBuddyBot: I didn't catch that! Try asking about workouts, fun facts, stress, or say hi!")
