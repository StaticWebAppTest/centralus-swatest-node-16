module.exports = async function (context, req) {
  const date = "2025-12-28T09:14:42.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

