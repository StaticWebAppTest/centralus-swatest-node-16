module.exports = async function (context, req) {
  const date = "2024-07-24T08:13:18.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

