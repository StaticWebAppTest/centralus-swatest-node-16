module.exports = async function (context, req) {
  const date = "2025-12-06T20:14:25.852Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

