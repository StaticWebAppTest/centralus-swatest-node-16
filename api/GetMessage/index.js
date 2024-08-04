module.exports = async function (context, req) {
  const date = "2024-08-04T02:05:25.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

