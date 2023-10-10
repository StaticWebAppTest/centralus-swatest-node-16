module.exports = async function (context, req) {
  const date = "2023-10-10T03:09:14.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

