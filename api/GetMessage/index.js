module.exports = async function (context, req) {
  const date = "2024-10-09T03:17:26.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

