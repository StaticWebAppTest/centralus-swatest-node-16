module.exports = async function (context, req) {
  const date = "2023-06-22T05:08:38.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

