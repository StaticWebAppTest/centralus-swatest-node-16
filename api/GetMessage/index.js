module.exports = async function (context, req) {
  const date = "2025-07-27T05:20:13.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

