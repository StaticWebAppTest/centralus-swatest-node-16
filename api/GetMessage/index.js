module.exports = async function (context, req) {
  const date = "2023-01-13T16:15:29.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

