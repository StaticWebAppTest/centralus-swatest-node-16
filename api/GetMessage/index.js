module.exports = async function (context, req) {
  const date = "2025-05-27T15:14:33.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

