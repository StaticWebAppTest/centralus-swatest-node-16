module.exports = async function (context, req) {
  const date = "2025-04-07T22:12:12.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

