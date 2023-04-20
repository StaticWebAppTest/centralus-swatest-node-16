module.exports = async function (context, req) {
  const date = "2023-04-20T05:08:47.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

