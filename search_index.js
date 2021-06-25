var documenterSearchIndex = {"docs":
[{"location":"concepts.html#Basics-of-nighttime-lights-data","page":"Basic concepts","title":"Basics of nighttime lights data","text":"","category":"section"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"NOAA provides tif files of the nightlights images. Images in the package are represented as 2D arrays with floating-point values. Images of different months are stacked together to form 3D arrays. In this package, such 3D arrays are called datacubes. The following examples demonstrate how array indices work in Julia in the context of this package. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"image[1, 2]","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"returns the value of the image at location [1, 2]. 1st row and 2nd column. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"datacube[:, :, 3]","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"returns the image of the 3rd month.","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"datacube[1, 2, :]","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"returns the time series values of the pixel at location [1, 2]. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"datacube[1, 2, 3]","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"returns the value of the image at location [1, 2] of the 3rd month. ","category":"page"},{"location":"concepts.html#Loading-and-saving-files","page":"Basic concepts","title":"Loading and saving files","text":"","category":"section"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"Images and datacubes can be be loaded and saved using the following functions. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"load_img(filepath)","category":"page"},{"location":"concepts.html#NighttimeLights.load_img-Tuple{Any}","page":"Basic concepts","title":"NighttimeLights.load_img","text":"NOAA provides nighttime lights images as tif files. They can be opened as 2D arrays using the load_img function. \n\nExample:\n\nload_img(\"example.tif\")\n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"save_img(filepath, image)","category":"page"},{"location":"concepts.html#NighttimeLights.save_img-Tuple{Any,Any}","page":"Basic concepts","title":"NighttimeLights.save_img","text":"Images in the form of 2D arrays can be saved as tif files. \n\nExample:\n\nsave_img(\"example.tif\", img)\n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"load_datacube(filepath)","category":"page"},{"location":"concepts.html#NighttimeLights.load_datacube-Tuple{Any}","page":"Basic concepts","title":"NighttimeLights.load_datacube","text":"NOAA provides images for each month since April 2012. Images of the same place taken at different times can be stacked together to make a 3D array representating a panel data. In this package, we refer to such arrays as datacubes. JLD files containing 3D arrays can be loaded using the load_datacube function.  \n\nExample:\n\nload_datacube(\"example.jld\")\n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"save_datacube(filepath, datacube)","category":"page"},{"location":"concepts.html#NighttimeLights.save_datacube-Tuple{Any,Any}","page":"Basic concepts","title":"NighttimeLights.save_datacube","text":"3D arrays can be saved as JLD files. \n\nExample:\n\nsave_datacube(\"example.jld\", datacube)\n\n\n\n\n\n","category":"method"},{"location":"concepts.html#Mapping-between-earth-and-arrays","page":"Basic concepts","title":"Mapping between earth and arrays","text":"","category":"section"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"Suppose you want to find which location has the maximum value of light in an image. You can use the findmax function in julia.","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"findmax(my_image)","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"Suppose, the answer is [2000, 3000]. If you want to find the coordinates of this location, you'll need a mapping between the earth's coordinates and the image's indices. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"Similarly, if you were given a pair of latitude and longitude, for example, (19.05, 73.01), and you need to find the radiance of that coordinate (approximately), you'll need to convert these number to your image's indices. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"CoordinateSystem","category":"page"},{"location":"concepts.html#NighttimeLights.CoordinateSystem","page":"Basic concepts","title":"NighttimeLights.CoordinateSystem","text":"The mapping between the coordinates of earth and indices of the image is needed to convert from one to another. In this package such mapping is referred to as a coordinate system. To define a coordinate system, you need to provide coordinates of the top-left and bottom-right pixels, and the height and the width of the image. \n\nSuppose the image we plan to load had 8000 rows and 7100 columns. The top-left coordinate (37.5, 67.91666) is and bottom-right (4.166, 97.5). We can use these to create a the mapping. \n\ntop_left     = Coordinate(37.5, 67.91666)\nbottom_right = Coordinate(4.166, 97.5)\nheight = 8000\nwidth  = 7100\nmy_coordinate_system = CoordinateSystem(top_left, bottom_right, height, width)\n\nNow functions can use this mapping to go from one to another. \n\n\n\n\n\n","category":"type"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"lat_to_row(geometry::CoordinateSystem, x)","category":"page"},{"location":"concepts.html#NighttimeLights.lat_to_row-Tuple{CoordinateSystem,Any}","page":"Basic concepts","title":"NighttimeLights.lat_to_row","text":"To convert from latitude to row number of an image, use the lat_to_row function. \n\nExample:\n\nlat_to_row(my_coordinate_system, 19.6) \n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"long_to_column(geometry::CoordinateSystem, x)","category":"page"},{"location":"concepts.html#NighttimeLights.long_to_column-Tuple{CoordinateSystem,Any}","page":"Basic concepts","title":"NighttimeLights.long_to_column","text":"To convert from longitude to column number of an image use the long_to_column function. \n\nExample:\n\nlong_to_column(my_coordinate_system, 73.33) \n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"row_to_lat(geometry::CoordinateSystem, x)","category":"page"},{"location":"concepts.html#NighttimeLights.row_to_lat-Tuple{CoordinateSystem,Any}","page":"Basic concepts","title":"NighttimeLights.row_to_lat","text":"To convert from row number of an image to latitude use the row_to_lat function. \n\nExample:\n\nrow_to_lat(my_coordinate_system, 100) \n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"column_to_long(geometry::CoordinateSystem, x)","category":"page"},{"location":"concepts.html#NighttimeLights.column_to_long-Tuple{CoordinateSystem,Any}","page":"Basic concepts","title":"NighttimeLights.column_to_long","text":"To convert from column number of an image to longitude use the column_to_long function.\n\nExample:\n\ncolumn_to_long(my_coordinate_system, 100) \n\n\n\n\n\n","category":"method"},{"location":"concepts.html#Masks","page":"Basic concepts","title":"Masks","text":"","category":"section"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"Masks are 2D arrays consisting of 0s and 1s. The 1s determine the region of interest. The pixels with the value of 1 are referred to as lit and the ones with the value of 0 are referred to as dark. Masks are useful because they can be easily combined with one another.  ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"To demonstrate the concept of mask, here are 3 examples:","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"If the region of interest is India, the points inside the boundary of India will be 1, while the remaining will be 0.  \nIf all pixels in an image below a threshold are considered background noise, such pixels can be marked as zero and the remaining can be marked as 1 to produce a background noise mask. For following code demonstrates this example. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"image = rand(0:10.0, 10, 10)\nnoise_threshold = function(x, threshold)\n    if x < threshold\n        return 0\n    else \n        return 1\n    end\nend\nthreshold = 0.3\nmask_mask = noise_threshold.(x, threshold) ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"The standard deviation of each pixel in a datacube can be computed. Suppose those pixels with standard deviation greater than a threshold are considered outliers. In a 2D array, these pixels can be marked as 0 and the remaining can be marked as 1 to generate an outlier mask. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"datacube = rand(0:10.0, 10, 10, 10)\nmask = zeros(10, 10)\nstd_threshold = 1\nfor i in 1:10\n    for j in 1:10\n        if std(datacube[i, j, :]) > std_threshold\n            mask[i, j] = 1\n        end\n    end\nend","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"If you multiply (elementwise) the 3 masks, you get a mask that represents the pixels above the threshold, which are inside India and which are not outliers. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"To find the number of pixels in a mask, one simply needs to do: ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"sum(mask)","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"To find the area of the mask, the mask_area function of the package can be used. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"mask_area(geometry::CoordinateSystem, mask)","category":"page"},{"location":"concepts.html#NighttimeLights.mask_area-Tuple{CoordinateSystem,Any}","page":"Basic concepts","title":"NighttimeLights.mask_area","text":"The area of each pixel is added to determine the total area of a mask. \n\nmask = rand(0:1,8000,7100) \nmask_area(INDIA_COORDINATE_SYSTEM, mask) \n\n\n\n\n\n","category":"method"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"An image can be multiplied with a mask (elementwise) so that only the pixels lit in the mask are lit in the images. For example: ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"image .*noise_mask","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"returns as image with 0s wherever there is background noise and the remaining values are the same as the original image. ","category":"page"},{"location":"concepts.html#Aggregating-over-masks","page":"Basic concepts","title":"Aggregating over masks","text":"","category":"section"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"While using nighttime lights, you may need to find the total lit of an image over a mask.  ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"For example, if you have a background noise mask (where pixels considered noise are marked as 0 and the remaining at marked as 1), you may need to find the the total of an image over the lit pixels of the mask. ","category":"page"},{"location":"concepts.html","page":"Basic concepts","title":"Basic concepts","text":"aggregate(image, mask)","category":"page"},{"location":"concepts.html#NighttimeLights.aggregate-Tuple{Any,Any}","page":"Basic concepts","title":"NighttimeLights.aggregate","text":"The aggregate value of an image over a mask can be computed by the aggregate function. The function multiplies the image and the mask (elementwise) and then performs the summation. \n\nrand_image = rand(10, 10)\nrand_mask = rand(0:1, 10, 10)\naggregate(rand_image, rand_mask)\n\n\n\n\n\n","category":"method"},{"location":"data_cleaning.html","page":"Data Cleaning","title":"Data Cleaning","text":"outlier_mask(datacube,mask)","category":"page"},{"location":"data_cleaning.html#NighttimeLights.outlier_mask-Tuple{Any,Any}","page":"Data Cleaning","title":"NighttimeLights.outlier_mask","text":"Generates a mask of pixels with standard deviation less that the 99.9th percentile. \n\n\n\n\n\n","category":"method"},{"location":"index.html","page":"Home","title":"Home","text":"CurrentModule = NighttimeLights","category":"page"},{"location":"index.html#NighttimeLights","page":"Home","title":"NighttimeLights","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Documentation for NighttimeLights.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"National Oceanic and Atmospheric Administration (NOAA) releases nighttime lights images produced using the Visible Infrared Imaging Radiometer Suite (VIIRS) each month since April 2012. The image of India as night in April 2012 is shown below. Nighttime lights data had emerged as a useful tool to measure economic activity. Many researchers have established a correlation between prosperity and brightness of a region. In many situations, nighttime lights generates measures with accuracy, latency and geographical resolution that are superior to conventional methods of measurement, such as GDP. ","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"Using nighttime lights for economic analysis require cleaning of data. This is the first open source implementation of cleaning procedures for nighttime lights.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"(Image: india lights)","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"The package, NighttimeLights.jl, was a foundation for a research paper, \"But clouds got in my way: bias and bias correction of VIIRS nighttime lights data in the presence of clouds\" by Ayush Patnaik, Ajay Shah, Anshul Tayal, Susan Thomas. This paper diagnoses a source of bias in the data and responds to this problem with a bias correction scheme. Along with other mainstream methods of data cleaning, this method is also implemented in the package.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"While there are packages to do image processing in Julia, the assumptions about the sensor producing the data, such as in Images.jl, make it incompatible with nighttime lights data. We built the package from scratch without making any assumptions about the sensor. Functions in the package take regular float 3D arrays as input, which makes it possible to extend the package to data from any sensor and not just VIIRS nighttime lights. ","category":"page"}]
}