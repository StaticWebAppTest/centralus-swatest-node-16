module.exports = async function (context, req) {
  const date = "2023-02-26T19:07:36.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

