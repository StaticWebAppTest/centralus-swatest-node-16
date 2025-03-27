module.exports = async function (context, req) {
  const date = "2025-03-27T22:11:37.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

