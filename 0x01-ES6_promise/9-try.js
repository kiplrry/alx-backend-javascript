export default function guardrail(mathFunction) {
  let q;
  try {
    q = [mathFunction()];
  } catch (e) {
    q = [`${e.name}: ${e.message}`];
  }

  q.push('\'Guardrail was processed\'');
  return q;
}
