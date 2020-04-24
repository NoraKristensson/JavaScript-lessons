class Marker {
  constructor(fontColor, inkInTotal) {
    this.fontColor = fontColor;
    this.inkInTotal = inkInTotal;
  }
  print(text) {
    if (this.inkInTotal > 0) {
      document.write(`
        <p style="color: ${this.fontColor}">
          ${text}
        </p>
        `);
    } else {
      document.write(`<p>${text}<p/>`);
    }
  }
}

let introduction = new Marker("red", 20);
introduction.print(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum quod, nobis sequi voluptatibus molestiae laudantium cumque minima quas aliquid totam libero corrupti nostrum aut illo provident quo ullam, odit, ratione mollitia corporis? Modi dolore quis vel, accusantium laborum animi itaque nemo, pariatur cum consequuntur voluptate natus. Expedita, animi pariatur."
);

class refillableMarker extends Marker {
  constructor(fontColor, inkInTotal, refill) {
    super(fontColor, inkInTotal);
    this.refill = 100;
  }

  autoRefill() {
    this.refill = this.inkInTotal;
  }
}

let refilledMarker = new refillableMarker("blue", 100);
refilledMarker.print(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus eum quod, nobis sequi voluptatibus molestiae laudantium cumque minima quas aliquid totam libero corrupti nostrum aut illo provident quo ullam, odit, ratione mollitia corporis? Modi dolore quis vel, accusantium laborum animi itaque nemo, pariatur cum consequuntur voluptate natus. Expedita, animi pariatur."
);
