class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :subject
      t.string :priority
      t.string :status
      t.string :created_by
      t.string :closed_by
      t.string :assigned_to
      t.string :category
      t.string :description
      t.integer :user_id
      t.integer :account_id

      t.timestamps
    end
  end
end
