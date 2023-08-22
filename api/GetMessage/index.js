module.exports = async function (context, req) {
  const date = "2023-08-22T00:39:25.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

