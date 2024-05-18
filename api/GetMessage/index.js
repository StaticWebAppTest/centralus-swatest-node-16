module.exports = async function (context, req) {
  const date = "2024-05-18T15:10:29.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

