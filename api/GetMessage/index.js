module.exports = async function (context, req) {
  const date = "2023-01-16T20:09:59.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

