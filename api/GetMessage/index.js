module.exports = async function (context, req) {
  const date = "2023-04-04T00:46:34.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

