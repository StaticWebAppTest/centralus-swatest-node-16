module.exports = async function (context, req) {
  const date = "2024-01-07T23:08:43.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

