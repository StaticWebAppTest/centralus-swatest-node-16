module.exports = async function (context, req) {
  const date = "2025-11-28T15:13:38.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

