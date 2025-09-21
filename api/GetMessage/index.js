module.exports = async function (context, req) {
  const date = "2025-09-21T20:12:56.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

