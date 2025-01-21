module.exports = async function (context, req) {
  const date = "2025-01-21T22:10:42.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

