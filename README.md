
# Nodejs Lab 

generate API for courses and Students and connect the response to 
mongoDB with mongoos 

# [website](https://api-nodejs-2dwo.onrender.com/)

## Running Project

To run project , run the following command

```bash
npm run start
```


## Tech Stack

**Client:** javaScript , Bootstrap 

**Server:** Node, Express

**MongoDB:** MongoDB atles 


## Demo

https://user-images.githubusercontent.com/78926069/224539917-dbdab0e5-9d99-4e84-a94c-59430203feb1.mp4

## students 
| Method             | EndPoint                                                                |
| ----------------- | ------------------------------------------------------------------ |
| GET| **/courses** get all courses  |
| GET |**/courses/{courseId}** get course by id  |
| POST  | **/courses** create course |
| DELETE | **/courses/{courseId}** delete course by id  |
| PATCH | **/courses/{courseId}** edit course by id  |

## Students 
| Method             | EndPoint                                                             |
| ----------------- | ------------------------------------------------------------------ |
| GET| **/students** get all students  |
| GET |**/students/{studentId}** get student by id  |
| POST  | **/students** create student |
| DELETE | **/students/{studentId}** delete student by id  |
| PATCH | **/students/{studentId}** edit student by id  |

### student body request
```bash 
{
     "name":"hager",
     "age":23,
     "dept": "open source"
}
```
### Course body request

```bash 
{
    "name":"Node-js",
    "instructorName":"Hager",
    "duration":42
}
```
## Futuer Features

- Authentication
- Error handling


