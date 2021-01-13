# FAQ
These are common questions and answers related to TES3MP for our server.

#### I get terrible lag and framerate drop in exterior cells/outside!
> OpenMW's physics engine can bottleneck your frames, especially in TES3MP. It can be limited to by setting the environmental variable "OPENMW_PHYSICS_FPS" between 40-20.
>
>
>On Windows 10, this can be set by an administrator, with some annoying maneuvering. Right click the very bottom-left corner of your screen, and click System, then Advanced System Settings. Environment variables. Choose New, paste OPENMW_PHYSICS_FPS as the variable name, and set its value between 40 and 20.
>
>
>On Linux/UNIX-likes, this can be set temporarily by putting OPENMW_PHYSICS_FPS=40 after ./tes3mp or ./openmw-launcher while executing the binary.

#### I see yellow squares for some items and parts of the map!
> Sounds like you're missing models/materials that are being used on our server. You can try refollowing the step by step guide on the [install](https://dor.winterfang.com/guides/installing.html#step-by-step) page.
>
>
> If the problem still persists then please make a ticket on our [Discord](https://discord.gg/XG8r27R) so we can further help you.
