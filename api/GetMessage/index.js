module.exports = async function (context, req) {
  const date = "2024-12-24T20:12:28.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

