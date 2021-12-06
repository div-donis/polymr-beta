class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :avi
      t.string :bio
      t.string :company
      t.boolean :admin

      t.timestamps
    end
  end
end
