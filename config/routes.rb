Rails.application.routes.draw do
  root to: "home#index"
  get '/about', to: 'about#index'
  get '/products', to: 'products#index'
  get '/contact', to: 'contact#index' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
