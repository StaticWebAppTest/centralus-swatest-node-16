module.exports = async function (context, req) {
  const date = "2025-04-27T22:11:34.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

