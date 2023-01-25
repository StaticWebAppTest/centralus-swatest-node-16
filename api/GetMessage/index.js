module.exports = async function (context, req) {
  const date = "2023-01-25T17:08:41.012Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

