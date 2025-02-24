module.exports = async function (context, req) {
  const date = "2025-02-24T18:16:51.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

