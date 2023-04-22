module.exports = async function (context, req) {
  const date = "2023-04-22T08:10:30.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

