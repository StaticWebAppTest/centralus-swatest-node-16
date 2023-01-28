module.exports = async function (context, req) {
  const date = "2023-01-28T08:11:32.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

