class UserContactMailer < ApplicationMailer
    default from: 'contact@loopstudios.com'
    def sendEmail(params)
        @name = params['name']
        @phone = params['phone']
        @email = params['email']
        @message = params['comment']
        mail(to: ENV['dev_email'], subject: 'New user contact you!!')
    end
end
