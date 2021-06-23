class AddVideoToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :video, :string
  end
end
