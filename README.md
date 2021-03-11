# Form Wave Animation
<img width="1432" alt="Screenshot 2021-03-11 at 21 14 56" src="https://user-images.githubusercontent.com/71224770/110855883-dd151980-82ae-11eb-8b27-44b01f24c709.png">


#### project notes

1. HTML
- login form
- label: email input & password input, login button

2. CSS
- transition, delay

3. JavaScript
- wrap letters in span
- on email and password click event

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML
- wrap the content in a container and then h1(it's not in the form), form, div, input type="text"(not email 🤔), label and button inside the form.

2. CSS
- transform only, not used animation
- transition with cubic-bezier

3. JavaScript
- For wrapping letters in span used .split, .map and .join
```
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-dely: ${idx * 50}ms">${letter}</span>`)
        .join
})
```
