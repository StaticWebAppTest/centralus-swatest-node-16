module.exports = async function (context, req) {
  const date = "2025-03-25T15:13:41.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

