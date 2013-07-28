class ProjectsController < ApplicationController
  layout "projects"
  def show
    @project = Project.find(params[:id])
  end
end
