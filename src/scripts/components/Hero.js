class Hero extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div class="hero" id="hero">
         <picture>
            <source srcset="hero-small.jpg" media="(max-width: 600px)">
            <img class="hero-image" src="hero-large.jpg" alt="Heroes Image" />
         </picture>
         <h1 class="hero-title">We Serve The Taste You Love.</h1>
         <p class="hero-description">
            This is a type of restaurant which typically serves food and drinks. in addition to light refreshments such as baked goods or scanks. The term comes the rench word meaning food.
         </p>
      </div>
      `;
	}
}

customElements.define('hero-component', Hero);
