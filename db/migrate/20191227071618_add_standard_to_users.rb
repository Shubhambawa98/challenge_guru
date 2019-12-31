class AddStandardToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :standard, :string
  end
end
