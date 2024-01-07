module.exports = async function (context, req) {
  const date = "2024-01-07T13:10:29.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

