module.exports = async function (context, req) {
  const date = "2024-03-31T19:07:43.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

