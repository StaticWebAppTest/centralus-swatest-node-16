module.exports = async function (context, req) {
  const date = "2023-05-17T05:08:18.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

