import React from 'react';

function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>SVG primitive drawings</h2>
         <p lang='eng'>There are several basic shapes used for most SVG drawing. The purpose of these shapes is fairly obvious from their names. Some of the parameters that determine their position and size are given, but an element reference would probably contain more accurate and complete descriptions along with other properties that won't be covered in here. However, since they're used in most SVG documents, it's necessary to give them some sort of introduction.

To insert a shape, you create an element in the document. Different elements correspond to different shapes and take different parameters to describe the size and position of those shapes. Some are slightly redundant in that they can be created by other shapes, but they're all there for your convenience and to keep your SVG documents as short and as readable as possible. All the basic shapes are shown in the following image.
</p><br />
<div className='rectangle' id="rectangle">
<p>Rectangle<br/>
The &lt; rect &gt; element draws a rectangle on the screen. There are 6 basic attributes that control the position and shape of the rectangles on screen. The one on the right has its rx and ry parameters set, giving it rounded corners. If they're not set, they default to 0.
<br/></p><p className='example'>&lt;rect x="10" y="10" width="30" height="30"/&gt;<br/>
&lt;rect x="60" y="10" rx="10" ry="10" width="30" height="30"/&gt;</p>
<p>x<br/>
The x position of the top left corner of the rectangle.<br/>

y<br/>
The y position of the top left corner of the rectangle.<br/>

width<br/>
The width of the rectangle<br/>

height<br/>
The height of the rectangle<br/>

rx<br/>
The x radius of the corners of the rectangle<br/>

ry<br/>
The y radius of the corners of the rectangle</p>
</div><br/>

<div className='circle' id="circle">
  <p>
  Circle<br/>
The &lt;circle&gt; element draws a circle on the screen. It takes 3 basic parameters to determine the shape and size of the element.
  </p><p className='example'>&lt;circle cx="25" cy="75" r="20"/&gt;
</p><p>r<br/>
The radius of the circle.<br/>

cx<br/>
The x position of the center of the circle.<br/>

cy<br/>
The y position of the center of the circle.</p>
</div><br/>
<div className='ellipse' id="ellipse">
  <p>Ellipse<br/>
An &lt;ellipse&gt; is a more general form of the &lt;circle&gt; element, where you can scale the x and y radius (commonly referred to as the semimajor and semiminor axes in maths) of the circle separately.</p>
<p className='example'>&lt;ellipse cx="75" cy="75" rx="20" ry="5"/&gt;</p>
<p>rx<br/>
The x radius of the ellipse.<br/>

ry<br/>
The y radius of the ellipse.<br/>

cx<br/>
The x position of the center of the ellipse.<br/>

cy<br/>
The y position of the center of the ellipse.</p>
</div><br/>
<div className='line' id="line">
  <p>
  Line<br/>
The &lt;line&gt; element takes the positions of two points as parameters and draws a straight line between them.
  </p><p className='example'>&lt;line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/&gt;
</p><p>x1<br/>
The x position of point 1.<br/>

y1<br/>
The y position of point 1.<br/>

x2<br/>
The x position of point 2.<br/>

y2<br/>
The y position of point 2.</p>
</div><br/>
<div className='polyline' id="polyline">
  <p>Polyline<br/>
A &lt;polyline&gt; is a group of connected straight lines. Since the list of points can get quite long, all the points are included in one attribute:</p>
<p className='example'>&lt;polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/&gt;
</p><p>points<br/>
A list of points. Each number must be separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list (0,0), (1,1), and (2,2) would be written as 0, 0 1, 1 2, 2.

</p>
</div><br/><div className='polygon' id="polygon">
  <p>Polygon<br/>
A &lt;polygon&gt; is similar to a &lt;polyline&gt;, in that it is composed of straight line segments connecting a list of points. For polygons though, the path automatically connects the last point with the first, creating a closed shape.</p>
<p className='example'>&lt;polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/&gt;

</p><p>points<br/>
A list of points, each number separated by a space, comma, EOL, or a line feed character. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list (0,0), (1,1), and (2,2) would be written as 0, 0 1, 1 2, 2. The drawing then closes the path, so a final straight line would be drawn from (2,2) to (0,0).</p>
</div><br/>
<div className='path' id="path"><p>Path<br/>
A &lt;path&gt; is the most general shape that can be used in SVG. Using a path element, you can draw rectangles (with or without rounded corners), circles, ellipses, polylines, and polygons. Basically any of the other types of shapes, bezier curves, quadratic curves, and many more.
</p>
<p className='example'>&lt;path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/&gt;</p>
<p>d<br/>
A list of points and other information about how to draw the path. See the Paths section for more information.</p>
</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div>In this article </div>
             <div className='options'>
             <div><a href='#rectangle'>1.Rectangle</a></div>
             <div><a href='#circle'>2.Circle</a></div>
             <div> <a href="#ellipse">3.Ellipse</a></div>
             <div> <a href="#line">4.Line</a></div>
             <div> <a href="#polyline">5.Polyline</a></div>
             <div> <a href="#polygon">6.Polygon</a></div>
             <div> <a href="#path">7.Path</a></div>
             </div>
             
            
          </div>
          <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>

    </div>
  )
}

export default MainContent;