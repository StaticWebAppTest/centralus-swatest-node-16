module.exports = async function (context, req) {
  const date = "2022-10-26T19:09:22.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

