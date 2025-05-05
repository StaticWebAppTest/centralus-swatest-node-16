module.exports = async function (context, req) {
  const date = "2025-05-05T22:12:42.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

