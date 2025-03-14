module.exports = async function (context, req) {
  const date = "2025-03-14T16:14:53.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

