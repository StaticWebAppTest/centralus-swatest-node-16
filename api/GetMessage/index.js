module.exports = async function (context, req) {
  const date = "2025-09-28T09:11:41.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

