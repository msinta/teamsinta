Rails.application.routes.draw do
  root 'components#index'
  get 'users/show'
  get 'users/index'
  get 'users/create'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
