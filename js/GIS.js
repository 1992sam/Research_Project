require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/layers/GraphicsLayer",

        "esri/Graphic",
        "esri/geometry/Point",
        "esri/geometry/Polyline",
        "esri/geometry/Polygon",

        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",

        "dojo/domReady!"
      ],
function(
        Map, SceneView, GraphicsLayer,
        Graphic, Point, Polyline, Polygon,
        SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol
      ) {

        var map = new Map({
          basemap: "hybrid"
        });

        var view = new SceneView({
          container: "viewDiv",
          map: map,

          camera: { // autocasts as new Camera()
            position: { // autocasts as new Point()
              x: -0.17746710975334712,
              y: 51.44543992422466,
              z: 1266.7049653716385
            },
            heading: 0.34445102566290225,
            tilt: 60.95536300536367
          }
        });

        /*********************
         * Add graphics layer
         *********************/

        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        /*************************
         * Add a 3D point graphic
         *************************/

        // London
        var point = new Point({
            x: -0.178,
            y: 51.48791,
            z: 1010
          }),

          markerSymbol = new SimpleMarkerSymbol({
            color: [226, 119, 40],

            outline: { // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 2
            }
          });

        var pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol
        });

        graphicsLayer.add(pointGraphic);

        /****************************
         * Add a 3D polyline graphic
         ****************************/

        var polyline = new Polyline([
            [-0.178, 51.48791, 0],
            [-0.178, 51.48791, 1000]
          ]),

          lineSymbol = new SimpleLineSymbol({
            color: [226, 119, 40],
            width: 4
          });

        var polylineGraphic = new Graphic({
          geometry: polyline,
          symbol: lineSymbol
        });

        graphicsLayer.add(polylineGraphic);

        /***************************
         * Add a 3D polygon graphic
         ***************************/

        var polygon = new Polygon([
            [-0.184, 51.48391, 400],
            [-0.184, 51.49091, 500],
            [-0.172, 51.49091, 500],
            [-0.172, 51.48391, 400],
            [-0.184, 51.48391, 400]
          ]),

          fillSymbol = new SimpleFillSymbol({
            color: [227, 139, 79, 0.8],
            outline: { // autocasts as new SimpleLineSymbol()
              color: [255, 255, 255],
              width: 1
            }
          });

        var polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: fillSymbol
        });

        graphicsLayer.add(polygonGraphic);

      });