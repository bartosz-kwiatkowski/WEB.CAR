using CAR.API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CAR.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly DataContext _context;

        public CarController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Car>>> GetCar()
        {
            return Ok(await _context.Cars.ToListAsync());
        }
        [HttpPost]
        public  async Task<ActionResult<List<Car>>> CreateCar(Car car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cars.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Car>>> UpdateCar(Car car)
        {
            var dbcar = await _context.Cars.FindAsync(car.Id);
            if(dbcar == null) 
            {
                return BadRequest("Car not found");
            }
            dbcar.Mark = car.Mark;
            dbcar.Model = car.Model;
            dbcar.Prince = car.Prince;
            dbcar.Data = car.Data;

            await _context.SaveChangesAsync();

            return Ok(await _context.Cars.ToListAsync());

        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Car>>> DeleteCar (int id)
        {
            var dbcar = await _context.Cars.FindAsync(id);
            if (dbcar == null)
            {
                return BadRequest("Car not found");
            }
            _context.Cars.Remove(dbcar);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cars.ToListAsync());
        }

    }
}
