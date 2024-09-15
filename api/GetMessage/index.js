module.exports = async function (context, req) {
  const date = "2024-09-15T12:19:36.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

