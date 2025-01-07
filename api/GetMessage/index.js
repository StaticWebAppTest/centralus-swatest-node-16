module.exports = async function (context, req) {
  const date = "2025-01-07T21:10:58.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

