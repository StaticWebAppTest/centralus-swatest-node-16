module.exports = async function (context, req) {
  const date = "2025-03-12T14:12:29.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

