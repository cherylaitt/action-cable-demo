Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'chatrooms#index'
  post '/chat_messages', to: 'chat_messages#create', as: 'chat_messages'

  mount ActionCable.server => '/cable'
end
