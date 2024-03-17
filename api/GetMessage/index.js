module.exports = async function (context, req) {
  const date = "2024-03-17T19:06:57.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

