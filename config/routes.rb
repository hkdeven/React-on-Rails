Rails.application.routes.draw do
  resources :records
end

Rails.application.routes.draw do
  root 'welcome#home'
  resources :records
  resources :pages
  get 'projects', to: 'pages#projects'
  get 'contact', to: 'welcome#contact'
  get 'github', to: 'pages#github'
  get 'blog', to: 'pages#blog'
  get 'resume', to: 'pages#resume'
  get 'demos', to: 'pages#demos'
end
