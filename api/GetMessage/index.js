module.exports = async function (context, req) {
  const date = "2024-05-31T10:10:45.089Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

