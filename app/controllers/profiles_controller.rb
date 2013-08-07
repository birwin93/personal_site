class ProfilesController < ApplicationController
  def show
    @profile = Profile.find_by_key('Billy')
  end
end
