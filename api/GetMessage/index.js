module.exports = async function (context, req) {
  const date = "2023-07-20T05:08:43.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

