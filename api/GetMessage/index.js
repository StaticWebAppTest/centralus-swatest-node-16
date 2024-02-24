module.exports = async function (context, req) {
  const date = "2024-02-24T05:13:16.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

