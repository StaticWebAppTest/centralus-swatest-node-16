module.exports = async function (context, req) {
  const date = "2025-02-26T10:13:38.163Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

