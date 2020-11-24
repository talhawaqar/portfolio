Rails.application.routes.draw do
  root to: 'home#index'
  get 'about', to: 'home#about'
  get 'contact', to: 'home#contact'
  get 'services', to: 'home#services'
end
