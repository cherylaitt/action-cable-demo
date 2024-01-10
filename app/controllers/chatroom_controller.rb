class ChatroomController < ApplicationController
  def index
    @chat_messages = ChatMessage.all
  end

  def create
    ActionCable.server.broadcast('chatroom_channel', { content: params[:content] })
  end
end
