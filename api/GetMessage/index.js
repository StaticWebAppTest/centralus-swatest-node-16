module.exports = async function (context, req) {
  const date = "2023-07-31T17:07:59.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

