module.exports = async function (context, req) {
  const date = "2024-12-07T15:11:17.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

