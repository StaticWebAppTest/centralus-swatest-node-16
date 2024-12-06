module.exports = async function (context, req) {
  const date = "2024-12-06T01:01:39.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

