# React on Rails Application

This minimally-styled application was created to demo a Rails stack that utilizes React.js to power the frontend.  This is a basic expense-tracking app; each record will consist of a date, a title and an amount. A record will be treated as *Credit* if its amount is greater than zero, otherwise it will be treated as *Debit*.

Summarizing, the application will behave as follows:
* When the user creates a new record through the horizontal form, it will be appended to the records table
* The user will be able to inline-edit any existing record
* Clicking on any Delete button will remove the associated record from the table
* Adding, editing or removing an existing record will update the amount boxes at the top of the page

## Installation

Setup is simple and follows standard RoR procedures.  

1. Using your terminal, begin by running `git clone https://github.com/hkdeven/React-on-Rails.git`
1. Then `cd React-on-Rails/`
1.  Run `bundle install`
1.  Followed by `rake db:migrate`
1.  Lastly, `rails s` to launch the server
1.  Party.  Like it's 1999.

##Enjoy :smile:

[![Twitter](http://www.morethandancers.com/wp-content/uploads/2016/06/twitter-follow-button.png)][2]

[1]: http://www.makecodenotwar.co/
[2]: https://twitter.com/MakeCodeNotWar
