module.exports = async function (context, req) {
  const date = "2023-09-24T19:06:19.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

