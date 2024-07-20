module.exports = async function (context, req) {
  const date = "2024-07-20T12:17:31.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

