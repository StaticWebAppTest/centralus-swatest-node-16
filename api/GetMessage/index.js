module.exports = async function (context, req) {
  const date = "2025-06-17T14:14:01.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

