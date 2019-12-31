class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :role
      t.string :school_code
      t.string :identity
      t.string :standard
      t.string :section

      t.timestamps
    end
  end
end
