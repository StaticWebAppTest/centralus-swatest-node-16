module.exports = async function (context, req) {
  const date = "2025-11-25T16:18:54.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

