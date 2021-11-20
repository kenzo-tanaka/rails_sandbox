Rails.application.routes.draw do
  namespace :admin do
    resources :products
  end
  namespace :admin do
    resources :articles
  end
  root 'articles#index'
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
