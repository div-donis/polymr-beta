class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :task_id
      t.string :user_id
      t.string :content

      t.timestamps
    end
  end
end
