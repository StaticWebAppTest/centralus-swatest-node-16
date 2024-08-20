module.exports = async function (context, req) {
  const date = "2024-08-20T02:01:15.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

