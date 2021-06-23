class Article < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  mount_uploader :video, VideoUploader
end
