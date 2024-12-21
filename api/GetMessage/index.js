module.exports = async function (context, req) {
  const date = "2024-12-21T02:11:55.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

