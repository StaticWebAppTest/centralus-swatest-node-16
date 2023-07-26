module.exports = async function (context, req) {
  const date = "2023-07-26T17:07:34.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

