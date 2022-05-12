# Jovo V4 - How to add "Spintax" functionality as a hook

## What is Spintax?

Spintax is a compact notation to write down a variety of strings. 

## So what does spintax look like?

The appearance may remind some of you of regular expressions. But spintax is not about matching strings and having less options the interpretation is simple as you will see in a second.

Below are some examples and some possible outcomes:

- Let's start  simple:

  "[Hello|Hi]" ==> "Hello" or "Hi"
 
- You are not limited to two variants, there may be multiple spintax expressions in one string:

  "[Hello|Hi|Cheerio|How do you do?|Welcome|Nice to have you here]" ==> "Hi" or "Welcome" or ...

- You can have multiple spintax expressions within a string description:

  "[Hello|Hi] [my friend|again]" ==> "Hello again" or "Hi my friend" or ...

- One option can be left empty to make parts of the text optional:

  "[ | Good Bye]" ==> "" or "Good Bye"
  
- Nested spintax expressions are supported. This makes spintax a powerful tool:

  "[Hello|Hi] [|my [|best] friend ]" ==> "Hello", "Hi my friend", "Hello my best friend", ...


## Now what does this hook do?

Before processing the output the hook searches for "message" and "reprompt" entries to create one random utterance from all the possible permutations (there may be a lot!) which are described by the spintax expression. 

The resulting string is the utterance the user will receive from the system.

If there is no spintax the string remains as is.

The hook will also clean up multiple whitespace.

## How can I use this hook in my own Jovo projects?

This project shows you the files which needs to be modified to make things work.

If you need more explanation [you may want to follow the description in the Jovo documentation](https://www.jovo.tech/docs/hooks).

## Why do you believe this is a useful concept for my next Voice Application?

There are two things to keep in mind:

- For sure you want users to launch your voice app very often.

- For sure users will complain **your voice app is boring** if they have to listen to the same utterances over and over again 

Spintax can help you to bring variety into your utterances.

## Is there anything more I can do with this spintax concept?

Definitely! Using spintax in your project can help you to save time and make maintenance easier.

To show what is possible I also wrote an [online spintax tool](https://spintax.applicate.de) which you can use for whatever you may find useful. 

Going one step further there is also a tool to [describe and maintain complete Alexa voice models using spintax](https://voicemodel.applicate.de/). Furthermore you may want to read [my LinkedIn article about Spintax](https://www.linkedin.com/pulse/adding-expression-language-alexa-voice-models-frank-b%C3%B6rncke/) to find out more. 
