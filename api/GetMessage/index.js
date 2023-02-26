module.exports = async function (context, req) {
  const date = "2023-02-26T05:09:16.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

