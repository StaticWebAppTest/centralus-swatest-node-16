module.exports = async function (context, req) {
  const date = "2025-01-17T03:13:53.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

