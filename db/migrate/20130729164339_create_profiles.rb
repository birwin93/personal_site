class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :key
      t.string :slogan
      t.text :bio

      t.timestamps
    end
  end
end
