$(function() {
    function RestartMjpgStreamerViewModel(parameters) {
        var self = this;

        self.restartService = function() {
            $.ajax({
                url: API_BASEURL + "plugin/restart_mjpg_streamer",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({ command: "restart" }),
                contentType: "application/json; charset=UTF-8",
                success: function(data) {
                    if (data.status === "ok") {
                        alert("Service restarted successfully.");
                    } else {
                        alert("Error: " + data.error);
                    }
                }
            });
        };
    }

    OCTOPRINT_VIEWMODELS.push({
        construct: RestartMjpgStreamerViewModel,
        dependencies: [],
        elements: ["#settings_plugin_restart_mjpg_streamer"]
    });
});
