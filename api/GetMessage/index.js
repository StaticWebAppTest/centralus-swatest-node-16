module.exports = async function (context, req) {
  const date = "2023-08-22T22:07:47.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

