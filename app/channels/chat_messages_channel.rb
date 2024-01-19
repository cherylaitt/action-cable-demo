class ChatMessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_messages_channel'
    puts 'subscribed'
  end

  def unsubscribed
    # Unsubscribe from the channel
    stop_all_streams
  end

  def after_stop
    # Unsubscribe from the channel when the server stops
    unsubscribe_from_channel
  end
end
