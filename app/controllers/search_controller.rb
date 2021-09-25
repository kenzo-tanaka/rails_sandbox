class SearchController < ApplicationController
  def index
    @q = Article.ransack(params[:q])
  end
end
