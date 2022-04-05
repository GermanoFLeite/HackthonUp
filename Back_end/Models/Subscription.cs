namespace PmenosLab.Models {
    public class Subscription {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Idade { get; set; } 
        public string Telefone { get; set; }      
              
        public bool Isdeveloper { get; set; }
        public string Escolaridade { get; set; }
        public string Skill { get; set; }            
    }
}