module.exports = async function (context, req) {
  const date = "2023-08-06T14:06:56.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

