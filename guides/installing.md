# Installing
This guide was created under the assumption that you're running Windows, but other OSes that is supported by Morrowind should be a similar install. If you require extra help with the install then feel free to create a ticket on our [Discord](https://discord.gg/XG8r27R) and we'll help you when we can.

## Mod List
::: tip
If you already have Dawn of Resdayn 0.61 you can download [this](https://drive.google.com/file/d/1vqRHr6yFNx3RgtPos335BvYXr--Gy99l/view?usp=sharing) instead which will be a much smaller download.
:::

* [Tamriel Rebuilt v20.02](https://www.nexusmods.com/morrowind/mods/42145?tab=files)
* [Tamriel_Data v7.1](https://www.nexusmods.com/morrowind/mods/44537?tab=files)
* [Skyrim HOTN v20.01](https://www.nexusmods.com/morrowind/mods/44921?tab=files)
* [Cyrodiil_Main v0.2](https://www.nexusmods.com/morrowind/mods/44922?tab=files)
* [Dawn of Resdayn 0.72](https://drive.google.com/file/d/14mfgygjlY8WhGI3rtYZyOeo8_FaYSRJF/view?usp=sharing)

## Step by Step
::: warning
Before continuing you **need** to install TES3MP. You can follow this [guide](https://github.com/TES3MP/openmw-tes3mp/wiki/Quickstart-guide) for installing TES3MP.
:::

1. Extract Tes3mp into a folder called Tes3mp.

2. Run the ``openmw-wizard``, and point it at your Morrowind.esm, this will be in your data files folder in your morrowind installation. Ensure your installation has all three base game files, Morrowind, including  Bloodmoon, and Tribunal DLCs.

3. Navigate to ``C:\Users\USERNAME\Documents\My Games\OpenMW`` (USERNAME being your Window's username) and create a folder there named ``Mods`` This is where you will install the mods for the server. Later we'll tell openmw how to check these folders

   * Create a folder called ``Dawn of Resdayn`` in the ``Mods`` folder you created, extract the Dawn of resdayn 0.72 zip into it.

   * Create a folder called ``Tamriel Data`` in the ``Mods`` folder you created, extract the contents of the Tamriel_Data (HD or vanilla) ZIP into it.

   * Create a folder called ``Tamriel Rebuilt`` in the ``Mods`` folder you created, extract the contents of all of the subfolders in the Tamriel Rebuilt 7z into it.

   * Create a folder called ``Province Cyrodiil`` in the ``Mods`` folder you created, extract the contents of Cyrodiil_main v.0.2 (BETA) zip into it.

   * Create a folder called ``SHoTN`` in the ``Mods`` folder you created, extract the contents of Sky_main zip into it.  

4. Navigate to ``C:\Users\USERNAME\Documents\My Games\OpenMW``, and open ``openmw.cfg`` in notepad or another text file editor

5. Search for the following inside of ``openmw.cfg``

```
fallback-archive=Morrowind.bsa
fallback-archive=Tribunal.bsa
fallback-archive=Bloodmoon.bsa
```

6. Replace it with the following to allow custom archives

```
fallback-archive=Morrowind.bsa
fallback-archive=Tribunal.bsa
fallback-archive=Bloodmoon.bsa
fallback-archive=TR_Data.bsa
fallback-archive=pt_data.bsa
```

7. Search for the following in ``openmw.cfg``. Your Morrowind installation path should be listed after the equals sign in quotations.

```
data=
```

8. We now have to specify the location of each of our mod files under this entry so that OpenMW can find them. Make sure each path is directly to the folder containing the .esp, textures, and meshes folders. If the path is configured to a folder that contains the "Data files" folder, it will not work.

```
Paste the following under the data= line(s), replacing 'USERNAME' with your Windows username:

data="C:\Users\USERNAME\Documents\My Games\OpenMW\Mods\Tamriel Data\Data Files"
data="C:\Users\USERNAME\Documents\My Games\OpenMW\Mods\Tamriel Rebuilt"
data="C:\Users\USERNAME\Documents\My Games\OpenMW\Mods\Province Cyrodiil\Data Files"
data="C:\Users\USERNAME\Documents\My Games\OpenMW\Mods\SHoTN"
data="C:\Users\USERNAME\Documents\My Games\OpenMW\Mods\Dawn of Resdayn"
```
if you see any entries like ``data=data`` or ``data-local=”?userdata?data”``, remove them. These seem to break things.

9. Return to your TES3MP directory, and launch ``openmw-launcher.exe``

10. At the top of the OpenMW Launcher window, press the icon for ``Data Files``

11. Press the drop-down box at the top, and select ``Morrowind.esm``

12. Check the checkboxes for the following, and drag the plugins to match the following load order:

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

Good luck, and remember to read the rules!

## Old Links
* [Dawn of Resdayn 0.61](https://drive.google.com/file/d/1Kz3M9udayXR4H9Ba2azbGPhmax5ZFRgT/view?usp=sharing)
