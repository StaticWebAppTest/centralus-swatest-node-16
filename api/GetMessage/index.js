module.exports = async function (context, req) {
  const date = "2024-04-30T13:09:58.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

