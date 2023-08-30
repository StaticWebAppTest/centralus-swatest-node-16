module.exports = async function (context, req) {
  const date = "2023-08-30T22:07:50.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

