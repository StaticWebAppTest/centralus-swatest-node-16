module.exports = async function (context, req) {
  const date = "2024-12-09T15:13:34.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

