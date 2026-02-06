# F. Sea Ice Motion Animation

There can be a long wait for the next satellite image to be received during which sea ice can move a considerable distance. The Sea Ice Motion Animation algorithm transforms the current satellite image using a sea ice drift forecast to simulate what the ice in a region should look like in the future.


1\. Using the "Select Indicator" menu, select the "Sea Ice Motion Animation" algorithm.

![](assets/polarwarp/ascreenshot_6c9b5a3268cb4de9bc645117935772dd_text_export.jpeg)


2\. Zoom into the area of interest until the Sentinel 1 data begins to load.

![](assets/polarwarp/File_3da6e9bbbf7844469977d9ed4a69b25c_text_export.jpeg)


3\. Using the calendar box, select a date for the analysis.

![](assets/polarwarp/File_9f370f51121b4368bcec12ee178ffa8f_text_export.jpeg)


4\. Using the "Select area" tool, draw a bounding box for the region of interest. 

Select the start date for the analyis in the box. 

Select the number of Ground Control Points (GCPs) to use. A higher number gives better results, but greatly increases the processing time. 

Click "Execute".

![](assets/polarwarp/File_e6027ad26fab469da713d817af605e42_text_export.jpeg)


5\. Use the "eye" icon to turn off the underlying Sentinel 1 layer.

![](assets/polarwarp/File_2af4aeb5e2204cf2b6fa8da952396bf8_text_export.jpeg)


6\. The slider bar under the legend can be used to step through the results in increments of an hour. At each step, the image will change to reflect the predicted impact of the forecasted ice drift.

![](assets/polarwarp/File_a4dd01ced0714f7c8f2e94053db2ac24_text_export.jpeg)


7\. The next slider bar under the legend can be used to change the brightness of the image to optimize the details that can be seen in the ice.

![](assets/polarwarp/File_2ca7b95f29004116802b88cb022c6003_text_export.jpeg)


8\. Since it takes some time for the results to be processed, they are stored for future access. For each stored run there is information on the date of execution and whether the run was successful or failed. There are options to load the results on the map, download the results, or delete the run.

![](assets/polarwarp/File_1b745183fc1d434f85fd7613745d4847_text_export.jpeg)


9\. Clicking on the question mark icon beside the execution date opens the metadata for the run.

![](assets/polarwarp/File_ebb26e48e1e24292bf53b6ce0b0de743_text_export.jpeg)


<br>

Return to the [Dashboard](https://cif.eox.at/uc1dashboard);

Return to the [Tutorial Contents](https://cif.eox.at/tutorials/);

Continue to the next Tutorial, [Wind Turbine Wake Effect](https://cif.eox.at/tutorials/wind_turbine_wake_effect);