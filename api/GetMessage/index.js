module.exports = async function (context, req) {
  const date = "2025-05-07T09:14:32.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

