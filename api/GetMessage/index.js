module.exports = async function (context, req) {
  const date = "2025-02-06T20:12:39.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

