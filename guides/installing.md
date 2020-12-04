# Installing
If you have found this link, this is the entire modlist order that you need for Dawn of Resdayn, in order to play. You can visit our Discord with the link above called "Discord" or visit our forums.

### Download Links

* [TES3MP 0.7.0 Alpha](https://github.com/TES3MP/openmw-tes3mp/releases/tag/0.7.0-alpha)  
* [Tamriel Rebuilt v20.02](https://www.nexusmods.com/morrowind/mods/42145?tab=files)
* [Tamriel_Data v7.1](https://www.nexusmods.com/morrowind/mods/44537?tab=files)
* [Skyrim HOTN v20.01](https://www.nexusmods.com/morrowind/mods/44921?tab=files)
* [Cyrodiil_Main v0.2](https://www.nexusmods.com/morrowind/mods/44922?tab=files)
* [Dawn of Resdayn 0.61](https://drive.google.com/file/d/1Kz3M9udayXR4H9Ba2azbGPhmax5ZFRgT/view?usp=sharing)


### Server Installation Guide

1. Configure TES3MP by running OpenMW-Wizard, and pointing it at your data files. Ensure your installation has all three base game files, Morrowind, including  Bloodmoon, and Tribunal DLCs.

2. Download the mods from the modload download order above.

3. Extract Tamriel Rebuilt and Tamriel Data into their respective directories, these have some overrides as well.

4. Extract Province Cyrodiil, and Skyrim Home of the Nords into their respective directories, these have some overrides as well.

5. Extract the contents of the Dawn of Resdayn zip into your Morrowind data files folder

6. Then run OpenMW-Launcher, and configure your modload order to the following-
```
Tribunal.esm
Bloodmoon.esm
Tamriel_Data.esm
Sky_Main.esm
Cyrodiil_Main.esm
TR_Mainland.esm
TR_Factions.esp
TR_Preview.esp
TR_Travels_(Preview_And_Mainland).esp
dawn_of_resdayn_v0.71.ESP
```
7. Configure your fallback archives so that you can connect successfully:\
Navigate to ``C:\Users\USERNAME\Documents\My Games\OpenMW``, and open openmw.cfg in notepad or another text file editor.\
Search for the following inside of ``openmw.cfg``:
```
fallback-archive=Morrowind.bsa
fallback-archive=Tribunal.bsa
fallback-archive=Bloodmoon.bsa
```
Replace it with the following to allow OpenMW to use Tamriel Rebuilt Data:
```
fallback-archive=Morrowind.bsa
fallback-archive=Tribunal.bsa
fallback-archive=Bloodmoon.bsa
fallback-archive=TR_Data.bsa
fallback-archive=pt_data.bsa
```
8. Once you are through with all of these, you should be able to open ``TES3MP-Browser.exe`` and join Dawn of Resdayn!

Good luck, and remember to read the rules! As it is a serious roleplay server!

### FAQ

**Q:** I get terrible lag and framerate drop in exterior cells/outside!\
**A:** OpenMW's physics engine can bottleneck your frames, especially in TES3MP. It can be limited to by setting the environmental variable "OPENMW_PHYSICS_FPS" between 40-20.

On Windows 10, this can be set by an administrator, with some annoying maneuvering. Right click the very bottom-left corner of your screen, and click System, then Advanced System Settings. Environment variables. Choose New, paste OPENMW_PHYSICS_FPS as the variable name, and set its value between 40 and 20.

On Linux/UNIX-likes, this can be set temporarily by putting OPENMW_PHYSICS_FPS=40 after ./tes3mp or ./openmw-launcher while executing the binary.

### Old Links
[Dawn of Resdayn 0.71](https://drive.google.com/file/d/1EM81mOMWFPZUGPi5gN1FBqUpf3swOlTh/view?usp=sharing)
