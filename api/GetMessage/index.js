module.exports = async function (context, req) {
  const date = "2022-04-20T08:15:21.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

