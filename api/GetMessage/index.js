module.exports = async function (context, req) {
  const date = "2023-03-06T16:13:27.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

