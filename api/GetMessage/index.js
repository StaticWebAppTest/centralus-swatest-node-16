module.exports = async function (context, req) {
  const date = "2023-12-26T03:09:56.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

