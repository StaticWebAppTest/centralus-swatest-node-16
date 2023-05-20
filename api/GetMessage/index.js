module.exports = async function (context, req) {
  const date = "2023-05-20T19:06:16.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

