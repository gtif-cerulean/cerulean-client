# G. Wind Turbine Wake Effect

The turbulence that occurs downfield to a windfarm (the wake) can be observed by Sentinel-1. The consequence of this more turbulent air can be a reduction in wind resource in other windfarms downfield. Depending on the prevailing wind direction, newly constructed offshore wind farms can “steal” the wind resource from existing wind farms. The Wind Turbine Wake Effect algorithm shows the wind and current direction from CMEMS model data overlayed on Sentinel-1 IW GRD SAR data.

1\. Using the "Select Indicator" menu, select the "Wind Turbine Wake Effect" algorithm.

![](assets/wind_turbine_wake_effect/ascreenshot_7fa5211a875541d48f21bd4684f5a115_text_export.jpeg)


2\. Using the "Select area" tool, draw a bounding box for the region of interest. This should be a region where offshore wind turbines are located.

Using the "Select date" box choose the date for the analysis.

Click "Execute".

![](assets/wind_turbine_wake_effect/File_7520417f80fc42ae8feb26fa95303658_text_export.jpeg)


3\. The results are shown on the map. 

In this example, the wind turbines are bright spots in the SAR image. The blue arrows show the direction of the current and red arrows show the direction of the wind. The dark lines radiating from the wind turbines are in the same direction as the red arrows and therefore can be inferred to be wind wakes, rather than current wakes.

![](assets/wind_turbine_wake_effect/File_4a0bf9a0a7b2430c9179a71efb9d9b40_text_export.jpeg)


4\. Since it takes some time for the results to be processed, they are stored for future access. For each stored run there is information on the date of execution and whether the run was successful or failed. There are options to load the results on the map, download the results, or delete the run.

![](assets/wind_turbine_wake_effect/File_982c84ddc3d94706b7c2abb53a0bf633_text_export.jpeg)


5\. Clicking on the question mark icon beside the execution date opens the metadata for the run.

![](assets/wind_turbine_wake_effect/File_5b429852b5074c57bd4c08fab43d69cd_text_export.jpeg)


6\. Return to the Dashboard &lt;Link&gt;

Return to the Tutorial Contents &lt;Link&gt;

Continue to the next Tutorial &lt;Link&gt;