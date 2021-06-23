class Article < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  mount_uploader :video, VideoUploader
  mount_uploader :thumbnail, ThumbnailUploader
end
