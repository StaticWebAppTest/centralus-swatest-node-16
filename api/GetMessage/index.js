module.exports = async function (context, req) {
  const date = "2024-03-20T19:07:16.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

