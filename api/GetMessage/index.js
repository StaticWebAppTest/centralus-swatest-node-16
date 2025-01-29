module.exports = async function (context, req) {
  const date = "2025-01-29T21:10:42.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

