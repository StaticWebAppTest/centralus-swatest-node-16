module.exports = async function (context, req) {
  const date = "2024-04-08T02:19:09.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

