module.exports = async function (context, req) {
  const date = "2024-09-30T02:21:38.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

