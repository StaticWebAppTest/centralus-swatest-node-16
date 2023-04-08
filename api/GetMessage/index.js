module.exports = async function (context, req) {
  const date = "2023-04-08T08:10:34.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

