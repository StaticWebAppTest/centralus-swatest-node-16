module.exports = async function (context, req) {
  const date = "2024-06-26T09:12:18.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

