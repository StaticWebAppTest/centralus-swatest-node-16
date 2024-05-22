module.exports = async function (context, req) {
  const date = "2024-05-22T19:07:48.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

