# NighttimeLights

[![dev](https://img.shields.io/badge/docs-stable-blue.svg)](https://juliaplanet.github.io/NighttimeLights.jl/)

National Oceanic and Atmospheric Administration (NOAA) releases nighttime lights images produced using the Visible Infrared Imaging Radiometer Suite (VIIRS) since April 2012. Nighttime lights data had emerged as a useful tool to measure economic activity. Many researchers have established a correlation between prosperity and the brightness of a region. In many situations, nighttime lights generates measures with accuracy, latency and geographical resolution that are superior to conventional methods of measurement, such as GDP.

Using nighttime lights for economic analysis require cleaning of data and aggregating measurements of pixels over regions of interest. This is the first open source implementation of these procedures for nighttime lights.

This package was a foundation for a research paper, "But clouds got in my way: bias and bias correction of VIIRS nighttime lights data in the presence of clouds" by Ayush Patnaik, Ajay Shah, Anshul Tayal, Susan Thomas. This paper diagnoses a source of bias in the data and responds to this problem with a bias correction scheme. Along with other mainstream methods of data cleaning, this method is also implemented in the package. 

Landing page of the paper: https://xkdr.org/wp2021-07.html

## To install: 
```Julia
 add "git://github.com/JuliaPlanet/NighttimeLights.jl.git"
```

The package requires a functioning RCall with forecast package installed. 