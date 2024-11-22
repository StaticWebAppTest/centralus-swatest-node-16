module.exports = async function (context, req) {
  const date = "2024-11-22T06:17:18.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

