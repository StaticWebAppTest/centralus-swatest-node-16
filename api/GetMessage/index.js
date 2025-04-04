module.exports = async function (context, req) {
  const date = "2025-04-04T12:24:38.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

