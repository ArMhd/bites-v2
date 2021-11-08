class Hero extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <section class="hero" id="hero">
         <img class="hero-image" src="hero.jpg" alt="Heroes Image" />
         <h1 class="hero-title">We Serve The Taste You Love.</h1>
         <p class="hero-description">
            This is a type of restaurant which typically serves food and drinks. in addition to light refreshments such as baked goods or scanks. The term comes the rench word meaning food.
         </p>
      </section>
      `;
	}
}

customElements.define('hero-component', Hero);
