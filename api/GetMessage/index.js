module.exports = async function (context, req) {
  const date = "2023-01-18T12:17:49.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

