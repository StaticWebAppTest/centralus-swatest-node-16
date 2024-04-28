module.exports = async function (context, req) {
  const date = "2024-04-28T21:08:49.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

