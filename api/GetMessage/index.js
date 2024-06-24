module.exports = async function (context, req) {
  const date = "2024-06-24T06:14:24.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

