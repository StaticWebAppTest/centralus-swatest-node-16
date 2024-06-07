module.exports = async function (context, req) {
  const date = "2024-06-07T19:08:22.116Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

