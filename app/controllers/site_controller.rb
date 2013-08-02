class SiteController < ApplicationController

  layout :choose_layout
  def home
  end

  def profile
    @profile = Profile.find_by_key('Billy')
  end

  def artwork
  end

  def choose_layout
    case action_name
    when 'home'
      'application'
    else
      'artwork'
    end
  end


end
