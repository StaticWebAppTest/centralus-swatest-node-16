module.exports = async function (context, req) {
  const date = "2023-08-21T05:08:17.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

