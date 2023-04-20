module.exports = async function (context, req) {
  const date = "2023-04-20T16:11:26.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

