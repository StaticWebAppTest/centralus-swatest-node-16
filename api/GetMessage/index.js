module.exports = async function (context, req) {
  const date = "2024-02-12T16:11:29.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

