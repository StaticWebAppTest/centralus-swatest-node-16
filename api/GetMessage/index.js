module.exports = async function (context, req) {
  const date = "2025-08-21T21:11:54.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

