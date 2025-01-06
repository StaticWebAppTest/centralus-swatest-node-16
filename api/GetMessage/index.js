module.exports = async function (context, req) {
  const date = "2025-01-06T14:11:06.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

