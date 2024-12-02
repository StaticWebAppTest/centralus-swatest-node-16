module.exports = async function (context, req) {
  const date = "2024-12-02T05:13:05.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

