class ChatMessagesController < ApplicationController
  def create
    ActionCable.server.broadcast('chat_messages_channel', { content: params[:content] })
    head :ok

    chat_message = ChatMessage.new(content: params[:content])
    chat_message.save
  end
end
