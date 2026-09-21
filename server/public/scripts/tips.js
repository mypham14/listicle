// Retrieve the tips from the server and render them to the page
const renderTips = async () => {
    const response = await fetch('/tips')
    const data = await response.json()

    // Point to the element with the ID main-content
    const mainContent = document.getElementById('main-content')

    // Use conditional rendering based on whether data is null
    if (data && data.length) {
        data.map(tip => {
            // Create a new article element for each tip, with the tip's image as a full-bleed background
            const card = document.createElement('article')
            card.className = 'tip-card'
            card.style.backgroundImage = `url(${tip.image})`

            // Create a dark overlay so the light text stays readable over the image
            const overlay = document.createElement('div')
            overlay.className = 'tip-card-overlay'

            // Create a h3 element and set its text content to the tip's title
            const title = document.createElement('h3')
            title.textContent = tip.title
            overlay.appendChild(title)

            // Divider line between the title and the rest of the card
            overlay.appendChild(document.createElement('hr'))

            // Create a p element and set its text content to the tip's category
            const category = document.createElement('p')
            category.className = 'tip-category'
            category.textContent = tip.category
            overlay.appendChild(category)

            // Create a p element and set its text content to who submitted the tip
            const submittedBy = document.createElement('p')
            submittedBy.className = 'tip-submitted'
            submittedBy.textContent = tip.submittedBy
            overlay.appendChild(submittedBy)

            // Create an a element and set its text content to Read More
            // Set the href of the link to /tips/tip.id
            // Set the role to button then append it to the overlay element
            const link = document.createElement('a')
            link.textContent = 'Read More'
            link.setAttribute('role', 'button')
            link.href = `/tips/${tip.id}`
            overlay.appendChild(link)

            card.appendChild(overlay)

            // Append card element to the main-content element
            mainContent.appendChild(card)
        })
    }
    else { // If data is empty, display a message indicating that there are no tips available
        const message = document.createElement('h2')
        message.textContent = 'No Tips Available 😞'
        mainContent.appendChild(message)
    }
}

// Call the renderTips function to fetch and display the tips on page load
renderTips()
