module.exports = async function (context, req) {
  const date = "2023-08-21T21:07:39.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

