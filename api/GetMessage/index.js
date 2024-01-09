module.exports = async function (context, req) {
  const date = "2024-01-09T02:24:41.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

