module.exports = async function (context, req) {
  const date = "2024-09-17T06:15:21.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

