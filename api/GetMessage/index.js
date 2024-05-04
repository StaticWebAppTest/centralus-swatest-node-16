module.exports = async function (context, req) {
  const date = "2024-05-04T02:18:03.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

