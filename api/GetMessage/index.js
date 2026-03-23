module.exports = async function (context, req) {
  const date = "2026-03-23T20:31:17.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

