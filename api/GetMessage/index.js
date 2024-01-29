module.exports = async function (context, req) {
  const date = "2024-01-29T18:10:42.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

