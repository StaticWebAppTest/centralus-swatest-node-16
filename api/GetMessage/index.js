module.exports = async function (context, req) {
  const date = "2025-02-03T13:17:49.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

