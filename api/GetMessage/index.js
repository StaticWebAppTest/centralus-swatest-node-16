module.exports = async function (context, req) {
  const date = "2023-04-06T00:44:26.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

