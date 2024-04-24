module.exports = async function (context, req) {
  const date = "2024-04-24T13:15:58.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

