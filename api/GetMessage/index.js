module.exports = async function (context, req) {
  const date = "2024-09-16T19:08:59.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

