class ContactController < ApplicationController
    def index; end
    
    def create 
        UserContactMailer.sendEmail(params).deliver

    end
end
