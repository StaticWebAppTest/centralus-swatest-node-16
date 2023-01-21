module.exports = async function (context, req) {
  const date = "2023-01-21T07:08:09.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

