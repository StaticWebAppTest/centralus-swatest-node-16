module.exports = async function (context, req) {
  const date = "2023-04-26T11:07:26.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

