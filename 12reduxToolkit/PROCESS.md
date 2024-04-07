## Realation Of React and Redux
React and Redux are two different kind of things.But you can implement Redux in react by using react-redux.

React Redux actually mutate their state but in reduction toolkit this mutation automatically stops and other functionalities are implemented automatically

## Process
# STEP-1 :  store
Store is used to keep all the states and their action and no matter what is the size of the application is the number of store is always one(Single Source of truth)

Store will be updated by only the use of reducers...So at first we have to configureStore func and then pass the reducers

# Step -2: Reducer using Slices
Slice = features
To implement reducers we have to define slices which is nothing but the features ...so at first by using createSlice func we have to create  slices by using three arguments :"name","intial state","reducer-object" 

in reducer key function you have the access of two things 'state' & 'action'

# step-3 useDispatch 
useDispathc is used to send the data to store... 

syntax-
 const dispatch=useDispatch();
 dispathc(reducer)

 # step-4 useSelector
useSelector is used to retrive the data to store... 

syntax-
 const todos=useSelector(state=>state.todos);