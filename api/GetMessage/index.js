module.exports = async function (context, req) {
  const date = "2023-06-05T12:18:24.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

