module.exports = async function (context, req) {
  const date = "2024-03-02T21:07:15.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

