module.exports = async function (context, req) {
  const date = "2024-03-08T01:40:31.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

