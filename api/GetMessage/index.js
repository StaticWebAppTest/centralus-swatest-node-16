module.exports = async function (context, req) {
  const date = "2025-03-20T08:16:52.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

