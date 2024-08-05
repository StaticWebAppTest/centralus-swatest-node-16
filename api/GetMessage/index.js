module.exports = async function (context, req) {
  const date = "2024-08-05T21:11:33.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

