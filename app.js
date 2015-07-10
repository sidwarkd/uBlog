var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var app = express();

var mapper = {};
mapper.getNewUrl = function(currentUrl){
    switch(currentUrl){
        case "/2013/08/09/xc8-problem-running-post-install-step/":
            return "http://www.microcasts.tv/XC8/Microchip/Windows-8/2013/08/09/xc8-problem-running-post-install-step/";
            break;
        case "/2013/08/19/some-love-for-the-beginners/":
            return "http://www.microcasts.tv/blog/2013/08/19/some-love-for-the-beginners/";
            break;
        case "/2013/10/09/monitor-government-shutdown-with-a-raspberry-pi/":
            return "http://www.microcasts.tv/blog/2013/10/09/monitor-government-shutdown-with-a-raspberry-pi/";
            break;
        case "/2013/10/25/query-temperature-on-raspberry-pi/":
            return "http://www.microcasts.tv/tips/2013/10/25/query-temperature-on-raspberry-pi/";
            break;
        case "/2013/10/26/installing-mplabx-on-ubuntu-64-bit-tip/":
            return "http://www.microcasts.tv/MPLABX/Ubuntu/2013/10/26/installing-mplabx-on-ubuntu-64-bit-tip/";
            break;
        case "/2013/11/03/eagle-how-to-export-board-image/":
            return "http://www.microcasts.tv/Eagle/2013/11/03/eagle-how-to-export-board-image/";
            break;
        case "/2014/01/27/running-python-scripts-from-dropbox-on-raspberry-pi/":
            return "http://www.microcasts.tv/blog/2014/01/27/running-python-scripts-from-dropbox-on-raspberry-pi/";
            break;
        case "/2014/02/04/raspberry-pi-skillshare-class/":
            return "http://www.microcasts.tv/blog/2014/02/04/raspberry-pi-skillshare-class/";
            break;
        case "/2014/02/06/salvaging-a-00-usb-microphone/":
            return "http://www.microcasts.tv/blog/2014/02/06/salvaging-a-00-usb-microphone/";
            break;
        case "/2014/02/20/tracking-olympic-medals-with-the-raspberry-pi/":
            return "http://www.microcasts.tv/blog/2014/02/20/tracking-olympic-medals-with-the-raspberry-pi/"
            break;
        case "/2014/03/01/raspi-plotly-with-tmp102-sensor/":
            return "http://www.microcasts.tv/episodes/2014/03/01/raspi-plotly-with-tmp102-sensor/";
            break;
        case "/2014/03/12/fixing-tight-breadboards/":
            return "http://www.microcasts.tv/tips/2014/03/12/fixing-tight-breadboards/";
            break;
        case "/2014/03/15/memory-usage-on-the-raspberry-pi/":
            return "http://www.microcasts.tv/episodes/2014/03/15/memory-usage-on-the-raspberry-pi/";
            break;
        case "/2014/03/20/cpu-usage-on-the-raspberry-pi/":
            return "http://www.microcasts.tv/episodes/2014/03/20/cpu-usage-on-the-raspberry-pi/";
            break;
        case "/2014/04/02/raspberry-pi-hacking-cheat-sheet/":
            return "http://www.microcasts.tv/blog/2014/04/02/raspberry-pi-hacking-cheat-sheet/";
            break;
        case "/assets/Unleash_The_Pi_Cheat_Sheet_v1.pdf":
            return "http://www.microcasts.tv/img/port/Unleash_The_Pi_Cheat_Sheet_v1.pdf";
            break;
        case "/2014/04/14/pi_express_bootstrap_angular/":
            return "http://www.microcasts.tv/episodes/2014/04/14/pi-express-bootstrap-angular-ftw/";
            break;
        case "/2014/05/16/raspberry-pi-python-library/":
            return "http://www.microcasts.tv/blog/2014/05/16/raspberry-pi-python-library/";
            break;
        case "/2014/06/02/openwest-2014-presentation/":
            return "http://www.microcasts.tv/blog/2014/06/02/openwest-2014-presentation/";
            break;
        case "/2014/06/21/using-socket-io-to-control-the-raspberry-pi-remotely/":
            return "http://www.microcasts.tv/episodes/2014/06/21/using-socket-io-to-control-the-raspberry-pi-remotely/";
            break;
        case "/2014/06/25/a-physical-yo-button/":
            return "http://www.microcasts.tv/blog/2014/06/25/a-physical-yo-button/";
            break;
        case "/2014/08/08/configure-the-serial-port-on-the-raspberry-pi/":
            return "http://www.microcasts.tv/episodes/2014/08/08/configure-the-serial-port-on-the-raspberry-pi/";
            break;
        case "/2014/09/15/specs-arent-everything/":
            return "http://www.microcasts.tv/blog/2014/09/15/specs-arent-everything/";
            break;
        case "/2014/09/16/the-kitchen-appliance-phase-of-hardware/":
            return "http://www.microcasts.tv/blog/2014/09/16/the-kitchen-appliance-phase-of-hardware/";
            break;
        case "/2014/09/24/cereal-box-pi-cases/":
            return "http://www.microcasts.tv/blog/2014/09/24/cereal-box-pi-cases/";
            break;
        case "/assets/ModelA_case.pdf":
            return "http://www.microcasts.tv/img/port/ModelA_case.pdf";
            break;
        case "/assets/ModelB_case.pdf":
            return "http://www.microcasts.tv/img/port/ModelB_case.pdf";
            break;
        case "/assets/ModelA_case.skp":
            return "http://www.microcasts.tv/img/port/ModelA_case.skp";
            break;
        case "/assets/ModelB_case.skp":
            return "http://www.microcasts.tv/img/port/ModelB_case.skp";
            break;
        case "/2014/10/16/edison-mini-breakout-the-real-getting-started-guide/":
            return "http://www.microcasts.tv/episodes/2014/10/16/edison-mini-breakout-the-real-getting-started-guide/";
            break;
        case "/2014/12/03/5-stocking-stuffer-ideas-for-your-number-iot-nerd/":
            return "http://www.microcasts.tv/blog/2014/12/03/5-stocking-stuffer-ideas-for-your-number-iot-nerd/";
            break;
        case "/blog/archives":
            return "http://www.microcasts.tv/archive/";
            break;
        default:
            return "http://www.microcasts.tv/blog";
            break;
    };
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use(function(req,res,next){
    res.redirect(301, mapper.getNewUrl(req.path));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
