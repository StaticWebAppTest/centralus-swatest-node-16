module.exports = async function (context, req) {
  const date = "2024-12-18T05:12:14.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

