module.exports = async function (context, req) {
  const date = "2025-04-27T15:12:34.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

