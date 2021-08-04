import * as L from 'leaflet';
export class Polygonn
{
    private x = 1;

    moveopacity()
    {
        if((this.x == 1))
        {
          this.x = this.x - 1;
          console.log(this.x)
          
          
        }
        else if((this.x == 0) )
        {
          this.x = this.x + 1
            console.log(this.x)
        }
    }

    private move()
    {
        const polygon = L.polygon([
            [13.760901451657936, 100.56645725772464], [13.76222490652647, 100.56493377118323], [13.762881409266864, 100.56680059964326], [13.761891406777046, 100.56848502520793]
          ], { opacity: this.x, color: 'red' })
    }
}