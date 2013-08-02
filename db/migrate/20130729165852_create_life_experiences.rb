class CreateLifeExperiences < ActiveRecord::Migration
  def change
    create_table :life_experiences do |t|

      t.timestamps
    end
  end
end
