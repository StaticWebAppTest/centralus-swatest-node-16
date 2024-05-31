module.exports = async function (context, req) {
  const date = "2024-05-31T22:09:11.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

