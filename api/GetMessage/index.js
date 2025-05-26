module.exports = async function (context, req) {
  const date = "2025-05-26T20:14:19.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

