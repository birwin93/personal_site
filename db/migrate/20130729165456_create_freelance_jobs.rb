class CreateFreelanceJobs < ActiveRecord::Migration
  def change
    create_table :freelance_jobs do |t|
      t.string :name
      t.string :email
      t.text :description

      t.timestamps
    end
  end
end
