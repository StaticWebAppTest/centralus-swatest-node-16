module.exports = async function (context, req) {
  const date = "2024-01-15T15:09:52.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

