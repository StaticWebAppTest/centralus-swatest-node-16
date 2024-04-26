module.exports = async function (context, req) {
  const date = "2024-04-26T22:09:18.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

