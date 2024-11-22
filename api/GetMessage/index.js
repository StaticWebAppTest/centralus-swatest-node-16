module.exports = async function (context, req) {
  const date = "2024-11-22T09:01:22.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

