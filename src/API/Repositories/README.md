#Repositories
##Repository
`Repository.js` is the base file of all Repositories. It handles the
`axios` object creation.
* it might be tricky to handle APIs with different hosts 
##Types
It's an object with all Repositories listed inside. Every time you add 
new repo you will like to add it here as well. This pattern helps creating
Repositories inside your code by providing their names.
##Repository directory
Each repository has it's own folder. 
The reason behind this is using approach 
of having unit tests under the same path 
as the tested file. 