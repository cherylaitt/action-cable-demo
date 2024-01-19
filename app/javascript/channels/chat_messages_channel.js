import consumer from "./consumer";

consumer.subscriptions.create(
  { channel: "ChatMessagesChannel", room: "Best Room" },
  {
    received(data) {
      console.log("received", data);
      this.appendLine(data);
    },

    appendLine(data) {
      console.log("appendLine", data);
      const html = this.createLine(data);
      const element = document.getElementById("message-section");
      element.insertAdjacentHTML("beforeend", html);
    },

    createLine(data) {
      return `
        <article class="chat-line">
          <span class="body">${data["content"]}</span>
        </article>
      `;
    },

    rejected() {
      console.log("rejected");
    },
  }
);
