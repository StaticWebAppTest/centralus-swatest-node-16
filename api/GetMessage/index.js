module.exports = async function (context, req) {
  const date = "2023-08-06T12:14:30.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

