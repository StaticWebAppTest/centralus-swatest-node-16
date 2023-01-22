module.exports = async function (context, req) {
  const date = "2023-01-22T16:11:39.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

