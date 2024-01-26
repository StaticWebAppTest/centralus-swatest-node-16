module.exports = async function (context, req) {
  const date = "2024-01-26T19:06:42.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

