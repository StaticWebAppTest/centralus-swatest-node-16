module.exports = async function (context, req) {
  const date = "2024-08-15T02:19:23.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

