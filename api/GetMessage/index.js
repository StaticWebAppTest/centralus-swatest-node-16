module.exports = async function (context, req) {
  const date = "2024-08-08T12:19:37.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

