module.exports = async function (context, req) {
  const date = "2023-01-03T05:08:42.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

