# After Effects JSON Parsing Script
This After Effects script has been written in ExtendScript. It pulls information from a JSON file and creates an animation in After Effects.

* The JSON file should be in the same folder as the script.

* The method used in this script (eval()) SHOULD NOT be used if the JSON file is created by the public because, it can be used for a code injection attack. In that scenario, a JSON parsing library should be used or developed (ExtendScript does not support JSON parsing).
