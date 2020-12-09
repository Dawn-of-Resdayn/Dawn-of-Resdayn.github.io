# Installing
This guide was created under the assumption that you're running Windows, but other OSes that is supported by Morrowind should be a similar install. If you require extra help with the install then feel free to create a ticket on our [Discord](https://discord.gg/XG8r27R) and we'll help you when we can.

## Mod List
::: tip
If you already have Dawn of Resdayn 0.61 you can download [this](https://drive.google.com/file/d/1vqRHr6yFNx3RgtPos335BvYXr--Gy99l/view?usp=sharing) instead which will be a much smaller download.
:::

* [TES3MP 0.7.0 Alpha](https://github.com/TES3MP/openmw-tes3mp/releases/tag/0.7.0-alpha)  
* [Tamriel Rebuilt v20.02](https://www.nexusmods.com/morrowind/mods/42145?tab=files)
* [Tamriel_Data v7.1](https://www.nexusmods.com/morrowind/mods/44537?tab=files)
* [Skyrim HOTN v20.01](https://www.nexusmods.com/morrowind/mods/44921?tab=files)
* [Cyrodiil_Main v0.2](https://www.nexusmods.com/morrowind/mods/44922?tab=files)
* [Dawn of Resdayn 0.72](https://drive.google.com/file/d/14mfgygjlY8WhGI3rtYZyOeo8_FaYSRJF/view?usp=sharing)

## Step by Step
::: warning
Before continuing you **need** to install TES3MP. You can follow this [guide](https://github.com/TES3MP/openmw-tes3mp/wiki/Quickstart-guide) for installing TES3MP.
:::

1. Configure TES3MP by running the OpenMW-Wizard ``openmw-wizard``, and pointing it at your data files. Your data files will be where your game is installed. Ensure your installation has all three base game files, Morrowind, including  Bloodmoon, and Tribunal DLCs.

3. Download the mods from the modload download order above.

4. Extract Tamriel Rebuilt and Tamriel Data into their respective directories, these have some overrides as well.

5. Extract Province Cyrodiil, and Skyrim Home of the Nords into their respective directories, these have some overrides as well.

6. Extract the contents of the Dawn of Resdayn zip into your Morrowind data files folder

7. Then run OpenMW-Launcher, and configure your modload order to the following-
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
dawn_of_resdayn_v0.72.ESP
```
8. Configure your fallback archives so that you can connect successfully:\
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
9. Once you are through with all of these, you should be able to open ``TES3MP-Browser.exe`` and join Dawn of Resdayn!

Good luck, and remember to read the rules! As it is a serious roleplay server!

## Old Links
* [Dawn of Resdayn 0.61](https://drive.google.com/file/d/1Kz3M9udayXR4H9Ba2azbGPhmax5ZFRgT/view?usp=sharing)
