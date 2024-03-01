## React Fibre
https://github.com/acdlite/react-fiber-architecture

Hidration:-hydration is the process of injecting javascript into a html document. 

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

        ~pause work and come back to it later.
        ~assign priority to different types of work.
        ~reuse previously completed work.
        ~abort work if it's no longer needed.