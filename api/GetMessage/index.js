module.exports = async function (context, req) {
  const date = "2024-07-26T19:10:09.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

