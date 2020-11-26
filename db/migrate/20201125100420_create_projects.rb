class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :client
      t.string :display_category
      t.date :project_date
      t.string :url
      t.text :description
      t.references :category, null: false, foreign_key: true
      t.timestamps
    end
  end
end
