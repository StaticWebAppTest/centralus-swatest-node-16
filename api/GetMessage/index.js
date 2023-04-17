module.exports = async function (context, req) {
  const date = "2023-04-17T20:09:29.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

