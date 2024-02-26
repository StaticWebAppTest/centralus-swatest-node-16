module.exports = async function (context, req) {
  const date = "2024-02-26T20:09:19.126Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

