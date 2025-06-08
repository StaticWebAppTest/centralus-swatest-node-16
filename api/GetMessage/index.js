module.exports = async function (context, req) {
  const date = "2025-06-08T16:15:20.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

