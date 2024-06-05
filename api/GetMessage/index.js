module.exports = async function (context, req) {
  const date = "2024-06-05T12:18:50.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

