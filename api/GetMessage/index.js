module.exports = async function (context, req) {
  const date = "2023-08-22T07:07:46.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

