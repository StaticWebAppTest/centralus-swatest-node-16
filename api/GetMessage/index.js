module.exports = async function (context, req) {
  const date = "2024-01-23T16:12:16.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

