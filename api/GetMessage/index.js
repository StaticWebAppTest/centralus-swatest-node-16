module.exports = async function (context, req) {
  const date = "2023-01-19T19:08:04.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

