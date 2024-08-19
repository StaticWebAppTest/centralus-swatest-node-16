module.exports = async function (context, req) {
  const date = "2024-08-19T16:13:06.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

