module.exports = async function (context, req) {
  const date = "2023-08-31T21:07:39.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

