module.exports = async function (context, req) {
  const date = "2025-08-25T09:15:51.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

