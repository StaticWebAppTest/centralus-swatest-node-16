module.exports = async function (context, req) {
  const date = "2024-12-20T17:10:02.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

