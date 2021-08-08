Rails.application.routes.draw do
  root to: 'articles#index'
  devise_for :staffs
  devise_for :users
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
