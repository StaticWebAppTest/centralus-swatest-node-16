module.exports = async function (context, req) {
  const date = "2024-08-20T03:12:57.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

