module.exports = async function (context, req) {
  const date = "2025-11-25T07:14:52.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

