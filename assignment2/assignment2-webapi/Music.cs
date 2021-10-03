using System.IO;

namespace rockstar_webapi
{
    public class Music
    {
        public string OSanam { get; set; }

        public string LaariChooti { get; set; }

        public Music()
        {
            if(File.Exists("o-sanam.txt"))
            {
                OSanam = File.ReadAllText("o-sanam.txt");
            }
            else
            {
                OSanam = "??";
            }
            if (File.Exists("laari-chooti.txt"))
            {
                LaariChooti = File.ReadAllText("laari-chooti.txt");
            }
            else
            {
                LaariChooti = "??";
            }
        }
    }
}