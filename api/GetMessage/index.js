module.exports = async function (context, req) {
  const date = "2025-05-05T17:11:35.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

