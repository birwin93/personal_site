class Notifier < ActionMailer::Base
  default from: "billy@billyirwin.com"
  def new_job(gig)
    @gig = gig
    mail(:to => 'birwin93@gmail.com', from: @gig.email)
  end
end
