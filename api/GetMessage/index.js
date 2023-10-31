module.exports = async function (context, req) {
  const date = "2023-10-31T07:08:13.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

