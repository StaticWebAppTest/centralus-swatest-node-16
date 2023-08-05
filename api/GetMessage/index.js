module.exports = async function (context, req) {
  const date = "2023-08-05T23:07:43.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

