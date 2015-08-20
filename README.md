# RentHub
A centralized application that aims to make rentals easier and more widely available.  

## How to get app running
+ Install mongodb in any directory.
+ From the installation directory, navigate to bin subdirectory.  
+ From the bin diretory: execute the following
> mongod --dbpath c:\PATH_TO_CLONE...\RentHub\database

The above will create the db instance.
For more information, refer to :
> http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

###Please do not check your db instance in. 

## Creating Test Data
+ Start command line
+ Navigate to mongodb_installation_directory/bin
+ mongo.exe or ./mongo     
+ Type in "use renthub" to switch db
+ Copy Content of RentHub/migrate/dump_file & execute  