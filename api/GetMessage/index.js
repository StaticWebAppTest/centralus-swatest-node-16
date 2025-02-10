module.exports = async function (context, req) {
  const date = "2025-02-10T10:13:19.242Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

