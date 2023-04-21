module.exports = async function (context, req) {
  const date = "2023-04-21T03:09:30.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

