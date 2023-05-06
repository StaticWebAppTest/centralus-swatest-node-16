module.exports = async function (context, req) {
  const date = "2023-05-06T19:06:26.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

