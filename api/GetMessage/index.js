module.exports = async function (context, req) {
  const date = "2024-06-06T06:13:55.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

