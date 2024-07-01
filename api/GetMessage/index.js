module.exports = async function (context, req) {
  const date = "2024-07-01T02:06:05.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

