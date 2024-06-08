module.exports = async function (context, req) {
  const date = "2024-06-08T23:10:24.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

