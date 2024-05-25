module.exports = async function (context, req) {
  const date = "2024-05-25T02:22:25.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

