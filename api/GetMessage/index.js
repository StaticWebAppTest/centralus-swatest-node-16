module.exports = async function (context, req) {
  const date = "2024-12-16T03:01:32.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

