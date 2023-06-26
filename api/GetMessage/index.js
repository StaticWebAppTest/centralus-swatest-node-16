module.exports = async function (context, req) {
  const date = "2023-06-26T03:31:49.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

