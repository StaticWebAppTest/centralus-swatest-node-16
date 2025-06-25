module.exports = async function (context, req) {
  const date = "2025-06-25T08:19:56.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

