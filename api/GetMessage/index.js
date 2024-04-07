module.exports = async function (context, req) {
  const date = "2024-04-07T21:08:58.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

