class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chatroom_channel'
  end

  def receive(data)
    ChatMessage.create(content: data['content'])
    ActionCable.server.broadcast("chat_#{params[:room]}", data)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
