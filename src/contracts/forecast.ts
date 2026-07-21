import z from "zod";

const ForecastSchema = z.object({
  list: z.array(
    z.object({
      pop: z.number()
    })
  ),
});

export { ForecastSchema };