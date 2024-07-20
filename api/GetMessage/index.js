module.exports = async function (context, req) {
  const date = "2024-07-20T02:28:46.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

