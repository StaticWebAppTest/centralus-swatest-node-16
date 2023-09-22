module.exports = async function (context, req) {
  const date = "2023-09-22T05:08:24.221Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

