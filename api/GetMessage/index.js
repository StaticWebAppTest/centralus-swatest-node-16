module.exports = async function (context, req) {
  const date = "2024-08-26T08:15:11.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

