module.exports = async function (context, req) {
  const date = "2024-09-29T10:10:57.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

