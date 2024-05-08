module.exports = async function (context, req) {
  const date = "2024-05-08T02:10:49.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

