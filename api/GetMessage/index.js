module.exports = async function (context, req) {
  const date = "2025-04-27T18:15:59.990Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

