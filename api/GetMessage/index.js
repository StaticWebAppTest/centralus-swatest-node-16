module.exports = async function (context, req) {
  const date = "2025-11-02T17:10:53.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

