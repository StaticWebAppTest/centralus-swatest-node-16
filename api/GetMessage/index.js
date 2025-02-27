module.exports = async function (context, req) {
  const date = "2025-02-27T22:12:47.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

