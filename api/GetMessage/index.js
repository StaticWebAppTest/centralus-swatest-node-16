module.exports = async function (context, req) {
  const date = "2023-08-15T07:07:57.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

