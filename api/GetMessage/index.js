module.exports = async function (context, req) {
  const date = "2023-01-22T00:54:03.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

