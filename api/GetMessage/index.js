module.exports = async function (context, req) {
  const date = "2024-01-29T10:09:54.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

