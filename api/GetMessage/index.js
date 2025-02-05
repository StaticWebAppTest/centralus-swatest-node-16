module.exports = async function (context, req) {
  const date = "2025-02-05T07:11:05.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

