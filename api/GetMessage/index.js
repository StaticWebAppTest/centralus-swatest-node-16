module.exports = async function (context, req) {
  const date = "2023-11-26T04:10:46.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

