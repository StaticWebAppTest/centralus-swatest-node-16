module.exports = async function (context, req) {
  const date = "2025-02-14T20:12:36.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

