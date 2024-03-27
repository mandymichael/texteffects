---
title: Flickering Glowing Text Effect with CSS
date: '2024-03-27'
summary: 'An animated flickering glowing light text effect with CSS and text shadows'
tags:
    - effect
    - demo
    - flickering
    - neon
    - blinking
    - glow
    - article
featureFont: {
    font: Fira Mono, 
    author: Carrois Apostrophe,
    license: Free,
    url: https://fonts.google.com/specimen/Fira+Mono,
    publisher: Google Fonts,   
    image: /images/post-assets/flickering/flicker-feature.jpg,
}
card: {
    cardImage: /images/post-assets/flickering/flicker-card.jpg,
    cardAlt: The word Flicker with one letter lit up in yellow with a neon glow,
    featured: /images/post-assets/flickering/flicker-feature.jpg,
    cardFeaturedSummary: In this demo we create a neon flashing sign effect, except, with only one letter, it's like the sign has fizzled out except that one solitary letter hanging on with it's last blink.
}
demo: {
    url: https://codepen.io/mandymichael/pen/aJLYVz?editors=0010,
    authorUrl: https://codepen.io/mandymichael,
    author: Mandy Michael,
}
---

When looking through my backlog of text effects to create, this one cropped up as a popular one, but I never liked it because it required too much intervention to get the alignment right. But I realised I could drastically simplify this effect by using a monospaced font and the `ch` unit, and now I've done that I like it a lot more. So let's have a look at how you can replicate this effect in your own projects.

<!-- If you prefer video tutorials to written ones, you can check out the [Flickering Neon Text Effect Video](https://www.youtube.com/watch?v=ZbiBmpPZ8zU) on YouTube.  -->

I'll be using [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) available on Google Fonts for this demo. It's free to use so you can go ahead and use that as well if you want. If you aren't worried about manually offsetting the flicker you don't need to use a monospaced font, but if you want something a bit more editable it makes the code a lot simpler.

If you want to skip the explanation you can jump straight to the [Flickering Glow Text Effect Codepen](https://codepen.io/mandymichael/pen/aJLYVz?editors=0010) and have a play. Or you can check out [flicker text playground](/flickertext) if you want to just have a play around.

<div class="codepen"><div class="codepen"><iframe height="400" style="width: 100%;" scrolling="no" title="Gold Text Effect" src="//codepen.io/mandymichael/embed/aJLYVz/?height=300&theme-id=dark&default-tab=result" frameBorder="no" allowfullscreen="true"></iframe></div></div>

First we want to set up our HTML, in order to replicate this we are going to need two layers of text, one for the full word, and one for the flickering letter. In the original version of this demo (and you might still see this in some of my Codepen demos) I used a `data-attribute` with a `pseudo-element` and the CSS `content` property for creating the copy. The reason I don't do this anymore is because it causes some issues for screen readers, specifically it reads the text out multiple times, which is super annoying. If you want more information on this I wrote a post called [The problem with data-attributes for text effects](https://textlab.dev/posts/data-attributes-and-text-effects) about it which goes into more detail over at [Text Lab](https://textlab.dev). So that it doesn't annoy people using screen readers we'll create a new element for the flickering letter and use `aria-hidden` to prevent it from being announced.

```html
<h1>
    Flicker
    <span class="text" aria-hidden="true">i</span>
</h1>
```
I've used a `h1` for the main text but you should use whatever is appropriate for your project, for the copy I've used a `span` but it doesn't really matter too much as this is just a copy and we're telling assistive technology to ignore it via the `aria-hidden` attribute.  

*_Note:_* you might notice I have slightly different setups between my Codepen and the code here, specifically that I nest the span in the tutorial and not in the Codepen, the reason I haven't nested the span in the Codepen is that it makes it ever so slightly easier for making the text inline editable. You can check out the [Codepen for Nesting the Span](https://codepen.io/mandymichael/pen/OJGjXgO) if you need to see it all in action.

I've set up some standard positioning stuff using `flexbox`, it's not completely necessary for the demo (though it does contribute to aligning the layers). What it does is center the text on the page, your positioning might vary depending on how you set things up, but if you want to replicate it exactly I used the following. I've also included a background gradient, as it helps emphasise the glow.

```css
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #2d2d2d 9%, #000 100%);
}
```
Now we can move on to the CSS for the text itself, first I'll add in some base text styling that we'll apply to both the `h1` and the copy. As we are nesting the span inside the `h1` we don't need to explicitly style the span as it will inherit from the `h1` but if you were to put the copy outside the `h1` you'd have to ensure you are applying the styles to both elements.

First things first we need to include the font we are going to use, specifically [Fira Mono](https://fonts.google.com/specimen/Fira+Mono). I've embedded this in the HTML using the Google Fonts Embed code, it looks like the following code snippet, but you can also download it and use `@font-face` if that's how you prefer to load fonts.

```html 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet">
```
Once we have done that we can setup the `font-family`, weight and size. I want the text to be bold so I've set it to 700, and for the `font-size` I want it to scale when the screen is resized so I've used `calc` to  calculate a font size of `14vw + 0.5rem`. This will ensure the font still scales if a user zooms in and out.

```css
h1 {
    font-family: "Fira Mono", monospace;
    font-weight: 700;
    font-size: calc(14vw + 0.5rem);
}
```

With the basic font setup done we can move onto the positioning and colour, I have added a `text-transform`, so the text is in uppercase, along with a dark grey colour for the text. This will make it look like the rest of the letters have faded out and lost their glow. I've also included some `letter-spacing` with a value of `0.2ch`. The letter spacing isn't strictly necessary I just didn't like it being so close as it impacts the glow, but what is important is if you add letter spacing using the `ch` unit will make alignment significantly easier (if you chose to use a monospaced font). 

```css
h1 {
    ...
	text-transform: uppercase;
    color: #222222;
	letter-spacing: 0.2ch;
}
```

The `ch` unit refers to the "advance measure of the "0" glyph found in the font" so loosely the width of the 0 character. In the case of a monospaced or fixed width font all characters are the same width so you can use the `ch` unit to ensure consistent spacing. If you aren't using a fixed width font it wont be very helpful as the character widths can vary.

At this stage you should have something that looks like the following image, note the stray "I" off to the side. We'll move onto fixing that next.

![Text Flicker with a solitary I off to the right in grey text on a dark grey gradient background](/images/post-assets/flickering/flicker-01.jpg)

Next up is fixing that lonely "I". The actual styling of the I itself is pretty straightforward, first we can add the colour yellow (or whatever you want your glow to be). Then we set the absolute positioning so it sits over the top of the text and a left position of 0.

```css
span {
    color: #ffcc00;
    position: absolute;
    left: 0;
}
```

This will position the text so that it's sitting on top of the original text, but due to our left offset it's going to be sitting over the "F" character instead of the "I" like we want. It should look like the image below. 

![Text Flicker with a solitary yellow I sitting on top of the Flicker text in grey text on a dark grey gradient background](/images/post-assets/flickering/flicker-02.jpg)

Positioning the "I" over the "I" in the original text is where the fun part comes in with the `ch` unit. If you are using a monospaced font you can work out exactly how much to set the left offset to by how many characters a long it is, so in this case, the "I" is the 3rd character, so we offset it by 2, meaning it will be `2ch` along. However, because I added the `letter-spacing: 0.2ch` earlier we also need to account for that. So because it's 2 characters along it will be an addition `0.4ch` from the left, bringing our total to `2.4ch`. 

```css
span {
	position: absolute;
	color: #ffcc00;
	left: 2.4ch;
}
```

If you want to do this programmatically like in my [Flickering Glowing Text Playground](/flickertext) you can use a css custom property and the `calc` function. Using the custom property you can set how many characters along the flickering glow will be (2 in our case), this will then pass it into the calc function to work out what the offset should be.

```css
span {
    --offset: 2;
	left: calc(var(--offset) * 1ch + calc(var(--offset) * 0.2ch));
}
```

Taking a closer look at the calc, the first calculation takes the custom property `var(--offset)` and multiplies it by `1ch` this will make it a `ch` unit (2 * 1ch = 2ch). Then we have to add the letter-spacing calc, which takes the offset value and multiples it by the amount we set the letter-spacing to. The result is the same as above `2.4ch`, but this way you can easily update it with JavaScript or directly in your CSS if you want.

![Text Flicker with a solitary yellow I sitting on top of the I in the grey flicker text below on a dark grey gradient background](/images/post-assets/flickering/flicker-03.jpg)

Now, finally, we can make the blinking, flickering, glowing, neon effect for the I to give it that neon sign look. To do this we need to add in an animation using the `keyframes` @at-rule. It looks pretty complicated but essentially what it does is jumping in between the two blocks of keyframes adjusting the opacity and text-shadow. The first set of keyframes sets the opacity to nearly full opacity, along with the glow effect, while the second block sets the opacity way back to 0.4 so its really faded out and removes the text shadow. By having the keyframes close together, it makes the flicker look less uniform and gives it that, almost about to die out feel. Finally you can add the animation to the span, I have it looping continuously for 3seconds.


```css
@keyframes flicker {
	0%, 19%, 22%, 62%, 64%, 70%, 100% {
		opacity: 0.99;
		text-shadow: 
			-1px -1px 0 rgba(255,255,255, 0.4), 
			1px -1px 0 rgba(255,255,255, 0.4), 
			-1px 1px 0 rgba(255,255,255, 0.4), 
			1px 1px 0 rgba(255,255,255, 0.4), 
			0 -2px 8px,
			0 0 2px,
			0 0 5px #ff7e00, 
			0 0 15px #ff4444, 
			0 0 2px #ff7e00, 
			0 2px 3px #000;
	}
	20%, 21%, 63%, 65%, 69.9% {
		opacity: 0.4;
		text-shadow: none;
	}
}

span {
	position: absolute;
	color: #ffcc00;
	left: 2.4ch;
    animation: flicker 3s linear infinite;
}
```

With that the text effect is complete! Feel free to have a play with the demo in the [Playground](/flickertext), or in the [Codepen Demo](https://codepen.io/mandymichael/pen/aJLYVz?editors=0010). 

<div class="codepen"><div class="codepen"><iframe height="400" style="width: 100%;" scrolling="no" title="Gold Text Effect" src="//codepen.io/mandymichael/embed/aJLYVz/?height=300&theme-id=dark&default-tab=result" frameBorder="no" allowfullscreen="true"></iframe></div></div>

Have fun!