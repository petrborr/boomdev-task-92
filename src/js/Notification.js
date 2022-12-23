import classNames from "classnames";
import { formatCurrency } from "./utils";


export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render(price, type) {
    const template = `
<div class="notification type-${type} ${classNames({"is-danger": type === Notification.types.HAWAIIAN})}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    const notifications = document.querySelector(".notifications")
    notifications.appendChild(this.container)

    const constDeleteButton = this.container.querySelector(".delete")
    constDeleteButton.addEventListener("click", () => {
      this.container.innerHTML = ""
    })
  }
  empty() {
    console.log('used an arrow function insted')
  }
}
