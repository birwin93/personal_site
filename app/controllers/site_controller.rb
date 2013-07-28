class SiteController < ApplicationController
  def home
  end

  def projects
    @projects = Project.all
  end
end
