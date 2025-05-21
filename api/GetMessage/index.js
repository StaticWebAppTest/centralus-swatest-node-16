module.exports = async function (context, req) {
  const date = "2025-05-21T10:14:32.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

