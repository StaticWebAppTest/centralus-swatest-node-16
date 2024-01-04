module.exports = async function (context, req) {
  const date = "2024-01-04T19:07:11.765Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

