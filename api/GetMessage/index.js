module.exports = async function (context, req) {
  const date = "2023-08-21T22:07:44.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

