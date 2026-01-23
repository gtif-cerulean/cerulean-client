# Sea Ice Motion Animation

There can be a long wait for the next satellite image to be received during which sea ice can move a considerable distance. The Sea Ice Motion Animation algorithm transforms the current satellite image using a sea ice drift forecast to simulate what the ice in a region should look like in the future.


1\. Using the "Select Indicator" menu, select the "Sea Ice Montion Animation" algorithm.Click here.

![](assets/image_warping_tutorial/ascreenshot_ff2c63f6b5124183954f0b881ed52a0c_text_export.jpeg)


2\. Zoom into the area of interest until the Sentinel 1 data begins to load.

![](assets/image_warping_tutorial/ascreenshot_96e21540c9f349ab8d84d09a0805a8aa_text_export.jpeg)


3\. Using the calendar box, select a date for the analysis. In this case, we are using 18 November 2025.

![](assets/image_warping_tutorial/ascreenshot_232e1291b60644e0a3a4c6156562f646_text_export.jpeg)


4\. Using the "Select area" tool, draw a bounding box for the region of interest. Select the start date for the analyis in the box. Select the number of Ground Control Points (GCPs) to use. A higher number gives better results, but greatly increases the processing time. Click on the "Execute" Button.

![](assets/image_warping_tutorial/ascreenshot_5841d9bc586c4adb87dfb1978ba1bcd2_text_export.jpeg)


5\. Use the "eye" icon to turn off the underlying Sentinel 1 layer.

![](assets/image_warping_tutorial/ascreenshot_3067b436353a4bc68a8fac156e83a2cb_text_export.jpeg)


6\. The slider bar under the legend can be used to step through the results in increments of an hour. At each step, the image will change to reflect the predicted impact of the forecasted ice drift.

![](assets/image_warping_tutorial/ascreenshot_8ac75c224ef047bfab4e04d52ad3ec96_text_export.jpeg)


7\. The next slider bar under the legend can be used to change to brightness of the image to optimize the details that can be seen in the ice.

![](assets/image_warping_tutorial/ascreenshot_0717035d0b8643eab118d13e885969cd_text_export.jpeg)


8\. Since it takes some time for the results to be processed, they are stored for future access. For each stored run there is information on the date of execution and whether the run was successful or failed. There are options to load the results on the map, download the results, or delete the run.

![](assets/image_warping_tutorial/ascreenshot_df39486a903c49e7b974b35336e37473_text_export.jpeg)


9\. Clicking on the question mark icon beside the execution date opens the metadata for the run.

![](assets/image_warping_tutorial/ascreenshot_0bd42c9ff0db45a082abe9ef85745c9d_text_export.jpeg)
