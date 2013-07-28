class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :save_location

  private
    def save_location
      session[:back] = session[:tmp_url] || root_url
      session[:tmp_url] = request.url
    end

end
