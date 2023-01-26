module.exports = async function (context, req) {
  const date = "2023-01-26T00:50:26.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

