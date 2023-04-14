module.exports = async function (context, req) {
  const date = "2023-04-14T20:09:17.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

