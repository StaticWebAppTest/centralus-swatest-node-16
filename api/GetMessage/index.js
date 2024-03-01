module.exports = async function (context, req) {
  const date = "2024-03-01T08:11:32.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

