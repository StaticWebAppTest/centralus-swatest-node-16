module.exports = async function (context, req) {
  const date = "2025-02-27T06:17:33.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

