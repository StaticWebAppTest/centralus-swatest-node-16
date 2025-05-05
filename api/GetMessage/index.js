module.exports = async function (context, req) {
  const date = "2025-05-05T12:26:14.831Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

