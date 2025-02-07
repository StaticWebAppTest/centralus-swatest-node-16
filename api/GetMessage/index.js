module.exports = async function (context, req) {
  const date = "2025-02-07T22:10:41.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

