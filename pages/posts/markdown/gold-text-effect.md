---
title: Gold Text Effect with CSS
date: '2024-01-27'
summary: 'Create a CSS only Gold Text Effect using CSS Gradients and text shadows.'
tags:
    - effect
    - demo
    - gold
    - gradients
    - featured
featureFont: {
    font: Playfair Display, 
    author: Claus Eggers Sørensen,
    license: Free,
    url: https://fonts.google.com/specimen/Playfair+Display,
    publisher: Google Fonts,   
    image: /images/post-assets/goldtext/gold-featured.jpg,
}
card: {
    cardImage: /images/post-assets/goldtext/gold-card.jpg,
    cardAlt: The word winner in gold looking text,
    featured: /images/post-assets/goldtext/gold-featured.jpg,
    cardFeaturedSummary: If you're looking for a luxurious, fancy text effect that is reminiscent of gold, look no further than this CSS only Gold Text Effect. A simple yet effective approach to creating gold look text on the web. The approach is so simple that it can be applied to other "shiny" looking gradient effects including silver.
}
demo: {
    url: https://codepen.io/mandymichael/pen/xpLNeV?editors=0010,
    authorUrl: https://codepen.io/mandymichael,
    author: Mandy Michael,
}
---

Replicating the look of "gold" in anything can be quite tricky and often it comes out looking a bit subdued. However, I came across this <a href="https://design.tutsplus.com/tutorials/how-to-create-a-gold-text-effect-in-photoshop--psd-63">Gold Text Effect in PhotoShop</a> by <a href="https://abduzeedo.com/">Fabio Sasso</a> and I felt like they really nailed the gradient. So I decided to give it a try and see if I could replicate it in CSS. I'll be using <a href="https://fonts.google.com/specimen/Playfair+Display">Playfair Display</a> available on Google Fonts for this demo. It's free to use so you can go ahead and use that as well if you want. Otherwise I find, Times New Roman is also a good choice, basically I think it looks best with any kind of serif font with sharp lines. 

If you want to skip the explanation you can jump straight to the <a href="https://codepen.io/mandymichael/pen/xpLNeV?editors=0010">Codepen</a> and have a play. Or you can check out <a href="/goldtext">the full page gold text demo</a> or if you're curious about other versions I've also made a  <a href="https://codepen.io/mandymichael/pen/zYbPavV?editors=0100">silver demo on Codepen</a>. You can view the <a href="/silvertext">full page silver demo</a> as well.

<div class="codepen"><div class="codepen"><iframe height="400" style="width: 100%;" scrolling="no" title="Gold Text Effect" src="//codepen.io/mandymichael/embed/xpLNeV/?height=300&theme-id=dark&default-tab=result" frameBorder="no" allowfullscreen="true"></iframe></div></div>

First we want to set up our HTML, in order to replicate this we are going to need two layers of text, which means we have to duplicate the text itself. In the original version of this demo (and you might still see this in some of my Codepen demos) I used a data-attribute for creating the copy. The reason I don't do this anymore is because it causes some issues for screen readers, specifically it reads the text out multiple times, which is super annoying. Instead we'll just duplicate the text and use `aria-hidden` to hide it from screen readers.

```html
<h1>Winner</h1>
<span class="text copy" aria-hidden="true">Winner</h1>
```
I've used a `h1` for the main text but you should use whatever is appropriate for your project, for the copy I've used a `span` but it doesn't really matter too much as this is just a copy and we're telling assistive technology to ignore it.

Next up we set up the CSS, first I'll add in some base text styling that we'll apply to both the h1 and the copy. I recommend you do this with a class, I've kept it as the element for simplicity. 

```css
h1, span {
    text-transform: uppercase;
    margin: 0;
    font-weight: 400;  
    font-size: 18vw;
    font-family: "Playfair Display";
}
```

*Note: I have used vw units for the font-size so that the demo will easily scale but still be simple. However I would not recommend doing this in your project as it will prevent users from being able to increase the size of text by zooming in or out. Instead, use it with a relative unit. e.g. `font-size: calc(18vw + .5rem);`.*

Once the vase text styles are set up, we can go ahead and start on the gradient for the main effect. I used the colour that <a href="https://abduzeedo.com/">Fabio</a> used in their <a href="https://design.tutsplus.com/tutorials/how-to-create-a-gold-text-effect-in-photoshop--psd-63">tutorial</a>, because to be honest they did all the hard work for me. I manually just guessed the points and adjusted them slightly in the browser, but if their is a gradient you want to use you could also take a screenshot and load it up into a gradient builder tool. For our purposes this is the gradient I ended up with. If Gold Text isn't your thing you can check out the <a href="https://codepen.io/mandymichael/pen/zYbPavV?editors=0100">silver version</a> which was made by reducing the saturation of the colour which some slight adjustments, basically you can do this with any kind of gradient.

```css
h1 {
    background: linear-gradient(to bottom, #cfc09f 22%, #634f2c 24%, #cfc09f 26%, #cfc09f 27%, #ffecb3 40%,#3a2c0f 78%); 
}
```

What you'll find at this point is the gradient sits like a rectangle behind the text, like a background! It will look a bit like this.

![Interim gold text effect with gradient in the background and text in white on top](/images/post-assets/goldtext/goldtext-01.jpg)

In order to have the gradient actually fill the text instead of the background we need to add two additional CSS properties `-webkit-background-clip` and `-webkit-text-fill-color`. The background-clip property is going to clip the background to our text, and the text-fill-color property is going to get rid of the text color so that we can see the background behind it. 

```css
h1 {
    background: linear-gradient(to bottom, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
```

This will create the initial layer which will look like the following image. It looks pretty good as is, but in order for it to look more "gold" like it needs more definition, so to do that we'll start styling the second layer and utilise some CSS text shadows.

![Interim gold text effect with gradient clipped to the text](/images/post-assets/goldtext/goldtext-02.jpg)

If you want to have a little bit more depth you can have a more complex shadow like the original tutorial. But you'll need to use background-position to align it to match your text. In my case I had to use the values below. I prefer the simpler version because it works better with rounded glyphs, but I thought I'd provide it as an option as it can add a nice depth if your text is more square. (You can see it in play in the <a href="https://codepen.io/mandymichael/pen/zYbPavV?editors=0100">Silver</a> version).

```css
    h1 {
        background: linear-gradient(to bottom, #cfc09f 22%,#634f2c 24%, #cfc09f 26%, #cfc09f 27%,#ffecb3 40%,#3a2c0f 78%); 
	    background-position: 0 1vw;
    }
```

At this point we have to deal with the positioning of the layers so that the second layer sits underneath the first layer. I've done this by setting the span to `position:absolute` (and because it's a span i've set it to `display:block` if you use a block element you won't need to do this). On the `h1` we will need to set a `z-index:1` and a `position` of `relative`. Depending on how you set up your HTML this combination could be a little different. But the end goal is to have the copy layer sitting below the main layer.

```css
h1 {
    ...
    position: relative;
    z-index: 1;
}

span {
    position: absolute;
    display: block;
}
```

Once you've done this the text should be sitting behind the main text, and not be visible to you. So it should look like the previous image. Once that is done we can add the text shadow to the copy layer. The text shadow is going to add a highlight to the left edge of the text, and a dark blur to "elevate" it off the page a little for depth. 

```css
span {
    text-shadow: 
        -1px 0 1px #c6bb9f, 
        0 1px 1px #c6bb9f, 
        5px 5px 10px rgba(0, 0, 0, 0.4),
        -5px -5px 10px rgba(0, 0, 0, 0.4);
    position: absolute;
    display: block;
}

```

This will give you text that hopefully looks like the image below. In order to create my demo I've added in some positioning which you can check out in the <a href="https://codepen.io/mandymichael/pen/xpLNeV?editors=0010">Codepen example</a> (I also added the radial background gradient as per the original tutorial). 

![Gold text effect with the word winner](/images/post-assets/goldtext/winner-final.jpg)

If you're interested in what the <a href="https://codepen.io/mandymichael/pen/zYbPavV?editors=0100">silver version</a> might look like, I also <a href="https://codepen.io/mandymichael/pen/zYbPavV?editors=0100">made a demo</a> of that. 

![Silver version of the gold text effect](/images/post-assets/goldtext/silver-text.jpg)

Enjoy!