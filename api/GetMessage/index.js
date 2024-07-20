module.exports = async function (context, req) {
  const date = "2024-07-20T03:12:04.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

