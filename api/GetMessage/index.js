module.exports = async function (context, req) {
  const date = "2023-01-17T13:17:20.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

