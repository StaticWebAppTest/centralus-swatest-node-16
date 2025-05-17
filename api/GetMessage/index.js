module.exports = async function (context, req) {
  const date = "2025-05-17T14:10:59.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

