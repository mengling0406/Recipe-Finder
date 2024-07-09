//JSX is a powerful tool that enhances React development by allowing you to write HTML-like syntax directly 
//within your JavaScript code. This not only improves readability but also integrates seamlessly with 
//JavaScript's capabilities, making it easier to build complex and dynamic user interfaces.

//JSX allows to insert JavaScript expressions within curly braces {} to dynamically render data.

import React from 'react';

const RecipeCard = ({ recipe }) => {

    return (
        <div className="bg-white shadow-lg rounded-lg  
                        overflow-hidden hover:shadow-xl  
                        transition-transform hover:scale-105">
            <div className="relative">
                <img className="w-full h-48 object-cover object-center rounded-t-lg" src={recipe.image} alt={recipe.label} />
                <div className="absolute top-2 left-2 bg-indigo-500 text-white py-1 px-2 rounded">
                    {recipe.dishType[0]}
                </div>
            </div>

            <div className="p-4">
                <h1 className="text-2xl font-semibold text-gray-800 mb-2 capitalize">
                    {recipe.label}
                </h1>

                <div className="text-gray-600 mb-4">
                    <span className="block mb-1"><b>Ingredients:</b></span>
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <span key={index} className="block pl-4">
                            {ingredient}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <a href={"/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 font-semibold  
                        hover:underline">
                        View Recipe
                    </a>

                    <div className="flex items-center text-gray-600">
                        <span className="flex items-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m0 0V5m0 0v14m0-14h14m-14 0H5" />
                            </svg>
                            1.2K
                        </span>

                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            6
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;


/*
URL:https://www.geeksforgeeks.org/recipe-finder-using-reactjs/amp/

The terms you've listed are common attributes and elements used in HTML, JSX (JavaScript XML), and SVG (Scalable Vector Graphics). Here's a brief explanation of each:

HTML/JSX Elements and Attributes
className
Usage: An attribute in JSX to apply CSS classes to an element. In standard HTML, it’s class.
Example: <div className="container"></div>

img
Usage: An HTML element used to embed images in a webpage.
Example: <img src="image.jpg" alt="Description" />
div
Usage: A block-level HTML element used to group content.
Example: <div className="wrapper"></div>

alt
Usage: An attribute for the img element providing alternative text if the image cannot be displayed.
Example: <img src="image.jpg" alt="Description" />

span
Usage: An inline HTML element used to group text or other inline elements.
Example: <span className="highlight">Highlighted text</span>

target
Usage: An attribute for the a element specifying where to open the linked document.
Example: <a href="https://example.com" target="_blank">Link</a>

rel
Usage: An attribute for the a element specifying the relationship between the current document and the linked document.
Example: <a href="https://example.com" target="_blank" rel="noopener noreferrer">Link</a>

a
Usage: An HTML element used to create hyperlinks.
Example: <a href="https://example.com">Visit Example</a>

href
Usage: An attribute for the a element specifying the URL of the linked document.
Example: <a href="https://example.com">Visit Example</a>


SVG Elements and Attributes
svg
Usage: An HTML element used to embed SVG content, which is used to draw scalable vector graphics.
Example: <svg width="100" height="100"></svg>

xmlns
Usage: An attribute specifying the XML namespace for an SVG element.
Example: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"></svg>

fill
Usage: An attribute specifying the fill color of an SVG shape.
Example: <svg fill="red"></svg>

viewBox
Usage: An attribute specifying the position and dimension of the SVG viewport.
Example: <svg viewBox="0 0 100 100"></svg>

stroke
Usage: An attribute specifying the color of an SVG shape's outline.
Example: <svg stroke="black"></svg>

path
Usage: An SVG element used to define a shape using a series of commands.
Example: <path d="M10 10 H 90 V 90 H 10 Z" />

strokeLinecap
Usage: An attribute specifying the shape of the end of a stroke (line) in SVG.
Example: <path strokeLinecap="round" />

strokeLinejoin
Usage: An attribute specifying the shape of the joints between connected segments in an SVG path.
Example: <path strokeLinejoin="round" />

strokeWidth
Usage: An attribute specifying the width of an SVG shape's outline.
Example: <path strokeWidth="2" />

d
Usage: An attribute for the path element in SVG specifying the commands to draw the path.
Example: <path d="M10 10 H 90 V 90 H 10 Z" />

Summary
These elements and attributes are foundational in building web applications using HTML, JSX (for React), and SVG. They help structure the content, style it, and add interactive features to web pages and applications.
*/