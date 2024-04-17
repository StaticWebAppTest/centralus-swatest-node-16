module.exports = async function (context, req) {
  const date = "2024-04-17T12:16:54.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

