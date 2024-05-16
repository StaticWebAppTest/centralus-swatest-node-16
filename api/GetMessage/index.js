module.exports = async function (context, req) {
  const date = "2024-05-16T19:07:34.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

