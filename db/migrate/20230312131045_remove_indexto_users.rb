class RemoveIndextoUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :full_name, :string
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    remove_column :users, :avatar_url, :string
    remove_column :users, :uid, :string
  end
end
