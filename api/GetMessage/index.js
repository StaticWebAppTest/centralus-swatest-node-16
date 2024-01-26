module.exports = async function (context, req) {
  const date = "2024-01-26T10:09:14.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

