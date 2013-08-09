class FreelanceJobsController < ApplicationController
  def new
    @freelance = FreelanceJob.new
  end

  def create
    @freelance = FreelanceJob.new(params.require(:freelance_job).permit(:name, :email, :description))
    if @freelance.save
      Notifier.new_job(@freelance).deliver
      redirect_to root_url
    else
      redirect_to new_freelance_job_path
    end
  end

end
