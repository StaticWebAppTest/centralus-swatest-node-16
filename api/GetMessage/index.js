module.exports = async function (context, req) {
  const date = "2024-08-06T07:11:13.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

