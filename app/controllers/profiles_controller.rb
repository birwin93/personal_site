class ProfilesController < ApplicationController
  layout "projects"
  def show
    @profile = Profile.find_by_key('Billy')
  end
end
