module.exports = async function (context, req) {
  const date = "2022-10-20T16:23:29.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

