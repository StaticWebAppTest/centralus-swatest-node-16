module.exports = async function (context, req) {
  const date = "2025-02-03T20:12:31.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

