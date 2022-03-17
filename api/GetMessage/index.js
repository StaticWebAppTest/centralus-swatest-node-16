module.exports = async function (context, req) {
  const date = "2022-03-17T03:11:30.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

