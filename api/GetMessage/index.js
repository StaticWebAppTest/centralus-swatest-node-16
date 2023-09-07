module.exports = async function (context, req) {
  const date = "2023-09-07T21:07:26.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

