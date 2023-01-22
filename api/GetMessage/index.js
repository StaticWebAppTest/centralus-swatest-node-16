module.exports = async function (context, req) {
  const date = "2023-01-22T20:09:12.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

