Rails.application.routes.draw do
  
  resources :tasks
  resources :comments
  resources :accounts
  resources :users

  post "/login", to: "sessions#create" 

  get "/self", to: "users#show" 

  delete "/logout", to: "sessions#destroy" 

  get '/tasks/:task_id/comments', to: 'tasks#show_comments'

  get '/accounts/:account_id/tasks', to: 'tasks#tasks_by_account'

  get '/accounts/:account_id/closed_tasks', to: 'tasks#closed_tasks_by_account'
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
