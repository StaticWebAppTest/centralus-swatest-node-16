module.exports = async function (context, req) {
  const date = "2023-04-07T00:41:08.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

