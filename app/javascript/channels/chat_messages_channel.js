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
      // querySelector("[data-chat-room='Best Room']");
      console.log("element", element);
      element.insertAdjacentHTML("beforeend", html);
    },

    createLine(data) {
      return `
        <article class="chat-line">
          <span class="speaker">${data["sent_by"]}</span>
          <span class="body">${data["body"]}</span>
        </article>
      `;
    },
  }
);
