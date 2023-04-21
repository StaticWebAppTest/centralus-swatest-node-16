module.exports = async function (context, req) {
  const date = "2023-04-21T12:16:13.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

