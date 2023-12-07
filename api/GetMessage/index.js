module.exports = async function (context, req) {
  const date = "2023-12-07T12:17:24.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

