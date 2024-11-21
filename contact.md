---
layout: index_layout.html
title: "Contact"
description: "Contact Page"
---
# Contact

## LinkedIn
<a href="https://www.linkedin.com/in/liliraynaud/" target="_blank">linkedin.com/in/liliraynaud</a>

## Email
<form name="contact" netlify data-netlify-recaptcha="true">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <div data-netlify-recaptcha="true"></div><br>
    <button type="submit" class="button">Send</button>
    <button type="reset" class="button reset">Clear</button>
</form>