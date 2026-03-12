module.exports = async function (context, req) {
  const date = "2026-03-12T18:42:44.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

